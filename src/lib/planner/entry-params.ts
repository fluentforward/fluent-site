/** Lowest team-size band that still shows the scoping CTA and nurture after a plan. */
export const PLANNER_SCOPING_CTA_MIN_TEAM_SIZE = 10

export const PLANNER_TEAM_SIZE_VALUES = ['1-9', '10-49', '50-199', '200+'] as const
export type PlannerTeamSize = (typeof PLANNER_TEAM_SIZE_VALUES)[number]

const PII_QUERY_KEYS = ['name', 'email', 'company', 'meta_lead_id', 'q', 'problem'] as const
const TEAM_SIZE_QUERY_KEYS = ['size', 'team_size', 'teamSize'] as const

const META_LEAD_ID_PATTERN = /^[A-Za-z0-9]{1,64}$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type PlannerEntryFromUrl = {
  problem: string
  teamSize: PlannerTeamSize | null
  name: string
  email: string
  company: string
  metaLeadId: string
}

export function firstQueryParam(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) || ''
}

export function parsePlannerProblemParam(
  q: string | string[] | undefined,
  problem: string | string[] | undefined,
): string {
  const raw = (firstQueryParam(q) || firstQueryParam(problem)).trim()
  if (!raw) return ''
  return raw.slice(0, 2000)
}

export function normalizeTeamSizeParam(raw: string | null | undefined): PlannerTeamSize | null {
  const value = (raw || '').trim()
  if (!value) return null
  const lowered = value.toLowerCase()
  if (lowered === '200plus' || lowered === '200+' || value === '200%2B') return '200+'
  if (value === '1-9' || value === '10-49' || value === '50-199') return value as PlannerTeamSize
  return null
}

export function parsePlannerEntryFromSearch(params: URLSearchParams): PlannerEntryFromUrl {
  const problem = parsePlannerProblemParam(params.get('q') || undefined, params.get('problem') || undefined)
  let teamSize: PlannerTeamSize | null = null
  for (const key of TEAM_SIZE_QUERY_KEYS) {
    const candidate = normalizeTeamSizeParam(params.get(key))
    if (candidate) {
      teamSize = candidate
      break
    }
  }
  const name = capText(params.get('name'), 120)
  const company = capText(params.get('company'), 120)
  const email = parseEmailParam(params.get('email'))
  const metaLeadId = parseMetaLeadId(params.get('meta_lead_id'))
  return { problem, teamSize, name, email, company, metaLeadId }
}

export function parsePlannerEntryFromUrl(href: string): PlannerEntryFromUrl {
  try {
    return parsePlannerEntryFromSearch(new URL(href).searchParams)
  } catch {
    return { problem: '', teamSize: null, name: '', email: '', company: '', metaLeadId: '' }
  }
}

export function teamSizeMinEmployees(teamSize: PlannerTeamSize | null): number | null {
  if (!teamSize) return null
  switch (teamSize) {
    case '1-9':
      return 1
    case '10-49':
      return 10
    case '50-199':
      return 50
    case '200+':
      return 200
    default:
      return null
  }
}

export function teamSizeShowsScopingCta(teamSize: PlannerTeamSize | null): boolean {
  const min = teamSizeMinEmployees(teamSize)
  if (min === null) return false
  return min >= PLANNER_SCOPING_CTA_MIN_TEAM_SIZE
}

export function isPlanOnlyTeamSize(teamSize: PlannerTeamSize | null): boolean {
  return !teamSizeShowsScopingCta(teamSize)
}

export function stripPlannerPiiFromUrl(href: string): string {
  const url = new URL(href)
  for (const key of PII_QUERY_KEYS) {
    url.searchParams.delete(key)
  }
  const query = url.searchParams.toString()
  return `${url.pathname}${query ? `?${query}` : ''}${url.hash}`
}

export function plannerEntryQueryKeys(): readonly string[] {
  return [...PII_QUERY_KEYS, ...TEAM_SIZE_QUERY_KEYS]
}

function capText(value: string | null, max: number): string {
  return (value || '').trim().replace(/\s+/g, ' ').slice(0, max)
}

function parseEmailParam(value: string | null): string {
  const email = (value || '').trim().toLowerCase().slice(0, 200)
  if (!email || !EMAIL_PATTERN.test(email)) return ''
  return email
}

function parseMetaLeadId(value: string | null): string {
  const id = (value || '').trim()
  if (!id || !META_LEAD_ID_PATTERN.test(id)) return ''
  return id
}