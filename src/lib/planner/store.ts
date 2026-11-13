import { and, desc, eq, gt, inArray, isNotNull, isNull, lt, sql } from 'drizzle-orm'

import { getDb, isDatabaseConfigured } from '@/db'
import { plannerEvents, plannerRuns, plannerSessions, type PlannerSessionRow } from '@/db/schema'

export type { PlannerSessionRow }
import { toPartialPlan } from '@/lib/planner/plan-schema'
import type { FollowUp, FullPlan, PlanHook, PlannerAttribution } from '@/lib/planner/types'

const HOUR_MS = 60 * 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000
const SESSION_LIMIT = 10
const RUN_LIMIT = 20

export class PlannerError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code: string,
  ) {
    super(message)
    this.name = 'PlannerError'
  }
}

export function databaseReady(): boolean {
  return isDatabaseConfigured()
}

export async function loadSessionFromToken(token: string | undefined): Promise<PlannerSessionRow | null> {
  if (!token) return null
  const { hashSecret } = await import('@/lib/planner/ids')
  const rows = await getDb()
    .select()
    .from(plannerSessions)
    .where(eq(plannerSessions.tokenHash, hashSecret(token)))
    .limit(1)
  return rows[0] ?? null
}

export async function getSessionById(id: string): Promise<PlannerSessionRow | null> {
  const rows = await getDb().select().from(plannerSessions).where(eq(plannerSessions.id, id)).limit(1)
  return rows[0] ?? null
}

export async function insertSession(input: {
  tokenHash: string
  publicId: string
  problem: string
  attribution: PlannerAttribution
  ipHash: string | null
}): Promise<PlannerSessionRow> {
  const rows = await getDb()
    .insert(plannerSessions)
    .values({
      tokenHash: input.tokenHash,
      publicId: input.publicId,
      problem: input.problem,
      followUps: [],
      attribution: input.attribution,
      ipHash: input.ipHash,
      phase: 'anonymous',
      sensitiveHold: false,
      deliveryAttempts: 0,
    })
    .returning()
  const row = rows[0]
  if (!row) throw new PlannerError('The planner could not start a session.', 500, 'error')
  return row
}

export async function updateProblem(
  session: PlannerSessionRow,
  problem: string,
  attribution: PlannerAttribution,
): Promise<PlannerSessionRow> {
  return updateSession(session.id, {
    problem,
    attribution,
    followUps: [],
    pendingQuestion: null,
    partialPlan: null,
    fullPlan: null,
    refusal: null,
    sensitiveHold: false,
    phase: 'anonymous',
  })
}

export async function setSensitive(session: PlannerSessionRow, held: boolean): Promise<PlannerSessionRow> {
  return updateSession(session.id, {
    sensitiveHold: held,
    pendingQuestion: held ? null : session.pendingQuestion,
  })
}

export async function setPending(session: PlannerSessionRow, question: string): Promise<PlannerSessionRow> {
  return updateSession(session.id, {
    pendingQuestion: question,
    sensitiveHold: false,
    refusal: null,
  })
}

export async function appendAnswer(session: PlannerSessionRow, answer: string): Promise<PlannerSessionRow> {
  const question = session.pendingQuestion
  if (!question) throw new PlannerError('There is no question to answer.', 400, 'invalid')
  const followUps = [...asFollowUps(session), { question, answer }]
  return updateSession(session.id, { followUps, pendingQuestion: null, sensitiveHold: false })
}

export async function popLastAnswer(session: PlannerSessionRow): Promise<PlannerSessionRow> {
  const followUps = asFollowUps(session)
  const last = followUps[followUps.length - 1]
  return updateSession(session.id, {
    followUps: followUps.slice(0, -1),
    pendingQuestion: last?.question ?? session.pendingQuestion,
  })
}

export async function saveRefusal(session: PlannerSessionRow, message: string): Promise<PlannerSessionRow> {
  return updateSession(session.id, {
    refusal: message,
    pendingQuestion: null,
    sensitiveHold: false,
    partialPlan: null,
    fullPlan: null,
    phase: 'anonymous',
  })
}

export async function markAwaitingDetails(
  session: PlannerSessionRow,
  hook: PlanHook,
): Promise<PlannerSessionRow> {
  return updateSession(session.id, {
    pendingQuestion: null,
    partialPlan: { awaitingDetails: true, ...hook },
    sensitiveHold: false,
    refusal: null,
  })
}

export async function markWriting(session: PlannerSessionRow): Promise<PlannerSessionRow> {
  const partial = session.partialPlan
  if (partial && typeof partial === 'object' && 'awaitingDetails' in partial && partial.awaitingDetails === true) {
    return session
  }
  return updateSession(session.id, {
    pendingQuestion: null,
    partialPlan: { awaitingDetails: true, thanks: '', agent: '', benefit: '' },
  })
}

export async function saveGeneratedPlan(session: PlannerSessionRow, plan: FullPlan): Promise<PlannerSessionRow> {
  return updateSession(session.id, {
    phase: 'partial',
    partialPlan: isStoredHook(session.partialPlan) ? session.partialPlan : toPartialPlan(plan),
    fullPlan: plan,
    refusal: null,
    pendingQuestion: null,
    sensitiveHold: false,
  })
}

function isStoredHook(partial: PlannerSessionRow['partialPlan']): boolean {
  return Boolean(
    partial &&
      typeof partial === 'object' &&
      'awaitingDetails' in partial &&
      partial.awaitingDetails === true &&
      'agent' in partial &&
      typeof partial.agent === 'string' &&
      partial.agent.length >= 12,
  )
}

export async function claimSession(
  session: PlannerSessionRow,
  name: string,
  email: string,
): Promise<PlannerSessionRow> {
  const emailNormalized = email.trim().toLowerCase()
  if (session.claimedAt) {
    return updateSession(session.id, { name, email: email.trim(), emailNormalized })
  }
  return updateSession(session.id, {
    phase: 'claimed',
    name,
    email: email.trim(),
    emailNormalized,
    claimedAt: new Date(),
  })
}

export async function markEmailed(sessionId: string): Promise<void> {
  await getDb()
    .update(plannerSessions)
    .set({ phase: 'emailed', emailedAt: new Date(), deliveryError: null, updatedAt: new Date() })
    .where(eq(plannerSessions.id, sessionId))
}

export async function markDeliveryField(
  sessionId: string,
  patch: Partial<
    Pick<
      PlannerSessionRow,
      'loopsPlanSentAt' | 'loopsEventSentAt' | 'loopsStaffSentAt' | 'pdfPathname' | 'deliveryError'
    >
  >,
): Promise<void> {
  await getDb()
    .update(plannerSessions)
    .set({ ...patch, updatedAt: new Date() })
    .where(eq(plannerSessions.id, sessionId))
}

export async function incrementDeliveryAttempts(sessionId: string): Promise<void> {
  await getDb()
    .update(plannerSessions)
    .set({
      deliveryAttempts: sql`${plannerSessions.deliveryAttempts} + 1`,
      updatedAt: new Date(),
    })
    .where(eq(plannerSessions.id, sessionId))
}

export async function markScopingClicked(session: PlannerSessionRow): Promise<void> {
  if (session.scopingClickedAt) return
  await updateSession(session.id, { scopingClickedAt: new Date() })
}

export async function markScopingBooked(session: PlannerSessionRow): Promise<PlannerSessionRow> {
  if (session.scopingBookedAt) return session
  return updateSession(session.id, { scopingBookedAt: new Date(), scopingClickedAt: session.scopingClickedAt ?? new Date() })
}

export async function logRun(input: {
  sessionId: string
  slot: 'follow_up' | 'hook' | 'plan'
  model: string | null
  promptVersion: string
  promptHash: string
  input: unknown
  output: unknown
  inputTokens?: number
  outputTokens?: number
  latencyMs?: number
  degraded?: boolean
}): Promise<void> {
  await getDb()
    .insert(plannerRuns)
    .values({
      sessionId: input.sessionId,
      slot: input.slot,
      model: input.model,
      promptVersion: input.promptVersion,
      promptHash: input.promptHash,
      input: input.input,
      output: input.output,
      inputTokens: input.inputTokens,
      outputTokens: input.outputTokens,
      latencyMs: input.latencyMs,
      degraded: input.degraded ?? false,
    })
}

export async function logEvent(sessionId: string, name: string): Promise<void> {
  await getDb().insert(plannerEvents).values({ sessionId, name })
}

export async function assertSessionRate(ipHash: string | null): Promise<void> {
  if (!ipHash) return
  const since = new Date(Date.now() - HOUR_MS)
  const rows = await getDb()
    .select({ n: sql<number>`count(*)::int` })
    .from(plannerSessions)
    .where(and(eq(plannerSessions.ipHash, ipHash), gt(plannerSessions.createdAt, since)))
  if (Number(rows[0]?.n ?? 0) >= SESSION_LIMIT) {
    throw new PlannerError(
      'Too many plans from this network just now. Try again in a little while.',
      429,
      'rate_limited',
    )
  }
}

export async function assertRunRate(sessionId: string): Promise<void> {
  const since = new Date(Date.now() - HOUR_MS)
  const rows = await getDb()
    .select({ n: sql<number>`count(*)::int` })
    .from(plannerRuns)
    .where(and(eq(plannerRuns.sessionId, sessionId), gt(plannerRuns.createdAt, since)))
  if (Number(rows[0]?.n ?? 0) >= RUN_LIMIT) {
    throw new PlannerError(
      'This plan has had enough attempts for now. Try again in a little while.',
      429,
      'rate_limited',
    )
  }
}

export async function getPlanSummary(publicId: string): Promise<{
  publicId: string
  title: string
  problem: string
} | null> {
  if (!isDatabaseConfigured()) return null
  if (!/^[A-Za-z0-9_-]{16,40}$/.test(publicId)) return null
  try {
    const rows = await getDb()
      .select({
        publicId: plannerSessions.publicId,
        partialPlan: plannerSessions.partialPlan,
        fullPlan: plannerSessions.fullPlan,
      })
      .from(plannerSessions)
      .where(eq(plannerSessions.publicId, publicId))
      .limit(1)
    const row = rows[0]
    if (!row) return null
    const partial = row.partialPlan
    const full = row.fullPlan
    const title = (partial && 'title' in partial ? partial.title : undefined) || full?.title
    const quote = full && 'quote' in full ? full.quote : undefined
    const problem = (partial && 'problem' in partial ? partial.problem : undefined) || quote
    if (!title || !problem) return null
    return { publicId: row.publicId, title, problem }
  } catch (error) {
    console.error('[planner] summary', error)
    return null
  }
}

export async function listPlannerAdmin() {
  const db = getDb()
  const sessions = await db.select().from(plannerSessions).orderBy(desc(plannerSessions.createdAt)).limit(100)
  const ids = sessions.map((session) => session.id)
  const runs =
    ids.length === 0
      ? []
      : await db
          .select()
          .from(plannerRuns)
          .where(inArray(plannerRuns.sessionId, ids))
          .orderBy(desc(plannerRuns.createdAt))
          .limit(80)
  return { sessions, runs }
}

export async function listUnsentClaims(): Promise<PlannerSessionRow[]> {
  const cutoff = new Date(Date.now() - 20_000)
  return getDb()
    .select()
    .from(plannerSessions)
    .where(
      and(
        eq(plannerSessions.phase, 'claimed'),
        isNull(plannerSessions.emailedAt),
        isNotNull(plannerSessions.claimedAt),
        lt(plannerSessions.claimedAt, cutoff),
        lt(plannerSessions.deliveryAttempts, 8),
      ),
    )
    .limit(3)
}

export async function runRetention(): Promise<{ purged: number; deleted: number }> {
  const db = getDb()
  const now = new Date()
  const thirtyDays = new Date(now.getTime() - 30 * DAY_MS)
  const yearAgo = new Date(now.getTime() - 365 * DAY_MS)

  const purged = await db
    .update(plannerSessions)
    .set({
      problem: '',
      followUps: [],
      pendingQuestion: null,
      partialPlan: null,
      fullPlan: null,
      refusal: null,
      freeTextPurgedAt: now,
      updatedAt: now,
    })
    .where(
      and(
        isNull(plannerSessions.email),
        isNull(plannerSessions.freeTextPurgedAt),
        lt(plannerSessions.createdAt, thirtyDays),
      ),
    )
    .returning({ id: plannerSessions.id })

  const old = await db
    .select({ id: plannerSessions.id, pdfPathname: plannerSessions.pdfPathname })
    .from(plannerSessions)
    .where(and(isNotNull(plannerSessions.email), lt(plannerSessions.createdAt, yearAgo)))
    .limit(50)

  let deleted = 0
  if (old.length) {
    const { del } = await import('@vercel/blob')
    for (const row of old) {
      if (row.pdfPathname) {
        try {
          await del(row.pdfPathname)
        } catch (error) {
          console.error('[planner] blob delete', row.id, error)
        }
      }
      await db.delete(plannerSessions).where(eq(plannerSessions.id, row.id))
      deleted += 1
    }
  }

  return { purged: purged.length, deleted }
}

export async function markUnsubscribed(email: string): Promise<void> {
  const normalized = email.trim().toLowerCase()
  if (!normalized) return
  await getDb()
    .update(plannerSessions)
    .set({ loopsUnsubscribedAt: new Date(), updatedAt: new Date() })
    .where(eq(plannerSessions.emailNormalized, normalized))
}

export function asFollowUps(session: PlannerSessionRow): FollowUp[] {
  return Array.isArray(session.followUps) ? session.followUps : []
}

async function updateSession(
  id: string,
  patch: Partial<typeof plannerSessions.$inferInsert>,
): Promise<PlannerSessionRow> {
  const rows = await getDb()
    .update(plannerSessions)
    .set({ ...patch, updatedAt: new Date() })
    .where(eq(plannerSessions.id, id))
    .returning()
  const row = rows[0]
  if (!row) throw new PlannerError('That plan session could not be updated.', 404, 'error')
  return row
}
