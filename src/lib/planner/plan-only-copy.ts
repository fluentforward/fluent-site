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

/** How the gave-up page offers help: a call (10+), a reply to our email, or a mailto link. */
export type PlannerGaveUpContact = 'book' | 'reply' | 'mailto'

/**
 * Copy for the page after the retry cap. `emailed` must come from a recorded send
 * (see hasRecordedPlanEmail), never from merely knowing the visitor's address.
 */
export function plannerGaveUpCopy(input: { planOnly: boolean; emailed: boolean }): {
  message: string
  contact: PlannerGaveUpContact
} {
  if (!input.planOnly) {
    return {
      message: "The plan didn't come together this time. Book a call and we'll work through it with you.",
      contact: 'book',
    }
  }
  if (input.emailed) {
    return {
      message:
        "The plan didn't come together this time. Try describing a different process, or reply to our email and we'll help.",
      contact: 'reply',
    }
  }
  return {
    message: `The plan didn't come together this time. Try describing a different process, or email us at ${PLANNER_CONTACT_EMAIL} and we'll help.`,
    contact: 'mailto',
  }
}

/** Reads the contact the server chose for the gave-up page. Unknown values fall back to the mailto line. */
export function gaveUpContact(value: unknown): PlannerGaveUpContact {
  return value === 'book' || value === 'reply' || value === 'mailto' ? value : 'mailto'
}

/** Book a call shows on ordinary errors (no contact set) and for teams of 10 or more. */
export function showsBookCall(contact: PlannerGaveUpContact | undefined): boolean {
  return contact === undefined || contact === 'book'
}
