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
  cash: 'No contractor, agency or temp spend mentioned.',
  capacity: 'No growth or unfilled role mentioned.',
  working_capital: 'Not a billing or collections process.',
  revenue: 'Nothing said that growth is held back by headcount.',
}

export const LEVER_LABEL: Record<LeverId, string> = {
  cash: 'Bought-in work',
  capacity: 'Team capacity',
  working_capital: 'Billing and collections',
  revenue: 'Client work',
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

/**
 * A sentence that states a score, such as "Scored medium because…" or "Score is high".
 * "Could rescore to medium" is advice, not a claim, and does not match.
 */
const SCORE_CLAIM =
  /\b(?:scored|scores?|scoring|rated|rating)\s+(?:is\s+|as\s+|at\s+|of\s+)?(?:a\s+)?(high|medium|low|none|zero)\b|\b(high|medium|low)\s+(?:score|rating)\b/gi

/** The score levels a piece of text claims, normalised to LeverImpact. */
export function claimedScores(text: string | null | undefined): LeverImpact[] {
  const found: LeverImpact[] = []
  for (const match of (text ?? '').matchAll(SCORE_CLAIM)) {
    const level = (match[1] || match[2] || '').toLowerCase()
    found.push(level === 'zero' ? 'none' : (level as LeverImpact))
  }
  return found
}

/** Drop any sentence that claims a score other than the final one. */
export function withoutStaleScore(text: string | null | undefined, impact: LeverImpact): string {
  const value = clean(text)
  if (!value) return ''
  const sentences = value.split(/(?<=[.!?])\s+/)
  return sentences
    .filter((sentence) => claimedScores(sentence).every((level) => level === impact))
    .join(' ')
    .trim()
}

/**
 * The model writes `why` and `note` for the score it chose. The rules below can change that
 * score, so the text is reconciled with the final score: a sentence that states another score is
 * dropped, and when the rules move the score the model's note (which explains the old score) goes.
 * Also used on stored plans, so plans written before this check render consistently.
 */
export function reconcileLeverText(lever: LeverScore, modelImpact?: LeverImpact): LeverScore {
  const moved = modelImpact !== undefined && modelImpact !== lever.impact
  const why = withoutStaleScore(lever.why, lever.impact)
  const note = moved ? '' : withoutStaleScore(lever.note, lever.impact)
  const next: LeverScore = { ...lever, why: why.length >= 3 ? why : fallbackWhy(lever) }
  if (note) next.note = note
  else delete next.note
  return next
}

function fallbackWhy(lever: LeverScore): string {
  return lever.impact === 'none' ? NONE_WHY[lever.lever] : `Scored ${IMPACT_LABEL[lever.impact].toLowerCase()} from what you described.`
}

/** Lever and profit wording that buyer-facing copy no longer uses. */
export const MONEY_FRAMING = /\blevers?\b|\bprofit\b|\bmargins?\b|\b(?:moves?|moving) the money\b|\bwhere the money\b/i

const LEVER_MENTION: Record<LeverId, RegExp> = {
  cash: /\bcash\b(?!\s+(?:in|flow|sooner|comes))|\bbought[\s-]in work\b/i,
  capacity: /\bcapacity\b/i,
  working_capital: /\bworking[\s-]capital\b|\bbilling and collections\b/i,
  revenue: /\brevenue\b|\bclient work\b/i,
}

/**
 * The score intro is model prose. If it names a lever the final score puts at none, or states a
 * score that no lever has, it no longer matches the scores on the page and is replaced.
 */
export function scoreIntroFits(intro: string, levers: LeverScore[]): boolean {
  const text = clean(intro)
  if (!text) return false
  // Buyer copy talks about the job the agent takes on, not money levers (Matt, 12 Nov).
  if (MONEY_FRAMING.test(text)) return false
  for (const lever of levers) {
    if (lever.impact === 'none' && LEVER_MENTION[lever.lever].test(text)) return false
  }
  const present = new Set(levers.map((lever) => lever.impact))
  return claimedScores(text).every((level) => present.has(level))
}

export function defaultScoreIntro(levers: LeverScore[]): string {
  const ranked = [...levers].filter((lever) => lever.impact !== 'none').sort((a, b) => RANK[b.impact] - RANK[a.impact])
  const top = ranked[0]
  if (!top) return 'Each area is rated on its own, from what you described.'
  const how =
    top.path === 'direct' ? 'The agent does that work itself.' : 'The agent informs a person, who then acts.'
  return `The biggest change is in ${LEVER_LABEL[top.lever].toLowerCase()}. ${how}`
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
    const modelImpact = found?.impact ?? 'none'
    if (impact === 'none') {
      return reconcileLeverText(
        {
          lever: id,
          impact,
          path,
          why: id === 'working_capital' && !billing ? why : clean(found?.why) || NONE_WHY[id],
          note,
        },
        modelImpact,
      )
    }

    return reconcileLeverText(
      {
        lever: id,
        impact,
        path,
        why,
        baseline: clean(found?.baseline) || undefined,
        check: clean(found?.check) || undefined,
        ownerRole: clean(found?.ownerRole) || undefined,
        reviewAt: path === 'direct' ? ('30 days' as const) : ('90 days' as const),
        note,
      },
      modelImpact,
    )
  })

  const weak = levers.every((item) => item.impact === 'low' || item.impact === 'none')
  return {
    levers,
    betterFirst: weak ? clean(input.betterFirst) || BETTER_FIRST : null,
  }
}

export function impactLine(levers: LeverScore[]): string {
  const shown = levers.filter((item) => item.impact === 'high' || item.impact === 'medium')
  if (shown.length === 0) return 'Likely impact: low in every area.'
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
