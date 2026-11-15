import type { PlannerTeamSize } from '@/lib/planner/entry-params'

const NAME_KEY = 'ff_planner_entry_name'
const EMAIL_KEY = 'ff_planner_entry_email'
const COMPANY_KEY = 'ff_planner_entry_company'
const TEAM_SIZE_KEY = 'ff_planner_entry_team_size'
const META_LEAD_KEY = 'ff_planner_entry_meta_lead_id'

function write(key: string, value: string) {
  if (typeof window === 'undefined' || !value) return
  try {
    sessionStorage.setItem(key, value)
  } catch {
    /* ignore */
  }
}

function read(key: string): string {
  if (typeof window === 'undefined') return ''
  try {
    return sessionStorage.getItem(key) || ''
  } catch {
    return ''
  }
}

export function stashPlannerEntryPrefill(input: {
  name: string
  email: string
  company: string
  teamSize: PlannerTeamSize | null
  metaLeadId: string
}) {
  write(NAME_KEY, input.name)
  write(EMAIL_KEY, input.email)
  write(COMPANY_KEY, input.company)
  if (input.teamSize) write(TEAM_SIZE_KEY, input.teamSize)
  write(META_LEAD_KEY, input.metaLeadId)
}

export function readPlannerEntryPrefill(): {
  name: string
  email: string
  company: string
  teamSize: PlannerTeamSize | null
  metaLeadId: string
} {
  const teamSizeRaw = read(TEAM_SIZE_KEY)
  const teamSize =
    teamSizeRaw === '1-9' || teamSizeRaw === '10-49' || teamSizeRaw === '50-199' || teamSizeRaw === '200+'
      ? teamSizeRaw
      : null
  return {
    name: read(NAME_KEY).slice(0, 120),
    email: read(EMAIL_KEY).slice(0, 200),
    company: read(COMPANY_KEY).slice(0, 120),
    teamSize,
    metaLeadId: read(META_LEAD_KEY).slice(0, 64),
  }
}

export function clearPlannerEntryPrefill() {
  if (typeof window === 'undefined') return
  try {
    for (const key of [NAME_KEY, EMAIL_KEY, COMPANY_KEY, TEAM_SIZE_KEY, META_LEAD_KEY]) {
      sessionStorage.removeItem(key)
    }
  } catch {
    /* ignore */
  }
}