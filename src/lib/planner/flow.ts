import { waitUntil } from '@vercel/functions'
import { cookies } from 'next/headers'

import { isAnthropicConfigured, askFollowUp, askPlan, planModelId } from '@/lib/planner/anthropic'
import { interpretPlanResult } from '@/lib/planner/guardrails'
import { fallbackHook, prepareHook, readPlanHook, withHook } from '@/lib/planner/hook'
import { impactLine } from '@/lib/planner/levers'
import { MAX_PLAN_FAILURES, canResumeSession, canReuseSessionForStart, planFailures, planLeaseLive } from '@/lib/planner/plan-lease'
import { hashIp, clientIp, newSecret, hashSecret } from '@/lib/planner/ids'
import { MARKETING_ATTRIBUTION_QUERY_PARAMS, type MarketingAttribution } from '@/lib/marketing-attribution'
import { adaptLegacyPlan, parseStoredPlan, type FollowUpResult as FollowUpModel } from '@/lib/planner/plan-schema'
import {
  dataBlock,
  FOLLOW_UP_PROMPT_VERSION,
  FOLLOW_UP_SYSTEM,
  PLAN_PROMPT_VERSION,
  PLAN_SYSTEM,
  promptHash,
} from '@/lib/planner/prompts'
import { isEmptiedByRedaction, redactFreeText } from '@/lib/planner/redact'
import {
  normalizeTeamSizeParam,
  sessionPlanOnlyFromAttribution,
  type PlannerTeamSize,
} from '@/lib/planner/entry-params'
import { plannerGaveUpCopy, type PlannerGaveUpContact } from '@/lib/planner/plan-only-copy'
import {
  acquirePlanLease,
  appendAnswer,
  asFollowUps,
  assertRunRate,
  assertSessionRate,
  claimSession,
  databaseReady,
  getSessionById,
  hasRecordedPlanEmail,
  insertSession,
  loadSessionFromToken,
  logEvent,
  logRun,
  markScopingBooked,
  markScopingClicked,
  markWriting,
  mergeSessionEntry,
  PlannerError,
  popLastAnswer,
  releasePlanLease,
  saveGeneratedPlanWithHook,
  saveRefusalWithLease,
  saveRefusal,
  setPending,
  setSensitive,
  updateProblem,
  type PlannerSessionRow,
} from '@/lib/planner/store'
import {
  FALLBACK_QUESTIONS,
  PLANNER_COOKIE,
  SCRIPTED_REFUSAL,
  SENSITIVE_MESSAGE,
  type FullPlan,
  type PlannerAttribution,
} from '@/lib/planner/types'

type SessionRow = PlannerSessionRow

/** Every non-empty state carries `ref`, the session's public id, so the tab can resume only its own session. */
export type PublicState = (
  | { state: 'empty' }
  | { state: 'sensitive'; message: string; problem: string }
  | { state: 'question'; question: string; problem: string; warning?: string }
  | { state: 'writing'; problem: string; active?: boolean }
  | {
      state: 'details'
      problem: string
      thanks: string
      agent: string
      benefit: string
      preview: { steps: string; impact: string } | null
      planOnly: boolean
      name?: string
      email?: string
      company?: string
    }
  | { state: 'refusal'; message: string }
  | {
      state: 'sent'
      publicId: string
      full: FullPlan
      email: string
      name: string
      emailed: boolean
      planOnly: boolean
    }
  | { state: 'rate_limited'; message: string }
  | { state: 'error'; message: string; gaveUp?: boolean; contact?: PlannerGaveUpContact }
) & { ref?: string }

export type FlowResult =
  | { kind: 'json'; status: number; body: PublicState; cookie?: string; clearCookie?: boolean; deliverId?: string }

const MAX_FOLLOW_UPS = 4

export function readPlannerToken(): string | undefined {
  return cookies().get(PLANNER_COOKIE)?.value
}

export function toPublicState(session: SessionRow | null, warning?: string): PublicState {
  const state = baseState(session, warning)
  if (!session || state.state === 'empty') return state
  if (state.state === 'writing') return writingState(session)
  return { ...state, ref: session.publicId }
}

function gaveUp(session: SessionRow): boolean {
  return !planLeaseLive(session.partialPlan) && planFailures(session.partialPlan) >= MAX_PLAN_FAILURES
}

function sessionPlanOnly(session: SessionRow): boolean {
  return sessionPlanOnlyFromAttribution(session.teamSize as PlannerTeamSize | null, session.attribution)
}

/**
 * A session waiting for its plan. After MAX_PLAN_FAILURES failed jobs, the page stops retrying.
 * `emailed` says whether we have a recorded plan email to this address (hasRecordedPlanEmail).
 */
function writingState(session: SessionRow, emailed = false): PublicState {
  if (gaveUp(session)) {
    const copy = plannerGaveUpCopy({ planOnly: sessionPlanOnly(session), emailed })
    return { state: 'error', message: copy.message, gaveUp: true, contact: copy.contact, ref: session.publicId }
  }
  return { state: 'writing', problem: session.problem, active: planLeaseLive(session.partialPlan), ref: session.publicId }
}

/** writingState, with the recorded-send lookup done when the session has given up. */
async function resolvedWritingState(session: SessionRow): Promise<PublicState> {
  if (!gaveUp(session)) return writingState(session)
  return writingState(session, await hasRecordedPlanEmail(session.email))
}

function baseState(session: SessionRow | null, warning?: string): PublicState {
  if (!session || session.freeTextPurgedAt) return { state: 'empty' }
  if (session.sensitiveHold) {
    return { state: 'sensitive', message: SENSITIVE_MESSAGE, problem: session.problem }
  }
  if ((session.phase === 'claimed' || session.phase === 'emailed') && session.fullPlan) {
    const full = parseStoredPlan(session.fullPlan) ?? adaptLegacyPlan(session.fullPlan)
    if (full && session.email && session.name) {
      return {
        state: 'sent',
        publicId: session.publicId,
        full,
        email: session.email,
        name: session.name,
        emailed: session.phase === 'emailed',
        planOnly: sessionPlanOnlyFromAttribution(session.teamSize as PlannerTeamSize | null, session.attribution),
      }
    }
  }
  if (session.refusal && !planMiss(session)) return { state: 'refusal', message: session.refusal }
  if (session.pendingQuestion) {
    return {
      state: 'question',
      question: session.pendingQuestion,
      problem: session.problem,
      warning,
    }
  }
  if (needsPlan(session)) return { state: 'writing', problem: session.problem }
  if (awaitingDetails(session) || asFollowUps(session).length > 0 || parseStoredPlan(session.fullPlan)) {
    const hook = readPlanHook(session.partialPlan) ?? fallbackHook(session.problem)
    const plan = parseStoredPlan(session.fullPlan)
    return {
      state: 'details',
      problem: session.problem,
      ...hook,
      preview: plan
        ? { steps: plan.steps.slice(0, 2).map((step) => step.text).join(' '), impact: impactLine(plan.levers) }
        : null,
      planOnly: sessionPlanOnlyFromAttribution(session.teamSize as PlannerTeamSize | null, session.attribution),
      name: session.name || undefined,
      email: session.email || undefined,
      company: session.company || undefined,
    }
  }
  return { state: 'empty' }
}

/** A plan that failed its checks after real answers. Refresh should write it again, not show a dead end. */
function planMiss(session: SessionRow): boolean {
  return session.refusal === SCRIPTED_REFUSAL && asFollowUps(session).length > 0 && !session.pendingQuestion
}

function needsPlan(session: SessionRow): boolean {
  if (session.freeTextPurgedAt || session.sensitiveHold || session.pendingQuestion) return false
  if (session.refusal && !planMiss(session)) return false
  if (session.phase === 'claimed' || session.phase === 'emailed') return false
  if (parseStoredPlan(session.fullPlan)) return false
  return awaitingDetails(session) || asFollowUps(session).length > 0
}

function needsHook(session: SessionRow): boolean {
  if (session.freeTextPurgedAt || session.sensitiveHold || session.refusal || session.pendingQuestion) return false
  if (session.phase === 'claimed' || session.phase === 'emailed') return false
  if (readPlanHook(session.partialPlan)) return false
  return awaitingDetails(session) || asFollowUps(session).length > 0 || Boolean(parseStoredPlan(session.fullPlan))
}

async function presentWriting(session: SessionRow, cookie?: string): Promise<FlowResult> {
  const marked = await markWriting(session)
  return { kind: 'json', status: 200, body: writingState(marked), cookie }
}

/** Whole budget for one plan job, inside the plan route's maxDuration. */
const PLAN_BUDGET_MS = 200_000
/** One model call. Plans take 30 to 45 seconds today. */
const PLAN_ATTEMPT_MS = 70_000
/** Do not start another attempt with less time than this left. */
const PLAN_MIN_ATTEMPT_MS = 45_000
const PLAN_MAX_ATTEMPTS = 3
const PLAN_FAILED = 'The plan did not come together. Please try again.'

type PlanOutcome = { kind: 'plan'; plan: FullPlan } | { kind: 'refusal'; message: string }

/**
 * Write the plan, retrying on a timeout, an API error or a plan that fails its checks.
 * A refusal is only final before any follow-up answers. After real answers the plan is retried.
 */
async function generatePlan(session: SessionRow, prompt: string, deadline: number): Promise<PlanOutcome> {
  const answered = asFollowUps(session).length > 0
  for (let attempt = 1; attempt <= PLAN_MAX_ATTEMPTS; attempt += 1) {
    const remaining = deadline - Date.now()
    if (attempt > 1 && remaining < PLAN_MIN_ATTEMPT_MS) break
    try {
      await assertRunRate(session.id)
      const result = await askPlan(prompt, { timeoutMs: Math.max(10_000, Math.min(PLAN_ATTEMPT_MS, remaining)) })
      const interpreted = interpretPlanResult(result.object, prompt)
      await logRun({
        sessionId: session.id,
        slot: 'plan',
        model: result.model || planModelId(),
        promptVersion: PLAN_PROMPT_VERSION,
        promptHash: promptHash(PLAN_SYSTEM),
        input: { prompt, attempt },
        output: result.object,
        inputTokens: result.usage.inputTokens,
        outputTokens: result.usage.outputTokens,
        latencyMs: result.latencyMs,
        degraded: interpreted.kind !== 'plan',
      }).catch(() => undefined)
      if (interpreted.kind === 'plan') return interpreted
      if (!answered) return interpreted
    } catch (error) {
      if (error instanceof PlannerError && error.code === 'rate_limited') throw error
      console.error('[planner] plan attempt', attempt, session.id, error)
      await logRun({
        sessionId: session.id,
        slot: 'plan',
        model: planModelId(),
        promptVersion: PLAN_PROMPT_VERSION,
        promptHash: promptHash(PLAN_SYSTEM),
        input: { prompt, attempt },
        output: { error: error instanceof Error ? error.message : 'plan failed' },
        degraded: true,
      }).catch(() => undefined)
    }
  }
  throw new PlannerError(PLAN_FAILED, 503, 'plan')
}

/**
 * The one place a plan is written. Holds the session's lease for the whole job and saves the
 * plan with its gate line in one write. On failure the lease is released so a retry can start.
 */
async function runPlanJob(leased: SessionRow, deadline: number): Promise<SessionRow> {
  const leaseAt = String((leased.partialPlan as Record<string, unknown> | null)?.planWritingAt ?? '')
  const prompt = dataBlock(leased.problem, asFollowUps(leased))
  try {
    const [outcome, hook] = await Promise.all([
      generatePlan(leased, prompt, deadline),
      prepareHook(leased).catch(() => fallbackHook(leased.problem)),
    ])
    const saved =
      outcome.kind === 'refusal'
        ? await saveRefusalWithLease(leased, leaseAt, outcome.message || SCRIPTED_REFUSAL)
        : await saveGeneratedPlanWithHook(leased, leaseAt, outcome.plan, hook)
    if (saved) return saved
    // The lease was lost while the model ran (the session was restarted, reset or taken over).
    // This result belongs to an older state of the session, so it is dropped, not saved.
    console.warn('[planner] plan job lost its lease; result dropped', leased.id)
    return (await getSessionById(leased.id)) ?? leased
  } catch (error) {
    if (leaseAt) await releasePlanLease(leased.id, leaseAt).catch(() => undefined)
    throw error
  }
}

/** Wait for a plan another request is writing. Returns the session once it changes, or null at the deadline. */
async function waitForPlanJob(sessionId: string, deadline: number): Promise<SessionRow | null> {
  while (Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const current = await getSessionById(sessionId)
    if (!current) return null
    if (!needsPlan(current) || !planLeaseLive(current.partialPlan)) return current
  }
  return null
}

/** Make sure the session has a plan before the claim. Joins a job already running. */
async function ensurePlan(session: SessionRow): Promise<SessionRow> {
  if (parseStoredPlan(session.fullPlan)) return session
  const deadline = Date.now() + PLAN_BUDGET_MS
  const leased = await acquirePlanLease(session)
  if (leased) return runPlanJob(leased, deadline)
  const joined = await waitForPlanJob(session.id, deadline)
  if (joined && parseStoredPlan(joined.fullPlan)) return joined
  if (joined?.refusal && !planMiss(joined)) return joined
  throw new PlannerError(PLAN_FAILED, 503, 'plan')
}

function awaitingDetails(session: SessionRow): boolean {
  const partial = session.partialPlan
  return Boolean(
    partial && typeof partial === 'object' && 'awaitingDetails' in partial && partial.awaitingDetails === true,
  )
}

export async function handleGet(ref?: string | null): Promise<FlowResult> {
  if (!databaseReady()) return { kind: 'json', status: 200, body: { state: 'empty' } }
  let session = await loadSessionFromToken(readPlannerToken())
  // Only resume the session this tab started. An older session behind the cookie
  // (a plan from an earlier visit) must never be shown as this visit's plan.
  if (!session || !canResumeSession(session.publicId, ref)) {
    return { kind: 'json', status: 200, body: { state: 'empty' } }
  }
  if (needsPlan(session)) return { kind: 'json', status: 200, body: await resolvedWritingState(session) }
  if (session && needsHook(session)) session = await withHook(session)
  return { kind: 'json', status: 200, body: toPublicState(session) }
}

export async function handlePrepare(): Promise<FlowResult> {
  requireReady()
  const session = await requireSession()
  if (session.pendingQuestion) throw new PlannerError('Answer the question first.', 400, 'invalid')
  if (
    session.sensitiveHold ||
    (session.refusal && !planMiss(session)) ||
    session.phase === 'claimed' ||
    session.phase === 'emailed'
  ) {
    return { kind: 'json', status: 200, body: toPublicState(session) }
  }
  if (parseStoredPlan(session.fullPlan)) {
    const ready = readPlanHook(session.partialPlan) ? session : await withHook(session)
    return { kind: 'json', status: 200, body: toPublicState(ready) }
  }
  if (gaveUp(session)) {
    // Several jobs have already failed for this session. Stop spending model calls on it.
    return { kind: 'json', status: 200, body: await resolvedWritingState(session) }
  }
  const leased = await acquirePlanLease(session)
  if (!leased) {
    // Another request is already writing this plan (a browser retry, a second tab), or it just finished.
    const current = (await getSessionById(session.id)) ?? session
    if (needsPlan(current)) {
      const body = await resolvedWritingState(current)
      return { kind: 'json', status: body.state === 'writing' ? 202 : 200, body }
    }
    return { kind: 'json', status: 200, body: toPublicState(current) }
  }
  // The plan is written in the background and the page polls the session. A long, silent
  // request is easy to lose on the way (proxies, mobile networks), and the page cannot tell
  // a lost response from a failed plan.
  const job = runPlanJob(leased, Date.now() + PLAN_BUDGET_MS).catch((error) => {
    console.error('[planner] plan job', session.id, error)
  })
  try {
    waitUntil(job)
  } catch {
    void job
  }
  return {
    kind: 'json',
    status: 202,
    body: { state: 'writing', problem: leased.problem, active: true, ref: leased.publicId },
  }
}

export async function handleReset(): Promise<FlowResult> {
  return { kind: 'json', status: 200, body: { state: 'empty' }, clearCookie: true }
}

export async function handleStart(request: Request, body: unknown): Promise<FlowResult> {
  requireReady()
  const record = asRecord(body)
  const problem = typeof record.problem === 'string' ? record.problem.trim() : ''
  if (problem.length < 20 || problem.length > 2000) {
    throw new PlannerError('Describe the process in a sentence or two.', 400, 'invalid')
  }
  const attribution = parseAttribution(record.attribution)
  const entry = parseSessionEntry(asRecord(record.entry ?? record))
  const ipHash = ipOf(request)
  const existing = await loadSessionFromToken(readPlannerToken())
  // Reuse the cookie's session only for the tab that started it. Any other tab, or a new visit,
  // gets a new session, so an older visit's answers, lead id, company or email never carry over.
  const ref = typeof record.ref === 'string' ? record.ref : null
  const reusable = canReuseSessionForStart(existing, ref)

  let session: SessionRow
  let cookie: string | undefined
  if (!reusable || !existing) {
    await assertSessionRate(ipHash)
    cookie = newSecret()
    session = await insertSession({
      tokenHash: hashSecret(cookie),
      publicId: newSecret(16),
      problem,
      attribution,
      ipHash,
      teamSize: entry.teamSize,
      metaLeadId: entry.metaLeadId,
      company: entry.company,
      leadEmail: entry.leadEmail,
    })
    await logEvent(session.id, 'planner_start')
  } else {
    session = await updateProblem(existing, problem, attribution)
    session = await mergeSessionEntry(session, {
      teamSize: entry.teamSize,
      metaLeadId: entry.metaLeadId,
      company: entry.company,
      leadEmail: entry.leadEmail,
      attribution,
    })
  }

  if (isEmptiedByRedaction(problem, redactFreeText(problem))) {
    session = await setSensitive(session, true)
    return { kind: 'json', status: 200, body: toPublicState(session), cookie }
  }

  session = await setSensitive(session, false)
  return continueAfterAnswers(session, cookie)
}

export async function handleEntry(body: unknown): Promise<FlowResult> {
  requireReady()
  const session = await loadSessionFromToken(readPlannerToken())
  const record = asRecord(body)
  const ref = typeof record.ref === 'string' ? record.ref : null
  // Entry details belong to the session this tab is on. Never re-attribute an older or finished session.
  if (
    !session ||
    session.freeTextPurgedAt ||
    session.claimedAt ||
    session.phase === 'claimed' ||
    session.phase === 'emailed' ||
    !canResumeSession(session.publicId, ref)
  ) {
    return { kind: 'json', status: 200, body: { state: 'empty' } }
  }
  const entry = parseSessionEntry(record)
  const attribution = record.attribution ? parseAttribution(record.attribution) : undefined
  const merged = await mergeSessionEntry(session, {
    ...entry,
    attribution,
  })
  return { kind: 'json', status: 200, body: toPublicState(merged) }
}

export async function handleAnswer(body: unknown): Promise<FlowResult> {
  requireReady()
  const session = await requireSession()
  if (session.phase === 'partial' || session.phase === 'claimed' || session.phase === 'emailed') {
    return { kind: 'json', status: 200, body: toPublicState(session) }
  }
  if (session.sensitiveHold) {
    return { kind: 'json', status: 200, body: toPublicState(session) }
  }
  const record = asRecord(body)
  const answer = typeof record.answer === 'string' ? record.answer.trim() : ''
  if (!answer || answer.length > 800) {
    throw new PlannerError('Answer in a sentence or two.', 400, 'invalid')
  }
  if (!session.pendingQuestion) {
    throw new PlannerError('There is no question to answer.', 400, 'invalid')
  }
  if (isEmptiedByRedaction(answer, redactFreeText(answer))) {
    return {
      kind: 'json',
      status: 200,
      body: { ...toPublicState(session), warning: SENSITIVE_MESSAGE } as PublicState,
    }
  }

  let next = await appendAnswer(session, answer)
  await logEvent(next.id, 'follow_up_answered')
  return continueAfterAnswers(next)
}

export async function handleClaim(body: unknown): Promise<FlowResult> {
  requireReady()
  const record = asRecord(body)
  const name = typeof record.name === 'string' ? record.name.trim().replace(/\s+/g, ' ') : ''
  const email = typeof record.email === 'string' ? record.email.trim() : ''
  const company =
    typeof record.company === 'string' ? record.company.trim().replace(/\s+/g, ' ').slice(0, 120) : ''
  if (!name || name.length > 120) throw new PlannerError('Enter your name.', 400, 'invalid')
  if (!email || email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new PlannerError('Enter a valid work email.', 400, 'invalid')
  }
  let session = await requireSession()
  if (session.pendingQuestion) {
    throw new PlannerError('Answer the question first.', 400, 'invalid')
  }
  if (!parseStoredPlan(session.fullPlan)) {
    if (session.phase === 'claimed' || session.phase === 'emailed') {
      return { kind: 'json', status: 200, body: toPublicState(session) }
    }
    session = await ensurePlan(session)
    if (!session.refusal && parseStoredPlan(session.fullPlan)) session = await withHook(session)
  }
  if (session.refusal || !parseStoredPlan(session.fullPlan)) {
    return { kind: 'json', status: 200, body: toPublicState(session) }
  }
  const claimed = await claimSession(session, name, email, company || null)
  if (!session.claimedAt) await logEvent(claimed.id, 'email_captured')
  const state = toPublicState(claimed)
  return {
    kind: 'json',
    status: 200,
    body: state,
    deliverId: claimed.emailedAt ? undefined : claimed.id,
  }
}

export async function handleCta(): Promise<FlowResult> {
  if (!databaseReady()) return { kind: 'json', status: 200, body: { state: 'empty' } }
  const session = await loadSessionFromToken(readPlannerToken())
  if (!session) return { kind: 'json', status: 200, body: { state: 'empty' } }
  await markScopingClicked(session)
  await logEvent(session.id, 'cta_clicked')
  return { kind: 'json', status: 200, body: { state: 'empty' } }
}

export async function handleBooked(body: unknown): Promise<void> {
  if (!databaseReady()) return
  const session = await loadSessionFromToken(readPlannerToken())
  const plan = typeof asRecord(body).plan === 'string' ? asRecord(body).plan : ''
  if (!session || session.publicId !== plan || !session.email) return
  const booked = await markScopingBooked(session)
  if (session.scopingBookedAt) return
  try {
    const { loopsClientFromEnv } = await import('@/lib/planner/loops')
    const { contactUpdateBody, scopingBookedEvent } = await import('@/lib/planner/loops-payload')
    const loops = loopsClientFromEnv()
    const firstName = booked.name?.trim().split(/\s+/)[0] || 'there'
    await loops.updateContact(
      contactUpdateBody({
        email: booked.email || session.email,
        userId: booked.id,
        firstName,
        scopingCallBooked: true,
        planOnly: sessionPlanOnlyFromAttribution(
          booked.teamSize as PlannerTeamSize | null,
          booked.attribution,
        ),
      }),
    )
    await loops.sendEvent(
      scopingBookedEvent({
        email: booked.email || session.email,
        userId: booked.id,
        planId: booked.publicId,
      }),
      `${booked.id}:booked`,
    )
  } catch (error) {
    console.error('[planner] scoping booked', booked.id, error)
  }
}

async function continueAfterAnswers(session: SessionRow, cookie?: string): Promise<FlowResult> {
  const answers = asFollowUps(session)
  const prompt = dataBlock(session.problem, answers)
  if (answers.length >= MAX_FOLLOW_UPS) return presentWriting(session, cookie)

  await assertRunRate(session.id)
  try {
    const result = await askFollowUp(prompt)
    await logRun({
      sessionId: session.id,
      slot: 'follow_up',
      model: result.model,
      promptVersion: FOLLOW_UP_PROMPT_VERSION,
      promptHash: promptHash(FOLLOW_UP_SYSTEM),
      input: { prompt },
      output: result.object,
      inputTokens: result.usage.inputTokens,
      outputTokens: result.usage.outputTokens,
      latencyMs: result.latencyMs,
      degraded: false,
    })
    const next = interpretFollowUp(result.object)
    if (next.kind === 'sensitive') {
      if (answers.length === 0) {
        const held = await setSensitive(session, true)
        return { kind: 'json', status: 200, body: toPublicState(held), cookie }
      }
      const restored = await popLastAnswer(session)
      const state = toPublicState(restored, SENSITIVE_MESSAGE)
      return { kind: 'json', status: 200, body: state, cookie }
    }
    if (next.kind === 'refusal') {
      const refused = await saveRefusal(session, next.message)
      return { kind: 'json', status: 200, body: toPublicState(refused), cookie }
    }
    if (next.kind === 'done') return presentWriting(session, cookie)
    if (next.kind === 'question') {
      if (answers.some((item) => item.question === next.question)) return presentWriting(session, cookie)
      const asked = await setPending(session, next.question)
      return { kind: 'json', status: 200, body: toPublicState(asked), cookie }
    }
  } catch (error) {
    if (error instanceof PlannerError) throw error
    console.error('[planner] follow-up', session.id, error)
    await logRun({
      sessionId: session.id,
      slot: 'follow_up',
      model: planModelId(),
      promptVersion: FOLLOW_UP_PROMPT_VERSION,
      promptHash: promptHash(FOLLOW_UP_SYSTEM),
      input: { prompt },
      output: { error: error instanceof Error ? error.message : 'follow-up failed' },
      degraded: true,
    }).catch(() => undefined)
  }

  const fallback = nextFallback(answers)
  if (!fallback) return presentWriting(session, cookie)
  const asked = await setPending(session, fallback)
  return { kind: 'json', status: 200, body: toPublicState(asked), cookie }
}

function interpretFollowUp(
  object: FollowUpModel,
): { kind: 'sensitive' } | { kind: 'refusal'; message: string } | { kind: 'done' } | { kind: 'question'; question: string } | { kind: 'fallback' } {
  if (object.sensitive) return { kind: 'sensitive' }
  const refusal = object.refusal?.trim()
  if (refusal) return { kind: 'refusal', message: refusal.slice(0, 400) }
  if (object.done) return { kind: 'done' }
  const question = object.question?.trim()
  if (question) return { kind: 'question', question: question.slice(0, 280) }
  return { kind: 'fallback' }
}

function nextFallback(answers: { question: string }[]): string | null {
  const asked = new Set(answers.map((item) => item.question))
  return FALLBACK_QUESTIONS.find((question) => !asked.has(question)) ?? null
}

function requireReady(): void {
  if (!databaseReady() || !isAnthropicConfigured()) {
    throw new PlannerError('The planner is not available on this deployment yet.', 503, 'unavailable')
  }
}

async function requireSession(): Promise<SessionRow> {
  const session = await loadSessionFromToken(readPlannerToken())
  if (!session || session.freeTextPurgedAt) {
    throw new PlannerError('Start again with the problem you want an agent to take on.', 400, 'invalid')
  }
  return session
}

function ipOf(request: Request): string | null {
  const ip = clientIp(request)
  return ip ? hashIp(ip) : null
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
}

function parseSessionEntry(record: Record<string, unknown>): {
  teamSize: PlannerTeamSize | null
  metaLeadId: string | null
  company: string | null
  leadEmail: string | null
} {
  const sizeRaw =
    (typeof record.teamSize === 'string' && record.teamSize) ||
    (typeof record.size === 'string' && record.size) ||
    null
  const teamSize = normalizeTeamSizeParam(sizeRaw)
  const metaRaw = typeof record.metaLeadId === 'string' ? record.metaLeadId : record.meta_lead_id
  const metaLeadId =
    typeof metaRaw === 'string' && /^[A-Za-z0-9]{1,64}$/.test(metaRaw.trim()) ? metaRaw.trim() : null
  const company =
    typeof record.company === 'string' ? record.company.trim().replace(/\s+/g, ' ').slice(0, 120) : null
  const emailRaw = typeof record.email === 'string' ? record.email.trim().toLowerCase() : ''
  const leadEmail =
    emailRaw && emailRaw.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw) ? emailRaw : null
  return {
    teamSize,
    metaLeadId,
    company: company || null,
    leadEmail,
  }
}

export function parseAttribution(value: unknown): PlannerAttribution {
  if (!value || typeof value !== 'object') return { variant: 'agent_planner' }
  const record = value as Record<string, unknown>
  const attribution: MarketingAttribution = {}
  for (const key of MARKETING_ATTRIBUTION_QUERY_PARAMS) {
    const raw = record[key]
    if (typeof raw === 'string' && raw.trim()) attribution[key] = raw.trim().slice(0, 200)
  }
  return { ...attribution, variant: 'agent_planner' }
}

export function scopingPath(publicId: string): string {
  return `/contact?plan=${encodeURIComponent(publicId)}`
}
