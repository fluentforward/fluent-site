/** Single source for route and offer names, anchors, and ways-we-work hub copy. */

export const routeNames = {
  clientCapacity: 'Client Capacity',
  clientCapacityPartnership: 'Client Capacity Partnership',
  clientCapacityDelivery: 'Client Capacity Delivery',
  aiQuickStart: 'AI Quick Start',
  buildPlan: 'Build Plan',
  agentSetup: 'Agent Setup',
  bespokeHarness: 'Bespoke Harness',
  productEngineerPath: 'Product-engineer path',
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
  title: 'Ways we work: Client Capacity | FluentForward',
  description:
    'One program, two modes. Client Capacity Partnership or Client Capacity Delivery. First AI Move and a free Audit review call show which fits. Your firm owns everything we build or set up.',
} as const

export const waysWeWorkStructuredServiceType =
  'Client Capacity advisory and implementation for services firms' as const

export const waysWeWorkHub = {
  eyebrow: 'Ways we work',
  heading: 'One program. Two ways to get capacity.',
  lede:
    'Services firms know AI will reshape the work, and worry they will be disrupted if they do not move. We give you a safe path to more client capacity: with your team, or we deliver more of it. You start with First AI Move, then a free Audit review call. Your firm owns the code, the agents and the roadmap.',
  implementationEyebrow: 'On either mode',
  implementationHeading: 'What we can set up or build',
  implementationLede:
    'Each one is scoped in writing before work starts, and your firm owns everything we build or set up.',
} as const

export const waysWeWorkProcessStrip = {
  eyebrow: 'Same process either way',
  heading: 'How Client Capacity runs',
  steps: [
    'Diagnose capacity (proposals, handoffs, delivery leak)',
    'Prioritise the leverage list (billable capacity)',
    'Buy vs build decisions',
    'Ship the first capacity win',
    'Install the operating rhythm',
    'Product-engineer path when you have or place a developer (included on Partnership)',
  ],
  choiceLine:
    'After diagnosis, one question: do we run this through your people, or do you want us to deliver more of it?',
} as const

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
    summary: 'Done with you. Matt runs the process through your team.',
    body:
      'We diagnose where capacity leaks (proposals, handoffs, delivery), prioritise a leverage list, make buy vs build decisions, ship the first capacity win with your people, and install the operating rhythm. Product-engineer training is included: we turn your software developers into product engineers, or help you place one, so the code and the capability stay in your firm.',
    bullets: [
      'Capacity diagnosis and a prioritised leverage backlog.',
      'Buy vs build decisions before spend moves.',
      'First capacity win shipped through your team.',
      'Operating rhythm installed.',
      'Product-engineer training included (train your developers, or help place one).',
    ],
    link: { href: routeLinks.partnership, label: seePartnershipLink },
  },
  {
    id: routeAnchors.delivery,
    name: routeNames.clientCapacityDelivery,
    summary: 'Done for you. Same process. We do more of the build and ship.',
    body:
      'Same diagnosis, leverage list, buy vs build, first ship and operating rhythm. The difference is who does the heavy lifting: FluentForward ships more of the build under your control, with fixed scope in writing, and your firm still owns the code. Choose this when you need speed or do not have people to run the build yourselves.',
    bullets: [
      'Same Client Capacity process as Partnership.',
      'We deliver more of the build and ship, fixed scope.',
      'Your firm owns the code and the roadmap.',
      'Operating rhythm installed so the win sticks.',
      'Product-engineer path available if you have or place a developer (not assumed).',
    ],
    link: { href: routeLinks.delivery, label: seeDeliveryLink },
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
      'Included on Client Capacity Partnership. We train your software developers into product engineers on your real backlog, or help you place one, so the capability stays in your firm.',
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
