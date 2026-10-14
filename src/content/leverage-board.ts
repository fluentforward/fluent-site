import { gartnerPressReleases } from '@/content/gartner'

export const meta = {
  title: 'Leverage Board: senior AI advisory membership | FluentForward',
  description:
    'A Leverage Board seat: senior AI and operations judgement, private strategy sessions, portal office hours, an AI advisor, the Library and the Annual Leverage Summit.',
} as const

export const hero = {
  eyebrow: 'Leverage Board',
  heading: 'What a Leverage Board seat includes',
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

export const shipGateImpactBuild = {
  heading: 'Ship-gate and Impact Build',
  body:
    'When the Board says build, we scope it with a partner, your own vendor or us. Ship-gate is the short written review before build budget moves. Impact Build is a later Board decision when the operation is ready. We do not publish commercial terms on this page.',
} as const

export const developerLeverage = {
  eyebrow: 'Developer leverage',
  heading: "One developer. A team's worth of output.",
  body:
    "When the Board says build, you shouldn't need a bigger team. We train your existing developer to work the AI-leveraged way, or help you bring in one who already does, on a permanent or contract basis. We've seen one developer ship in a day what used to take a team a month.",
  smallPrint:
    'For Leverage Board members. Details are agreed with you when the Board says build.',
} as const

export const fitLine =
  'Built for owner-led services firms of 20 to 200 people. Not sure? The Audit tells you.' as const

export const howItWorksLink = {
  label: 'How the Board works',
  href: '/how-it-works',
} as const

export const faq = {
  eyebrow: 'Common questions',
  heading: 'Membership in practice',
  items: [
    {
      question: 'What am I committing to?',
      answer:
        'Leverage Board membership is a seat with a defined rhythm of sessions and office hours, not an hourly retainer or open chat queue.',
    },
    {
      question: 'Can we pause or leave?',
      answer:
        'Your roadmap and IP stay yours. Pause or leave when you need to; nothing renews by default.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is confirmed in writing.',
    },
  ],
} as const
