import { IMPACT_LABEL, LEVER_LABEL } from '@/lib/planner/levers'
import type { FullPlan, LeverId, LeverImpact, LeverScore } from '@/lib/planner/types'

export const LEVER_NO: Record<LeverId, string> = {
  cash: '01',
  capacity: '02',
  working_capital: '03',
  revenue: '04',
}

const TIE: Record<LeverId, number> = {
  working_capital: 0,
  capacity: 1,
  revenue: 2,
  cash: 3,
}

const RANK: Record<LeverImpact, number> = { high: 0, medium: 1, low: 2, none: 3 }

const NONE_GLANCE: Record<LeverId, string> = {
  cash: 'No outside help described',
  capacity: 'No growth or hire described',
  working_capital: 'Not a billing process',
  revenue: 'No growth held back by headcount',
}

const COUNT = ['none', 'one', 'two', 'three', 'four']

export const BUILD_LINE = 'Live in 10 working days*'

export const PLAN_FOOTNOTE =
  'Live in 10 working days once we have access to your systems and the data the agent needs, and scope is agreed in writing. Impact scores are based only on what you told us in the Agent Planner. They are a starting point to test, not a guaranteed saving.'

export const SCORE_INTRO =
  '“Hours saved” is hard to pin down. We look at the work the agent takes on and where that change shows up for your team, and we rate each area separately against what you told us.'

export const WONT_DO =
  'We won’t add the areas into a single “total saving”. We won’t multiply hours by an hourly rate, and we won’t quote an ROI multiple. Every rating comes with a baseline you capture now and a date to check it, so the result is measured, not promised.'

export const COMMERCIALS = [
  { title: 'Fixed price to build', body: 'No day rates and no open-ended scope.' },
  {
    title: 'Monthly Agent Care',
    body: 'Monitoring, fixes and rule changes as the work evolves.',
  },
] as const

export const BOOK_LINE =
  'We’ll confirm the build fits 10 working days, check access, and agree the baselines. You’ll leave with a fixed price.'

export const LEVER_GUIDE: { id: LeverId; body: string; shows: string }[] = [
  {
    id: 'cash',
    body: 'The agent takes on work you pay outside help for today, such as temps, overtime, contractors or outsourcing.',
    shows: 'Shows up as: less outside help booked for this work.',
  },
  {
    id: 'capacity',
    body: 'The agent takes on work your team does today, so you can grow without a planned hire, or leave a role unfilled when someone leaves.',
    shows: 'Shows up as: a hire you don’t need to make, or a vacancy you don’t backfill.',
  },
  {
    id: 'working_capital',
    body: 'The agent takes on billing, collections or payment work, so invoices go out and get paid sooner.',
    shows: 'Shows up as: fewer debtor days. This is a one-off change in timing, not an ongoing saving.',
  },
  {
    id: 'revenue',
    body: 'The time the agent frees goes into work your clients pay for, so you deliver more with the same people.',
    shows: 'Shows up as: more client work from the same team.',
  },
]

export const IMPACT_GUIDE: { impact: LeverImpact; body: string }[] = [
  { impact: 'high', body: 'A clear time sink or outside cost you described' },
  { impact: 'medium', body: 'A real effect, capped by what we know' },
  { impact: 'low', body: 'Possible, but not why you’d build it' },
  { impact: 'none', body: 'This agent won’t change this area' },
]

export function planDate(date = new Date()): string {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

export function preparedFor(name: string): string {
  const first = name.trim().split(/\s+/)[0]
  return first || 'you'
}

export function rankedLevers(levers: LeverScore[]): LeverScore[] {
  return [...levers].sort((a, b) => RANK[a.impact] - RANK[b.impact] || TIE[a.lever] - TIE[b.lever])
}

export function pipCount(impact: LeverImpact): number {
  if (impact === 'high') return 3
  if (impact === 'medium') return 2
  if (impact === 'low') return 1
  return 0
}

export function glanceCaption(lever: LeverScore): string {
  if (lever.impact === 'none') return NONE_GLANCE[lever.lever]
  if (lever.path === 'via_decisions') return 'Via decisions · a person acts'
  if (lever.lever === 'revenue') return 'Direct · depends on how freed time is used'
  return 'Direct · agent does the work'
}

export function headlineLines(text: string): [string, string | null] {
  const parts = text
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
  if (parts.length < 2) return [text, null]
  return [parts[0], parts.slice(1).join(' ')]
}

export function proofRows(plan: FullPlan): LeverScore[] {
  return rankedLevers(plan.levers).filter((lever) => lever.impact !== 'none')
}

export function proofHeading(rows: LeverScore[]): { title: string; rest: string } {
  if (rows.length === 0) {
    return {
      title: 'There is no number worth capturing yet.',
      rest: 'A stronger first agent has a cost or a time sink you can measure.',
    }
  }
  const word = COUNT[rows.length] || String(rows.length)
  const noun = rows.length === 1 ? 'number' : 'numbers'
  const reviews = new Set(rows.map((row) => row.reviewAt).filter(Boolean))
  const rest =
    reviews.size === 1
      ? `Check ${rows.length === 1 ? 'it' : 'them'} again in ${[...reviews][0]}.`
      : 'Check each one on its review date.'
  return { title: `Capture ${word} ${noun} now.`, rest }
}

export function firstReviewLabel(plan: FullPlan): string {
  const top = rankedLevers(plan.levers).find((lever) => lever.impact !== 'none')
  return `${top?.reviewAt || '30 days'} after go-live`
}

export function stepIntro(plan: FullPlan): string {
  const total = plan.steps.length
  const yours = plan.steps.filter((step) => step.actor === 'you').length
  const agent = total - yours
  const run = `${total} steps. ${agent} ${agent === 1 ? 'is' : 'are'} handled by the agent.`
  if (yours === 1) return `${run} The one that matters is yours.`
  if (yours > 1) return `${run} You keep the ${yours} that need a decision.`
  return run
}

export function ownerShort(role: string | undefined): string {
  if (!role) return 'Your team'
  const cut = role.split(/[,.]| must | approves | moves | schedules /i)[0]?.trim()
  return cut || role
}

export { IMPACT_LABEL, LEVER_LABEL }
