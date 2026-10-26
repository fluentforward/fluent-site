export const proofSection = {
  eyebrow: 'Proof',
  heading: 'Judgement before build, in practice.',
  lede:
    'Two anonymised engagements. Strategy and partner choice before spend. What we refused to bolt on. The layer the client owns now.',
}

export type ProofPack = {
  slug: string
  label: string
  title: string
  summary: string
  ctaLabel: string
  /** Public path to the signed PDF pack (under /public). */
  href: string
  /** Result line for carousel cards (sector and outcome shorthand). */
  resultLine?: string
  /** Optional line shown on the homepage carousel only. */
  homeFounderLine?: string
  /** FF-written peer-share case line; not a named client testimonial. */
  peerShareLine?: string
}

export const proofPacks: readonly ProofPack[] = [
  {
    slug: 'energy-utilities',
    label: 'Energy & utilities (anonymised)',
    title: 'The CRM was winning. The process was losing.',
    resultLine:
      'Energy & utilities · Process owned around how they work · Pipeline and client book visible without sheets and inboxes',
    homeFounderLine:
      'The owner and ops team stopped bending their process around the CRM and moved to a system built around how their work actually runs.',
    peerShareLine:
      'We stopped reshaping our process to fit the CRM. We got a system built around how we actually work, and we can see the whole pipeline and client book without hunting through sheets and inboxes.',
    summary:
      'An energy-sector owner and ops team stopped bending their process around a legacy CRM, sheets, and inbox. Strategy first, then an owned layer for pipeline and client work the team actually opens first.',
    ctaLabel: 'Read the proof',
    href: '/proof/energy-utilities.pdf',
  },
  {
    slug: 'healthcare',
    label: 'Healthcare (anonymised)',
    title: 'The prototype could not carry the ambition.',
    resultLine:
      'Healthcare · Owned platform that could carry the product · Matching, video sessions, payments, partners, and they raised',
    homeFounderLine:
      'The founders stopped stretching a prototype around the product they needed and moved to a stack their firm owns.',
    peerShareLine:
      'We stopped trying to stretch a prototype around the product we needed. We got a stack that could match, meet on video, take payment, and bring partners in, and we raised.',
    summary:
      'Founders of a mental health platform replaced a brittle first stack with a product that could match, meet, take payment, and partner, and raise.',
    ctaLabel: 'Read the proof',
    href: '/proof/healthcare.pdf',
  },
]

export const proofPacksHome: readonly ProofPack[] = proofPacks
