/** Single source for route and offer names, anchors, and ways-we-work hub copy. */

import {
  buildModes,
  process as profitEngineProcess,
} from '@/content/profit-engine'

export const routeNames = {
  profitEngine: 'Profit Engine',
  profitEngineOnRamp: 'Profit Engine on-ramp',
  run: 'Run',
  profitEngineInsights: 'Profit Engine Insights',
  buildPlan: 'Build Plan',
  workflowAgent: 'Workflow agent',
  bespokeHarness: 'Bespoke harness',
  productEngineerPath: 'Owned shipping capability',
  placement: 'Placement',
  ongoingSupport: 'Ongoing support',
} as const

export const routeAnchors = {
  onRamp: 'profit-engine-on-ramp',
  run: 'run',
  insights: 'profit-engine-insights',
  buildWithYourTeam: 'build-with-your-team',
  weShipTheBuild: 'we-ship-the-build',
  /** @deprecated Legacy anchor; redirected */
  partnership: 'build-with-your-team',
  /** @deprecated Legacy anchor; redirected */
  delivery: 'we-ship-the-build',
  /** @deprecated Legacy alias */
  legacySmallEngagement: 'profit-engine-on-ramp',
  /** @deprecated */
  smallFirm: 'profit-engine-on-ramp',
} as const

export const waysWeWorkPath = '/ways-we-work' as const
export const profitEnginePath = '/profit-engine' as const
export const howItWorksPath = '/how-it-works' as const

/** @deprecated Use profitEnginePath */
export const clientCapacityPath = profitEnginePath

export const routeLinks = {
  profitEngine: profitEnginePath,
  buildWithYourTeam: `${profitEnginePath}#${routeAnchors.buildWithYourTeam}`,
  weShipTheBuild: `${profitEnginePath}#${routeAnchors.weShipTheBuild}`,
  waysWeWork: waysWeWorkPath,
  howItWorks: howItWorksPath,
  onRamp: `${waysWeWorkPath}#${routeAnchors.onRamp}`,
  run: `${waysWeWorkPath}#${routeAnchors.run}`,
  insights: `${waysWeWorkPath}#${routeAnchors.insights}`,
  /** Legacy alias */
  partnership: `${profitEnginePath}#${routeAnchors.buildWithYourTeam}`,
  /** Legacy alias */
  delivery: `${profitEnginePath}#${routeAnchors.weShipTheBuild}`,
  /** Legacy */
  legacyQuickRoute: `${waysWeWorkPath}#${routeAnchors.onRamp}`,
  /** @deprecated */
  legacyHubAnchor: `${waysWeWorkPath}#${routeAnchors.onRamp}`,
  clientCapacity: profitEnginePath,
} as const

export const seeProfitEngineLink = `How ${routeNames.profitEngine} works` as const
/** @deprecated Use seeProfitEngineLink */
export const seeClientCapacityLink = seeProfitEngineLink
export const seeBuildWithYourTeamLink =
  `See ${buildModes.withYourTeam.name}` as const
export const seeWeShipTheBuildLink = `See ${buildModes.weShipTheBuild.name}` as const
/** @deprecated */
export const seePartnershipLink = seeBuildWithYourTeamLink
/** @deprecated */
export const seeDeliveryLink = seeWeShipTheBuildLink
/** @deprecated */
export const seeLegacyEngagementLink = seeProfitEngineLink

/** Call-only secondary; same line as homepage where Insights is mentioned. */
export const profitEngineInsightsFootnote =
  'Profit Engine Insights is call-only qualification when the full on-ramp is not the right move yet. We stand up live sensing so both sides see the leak before you commit to the on-ramp. It does not fix the lever. Terms are confirmed on a call.' as const

export const waysWeWorkMeta = {
  title: 'Ways we work | FluentForward',
  description:
    'Profit Engine on-ramp: six weeks, one scored lever, dashboards and realtime analytics, AI agents on that lever. Then Run for always-on profit control. Start with the Profit Constraint Score or book a Constraint review.',
} as const

export const waysWeWorkStructuredServiceType =
  'Profit Engine advisory and implementation for services firms' as const

export const waysWeWorkHub = {
  eyebrow: 'Ways we work',
  heading: 'Profit Engine on-ramp first. Run after.',
  lede:
    'Six weeks. One scored lever across Offers, Demand and Delivery. You get dashboards and realtime analytics on all three, plus AI agents and automation shipped on the binding lever. After the on-ramp, Run is always-on profit control: continuous sensing and fix-forward, not a quarterly board rhythm. Start with the Profit Constraint Score or a free Constraint review call. Commercial terms are agreed in writing; nothing is priced on this site.',
  customSoftwareLine:
    'Bigger custom software is scoped separately when the bet needs it.',
  implementationEyebrow: 'Inside an on-ramp or Run engagement',
  implementationHeading: 'What we can build or stand up',
  implementationLede:
    'Each item is scoped in writing before work starts, and your firm owns everything we ship.',
} as const

export const waysWeWorkStartingPoints = {
  eyebrow: 'Where to start',
  heading: 'Score first, or talk first',
  lede:
    'Both end in the same straight conversation: fit, the binding lever, and whether a six-week on-ramp is the right move.',
  profitConstraintScore: {
    title: 'Profit Constraint Score',
    body:
      'In a few minutes, see which of Offers, Demand, or Delivery is binding you now, and what fixing that constraint could mean for revenue and margin with the team you already have. Results before any call.',
  },
  reviewCall: {
    title: 'Constraint review',
    body:
      'Book a free call to test the score against your numbers and align on next steps, including when we are not the right fit.',
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

const onRampRoute: WaysWeWorkRoute = {
  id: routeAnchors.onRamp,
  name: routeNames.profitEngineOnRamp,
  summary: 'Six weeks. One binding lever. Dashboards, realtime analytics, AI agents.',
  body:
    'Default front door for most firms. We diagnose Offers, Demand and Delivery, agree one scored lever, then ship live dashboards and realtime sensing across all three, with AI agents and automation on that lever. Never tooling-only: there is always a measurable move on margin. Commercial terms are agreed in writing; no public price here.',
  bullets: [
    'Realtime visibility across Offers, Demand and Delivery so you see the binding profit leak before a bad quarter.',
    'AI agents on the scored lever so more of the right work ships at stronger margins without hiring in a straight line.',
    'First constraint materially moved inside six weeks; then you choose how Run continues the rhythm.',
  ],
  link: { href: routeLinks.profitEngine, label: seeProfitEngineLink },
}

const runRoute: WaysWeWorkRoute = {
  id: routeAnchors.run,
  name: routeNames.run,
  summary: 'Always-on profit control after the on-ramp.',
  body:
    'Run is continuity only: continuous sensing and fix-forward on the engine from your on-ramp with us. It is not a substitute for the on-ramp and it is never the first engagement.',
  bullets: [
    'Keeps the scorecard and agents honest as volume and mix shift.',
    'Fixes forward on the next binding limit instead of waiting for a bad quarter to appear in the rear-view mirror.',
  ],
}

/** Primary offer sections on the hub: on-ramp and Run only (Insights is a footnote under on-ramp). */
export const waysWeWorkPrimaryRoutes: readonly WaysWeWorkRoute[] = [
  onRampRoute,
  runRoute,
] as const

/** Full list including anchor for Insights (deep-link only). */
export const waysWeWorkRoutes: readonly WaysWeWorkRoute[] = [
  onRampRoute,
  runRoute,
] as const

export type ImplementationMenuItem = {
  title: string
  body: string
}

export const implementationMenu: readonly ImplementationMenuItem[] = [
  {
    title: routeNames.workflowAgent,
    body:
      'One agent on one workflow, with governance included. Scoped in writing; your firm owns what we ship.',
  },
  {
    title: routeNames.bespokeHarness,
    body:
      'A custom AI system built around one of your processes. Fixed scope, and your team runs it once we hand over.',
  },
  {
    title: routeNames.productEngineerPath,
    body:
      'When the bet needs owned build, we work alongside your developers on your real backlog, or help you place one, so capability stays in your firm. Optional when we ship more of the build for you.',
  },
  {
    title: routeNames.placement,
    body:
      'We help you hire a developer, trained from day one in how your firm builds with AI, when that is the right move.',
  },
  {
    title: routeNames.ongoingSupport,
    body: 'Monitoring, updates and changes for what we shipped.',
  },
] as const

export const profitEngineAltRoute = {
  before: 'Want the full menu of scoped build and configuration work? ',
  linkLabel: 'See ways we work',
  href: waysWeWorkPath,
  after: '.',
} as const

/** @deprecated Use profitEngineAltRoute */
export const clientCapacityAltRoute = profitEngineAltRoute
