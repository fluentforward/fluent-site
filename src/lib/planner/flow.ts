import { cookies } from 'next/headers'

import { isAnthropicConfigured, askFollowUp, planModelId } from '@/lib/planner/anthropic'
import { hashIp, clientIp, newSecret, hashSecret } from '@/lib/planner/ids'
import { MARKETING_ATTRIBUTION_QUERY_PARAMS, type MarketingAttribution } from '@/lib/marketing-attribution'
import { parseStoredPlan, type FollowUpResult as FollowUpModel } from '@/lib/planner/plan-schema'
import {
  dataBlock,
  FOLLOW_UP_PROMPT_VERSION,
  FOLLOW_UP_SYSTEM,
  promptHash,
} from '@/lib/planner/prompts'
import { isEmptiedByRedaction, redactFreeText } from '@/lib/planner/redact'
import {
  appendAnswer,
  asFollowUps,
  assertRunRate,
  assertSessionRate,
  claimSession,
  databaseReady,
  insertSession,
  loadSessionFromToken,
  logEvent,
  logRun,
  markScopingBooked,
  markScopingClicked,
  PlannerError,
  popLastAnswer,
  saveRefusal,
  setPending,
  setSensitive,
  updateProblem,
  type PlannerSessionRow,
} from '@/lib/planner/store'
import {
  FALLBACK_QUESTIONS,
  PLANNER_COOKIE,
  SENSITIVE_MESSAGE,
  type FullPlan,
  type PartialPlan,
  type PlannerAttribution,
} from '@/lib/planner/types'

type SessionRow = PlannerSessionRow

export type PublicState =
  | { state: 'empty' }
  | { state: 'sensitive'; message: string; problem: string }
  | { state: 'question'; question: string; step: number; problem: string; warning?: string }
  | { state: 'partial'; publicId: string; partial: PartialPlan; problem: string }
  | { state: 'refusal'; message: string }
  | { state: 'sent'; publicId: string; full: FullPlan; email: string; name: string; emailed: boolean }
  | { state: 'rate_limited'; message: string }
  | { state: 'error'; message: string }

export type FlowResult =
  | { kind: 'json'; status: number; body: PublicState; cookie?: string; clearCookie?: boolean; deliverId?: string }
  | { kind: 'stream'; session: SessionRow; prompt: string; cookie?: string }

export function readPlannerToken(): string | undefined {
  return cookies().get(PLANNER_COOKIE)?.value
}

export function toPublicState(session: SessionRow | null, warning?: string): PublicState {
  if (!session || session.freeTextPurgedAt) return { state: 'empty' }
  if (session.sensitiveHold) {
    return { state: 'sensitive', message: SENSITIVE_MESSAGE, problem: session.problem }
  }
  if ((session.phase === 'claimed' || session.phase === 'emailed') && session.fullPlan) {
    const full = parseStoredPlan(session.fullPlan)
    if (full && session.email && session.name) {
      return {
        state: 'sent',
        publicId: session.publicId,
        full,
        email: session.email,
        name: session.name,
        emailed: session.phase === 'emailed',
      }
    }
  }
  if (session.phase === 'partial' && session.partialPlan) {
    const partial = session.partialPlan
    if (partial.title && partial.problem) {
      return { state: 'partial', publicId: session.publicId, partial, problem: session.problem }
    }
  }
  if (session.refusal) return { state: 'refusal', message: session.refusal }
  if (session.pendingQuestion) {
    return {
      state: 'question',
      question: session.pendingQuestion,
      step: asFollowUps(session).length + 1,
      problem: session.problem,
      warning,
    }
  }
  return { state: 'empty' }
}

export async function handleGet(): Promise<FlowResult> {
  if (!databaseReady()) return { kind: 'json', status: 200, body: { state: 'empty' } }
  const session = await loadSessionFromToken(readPlannerToken())
  return { kind: 'json', status: 200, body: toPublicState(session) }
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
  const ipHash = ipOf(request)
  const existing = await loadSessionFromToken(readPlannerToken())
  const reusable = existing && !existing.email && !existing.freeTextPurgedAt

  let session: SessionRow
  let cookie: string | undefined
  if (!reusable) {
    await assertSessionRate(ipHash)
    cookie = newSecret()
    session = await insertSession({
      tokenHash: hashSecret(cookie),
      publicId: newSecret(16),
      problem,
      attribution,
      ipHash,
    })
    await logEvent(session.id, 'planner_start')
  } else {
    session = await updateProblem(existing, problem, attribution)
  }

  if (isEmptiedByRedaction(problem, redactFreeText(problem))) {
    session = await setSensitive(session, true)
    return { kind: 'json', status: 200, body: toPublicState(session), cookie }
  }

  session = await setSensitive(session, false)
  return continueAfterAnswers(session, cookie)
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
  if (!name || name.length > 80) throw new PlannerError('Enter your name.', 400, 'invalid')
  if (!email || email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new PlannerError('Enter a valid work email.', 400, 'invalid')
  }
  const session = await requireSession()
  if (!parseStoredPlan(session.fullPlan)) {
    throw new PlannerError('The plan is not ready yet.', 400, 'invalid')
  }
  const claimed = await claimSession(session, name, email)
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
  if (answers.length >= 3) {
    return { kind: 'stream', session, prompt, cookie }
  }

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
    if (next.kind === 'done') return { kind: 'stream', session, prompt, cookie }
    if (next.kind === 'question') {
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
  if (!fallback) return { kind: 'stream', session, prompt, cookie }
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
