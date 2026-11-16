/**
 * The public id of the planner session this browser tab is on.
 *
 * The session cookie lasts 14 days, so it can point at a plan from an earlier visit. The page
 * only resumes a session whose id this tab stored, so a new visit always starts clean, while a
 * reload in the same tab carries on where it was.
 */
const KEY = 'ff_planner_ref'

export function readPlannerSessionRef(): string {
  if (typeof window === 'undefined') return ''
  try {
    return (sessionStorage.getItem(KEY) || '').trim().slice(0, 64)
  } catch {
    return ''
  }
}

export function stashPlannerSessionRef(value: unknown) {
  if (typeof window === 'undefined' || typeof value !== 'string') return
  const ref = value.trim()
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(ref)) return
  try {
    sessionStorage.setItem(KEY, ref)
  } catch {
    /* Private browsing can refuse storage. Then a reload starts a fresh plan. */
  }
}

export function clearPlannerSessionRef() {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}
