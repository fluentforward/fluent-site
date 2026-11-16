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

/** A session public id, or '' when the value is not one. */
export function normalizePlannerSessionRef(value: unknown): string {
  if (typeof value !== 'string') return ''
  const ref = value.trim()
  return /^[A-Za-z0-9_-]{8,64}$/.test(ref) ? ref : ''
}

export function stashPlannerSessionRef(value: unknown) {
  if (typeof window === 'undefined') return
  const ref = normalizePlannerSessionRef(value)
  if (!ref) return
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

/** How long a resuming tab waits for the session check before showing the start form. */
export const SESSION_CHECK_TIMEOUT_MS = 8_000

/**
 * Whether the page needs to ask the server for this tab's session on load. The server only
 * resumes the session matching the tab's ref, so a tab without one would always get "empty".
 */
export function needsSessionCheck(ref: string | null | undefined): boolean {
  return Boolean(normalizePlannerSessionRef(ref))
}

/**
 * After the session check timed out and the start form is showing, a second check may still
 * find this tab's session. Only states worth replacing the form with are shown: a plan being
 * written, a question, the email gate, a finished plan, or a refusal. "empty" keeps the form.
 */
export function shouldShowLateSession(kind: string): boolean {
  return kind === 'writing' || kind === 'question' || kind === 'details' || kind === 'sent' || kind === 'refusal'
}
