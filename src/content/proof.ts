export const proofSection = {
  eyebrow: 'Proof',
  heading: 'Real engagements.',
  lede:
    'How work moved, what we refused to bolt on, and the system they own now.',
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
      'An energy-sector owner and ops team stopped bending their process around a legacy CRM, sheets, and inbox, and got an internal pipeline and client platform they actually run on.',
    ctaLabel: 'Read the proof',
    href: '/proof/energy-utilities.pdf',
  },
]
