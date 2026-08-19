export type CaseStudy = {
  /** Used in the URL fragment and as the React key. */
  slug: string
  client: string
  /** e.g. 'Professional services · 40 staff' */
  sector: string
  /** Which phases this engagement covered, e.g. 'Audit and pilot'. */
  phases: string
  /** One line that could stand alone as the headline outcome. */
  headline: string
  challenge: string
  approach: string
  outcome: string
  /** Two or three at most. Keep figures defensible. */
  metrics: { figure: string; label: string }[]
  quote?: { text: string; attribution: string }
}

/**
 * Populating this array is all that is needed to publish results — the page
 * switches from its empty state to the case study list automatically.
 */
export const caseStudies: CaseStudy[] = []

export const hero = {
  eyebrow: 'Results',
  heading: 'Outcomes, published once they exist.',
  lede: 'This page will hold the engagements as they complete: what the business needed, what got built, and what changed afterwards.',
}

export const emptyState = {
  heading: 'Nothing here yet, on purpose.',
  paragraphs: [
    'The first audits and pilots under this offer are in progress. Until they are finished and the client is happy to be named, there is nothing honest to put on this page.',
    'A site that sells judgement should not open with borrowed logos and rounded-up numbers. When there are results, they will be specific: the process we mapped, the single change we made, and the difference it made afterwards, including anything that did not work.',
  ],
  interim: {
    heading: 'In the meantime',
    body: 'Prior work is described on the about page, and I am happy to talk through relevant engagements in detail on a call, including the ones that did not go to plan.',
  },
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Rather see the reasoning than the results?',
  body: 'The three phases, the retainer specification and the commercial terms are all written out in full. Read those and you will know how this works before we ever speak.',
}
