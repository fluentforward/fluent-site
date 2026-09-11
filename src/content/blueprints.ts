export const blueprintsPage = {
  eyebrow: 'Strategy',
  heading: 'Strategy blueprints.',
  lede:
    'Recurring problem shapes for IT and ops leaders. What to keep, what to integrate, what to replace, and in what order. Useful with or without us.',
  ctaLabel: 'Read the blueprint',
} as const

export const blueprintsHomeSection = {
  eyebrow: 'Strategy',
  heading: 'Strategy blueprints.',
  lede: 'Clear paths for common stuck stacks: keep, integrate, replace.',
  link: {
    label: 'See the blueprints',
    href: '/strategy-blueprints',
  },
} as const

export type StrategyBlueprint = {
  slug: string
  title: string
  summary: string
  tags: readonly string[]
  href: string
}

export const strategyBlueprints: readonly StrategyBlueprint[] = [
  {
    slug: 'crm-owns-the-process',
    title: 'When the CRM owns the process',
    summary:
      'The CRM became the process. Portals and integrations multiplied. Truth still lives in sheets and inbox.',
    tags: ['CRM', 'Integrations', 'Owned spine', 'Process-fit'],
    href: '/blueprints/crm-owns-the-process.pdf',
  },
  {
    slug: 'inbox-holds-the-truth',
    title: 'When the inbox holds the truth',
    summary:
      'Official tools exist, but the week runs on email and spreadsheets. Growth plans are on the table and the informal system is cracking.',
    tags: ['Operations', 'Spreadsheets', 'System of record', 'Scale'],
    href: '/blueprints/inbox-holds-the-truth.pdf',
  },
  {
    slug: 'prototype-cannot-carry-ambition',
    title: 'The prototype cannot carry the ambition',
    summary:
      'Clear product vision. A temporary first build is now the constraint. Roadmap and funding wait on a stack that will not ship.',
    tags: ['Product platform', 'Rebuild', 'Cutover', 'Ownership'],
    href: '/blueprints/prototype-cannot-carry-ambition.pdf',
  },
  {
    slug: 'team-reaches-for-chatgpt',
    title: 'When the team reaches for ChatGPT',
    summary:
      'Shadow ChatGPT and bolted-on copilots. Data risk, uneven quality, no compounding. Put the right AI inside a process you own.',
    tags: ['AI', 'Data boundary', 'Governance', 'Process-fit'],
    href: '/blueprints/team-reaches-for-chatgpt.pdf',
  },
]
