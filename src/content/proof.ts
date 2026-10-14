export const proofSection = {
  eyebrow: 'Proof',
  heading: 'Judgement before build, in practice.',
  lede:
    'Real engagements where strategy and partner choice came before spend. What we refused to bolt on. The layer the client owns now.',
}

export type ProofPack = {
  slug: string
  label: string
  title: string
  summary: string
  ctaLabel: string
  /** Public path to the signed PDF pack (under /public). */
  href: string
}

export const proofPacks: readonly ProofPack[] = [
  {
    slug: 'energy-utilities',
    label: 'Energy & utilities',
    title: 'The CRM was winning. The process was losing.',
    summary:
      'An energy-sector owner and ops team stopped bending their process around a legacy CRM, sheets, and inbox. Strategy first, then an owned layer for pipeline and client work the team actually opens first.',
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
