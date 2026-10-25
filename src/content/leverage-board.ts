import { gartnerPressReleases } from '@/content/gartner'

export const meta = {
  title: 'Leverage Board: senior AI advisory membership | FluentForward',
  description:
    'A Leverage Board seat: senior AI and operations judgement on your side, a roadmap you own, help between sessions, the Library and the Annual Leverage Summit.',
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
    'Membership is a seat, not billed hours. Not an open Slack channel. Not meetings for the sake of meetings.',
  items: [
    {
      title: 'Senior judgement on your side',
      body: 'AI and build decisions checked before you spend.',
    },
    {
      title: 'A roadmap and IP you own',
      body: 'Priorities set with you, never by a vendor.',
    },
    {
      title: 'Help when you need a steer',
      body: 'Office hours and the AI advisor between sessions.',
    },
    {
      title: "Proof it's working",
      body: 'Output per person tracked as you grow.',
    },
    {
      title: 'A library of what works',
      body: 'Playbooks and templates your team can use.',
    },
    {
      title: 'The Annual Leverage Summit',
      body: "A day with peers, comparing what's working.",
    },
  ],
} as const

export const summit = {
  heading: 'In the room with peers',
  body:
    'The Summit is members only and in person: operators, expert speakers and honest stories about what is working. Timings and venue are confirmed with you. Never a public ticket.',
} as const

export const shipGateImpactBuild = {
  heading: 'Ship-gate and Impact Build',
  body:
    'Ship-gate is the short written review before build budget moves. Impact Build is a later Board decision when the operation is ready, built by your own developers or your existing vendor, with the code staying yours. We do not publish commercial terms on this page.',
} as const

export const developerLeverage = {
  eyebrow: 'Developer leverage',
  heading: 'Your team, building with AI.',
  body:
    'When the Board says build, we work alongside your developers and train them in AI-driven development, so your firm owns the code and keeps the capability. No developers? We help you place one, on a permanent or contract basis, and train them from day one.',
  smallPrint:
    'For Leverage Board members. Details are agreed with you when the Board says build.',
} as const

export const fitLine =
  'Built for owner-led services firms of 20 to 200 people. Not sure? First AI Move will tell you.' as const

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
        'A membership seat, not an hourly retainer. Not an open chat queue.',
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
