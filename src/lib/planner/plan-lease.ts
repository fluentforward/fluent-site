/**
 * One plan generation per session at a time.
 *
 * While a plan is being written, the session's partial_plan carries `planWritingAt`. A second
 * request for the same session (a browser retry, a second tab, a poll that re-kicks) joins the
 * generation already running instead of starting another model call. If the writer dies, the
 * lease expires and the next request starts again. The lease outlasts the whole plan job
 * (PLAN_BUDGET_MS in flow.ts), so a slow job is never run twice.
 */
export const PLAN_LEASE_MS = 210_000

function record(partial: unknown): Record<string, unknown> | null {
  return partial && typeof partial === 'object' ? (partial as Record<string, unknown>) : null
}

export function planWritingAt(partial: unknown): number | null {
  const value = record(partial)?.planWritingAt
  if (typeof value !== 'string') return null
  const at = Date.parse(value)
  return Number.isFinite(at) ? at : null
}

export function planLeaseLive(partial: unknown, now = Date.now()): boolean {
  const at = planWritingAt(partial)
  return at !== null && now - at < PLAN_LEASE_MS && at - now < 60_000
}

export function planFailures(partial: unknown): number {
  const value = record(partial)?.planFailures
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0
}

/**
 * Whether this page load may show the session behind the cookie.
 *
 * The cookie outlives the visit (14 days), so a browser that ran the planner before would
 * otherwise reopen that old plan on the next visit. The page only resumes a session that this
 * browser tab started: the tab keeps the session's public id in sessionStorage and sends it back.
 */
export function canResumeSession(publicId: string | null | undefined, ref: string | null | undefined): boolean {
  const want = typeof ref === 'string' ? ref.trim() : ''
  return Boolean(publicId && want && want === publicId)
}

export type PlanPollAction =
  | { kind: 'wait' }
  | { kind: 'kick' }
  | { kind: 'done' }

/**
 * What the page does with a session state while it waits for a plan.
 * `writing` with a live writer: keep waiting. `writing` with no writer: start it again.
 * Anything else is the result.
 */
export function nextPlanPollAction(body: unknown): PlanPollAction {
  const state = record(body)
  if (!state || state.state !== 'writing') return { kind: 'done' }
  return state.active === false ? { kind: 'kick' } : { kind: 'wait' }
}
