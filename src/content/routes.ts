/** Single source for route and offer names, anchors, and ways-we-work hub copy. */

import { modes as clientCapacityModes, process as clientCapacityProcess } from '@/content/client-capacity'

export const routeNames = {
  clientCapacity: 'Client Capacity',
  clientCapacityPartnership: 'Client Capacity Partnership',
  clientCapacityDelivery: 'Client Capacity Delivery',
  aiQuickStart: 'AI Quick Start',
  buildPlan: 'Build Plan',
  agentSetup: 'Agent Setup',
  bespokeHarness: 'Bespoke Harness',
  productEngineerPath: 'Owned shipping capability',
  placement: 'Placement',
  ongoingSupport: 'Ongoing Support',
} as const

export const routeAnchors = {
  partnership: 'partnership',
  delivery: 'delivery',
  smallFirm: 'small-firm',
} as const

export const waysWeWorkPath = '/ways-we-work' as const
export const clientCapacityPath = '/client-capacity' as const

export const routeLinks = {
  clientCapacity: clientCapacityPath,
  partnership: `${clientCapacityPath}#${routeAnchors.partnership}`,
  delivery: `${clientCapacityPath}#${routeAnchors.delivery}`,
  aiQuickStart: `${waysWeWorkPath}#${routeAnchors.smallFirm}`,
  waysWeWork: waysWeWorkPath,
} as const

export const seeClientCapacityLink = `See ${routeNames.clientCapacity}` as const
export const seePartnershipLink = 'See how Partnership works' as const
export const seeDeliveryLink = 'See how Delivery works' as const
export const seeAiQuickStartLink =
  `See how ${routeNames.aiQuickStart} works` as const

export const waysWeWorkMeta = {
  title: 'Ways we work | FluentForward',
  description:
    'Win the next client without hiring your way out. Start with First AI Move or a free Audit review call, then Client Capacity Partnership or Delivery. Your firm owns what we build.',
} as const

export const waysWeWorkStructuredServiceType =
  'Client Capacity advisory and implementation for services firms' as const

export const waysWeWorkHub = {
  eyebrow: 'Ways we work',
  heading: 'Win the next client without hiring your way out.',
  lede:
    'If you are stuck between busy and the next client, the limit is usually the offer, demand or delivery. We find which, clear it as a growth system that pays for itself, and only then pick Partnership (with your team) or Delivery (we ship more of it). Start with First AI Move or a free Audit review call. Your firm owns the code, the agents and the roadmap.',
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
  firstAiMove: {
    title: 'First AI Move',
    body:
      'A fast self-serve read on where capacity is leaking and what a first win could free up, using your own numbers.',
  },
  reviewCall: {
    title: 'Free Audit review call',
    body:
      'Talk first if you would rather name what is stopping the next client before you commit to a path.',
  },
} as const

export const waysWeWorkModeOutcome =
  'Same outcome: more client work without a linear headcount climb, with higher revenue and stronger margins.' as const

export const waysWeWorkProcessStrip = clientCapacityProcess

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
    name: routeNames.clientCapacityPartnership,
    summary: clientCapacityModes.partnership.summary,
    body:
      'Done with you. We find what\u2019s stopping the next client, ship the first win with your people, install the cycle rhythm, and include owned shipping capability when the bet needs it.',
    link: { href: clientCapacityPath, label: seeClientCapacityLink },
  },
  {
    id: routeAnchors.delivery,
    name: routeNames.clientCapacityDelivery,
    summary: clientCapacityModes.delivery.summary,
    body:
      'Done for you. Same diagnosis and cycle. Fixed scope, your firm owns the code, win lands in the cycle rhythm.',
    link: { href: clientCapacityPath, label: seeClientCapacityLink },
  },
  {
    id: routeAnchors.smallFirm,
    name: routeNames.aiQuickStart,
    summary:
      'For firms of around 20 people who want one thing working with AI, not another programme.',
    body:
      'Thirty days, fixed scope. We take that first AI move, set up one or two agents or workflows for it, train the people who use them, build in the governance basics, and hand it all over. Ongoing Support follows, and you can move into Client Capacity as you grow.',
    bullets: [
      'One first AI move, one or two working agents or workflows.',
      'Governance basics included, then handover.',
      `${routeNames.ongoingSupport} and a path to ${routeNames.clientCapacity} when you are ready.`,
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
      'Included on Client Capacity Partnership when the bet needs it. We train your software developers into product engineers on your real backlog, or help you place one, so the capability stays in your firm. Optional on Delivery.',
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

export const clientCapacityAltRoute = {
  before: 'Not the right fit? ',
  linkLabel: 'See the other ways we work',
  href: waysWeWorkPath,
  after: '.',
} as const
