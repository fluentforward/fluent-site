export const growthAuditUrl = 'https://client.fluentforward.com/growth-audit'

export const auditCta = {
  label: 'Take the AI Readiness and Governance Audit',
  href: growthAuditUrl,
  hint: '10 minutes. See where you stand on AI control and capacity, and your next move.',
} as const

export const boardConversationCta = {
  label: 'Talk to us about the Board',
  href: '/contact',
} as const

export const boardOutcomes = {
  eyebrow: 'What you get',
  heading: 'Five outcomes members work toward',
  items: [
    {
      title: 'AI you control, not AI that happens to you',
      body:
        'Governance, policies and ship-gates so AI stays inside work you own, not shadow tools and one-off prompts.',
    },
    {
      title: 'Spend your build budget once, with the right partner',
      body:
        'Independent vendor and build-partner selection on your side of the table, before money moves.',
    },
    {
      title: 'Your roadmap, your IP, no lock-in',
      body:
        'An owned plan and artefacts you keep. Pause or leave without losing the thinking.',
    },
    {
      title: 'More output per person, measured every quarter',
      body:
        'Productivity per head tracked over time, so progress is visible rather than anecdotal.',
    },
    {
      title: 'Strategy first, so you only build what pays',
      body:
        'Quarter one settles what to build, who builds it and how it is controlled before build budget goes out.',
    },
  ],
} as const

export const pillars = {
  eyebrow: 'Operating model',
  heading: 'Four pillars across six stages of maturity',
  names: ['Flow', 'Foundations', 'Capacity', 'Control'] as const,
  stagesLine: 'Six stages from Founder-Held to Compounding.',
} as const

export type BoardStep = {
  index: string
  title: string
  body: string
}

export const howBoardWorks = {
  eyebrow: 'How the Board works',
  heading: 'From Audit to compounding',
  lede:
    'You start with clarity on stage and gaps. The Board then runs a quarterly rhythm of judgement, re-score and peer learning.',
  steps: [
    {
      index: '01',
      title: 'AI Readiness and Governance Audit',
      body:
        'A short online assessment: your stage, pillar profile and where leverage is stuck. It frames the conversation, whether you book an Audit review call next or not.',
    },
    {
      index: '02',
      title: 'Free Audit review call with the practice',
      body:
        'Thirty minutes to sense-check fit and what would matter first in your firm. Straight answers, including when the Board is not the right move.',
    },
    {
      index: '03',
      title: 'Quarter one',
      body:
        'Mapping, governance, build-partner decision, owned roadmap and a productivity-per-head baseline. Strategy before build.',
    },
    {
      index: '04',
      title: 'Each quarter after',
      body:
        'Re-score the pillars, plug the constraint first, use strengths, and decide ship or hold. Judgement stays human at the ship-gate.',
    },
    {
      index: '05',
      title: 'Annual Leverage Summit',
      body:
        'One day, in person, members only: peers, expert speakers and real operator stories around leverage and stuck interactions.',
    },
    {
      index: '06',
      title: 'Year two and beyond',
      body:
        'Compounding: deeper playbooks, benchmarking against your own past quarters, and advanced releases when the operation is ready.',
    },
  ] as BoardStep[],
  membership: {
    heading: 'What membership includes',
    items: [
      'Three private strategy sessions each year, plus the Annual Leverage Summit',
      'Portal office hours on a published rhythm',
      'Portal AI advisor for prep and recall between sessions (ship decisions stay human)',
      'Playbook library between sessions',
      'Ship-gate when you want to commit budget or start Release Engine',
    ],
  },
} as const
