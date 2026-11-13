import { applyLeverRules } from '@/lib/planner/levers'
import { fullPlanSchema } from '@/lib/planner/plan-schema'
import { SCRIPTED_REFUSAL, type FullPlan, type LeverId, type LeverImpact, type LeverPath, type LeverScore } from '@/lib/planner/types'
import type { PlanResult } from '@/lib/planner/plan-schema'

const CURRENCY =
  /£|\$|€|\b\d[\d,]*(?:\.\d+)?\s*(?:pounds?|gbp|usd|dollars?|euros?)\b|\b(?:gbp|usd|eur)\s*\d/i

const PRICE =
  /\b(?:day[\s-]?rates?|hourly rates?)\b|\bper hour\b|\bfixed at\s+\d|\bcosts?\s+(?:about|around|roughly\s+)?\d{2,}(?!\s+times\b)/i

const GUARANTEE =
  /\b(?:guaranteed|we guarantee|we promise|definitely (?:live|buildable|ready|possible)|certain to work)\b/i

const SAVINGS =
  /\b(?:hours?|days?)\s+saved\b|\btime saved\b|\bsave[sd]?\s+\d+\s+hours\b|\b\d+\s*[x×]\b|\btimes\s+(?:a\s+)?(?:day\s+)?rate\b/i

export function findGuardrailViolation(text: string): string | null {
  if (CURRENCY.test(text)) return 'currency'
  if (PRICE.test(text)) return 'price'
  if (GUARANTEE.test(text)) return 'guarantee'
  if (SAVINGS.test(text)) return 'savings'
  return null
}

export function planViolatesGuardrails(plan: FullPlan): string | null {
  const blob = [
    plan.title,
    plan.outcome,
    plan.quote,
    plan.opportunity,
    plan.scoreIntro,
    plan.firstRun,
    plan.betterFirst ?? '',
    ...plan.shifts.flatMap((shift) => [shift.today, shift.withAgent]),
    ...plan.reasons.flatMap((reason) => [reason.title, reason.text]),
    ...plan.steps.flatMap((step) => [step.title, step.text]),
    ...plan.tools,
    ...plan.human,
    ...plan.alsoGet,
    ...plan.includes,
    ...plan.levers.flatMap((lever) => [lever.why, lever.baseline ?? '', lever.check ?? '', lever.ownerRole ?? '', lever.note ?? '']),
  ].join('\n')
  return findGuardrailViolation(blob)
}

export function interpretPlanResult(
  raw: PlanResult,
  source: string,
): { kind: 'plan'; plan: FullPlan } | { kind: 'refusal'; message: string } {
  const refusal = raw.refusal?.trim()
  const hasBody = Boolean(raw.title?.trim() && (raw.steps?.length || raw.quote?.trim()))
  if (refusal && !hasBody) return { kind: 'refusal', message: refusal.slice(0, 400) }

  const title = scrub(clip(raw.title, 120)) || 'First agent'
  const quote = scrub(clip(raw.quote, 400))
  const outcome = scrub(clip(raw.outcome, 320)) || quote
  const scored = applyLeverRules({
    levers: looseLevers(raw.levers),
    source,
    title,
    problem: `${quote}\n${outcome}\n${source}`,
    betterFirst: raw.betterFirst,
  })

  const steps = (raw.steps ?? [])
    .map((step) => {
      const text = scrub(clip(step.text, 320))
      const titleText = scrub(clip(step.title, 60)) || text.split(/\s+/).slice(0, 4).join(' ')
      return {
        actor: step.actor === 'you' || step.actor === 'person' || step.actor === 'human' ? ('you' as const) : ('agent' as const),
        title: titleText,
        text,
      }
    })
    .filter((step) => step.text.length >= 8 && step.title.length >= 2)
    .slice(0, 6)
    .map((step, index) => ({ n: index + 1, ...step }))

  const candidate = padPlan({
    title,
    outcome: outcome || title,
    quote: quote || outcome || title,
    opportunity: scrub(clip(raw.opportunity, 400)) || title,
    shifts: (raw.shifts ?? [])
      .map((shift) => ({ today: scrub(clip(shift.today, 200)), withAgent: scrub(clip(shift.withAgent, 200)) }))
      .filter((shift) => shift.today.length >= 8 && shift.withAgent.length >= 8)
      .slice(0, 5),
    reasons: (raw.reasons ?? [])
      .map((reason) => ({ title: scrub(clip(reason.title, 70)), text: scrub(clip(reason.text, 220)) }))
      .filter((reason) => reason.title.length >= 3 && reason.text.length >= 8)
      .slice(0, 3),
    scoreIntro: scrub(clip(raw.scoreIntro, 320)) || 'Each lever is scored on its own, from what you described.',
    steps,
    tools: (raw.tools ?? []).map((item) => scrub(clip(item, 80))).filter((item) => item.length > 0).slice(0, 6),
    human: (raw.human ?? []).map((item) => scrub(clip(item, 200))).filter((item) => item.length > 0).slice(0, 4),
    alsoGet: (raw.alsoGet ?? []).map((item) => scrub(clip(item, 180))).filter((item) => item.length >= 8).slice(0, 3),
    includes: (raw.includes ?? [])
      .map((item) => scrub(clip(item, 120)).replace(/\.$/, ''))
      .filter((item) => item.length >= 3)
      .slice(0, 6),
    firstRun: scrub(clip(raw.firstRun, 180)) || 'First run alongside your current process',
    levers: scored.levers,
    betterFirst: scored.betterFirst,
  })

  const parsed = fullPlanSchema.safeParse(candidate)
  if (!parsed.success) {
    console.error('[planner] plan shape', parsed.error.issues.map((issue) => issue.path.join('.')))
    return { kind: 'refusal', message: SCRIPTED_REFUSAL }
  }

  return { kind: 'plan', plan: parsed.data }
}

/** Drop a sentence that trips a guardrail. The rest of the plan still stands. */
function scrub(value: string): string {
  const sentences = value.split(/(?<=[.!?])\s+/).filter((sentence) => !findGuardrailViolation(sentence))
  return sentences.join(' ').trim()
}

function padPlan<T extends {
  shifts: { today: string; withAgent: string }[]
  reasons: { title: string; text: string }[]
  steps: { n: number; actor: 'agent' | 'you'; title: string; text: string }[]
  includes: string[]
  alsoGet: string[]
  human: string[]
  tools: string[]
  outcome: string
  quote: string
  title: string
}>(plan: T): T {
  const stepText = plan.steps.map((step) => step.text)
  while (plan.shifts.length < 3) {
    const withAgent = stepText[plan.shifts.length] || 'The agent does the repeatable steps. A person still approves the result.'
    plan.shifts.push({ today: 'The team does this by hand today.', withAgent: withAgent.slice(0, 200) })
  }
  while (plan.reasons.length < 2) {
    plan.reasons.push({
      title: 'A person stays in control',
      text: 'Nothing is finished until someone on the team approves it.',
    })
  }
  while (plan.steps.length < 3) {
    const n = plan.steps.length + 1
    plan.steps.push({
      n,
      actor: n === 3 ? 'you' : 'agent',
      title: n === 3 ? 'Review and approve' : 'Do the legwork',
      text:
        n === 3
          ? 'A person checks the result before anything goes out.'
          : 'The agent carries out the repeatable part of the process you described.',
    })
  }
  plan.steps = plan.steps.map((step, index) => ({ ...step, n: index + 1 }))
  while (plan.includes.length < 3) plan.includes.push('A human approval step')
  if (!plan.alsoGet.length) plan.alsoGet.push('A written record of what ran, and who approved it.')
  if (!plan.human.length) plan.human.push('Approving the result before it goes out.')
  if (!plan.tools.length) plan.tools.push('The systems you named')
  if (plan.outcome.length < 12) plan.outcome = plan.quote.length >= 12 ? plan.quote : `${plan.title} takes the repeatable work. A person still approves it.`
  if (plan.quote.length < 12) plan.quote = plan.outcome
  return plan
}

function clip(value: string | null | undefined, max: number): string {
  const tidy = (value ?? '').replace(/\s+/g, ' ').replace(/\s*—\s*/g, ', ').trim()
  if (tidy.length <= max) return tidy
  const slice = tidy.slice(0, max)
  const sentence = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('! '), slice.lastIndexOf('? '))
  if (sentence > 40) return slice.slice(0, sentence + 1)
  const word = slice.lastIndexOf(' ')
  return (word > 24 ? slice.slice(0, word) : slice).replace(/[,:;]$/, '')
}

function looseLevers(value: PlanResult['levers']): LeverScore[] {
  return (value ?? []).flatMap((item) => {
    const lever = asLeverId(item.lever)
    const impact = asImpact(item.impact)
    const path = asPath(item.path)
    if (!lever || !impact || !path) return []
    return [
      {
        lever,
        impact,
        path,
        why: item.why?.trim() || '',
        baseline: item.baseline?.trim() || undefined,
        check: item.check?.trim() || undefined,
        ownerRole: item.ownerRole?.trim() || undefined,
        note: item.note?.trim() || undefined,
      },
    ]
  })
}

function asLeverId(value: string | null): LeverId | null {
  if (value === 'cash' || value === 'capacity' || value === 'working_capital' || value === 'revenue') return value
  return null
}

function asImpact(value: string | null): LeverImpact | null {
  if (value === 'high' || value === 'medium' || value === 'low' || value === 'none') return value
  return null
}

function asPath(value: string | null): LeverPath | null {
  if (value === 'direct' || value === 'via_decisions') return value
  return null
}
