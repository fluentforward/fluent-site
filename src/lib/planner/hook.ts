import { askHook, planModelId } from '@/lib/planner/anthropic'
import { findGuardrailViolation } from '@/lib/planner/guardrails'
import { dataBlock, HOOK_PROMPT_VERSION, HOOK_SYSTEM, promptHash } from '@/lib/planner/prompts'
import { asFollowUps, logRun, markAwaitingDetails, type PlannerSessionRow } from '@/lib/planner/store'
import type { PlanHook } from '@/lib/planner/types'

export function readPlanHook(partial: unknown): PlanHook | null {
  if (!partial || typeof partial !== 'object') return null
  const record = partial as Record<string, unknown>
  if (record.awaitingDetails !== true) return null
  const thanks = tidy(record.thanks)
  const agent = tidy(record.agent)
  const benefit = tidy(record.benefit)
  if (thanks.length < 8 || agent.length < 12 || benefit.length < 12) return null
  return { thanks, agent, benefit }
}

export function fallbackHook(problem: string): PlanHook {
  const work = tidy(problem)
  const short = work.length > 140 ? `${work.slice(0, 137).trim()}…` : work
  return {
    thanks: 'Thank you for walking through that.',
    agent: short
      ? `The agent should take on this work: ${short}`
      : 'The agent should take on the process you described.',
    benefit: 'The plan will show what it does, what stays with your team, and the result worth measuring.',
  }
}

export async function withHook(session: PlannerSessionRow): Promise<PlannerSessionRow> {
  if (readPlanHook(session.partialPlan)) return session
  return markAwaitingDetails(session, await buildHook(session))
}

/** The gate line, without saving it. Safe to run beside plan generation. */
export function prepareHook(session: PlannerSessionRow): Promise<PlanHook> {
  return readPlanHook(session.partialPlan) ? Promise.resolve(readPlanHook(session.partialPlan) as PlanHook) : buildHook(session)
}

const LIMITS = { thanks: 22, agent: 28, benefit: 32 } as const

export function shapeHook(raw: { thanks?: unknown; agent?: unknown; benefit?: unknown }): PlanHook | null {
  const hook = {
    thanks: firstSentence(tidy(raw.thanks)),
    agent: firstSentence(tidy(raw.agent)),
    benefit: firstSentence(tidy(raw.benefit)),
  }
  if (hook.thanks.length < 8 || hook.agent.length < 12 || hook.benefit.length < 12) return null
  if ([hook.thanks, hook.agent, hook.benefit].some((text) => findGuardrailViolation(text))) return null
  if (words(hook.thanks) > LIMITS.thanks || words(hook.agent) > LIMITS.agent || words(hook.benefit) > LIMITS.benefit) {
    return null
  }
  return hook
}

async function buildHook(session: PlannerSessionRow): Promise<PlanHook> {
  const prompt = dataBlock(session.problem, asFollowUps(session))
  const first = await draftHook(session, prompt)
  if (first) return first
  const second = await draftHook(
    session,
    `${prompt}\n\nRewrite the three sentences shorter. thanks under 16 words, agent under 22, benefit under 24. One sentence each. Do not write "saved".`,
  )
  return second ?? fallbackHook(session.problem)
}

async function draftHook(session: PlannerSessionRow, prompt: string): Promise<PlanHook | null> {
  try {
    const result = await askHook(prompt)
    const hook = shapeHook(result.object)
    await logRun({
      sessionId: session.id,
      slot: 'hook',
      model: result.model || planModelId(),
      promptVersion: HOOK_PROMPT_VERSION,
      promptHash: promptHash(HOOK_SYSTEM),
      input: { prompt },
      output: result.object,
      inputTokens: result.usage.inputTokens,
      outputTokens: result.usage.outputTokens,
      latencyMs: result.latencyMs,
      degraded: !hook,
    }).catch(() => undefined)
    return hook
  } catch (error) {
    console.error('[planner] hook', session.id, error)
    return null
  }
}

function tidy(value: unknown): string {
  return typeof value === 'string'
    ? value
        .replace(/[—–]/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/\s+,/g, ',')
        .trim()
    : ''
}

function firstSentence(value: string): string {
  const match = value.match(/^[\s\S]{8,220}?[.!](?=\s|$)/)
  return (match ? match[0] : value).trim()
}

function words(value: string): number {
  return value.split(/\s+/).filter(Boolean).length
}
