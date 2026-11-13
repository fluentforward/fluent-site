const KEY = 'ff_planner_draft'

export function stashPlannerDraft(text: string) {
  const value = text.trim().slice(0, 2000)
  if (!value || typeof window === 'undefined') return
  try {
    sessionStorage.setItem(KEY, value)
  } catch {
    /* Private browsing can refuse storage. The field still works for this visit. */
  }
}

export function readPlannerDraft(): string {
  if (typeof window === 'undefined') return ''
  try {
    return (sessionStorage.getItem(KEY) || '').trim().slice(0, 2000)
  } catch {
    return ''
  }
}

export function clearPlannerDraft() {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}
