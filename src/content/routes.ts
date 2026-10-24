/** Single source for route and offer names, anchors, and ways-we-work hub copy. */

export const routeNames = {
  leverageBoard: 'Leverage Board',
  buildPartner: 'Build Partner',
  aiQuickStart: 'AI Quick Start',
  buildPlan: 'Build Plan',
  agentSetup: 'Agent Setup',
  bespokeHarness: 'Bespoke Harness',
  developerProgramme: 'Developer Programme',
  placement: 'Placement',
  ongoingSupport: 'Ongoing Support',
} as const

export const routeAnchors = {
  noTechLead: 'no-tech-lead',
  itLead: 'it-lead',
  smallFirm: 'small-firm',
} as const

export const waysWeWorkPath = '/ways-we-work' as const

export const routeLinks = {
  leverageBoard: '/leverage-board',
  buildPartner: `${waysWeWorkPath}#${routeAnchors.itLead}`,
  aiQuickStart: `${waysWeWorkPath}#${routeAnchors.smallFirm}`,
  waysWeWork: waysWeWorkPath,
} as const

export const seeLeverageBoardLink = `See the ${routeNames.leverageBoard}` as const
export const seeBuildPartnerLink =
  `See how ${routeNames.buildPartner} works` as const
export const seeAiQuickStartLink =
  `See how ${routeNames.aiQuickStart} works` as const

export const waysWeWorkMeta = {
  title: 'Ways we work: three starting points | FluentForward',
  description:
    'Same outcome, three starting points. The free AI Readiness and Governance Audit and Audit review call show which route fits. Your firm owns everything we build or set up.',
} as const

export const waysWeWorkHub = {
  eyebrow: 'Ways we work',
  heading: 'Same outcome, three starting points',
  lede:
    'Every firm starts with the free AI Readiness and Governance Audit, then a free Audit review call that picks the route. Your firm owns the code, the agents and the roadmap.',
  implementationEyebrow: 'Implementation menu',
  implementationHeading: 'Fixed scope, you own it',
  implementationLede:
    'Open on any route. Each item is scoped in writing before work starts. You own what we build or set up.',
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
    id: routeAnchors.noTechLead,
    name: routeNames.leverageBoard,
    summary:
      'For firms of roughly 50 to 200 people with no senior tech lead. The Board sets direction and governs; build runs through the implementation menu.',
    body:
      'Senior AI judgement sits on your side of the table. The Board sets what to fix, what to build and how AI stays under your control. When the Board says build, work is scoped from the implementation menu and your firm keeps the code.',
    link: { href: routeLinks.leverageBoard, label: seeLeverageBoardLink },
  },
  {
    id: routeAnchors.itLead,
    name: routeNames.buildPartner,
    summary:
      'For firms with an IT director or similar who owns strategy but has no capacity to build. Your IT director stays in charge; we do not sell the Board on this route.',
    body:
      'We start with a fixed-scope Build Plan mapped to their roadmap. Then comes the build: alongside their team where they have developers, or we build it for you when they have no build capability, always under the IT director\'s direction. Ongoing Support keeps what is running maintained and updated.',
    bullets: [
      `${routeNames.buildPlan}: scoped against the roadmap before build budget moves.`,
      'The build: fixed scope, your firm owns the code.',
      `${routeNames.ongoingSupport}: monitoring, updates and changes for what was built or set up.`,
    ],
  },
  {
    id: routeAnchors.smallFirm,
    name: routeNames.aiQuickStart,
    summary:
      'For firms of around 20 people where the Board is too much and they want something working, not another governance forum.',
    body:
      'A fixed 30 day engagement: take the one constraint the Audit surfaced, set up one or two agents or workflows, train the people who use them, include governance basics, then hand over. Ongoing Support follows, and many firms move up to the Leverage Board as they grow.',
    bullets: [
      'One problem from the Audit, one working agent or workflow.',
      'Governance basics included, then handover.',
      `${routeNames.ongoingSupport} and a path to the ${routeNames.leverageBoard} when the team is ready.`,
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
      'A custom harness built for one process. Fixed scope; your team runs it when we hand over.',
  },
  {
    title: routeNames.developerProgramme,
    body:
      'Train your developers in AI-driven development on their real backlog, so capability stays inside the firm.',
  },
  {
    title: routeNames.placement,
    body:
      'Help you hire a developer, trained from day one in how your firm builds with AI.',
  },
  {
    title: routeNames.ongoingSupport,
    body:
      'Monitoring, updates and changes for what was built or set up on any route.',
  },
] as const

export const leverageBoardAltRoute = {
  before: 'Not the right fit? ',
  linkLabel: 'See the other ways we work',
  href: waysWeWorkPath,
  after: '.',
} as const
