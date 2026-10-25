export const firstAiMoveUrl = 'https://client.fluentforward.com/first-ai-move'

export const auditCta = {
  label: 'Get your first AI move',
  href: firstAiMoveUrl,
  hint:
    'A few questions. Leave with one concrete first AI move, how it fits the tools you already pay for, and a rough sense of what it frees.',
} as const

export const reviewCallCta = {
  label: 'Book your free Audit review call',
  href: '/contact',
} as const

export const boardConversationCta = {
  label: 'Talk to us about the Board',
  href: '/contact',
} as const

export type BoardStep = {
  index: string
  title: string
  body: string
}

export const howBoardWorks = {
  eyebrow: 'How the Board works',
  heading: 'From First AI Move to compounding',
  lede:
    'You start with one clear first AI move. The Board then runs a quarterly rhythm of judgement, re-score and peer learning.',
  steps: [
    {
      index: '01',
      title: 'First AI Move',
      body:
        'A short set of questions: your first AI move, how it fits your stack, and what it could free. It frames the conversation, whether you book an Audit review call next or not.',
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
      'Ship-gate when you want to commit build budget before work starts',
    ],
  },
} as const
