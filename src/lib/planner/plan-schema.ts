import { z } from 'zod'

import type { FullPlan, PartialPlan } from '@/lib/planner/types'

const stepSchema = z.object({
  n: z.number().int().min(1).max(6),
  text: z.string().min(3).max(400),
})

export const fullPlanSchema = z.object({
  title: z.string().min(3).max(120),
  problem: z.string().min(3).max(600),
  steps: z.array(stepSchema).min(3).max(6),
  tools: z.array(z.string().min(1).max(80)).min(1).max(6),
  human: z.array(z.string().min(1).max(240)).min(1).max(4),
  timeSaved: z.string().min(3).max(400),
  tenDayIncludes: z.string().min(3).max(500),
})

/** What the model returns. A refusal leaves the plan fields empty. */
export const planResultSchema = z.object({
  refusal: z.string().max(400).nullable(),
  title: z.string().max(120).nullable(),
  problem: z.string().max(600).nullable(),
  steps: z.array(z.object({ n: z.number().int().nullable(), text: z.string().max(400).nullable() })).max(6).nullable(),
  tools: z.array(z.string().max(80)).max(6).nullable(),
  human: z.array(z.string().max(240)).max(4).nullable(),
  timeSaved: z.string().max(400).nullable(),
  tenDayIncludes: z.string().max(500).nullable(),
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
    problem: plan.problem,
    steps: plan.steps.slice(0, 2).map((step, index) => ({ n: index + 1, text: step.text })),
  }
}

export function parseStoredPlan(value: unknown): FullPlan | null {
  const parsed = fullPlanSchema.safeParse(value)
  return parsed.success ? parsed.data : null
}

export function parseStoredPartial(value: unknown): PartialPlan | null {
  const parsed = z
    .object({
      title: z.string(),
      problem: z.string(),
      steps: z.array(stepSchema).max(2),
    })
    .safeParse(value)
  return parsed.success ? parsed.data : null
}
