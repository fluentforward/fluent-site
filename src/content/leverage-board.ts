import { auditCta, boardConversationCta, boardOutcomes } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import { fit } from '@/content/home'

export const meta = {
  title: 'Leverage Board',
  description:
    'Grow without adding headcount: senior AI and operations judgement for services firms, with governance, independent build-partner choice, owned roadmaps and productivity per head.',
} as const

export const hero = {
  eyebrow: 'Leverage Board',
  heading: 'Grow without headcount, with senior judgement on your side.',
  lede:
    'A membership seat for senior AI and operations judgement on the business you already run. Fractional Chief of AI thinking when you need it, without a full-time hire. Process first. Systems you own. Control over AI.',
  primaryCta: auditCta,
  secondaryCta: boardConversationCta,
} as const

export const problem = {
  heading:
    'Vendor AI makes silos smarter. It rarely makes the business more productive.',
  body:
    'Most stacks already have tools. Work still falls between them as manual process. Bolting AI into each product enhances isolation. Operators need a judgement layer above the stack, and, when ready, an owned operating layer, not another feature inside someone else\u2019s product.',
} as const

export const gartnerProofBoard = {
  heading: 'Vendor-led agentic programmes do not stick',
  body:
    'Gartner forecasts that by 2028, 70% of enterprises on the vendor forward-deployed-engineering route for agentic AI will abandon it: too expensive, and the organisation cannot evolve the system alone. The Leverage Board puts judgement on your side of the table before build budget moves.',
  attribution:
    'Source: Gartner press release, 29 September 2026. Not an endorsement of FluentForward.',
  sourceUrl: gartnerPressReleases.vendorFdeAbandon2028,
} as const

export const whatYouGet = {
  heading: 'What you get with a Leverage Board seat',
  intro:
    'Membership is a seat, not billed hours. Not an open Slack channel. Not monthly theatre meetings.',
  items: [
    {
      title: 'Leverage Board seat',
      body:
        'Senior judgement on where leverage is, where it isn\u2019t, and ship or don\u2019t ship.',
    },
    {
      title: 'Four touchpoints a year',
      body:
        'Three private strategy sessions, plus the Annual Leverage Summit (one day, in person, members only).',
    },
    {
      title: 'Portal office hours',
      body:
        'Scheduled slots. You submit questions and issues through the portal for the agenda. Intentional, batched judgement, not always-on chat.',
    },
    {
      title: 'Portal AI advisor',
      body:
        'An advisor in your portal, fed on your call transcripts, decisions, and our library. Prep and recall between sessions. It does not make binding ship decisions; those stay human, via office hours or ship-gate.',
    },
    {
      title: 'Library',
      body: 'Playbooks, trainings, and blueprints between sessions.',
    },
    {
      title: 'Ship-gate',
      body:
        'A short written review when you want to commit build budget before work starts.',
    },
  ],
} as const

export const summit = {
  heading: 'Once a year, in the room with peers',
  body:
    'One of your four touchpoints is the Annual Leverage Summit: a one-day, members-only session with peer operators, expert speakers, and real stories, facilitated around leverage and stuck interactions. Timings and venue are confirmed for each membership year. Never a public ticket; the Summit is part of the seat.',
} as const

export const developerLeverage = {
  eyebrow: 'When the Board says build',
  heading: "One developer. A team's worth of output.",
  body:
    "When the Board says build, you shouldn't need a bigger team. We train your existing developer to work the AI-leveraged way, or help you bring in one who already does, on a permanent or contract basis. We've seen one developer ship in a day what used to take a team a month.",
  smallPrint:
    'For Leverage Board members. Details are agreed with you when the Board says build.',
} as const

export const whoFor = {
  heading: fit.builtForHeading,
  body: fit.builtFor,
} as const

export const ladder = {
  heading: 'Where Leverage Board sits',
  body:
    'Start with the AI Readiness and Governance Audit, then a free Audit review call to sense-check fit. The first 90 days on the Board map governance, build-partner choice and an owned roadmap. We keep re-scoring as you grow. Impact Build is a later Board decision for firms that are ready: delivered by a partner, your own vendor or us under Board oversight.',
  link: { label: 'How the Board works', href: '/how-it-works' },
} as const

export const notList = {
  heading: fit.notForHeading,
  items: fit.notFor,
} as const

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Find your stage, or talk it through.',
  body:
    'Take the Audit for a fast read on stage and gaps, or book a call if you would rather talk first. Fixed commercial terms are private and set in writing before anything starts.',
  primary: auditCta,
  secondary: boardConversationCta,
} as const

export { boardOutcomes }
