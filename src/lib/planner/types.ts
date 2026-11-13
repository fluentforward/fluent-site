import type { MarketingAttribution } from '@/lib/marketing-attribution'

export type PlannerPhase = 'anonymous' | 'partial' | 'claimed' | 'emailed'

export type FollowUp = {
  question: string
  answer: string
}

export type PlanStep = {
  n: number
  text: string
}

/** Shown before the visitor gives an email. Job and first steps only. */
export type PartialPlan = {
  title: string
  problem: string
  steps: PlanStep[]
}

/** The one-page plan. Tools, human steps and the estimate stay here until claim. */
export type FullPlan = {
  title: string
  problem: string
  steps: PlanStep[]
  tools: string[]
  human: string[]
  timeSaved: string
  tenDayIncludes: string
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
