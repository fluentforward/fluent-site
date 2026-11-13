import {
  LEVER_IDS,
  type FullPlan,
  type LeverId,
  type LeverImpact,
  type LeverPath,
  type LeverScore,
} from '@/lib/planner/types'

const RANK: Record<LeverImpact, number> = { none: 0, low: 1, medium: 2, high: 3 }

const TIME_OR_COST =
  /\b(hours?|days?|weeks?|temps?|temporary|overtime|contractors?|outsourc\w*|agency staff|time sink|takes?\b|spend(?:s|ing)?|each month|a month|per month|manual)\b/i

const GROWTH_OR_HIRE =
  /\b(hires?|hiring|headcount|vacanc(?:y|ies)|recruit\w*|without hiring|another (?:person|hire)|growth|quote more|more (?:jobs|quotes|tenders|bids|work|clients|customers)|held back|double|bottleneck|take on more|onboard more|limits how many)\b/i

const BILLING =
  /\b(billing|collections?|debtors?|debtor days|aged (?:debt|receivables)|payment runs?|cash collection|chasing invoices|get paid)\b/i

const OPERATIONAL = /\b(take-?off|invoice match|accounts payable|cost plans?)\b/i

const INSIGHTS = /\b(insights?|briefings?|dashboards?|management reports?|can(?:not|'t) see what)\b/i

const SPECIFIC =
  /\b(xero|sage|salesforce|hubspot|crm|spreadsheet|invoice|take-?off|cost plan|accounts payable)\b/i

const NONE_WHY: Record<LeverId, string> = {
  cash: 'No outside cost mentioned.',
  capacity: 'No growth or unfilled role mentioned.',
  working_capital: 'Not a billing or collections process.',
  revenue: 'Nothing said that growth is held back by headcount.',
}

export const LEVER_LABEL: Record<LeverId, string> = {
  cash: 'Cash',
  capacity: 'Capacity',
  working_capital: 'Working capital',
  revenue: 'Revenue',
}

export const IMPACT_LABEL: Record<LeverImpact, string> = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  none: 'None',
}

export const PATH_LABEL: Record<LeverPath, string> = {
  direct: 'direct',
  via_decisions: 'via decisions',
}

const BETTER_FIRST =
  'Name one process, and the time or cost it takes. That is a better first agent than a general brief.'

export function applyLeverRules(input: {
  levers: LeverScore[]
  source: string
  title: string
  problem: string
  betterFirst?: string | null
}): { levers: LeverScore[]; betterFirst: string | null } {
  const blob = `${input.title}\n${input.problem}\n${input.source}`
  const reporting = isReporting(blob)
  const growth = GROWTH_OR_HIRE.test(blob)
  const timeOrCost = TIME_OR_COST.test(blob)
  const billing = BILLING.test(blob)
  const specific = timeOrCost || SPECIFIC.test(blob) || reporting

  const levers = LEVER_IDS.map((id) => {
    const found = input.levers.find((item) => item.lever === id)
    let impact = found?.impact ?? 'none'
    let path: LeverPath = found?.path === 'via_decisions' ? 'via_decisions' : 'direct'
    let why = clean(found?.why)
    if (why.length < 3) why = NONE_WHY[id]

    if (reporting) {
      path = 'via_decisions'
      impact = cap(impact, 'medium')
    }
    if (id === 'working_capital' && !billing) {
      impact = 'none'
      why = NONE_WHY.working_capital
    }
    if (id === 'capacity' && impact === 'high' && !growth) {
      impact = timeOrCost ? 'medium' : 'low'
    }
    if (id === 'revenue' && !growth) impact = cap(impact, 'low')
    if (impact === 'high' && !timeOrCost) impact = 'medium'
    if (!specific) impact = cap(impact, 'low')
    const note = clean(found?.note) || undefined
    if (impact === 'none') {
      return {
        lever: id,
        impact,
        path,
        why: id === 'working_capital' && !billing ? why : clean(found?.why) || NONE_WHY[id],
        note,
      }
    }

    return {
      lever: id,
      impact,
      path,
      why,
      baseline: clean(found?.baseline) || undefined,
      check: clean(found?.check) || undefined,
      ownerRole: clean(found?.ownerRole) || undefined,
      reviewAt: path === 'direct' ? ('30 days' as const) : ('90 days' as const),
      note,
    }
  })

  const weak = levers.every((item) => item.impact === 'low' || item.impact === 'none')
  return {
    levers,
    betterFirst: weak ? clean(input.betterFirst) || BETTER_FIRST : null,
  }
}

export function impactLine(levers: LeverScore[]): string {
  const shown = levers.filter((item) => item.impact === 'high' || item.impact === 'medium')
  if (shown.length === 0) return 'Likely impact: low across these levers.'
  const parts = shown.map(
    (item) => `${LEVER_LABEL[item.lever]} (${IMPACT_LABEL[item.impact]}, ${PATH_LABEL[item.path]})`,
  )
  return `Likely impact: ${parts.join(', ')}.`
}

export function shownLevers(plan: FullPlan): LeverScore[] {
  return plan.levers.filter((item) => item.impact === 'high' || item.impact === 'medium')
}

function isReporting(blob: string): boolean {
  if (OPERATIONAL.test(blob)) return false
  return INSIGHTS.test(blob)
}

function cap(impact: LeverImpact, max: LeverImpact): LeverImpact {
  return RANK[impact] > RANK[max] ? max : impact
}

function clean(value: string | null | undefined): string {
  return (value ?? '').replace(/\s+/g, ' ').trim()
}
