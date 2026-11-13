import { fullPlanSchema } from '@/lib/planner/plan-schema'
import { SCRIPTED_REFUSAL, type FullPlan } from '@/lib/planner/types'
import type { PlanResult } from '@/lib/planner/plan-schema'

const CURRENCY =
  /£|\$|€|\b\d[\d,]*(?:\.\d+)?\s*(?:pounds?|gbp|usd|dollars?|euros?)\b|\b(?:gbp|usd|eur)\s*\d/i

const PRICE =
  /\b(?:day[\s-]?rates?|per hour|hourly rate|fixed at|costs?\s+(?:about|around|roughly)?\s*\d)/i

const GUARANTEE =
  /\b(?:guaranteed|we guarantee|we promise|definitely (?:live|buildable|ready|possible)|certain to work)\b/i

export function findGuardrailViolation(text: string): string | null {
  if (CURRENCY.test(text)) return 'currency'
  if (PRICE.test(text)) return 'price'
  if (GUARANTEE.test(text)) return 'guarantee'
  return null
}

export function planViolatesGuardrails(plan: FullPlan): string | null {
  const blob = [
    plan.title,
    plan.problem,
    plan.timeSaved,
    plan.tenDayIncludes,
    ...plan.steps.map((step) => step.text),
    ...plan.tools,
    ...plan.human,
  ].join('\n')
  return findGuardrailViolation(blob)
}

export function interpretPlanResult(
  raw: PlanResult,
): { kind: 'plan'; plan: FullPlan } | { kind: 'refusal'; message: string } {
  const refusal = raw.refusal?.trim()
  if (refusal) return { kind: 'refusal', message: refusal.slice(0, 400) }

  const candidate = {
    title: raw.title,
    problem: raw.problem,
    steps: (raw.steps ?? [])
      .map((step, index) => ({
        n: index + 1,
        text: (step.text ?? '').trim(),
      }))
      .filter((step) => step.text.length >= 3),
    tools: (raw.tools ?? []).map((item) => item.trim()).filter(Boolean),
    human: (raw.human ?? []).map((item) => item.trim()).filter(Boolean),
    timeSaved: raw.timeSaved?.trim() ?? '',
    tenDayIncludes: raw.tenDayIncludes?.trim() ?? '',
  }

  const parsed = fullPlanSchema.safeParse(candidate)
  if (!parsed.success) return { kind: 'refusal', message: SCRIPTED_REFUSAL }

  const violation = planViolatesGuardrails(parsed.data)
  if (violation) return { kind: 'refusal', message: SCRIPTED_REFUSAL }

  return { kind: 'plan', plan: parsed.data }
}
