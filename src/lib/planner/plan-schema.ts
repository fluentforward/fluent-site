import { z } from 'zod'

import type { FullPlan, PartialPlan } from '@/lib/planner/types'

const stepSchema = z.object({
  n: z.number().int().min(1).max(6),
  actor: z.enum(['agent', 'you']),
  title: z.string().min(2).max(60),
  text: z.string().min(3).max(320),
})

const shiftSchema = z.object({
  today: z.string().min(8).max(200),
  withAgent: z.string().min(8).max(200),
})

const reasonSchema = z.object({
  title: z.string().min(3).max(70),
  text: z.string().min(8).max(220),
})

const impactSchema = z.enum(['high', 'medium', 'low', 'none'])
const pathSchema = z.enum(['direct', 'via_decisions'])
const leverIdSchema = z.enum(['cash', 'capacity', 'working_capital', 'revenue'])

const leverSchema = z.object({
  lever: leverIdSchema,
  impact: impactSchema,
  path: pathSchema,
  why: z.string().min(3).max(320),
  baseline: z.string().max(180).optional(),
  check: z.string().max(180).optional(),
  ownerRole: z.string().max(160).optional(),
  reviewAt: z.enum(['30 days', '90 days']).optional(),
  note: z.string().max(260).optional(),
})

export const fullPlanSchema = z.object({
  title: z.string().min(3).max(120),
  outcome: z.string().min(12).max(320),
  quote: z.string().min(12).max(400),
  opportunity: z.string().min(12).max(400),
  shifts: z.array(shiftSchema).min(3).max(5),
  reasons: z.array(reasonSchema).min(2).max(3),
  scoreIntro: z.string().min(12).max(320),
  steps: z.array(stepSchema).min(3).max(6),
  tools: z.array(z.string().min(1).max(80)).min(1).max(6),
  human: z.array(z.string().min(1).max(200)).min(1).max(4),
  alsoGet: z.array(z.string().min(8).max(180)).min(1).max(3),
  includes: z.array(z.string().min(3).max(120)).min(3).max(6),
  firstRun: z.string().min(8).max(180),
  levers: z.array(leverSchema).length(4),
  betterFirst: z.string().max(280).nullable(),
})

const looseLeverSchema = z.object({
  lever: z.string().max(40).nullable(),
  impact: z.string().max(20).nullable(),
  path: z.string().max(20).nullable(),
  why: z.string().max(500).nullable(),
  baseline: z.string().max(300).nullable(),
  check: z.string().max(300).nullable(),
  ownerRole: z.string().max(200).nullable(),
  reviewAt: z.string().max(20).nullable(),
  note: z.string().max(400).nullable(),
})

const looseStepSchema = z.object({
  n: z.number().int().nullable(),
  actor: z.string().max(20).nullable(),
  title: z.string().max(80).nullable(),
  text: z.string().max(500).nullable(),
})

/** What the model returns. A refusal leaves the plan fields empty. Max lengths are loose so a long draft is trimmed, not rejected. */
export const planResultSchema = z.object({
  refusal: z.string().max(400).nullable(),
  title: z.string().max(200).nullable(),
  outcome: z.string().max(500).nullable(),
  quote: z.string().max(600).nullable(),
  opportunity: z.string().max(400).nullable(),
  shifts: z
    .array(z.object({ today: z.string().max(400).nullable(), withAgent: z.string().max(400).nullable() }))
    .max(6)
    .nullable(),
  reasons: z
    .array(z.object({ title: z.string().max(120).nullable(), text: z.string().max(400).nullable() }))
    .max(4)
    .nullable(),
  scoreIntro: z.string().max(500).nullable(),
  steps: z.array(looseStepSchema).max(6).nullable(),
  tools: z.array(z.string().max(80)).max(6).nullable(),
  human: z.array(z.string().max(300)).max(4).nullable(),
  alsoGet: z.array(z.string().max(300)).max(3).nullable(),
  includes: z.array(z.string().max(200)).max(6).nullable(),
  firstRun: z.string().max(200).nullable(),
  levers: z.array(looseLeverSchema).max(4).nullable(),
  betterFirst: z.string().max(400).nullable(),
})

export const hookSchema = z.object({
  thanks: z.string().min(8).max(400),
  agent: z.string().min(12).max(500),
  benefit: z.string().min(12).max(500),
})

export const followUpSchema = z.object({
  done: z.boolean(),
  sensitive: z.boolean(),
  refusal: z.string().max(400).nullable(),
  question: z.string().max(280).nullable(),
})

export type PlanResult = z.infer<typeof planResultSchema>
export type FollowUpResult = z.infer<typeof followUpSchema>

export function toPartialPlan(plan: FullPlan): PartialPlan {
  return {
    title: plan.title,
    problem: plan.quote,
    steps: plan.steps.slice(0, 2).map((step, index) => ({ n: index + 1, text: step.text })),
  }
}

export function parseStoredPlan(value: unknown): FullPlan | null {
  const parsed = fullPlanSchema.safeParse(value)
  return parsed.success ? parsed.data : null
}

/** Older one-page plans, so a plan already sent still opens. New plans are not stored in this shape. */
export function adaptLegacyPlan(value: unknown): FullPlan | null {
  if (!value || typeof value !== 'object') return null
  const record = value as Record<string, unknown>
  if (typeof record.outcome === 'string' || typeof record.problem !== 'string' || typeof record.title !== 'string') return null
  const problem = record.problem.trim()
  const steps: FullPlan['steps'] = Array.isArray(record.steps)
    ? record.steps.flatMap((step, index) => {
        if (!step || typeof step !== 'object') return []
        const text = String((step as { text?: unknown }).text || '').trim()
        if (text.length < 8) return []
        const words = text.split(/\s+/).slice(0, 4).join(' ')
        return [{ n: index + 1, actor: 'agent' as const, title: words.slice(0, 60), text: text.slice(0, 320) }]
      })
    : []
  if (steps.length) steps[steps.length - 1] = { ...steps[steps.length - 1], actor: 'you' }
  const includes = String(record.tenDayIncludes || '')
    .split(/[.;]/)
    .map((item) => item.trim())
    .filter((item) => item.length >= 3)
  while (includes.length < 3) includes.push('A human approval step')
  const human = Array.isArray(record.human) ? record.human.map((item) => String(item)).filter(Boolean) : []
  const candidate = {
    title: record.title,
    outcome: problem.slice(0, 320),
    quote: problem.slice(0, 400),
    opportunity: `${record.title}. A person still reviews the result.`,
    shifts: steps.slice(0, 4).map((step) => ({
      today: 'The team does this by hand today.',
      withAgent: step.text.slice(0, 200),
    })),
    reasons: [
      { title: 'One job', text: 'The plan is for a single process, not a general assistant.' },
      { title: 'A person still decides', text: human[0] || 'Nothing goes out until someone approves it.' },
    ],
    scoreIntro: typeof record.proofPlan === 'string' && record.proofPlan.length >= 12
      ? record.proofPlan.slice(0, 320)
      : 'Each lever is scored on its own, from what was described.',
    steps,
    tools: Array.isArray(record.tools) ? record.tools.map((item) => String(item)).filter(Boolean) : ['The systems named'],
    human: human.length ? human : ['Approving the result before it goes out.'],
    alsoGet: ['A written record of what ran, and who approved it.'],
    includes: includes.slice(0, 6),
    firstRun: 'First run alongside your current process',
    levers: record.levers,
    betterFirst: typeof record.betterFirst === 'string' ? record.betterFirst : null,
  }
  const parsed = fullPlanSchema.safeParse(candidate)
  return parsed.success ? parsed.data : null
}

export function parseStoredPartial(value: unknown): PartialPlan | null {
  const parsed = z
    .object({
      title: z.string(),
      problem: z.string(),
      steps: z.array(z.object({ n: z.number(), text: z.string() })).max(2),
    })
    .safeParse(value)
  return parsed.success ? parsed.data : null
}
