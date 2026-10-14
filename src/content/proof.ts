export const proofSection = {
  eyebrow: 'Proof',
  heading: 'Judgement before build, in practice.',
  lede:
    'An anonymised energy-sector engagement: strategy and partner choice before spend. What we refused to bolt on. The layer the client owns now.',
}

export type ProofPack = {
  slug: string
  label: string
  title: string
  summary: string
  ctaLabel: string
  /** Public path to the signed PDF pack (under /public). */
  href: string
  /** Optional line shown on the homepage only. */
  homeFounderLine?: string
  homeQuote?: string
}

export const proofPacks: readonly ProofPack[] = [
  {
    slug: 'energy-utilities',
    label: 'Energy & utilities (anonymised)',
    title: 'The CRM was winning. The process was losing.',
    homeFounderLine:
      'The owner and ops team stopped bending their process around the CRM and chose to build around how work actually runs.',
    homeQuote:
      'We stopped reshaping our process to fit the CRM. We got a system built around how we actually work, and we can see the whole pipeline and client book without hunting through sheets and inboxes.',
    summary:
      'An energy-sector owner and ops team stopped bending their process around a legacy CRM, sheets, and inbox. From the proof pack: "We stopped reshaping our process to fit the CRM. We got a system built around how we actually work, and we can see the whole pipeline and client book without hunting through sheets and inboxes."',
    ctaLabel: 'Read the proof',
    href: '/proof/energy-utilities.pdf',
  },
  {
    slug: 'healthcare',
    label: 'Healthcare',
    title: 'The prototype could not carry the ambition.',
    summary:
      'Founders of a mental health platform replaced a brittle first stack with a product that could match, meet, take payment, and partner, and raise.',
    ctaLabel: 'Read the proof',
    href: '/proof/healthcare.pdf',
  },
]

export const proofPacksHome: readonly ProofPack[] = proofPacks.filter(
  (pack) => pack.slug === 'energy-utilities',
)
