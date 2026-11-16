import { sessionPlanOnlyFromAttribution, type PlannerTeamSize } from '@/lib/planner/entry-params'

export const PLANNER_PLAN_ONLY_READY =
  'Your plan is ready. Read it below, or download a copy to share with your team.'

export const PLANNER_PLAN_ONLY_FOLLOW_UP =
  "Want to talk it through? Reply to the email we sent and we'll get back to you."

export const PLANNER_PLAN_ONLY_PDF_HEADING = 'Your first agent plan'

/** Commercials footnote in the PDF. Plan-only teams (1 to 9) are not offered a scoping call. */
export const PLANNER_SCOPING_COMMERCIALS_NOTE = 'Both are confirmed on the scoping call.'
export const PLANNER_PLAN_ONLY_COMMERCIALS_NOTE = "Reply to our email if you'd like to talk either of them through."

export function commercialsNote(planOnly: boolean): string {
  return planOnly ? PLANNER_PLAN_ONLY_COMMERCIALS_NOTE : PLANNER_SCOPING_COMMERCIALS_NOTE
}

export const PLANNER_CONTACT_EMAIL = 'hello@fluentforward.com'

/** How the gave-up page offers help: a call (10 or more) or a mailto link (plan-only, 1 to 9). */
export type PlannerGaveUpContact = 'book' | 'mailto'

/**
 * Copy for the page after the retry cap. It depends only on the route (team size), never on
 * whether an address has had email from us, so the page cannot be used to probe addresses.
 */
export function plannerGaveUpCopy(input: { planOnly: boolean }): {
  message: string
  contact: PlannerGaveUpContact
} {
  if (!input.planOnly) {
    return {
      message: "The plan didn't come together this time. Book a call and we'll work through it with you.",
      contact: 'book',
    }
  }
  return {
    message: `The plan didn't come together this time. Try describing a different process, or email us at ${PLANNER_CONTACT_EMAIL} and we'll help.`,
    contact: 'mailto',
  }
}

/** The gave-up copy for a stored session, using the same plan-only rule as the rest of the planner. */
export function gaveUpCopyForSession(session: {
  teamSize: string | null
  attribution: { utm_medium?: string } | null | undefined
}) {
  return plannerGaveUpCopy({
    planOnly: sessionPlanOnlyFromAttribution(session.teamSize as PlannerTeamSize | null, session.attribution),
  })
}

/** Reads the contact the server chose for the gave-up page. Unknown values fall back to the mailto line. */
export function gaveUpContact(value: unknown): PlannerGaveUpContact {
  return value === 'book' ? 'book' : 'mailto'
}

/** Book a call shows on ordinary errors (no contact set) and for teams of 10 or more. */
export function showsBookCall(contact: PlannerGaveUpContact | undefined): boolean {
  return contact === undefined || contact === 'book'
}
