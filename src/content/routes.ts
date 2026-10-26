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
    'Same outcome, three starting points. First AI Move and a free Audit review call show which route fits you. Your firm owns everything we build or set up.',
} as const

export const waysWeWorkHub = {
  eyebrow: 'Ways we work',
  heading: 'Same outcome, three starting points',
  lede:
    'The outcome is the same for every route: win more client work without hiring more people. You start with First AI Move, then a free Audit review call that picks your route. Your firm owns the code, the agents and the roadmap.',
  implementationEyebrow: 'On any route',
  implementationHeading: 'What we can set up or build',
  implementationLede:
    'Each one is scoped in writing before work starts, and your firm owns everything we build or set up.',
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
    summary: 'For firms of roughly 50 to 200 people with no senior tech lead.',
    body:
      'Senior AI judgement on your side of the table. The Board decides what to fix, what to build and how AI stays under your control. When it says build, the work is scoped from the options below, and your firm owns the code.',
    link: { href: routeLinks.leverageBoard, label: seeLeverageBoardLink },
  },
  {
    id: routeAnchors.itLead,
    name: routeNames.buildPartner,
    summary:
      'For firms with an IT director or tech lead who owns the plan, but nobody to build it. Your IT director stays in charge.',
    body:
      'We start with a fixed-scope Build Plan, mapped to your roadmap. Then comes the build: alongside your developers if you have them, or we build it for you if you do not, always under your IT director\'s direction. Ongoing Support keeps what is running maintained and up to date.',
    bullets: [
      'Build Plan: scoped against your roadmap before build budget moves.',
      'The build: fixed scope, your firm owns the code.',
      `${routeNames.ongoingSupport}: monitoring, updates and changes for what was built or set up.`,
    ],
  },
  {
    id: routeAnchors.smallFirm,
    name: routeNames.aiQuickStart,
    summary:
      'For firms of around 20 people who want one thing working with AI, not another programme.',
    body:
      'Thirty days, fixed scope. We take that first AI move, set up one or two agents or workflows for it, train the people who use them, build in the governance basics, and hand it all over. Ongoing Support follows, and you can move up to the Leverage Board as you grow.',
    bullets: [
      'One first AI move, one or two working agents or workflows.',
      'Governance basics included, then handover.',
      `${routeNames.ongoingSupport} and a path to the ${routeNames.leverageBoard} when you are ready.`,
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
    title: routeNames.developerProgramme,
    body:
      'We train your developers in AI-driven development on your real backlog, so the capability stays in your firm.',
  },
  {
    title: routeNames.placement,
    body:
      'We help you hire a developer, trained from day one in how your firm builds with AI.',
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
