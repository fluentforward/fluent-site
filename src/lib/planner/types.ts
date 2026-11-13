import type { MarketingAttribution } from '@/lib/marketing-attribution'

export type PlannerPhase = 'anonymous' | 'partial' | 'claimed' | 'emailed'

export type FollowUp = {
  question: string
  answer: string
}

export type PlanStep = {
  n: number
  actor: 'agent' | 'you'
  title: string
  text: string
}

export type PlanShift = {
  today: string
  withAgent: string
}

export type PlanReason = {
  title: string
  text: string
}

/** Kept for older sessions. The planner no longer shows this before the email. */
export type PartialPlan = {
  title: string
  problem: string
  steps: { n: number; text: string }[]
}

export type PlanHook = {
  thanks: string
  agent: string
  benefit: string
}

export type AwaitingDetails = PlanHook & { awaitingDetails: true }

export const LEVER_IDS = ['cash', 'capacity', 'working_capital', 'revenue'] as const
export type LeverId = (typeof LEVER_IDS)[number]
export type LeverImpact = 'high' | 'medium' | 'low' | 'none'
export type LeverPath = 'direct' | 'via_decisions'

export type LeverScore = {
  lever: LeverId
  impact: LeverImpact
  path: LeverPath
  why: string
  baseline?: string
  /** The same measure, taken again at the review. */
  check?: string
  ownerRole?: string
  reviewAt?: '30 days' | '90 days'
  /** Why the score is capped, or what would change it. */
  note?: string
}

/**
 * The first-agent plan. Static method copy (how the four levers are scored,
 * the build promise, the commercials) is not stored here.
 */
export type FullPlan = {
  title: string
  /** What changes, under the title. */
  outcome: string
  /** Their situation, in their words. */
  quote: string
  /** Two sentences: the opening of the case. */
  opportunity: string
  shifts: PlanShift[]
  reasons: PlanReason[]
  /** Which levers move, in plain language. Not a total. */
  scoreIntro: string
  steps: PlanStep[]
  tools: string[]
  human: string[]
  alsoGet: string[]
  /** What the fixed 10-day build covers. */
  includes: string[]
  /** The day-10 line on the timeline. */
  firstRun: string
  levers: LeverScore[]
  betterFirst: string | null
}

export type PlannerAttribution = MarketingAttribution & {
  variant?: string
}

export const PRICE_LINE =
  'Fixed price to build, monthly per agent with Agent Care. We confirm on the call.'

export const FEASIBILITY_LINE =
  'We will confirm on the call that this is buildable in 10 working days.'

export const SENSITIVE_MESSAGE =
  'Please do not include personal, client or confidential data. Describe the process, not the people, and try again.'

export const SCRIPTED_REFUSAL =
  'We cannot turn that into a first-agent plan from what was sent. Describe a work process, or book a scoping call and we will tell you straight if an agent is the right answer.'

export const PLANNER_COOKIE = 'ff_planner'
export const PLANNER_COOKIE_MAX_AGE = 14 * 24 * 60 * 60

export const FALLBACK_QUESTIONS = [
  'Which tools or systems does this work use today?',
  'How often does this happen?',
  'Who does this work now?',
  'How long does it take each time?',
] as const
