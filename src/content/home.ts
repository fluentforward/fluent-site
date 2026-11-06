import { scoreCta, reviewCallCta } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import { webinarSession, webinarPath } from '@/content/webinar'
import {
  routeLinks,
  routeNames,
  seeBuildWithYourTeamLink,
  seeWeShipTheBuildLink,
} from '@/content/routes'
export const hero = {
  eyebrow:
    'Profit Engine for agencies, consultancies and professional services firms',
  headlineLead: 'Busy is not profitable.',
  headlineAccent: 'Six-week Profit Engine on-ramp, then Run.',
  subhead:
    'More people, more tools, more AI just makes the wrong work go faster. Profit Engine on-ramp: six weeks, one scored lever across Offers, Demand and Delivery, with dashboards, realtime analytics on all three, and AI agents on that lever. Then Run for always-on profit control: continuous sensing and fix-forward, not a quarterly board rhythm.',
  primaryCta: scoreCta,
  secondaryCta: reviewCallCta,
  secondaryWebinar: { label: 'Watch the webinar', href: '/#webinar' },
} as const

export const growthLimits = {
  eyebrow: 'Sound familiar?',
  heading: 'Three ways a busy firm stays unprofitable.',
  lede:
    'Different symptoms. One binding constraint. Add people, tools or AI before you fix it and you just get busier.',
  items: [
    {
      title: 'Offers',
      body:
        'You sell hours, not outcomes. Every proposal is bespoke and every price is a negotiation. Margin gets set by whoever pushes hardest on the call.',
    },
    {
      title: 'Demand',
      body:
        'Pipeline is referrals and luck. Great month, dead month. You take the work that turns up, not the work you want.',
    },
    {
      title: 'Delivery',
      body:
        'You are flat out, the team is stretched, and margin still is not there at month end. Growth means hiring, and hiring eats the profit.',
    },
  ],
  closing:
    'Profit Engine finds which constraint is binding you now, fixes it in order, and runs the same cycle when the next one shows up.',
} as const

export const whereToStart = {
  eyebrow: 'Ways we work',
  headingLead: 'On-ramp first, then ',
  headingAccent: 'Run',
  headingTail: '.',
  lede:
    'Most firms start with a six-week Profit Engine on-ramp on one scored lever, then move to Run. How we build depends on whether your team ships alongside us or we ship more of the build for you.',
  cards: [
    {
      title: routeNames.profitEngineOnRamp,
      ifYou:
        'You want the binding lever fixed in six weeks with dashboards, realtime Offers · Demand · Delivery analytics, and agents on that lever.',
      body:
        'Diagnosis, live sensing, automation and AI agents on one scored lever. Never advisory-only. Commercial terms are agreed in writing; nothing is priced here.',
      link: { href: routeLinks.profitEngine, label: 'How Profit Engine works' },
    },
    {
      title: routeNames.run,
      ifYou:
        'You have finished an on-ramp with us and want always-on profit control.',
      body:
        'Continuous sensing and fix-forward on the engine you installed. Not a substitute for the on-ramp.',
      link: { href: routeLinks.waysWeWork, label: 'See ways we work' },
    },
  ],
  buildModesIntro: 'Two ways we build the on-ramp:',
  buildModeCards: [
    {
      title: 'Build with your team',
      ifYou: 'You have people who can build and need direction, pace and a system.',
      body:
        'We install with your team. Our senior team leads. Your people build alongside us. You come out with a working engine and a team that knows how to drive it.',
      link: { href: routeLinks.buildWithYourTeam, label: seeBuildWithYourTeamLink },
    },
    {
      title: 'We ship more of the build',
      ifYou: 'You are flat out on client work and need more of the delivery done for you.',
      body:
        'We install for you. Our team does more of the build. You steer; we ship. Minimal drag on billable time.',
      link: { href: routeLinks.weShipTheBuild, label: seeWeShipTheBuildLink },
    },
  ],
  insightsLine:
    'Profit Engine Insights is call-only qualification when the full on-ramp is not the right move yet. It does not fix the lever. Terms are confirmed on a call.',
  customSoftwareLine: 'Bigger custom software is scoped separately.',
  runLine:
    'After the on-ramp, Run keeps the engine honest as volume and mix shift. Run is only for firms who completed an on-ramp with us.',
  scoreLine:
    'Not sure where to start? Get your Profit Constraint Score first. Three minutes, instant result, no sales pitch.',
} as const

export const whyFixesFail = {
  eyebrow: 'AI, properly placed',
  heading: 'AI lives in the engine room. Not on the label.',
  intro:
    'AI pointed at the wrong offer just does the wrong thing faster. Fix the constraint first, then put AI to work where it multiplies the result.',
  body:
    'Profit Engine sequences Offers, Demand and Delivery so margin shows up as revenue and profit, not a leaner timesheet. AI under rules you own runs inside that engine. It is never the product name.',
  isolation:
    'You cannot fix one of the three in isolation. A sharper offer with no demand stays a slide. Demand with a timesheet offer becomes busy discounting. Delivery AI with no packaging and no pipeline is a faster way to stay stuck.',
  gartner: {
    heading: 'Most AI projects never reach the P&L',
    body:
      'Gartner forecasts that more than 40% of agentic AI projects will be cancelled by the end of 2027, mostly for cost, unclear value or weak risk controls. Strategy before spend: decide what is capping revenue and profit, then build under your ownership.',
    attribution:
      'Source: Gartner press release, 25 June 2025. Not an endorsement of FluentForward.',
    sourceUrl: gartnerPressReleases.agenticProjectsCancelled2027,
  },
}

export const outcomes = {
  heading: 'What changes for your firm',
  items: [
    'See the binding profit leak across Offers, Demand and Delivery in realtime before it shows up as a bad quarter.',
    'AI agents on the scored lever so more of the right work ships at stronger margins without linear headcount.',
    'Clarity on whether Offers, Demand or Delivery is binding you now.',
    'Packaging that turns freed capacity into priced outcomes, not more billable hours.',
    'Demand aimed at work that fits the offer and the margin you want.',
    'Delivery with AI under ownership that protects profit as volume rises.',
    'A weekly rhythm that re-checks all three so the next limit does not quietly kill growth.',
    'Code, agents and playbooks your firm owns.',
  ],
}

export const fit = {
  builtForHeading:
    'Built for owners who need profit from growth, not just more people',
  builtFor:
    'Agencies, consultancies, professional and managed services of around 20 to 200 people. If you need more of the right clients at prices that hold, and delivery that turns that work into margin without a hire for every win, Profit Engine runs Offers, Demand and Delivery as one system with a six-week on-ramp, then Run.',
  lineHeading: 'Where we draw the line',
  notForHeading: "We are not the right fit if:",
  notFor: [
    'You sell software. If SaaS or a product is your core business, you need a product team.',
    'You are a team of fewer than about 10. The Profit Constraint Score can still help, but our work pays off once there is a team to multiply.',
    'You want a chatbot or a licence. We do not resell tools.',
    'You want to rent developers by the day. Every build we do is fixed scope, and your firm owns it.',
    'You want a multi-year transformation programme. We work in short, visible steps, and you see progress as it happens.',
  ],
  scoreLine: 'Not sure? The Profit Constraint Score takes about three minutes. No sales pitch.',
}

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Spot the leak. Fix one lever. Ship the rhythm.',
  steps: [
    {
      title: 'Score',
      body:
        'Three minutes. Know what is binding across Offers, Demand and Delivery. Instant result before any call.',
    },
    {
      title: 'Constraint review',
      body:
        'A free call. We test the score against your numbers and agree whether a six-week on-ramp fits. Straight answers, including when we are not the right fit.',
    },
    {
      title: 'On-ramp',
      body:
        'Six weeks on one scored lever: dashboards and realtime analytics on Offers, Demand and Delivery, plus AI agents and automation on that lever. Your firm owns what we ship.',
    },
    {
      title: 'Run',
      body:
        'Optional after the on-ramp. Always-on profit control: continuous sensing and fix-forward. Only for firms who completed an on-ramp with us.',
    },
  ],
  closing:
    'Fix one constraint and the next becomes obvious. That is how profit compounds.',
}

export const webinar = {
  eyebrow: 'Free webinar',
  heading: 'Stop Getting Busier. Install a Profit Engine.',
  subtitle:
    'Why AI and extra capacity fail when Offers, Demand or Delivery is wrong, and how to fix the binding constraint.',
  meta: [
    { label: 'Format', value: 'Live webinar and Q&A' },
    { label: 'Hosted by', value: 'The FluentForward team' },
    { label: 'Date', value: webinarSession.homeDateLabel },
  ],
  ctaLabel: 'Register free',
  ctaHref: webinarPath,
  ctaNote:
    'Free live session. Demio sends your confirmation, calendar invite and join link.',
} as const

export const closing = {
  eyebrow: 'Start here',
  heading: 'Find your binding constraint in three minutes.',
  buildLine:
    'If the review does not find a constraint worth fixing, we will say so. No pitch.',
  primaryCta: scoreCta,
  secondaryCta: reviewCallCta,
}
