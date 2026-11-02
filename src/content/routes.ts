/** Single source for route and offer names, anchors, and ways-we-work hub copy. */

import { modes as profitEngineModes, process as profitEngineProcess } from '@/content/profit-engine'

export const routeNames = {
  profitEngine: 'Profit Engine',
  installPartnership: 'Install Partnership',
  installDelivery: 'Install Delivery',
  aiQuickStart: 'AI Quick Start',
  buildPlan: 'Build Plan',
  agentSetup: 'Agent Setup',
  bespokeHarness: 'Bespoke Harness',
  productEngineerPath: 'Owned shipping capability',
  placement: 'Placement',
  ongoingSupport: 'Ongoing Support',
  run: 'Run',
} as const

export const routeAnchors = {
  partnership: 'partnership',
  delivery: 'delivery',
  smallFirm: 'small-firm',
} as const

export const waysWeWorkPath = '/ways-we-work' as const
export const profitEnginePath = '/profit-engine' as const

/** @deprecated Use profitEnginePath */
export const clientCapacityPath = profitEnginePath

export const routeLinks = {
  profitEngine: profitEnginePath,
  partnership: `${profitEnginePath}#${routeAnchors.partnership}`,
  delivery: `${profitEnginePath}#${routeAnchors.delivery}`,
  aiQuickStart: `${waysWeWorkPath}#${routeAnchors.smallFirm}`,
  waysWeWork: waysWeWorkPath,
  /** Legacy alias */
  clientCapacity: profitEnginePath,
} as const

export const seeProfitEngineLink = `See ${routeNames.profitEngine}` as const
/** @deprecated Use seeProfitEngineLink */
export const seeClientCapacityLink = seeProfitEngineLink
export const seePartnershipLink = 'See how Install Partnership works' as const
export const seeDeliveryLink = 'See how Install Delivery works' as const
export const seeAiQuickStartLink =
  `See how ${routeNames.aiQuickStart} works` as const

export const waysWeWorkMeta = {
  title: 'Ways we work | FluentForward',
  description:
    'Install a Profit Engine in ninety days: Partnership or Delivery. Start with the Profit Constraint Score or a free Constraint review call. Your firm owns what we build.',
} as const

export const waysWeWorkStructuredServiceType =
  'Profit Engine advisory and implementation for services firms' as const

export const waysWeWorkHub = {
  eyebrow: 'Ways we work',
  heading: 'Two ways to install. Ninety days either way.',
  lede:
    'If you are stuck between busy and unprofitable, the limit is usually Offers, Demand or Delivery. We find which constraint is binding, install the engine that fixes it, and choose Partnership or Delivery only after diagnosis. Start with the Profit Constraint Score or a free Constraint review call. Your firm owns the code, the agents and the playbooks.',
  implementationEyebrow: 'On either mode',
  implementationHeading: 'What we can set up or build',
  implementationLede:
    'Each one is scoped in writing before work starts, and your firm owns everything we build or set up.',
} as const

export const waysWeWorkStartingPoints = {
  eyebrow: 'Where to start',
  heading: 'Two ways into the same conversation',
  lede:
    'Both end in a straight read on fit and what would matter first for your firm.',
  profitConstraintScore: {
    title: 'Profit Constraint Score',
    body:
      'In a few minutes, see which of Offers, Demand, or Delivery is binding you now, and what fixing that constraint could mean for revenue and margin with the team you already have. Results before any call.',
  },
  reviewCall: {
    title: 'Constraint review call',
    body:
      'Talk first if you would rather test the score against your numbers before you commit to an Install path.',
  },
} as const

export const waysWeWorkModeOutcome =
  'Same outcome: more of the right client work at stronger margins, without linear headcount.' as const

export const waysWeWorkProcessStrip = profitEngineProcess

export type WaysWeWorkRoute = {
  id: string
  name: string
  summary: string
  body: string
  bullets?: readonly string[]
  link?: { href: string; label: string }
}

export const waysWeWorkRoutes: readonly WaysWeWorkRoute[] = [
  {
    id: routeAnchors.partnership,
    name: routeNames.installPartnership,
    summary: profitEngineModes.partnership.summary,
    body: profitEngineModes.partnership.body,
    bullets: profitEngineModes.partnership.bullets,
    link: { href: profitEnginePath, label: seeProfitEngineLink },
  },
  {
    id: routeAnchors.delivery,
    name: routeNames.installDelivery,
    summary: profitEngineModes.delivery.summary,
    body: profitEngineModes.delivery.body,
    bullets: profitEngineModes.delivery.bullets,
    link: { href: profitEnginePath, label: seeProfitEngineLink },
  },
  {
    id: routeAnchors.smallFirm,
    name: routeNames.aiQuickStart,
    summary:
      'For firms who want one lever working with AI before a full ninety-day Install.',
    body:
      'Thirty days, fixed scope. One constraint or workflow, one or two agents or automations, governance basics, then handover. Ongoing Support follows, and you can move into Install when you are ready.',
    bullets: [
      'One binding lever or workflow, one or two working agents or automations.',
      'Governance basics included, then handover.',
      `${routeNames.ongoingSupport} and a path to Install when you are ready.`,
    ],
  },
] as const

export type ImplementationMenuItem = {
  title: string
  body: string
}

export const implementationMenu: readonly ImplementationMenuItem[] = [
  {
    title: routeNames.agentSetup,
    body:
      'One agent on one workflow, with governance included. Scoped in writing; your firm owns what we set up.',
  },
  {
    title: routeNames.bespokeHarness,
    body:
      'A custom AI system built around one of your processes. Fixed scope, and your team runs it once we hand over.',
  },
  {
    title: routeNames.productEngineerPath,
    body:
      'Included on Install Partnership when the bet needs it. We train your software developers into product engineers on your real backlog, or help you place one, so the capability stays in your firm. Optional on Delivery.',
  },
  {
    title: routeNames.placement,
    body:
      'We help you hire a developer, trained from day one in how your firm builds with AI. Default path is inside Partnership.',
  },
  {
    title: routeNames.ongoingSupport,
    body:
      'Monitoring, updates and changes for what was built or set up.',
  },
] as const

export const profitEngineAltRoute = {
  before: 'Not the right fit? ',
  linkLabel: 'See the other ways we work',
  href: waysWeWorkPath,
  after: '.',
} as const

/** @deprecated Use profitEngineAltRoute */
export const clientCapacityAltRoute = profitEngineAltRoute
