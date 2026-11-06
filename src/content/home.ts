import { scoreCta, reviewCallCta } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import { webinarSession, webinarPath } from '@/content/webinar'
import {
  profitEngineInsightsFootnote,
  routeLinks,
  routeNames,
  seeBuildWithYourTeamLink,
  seeWeShipTheBuildLink,
} from '@/content/routes'

/** Outcome-first hero; product line sits below H1, not inside it. */
export const hero = {
  eyebrow: 'For agencies, consultancies and professional services firms',
  headlineLead: 'Busy is not profitable.',
  headlineAccent: 'Growth without margin is a trap.',
  productLine:
    'Profit Engine: we deploy a realtime dashboard driven by AI, then we work with you to unblock what holds back growth and margin.',
  subhead:
    'Revenue can grow while margin stalls because something in how you win clients, recognise revenue, or deliver work is wrong. We deploy a realtime dashboard driven by AI so you get realtime insights on what it costs to acquire clients, on revenue, and on what it costs to deliver your work. We then work with you to unblock what is holding back growth and margin.',
  primaryCta: scoreCta,
  secondaryCta: reviewCallCta,
} as const

export const growthLimits = {
  eyebrow: 'Sound familiar?',
  heading: 'Three ways a busy firm stays unprofitable.',
  lede:
    'Different symptoms. One binding limit. More people, tools, or AI on top of that limit only accelerates the wrong work.',
  items: [
    {
      title: 'Offers',
      paragraphs: [
        'We deploy a realtime AI dashboard on how you package and price so you get insights on what it costs to acquire clients, on revenue, and on what it costs to deliver your work.',
        'You see where margin leaks before you sign the next deal, so you tighten packaging and pricing around outcomes.',
        'That lifts realised margin on the work you already chase.',
      ],
    },
    {
      title: 'Demand',
      paragraphs: [
        'We run the same dashboard view on how demand hits your calendar so you get realtime insights on client acquisition cost, revenue, and delivery cost against the margin you want, not just volume.',
        'You rebalance targeting and qualification so the pipeline shifts toward work that holds margin instead of busy months that do not.',
      ],
    },
    {
      title: 'Delivery',
      paragraphs: [
        'We use the dashboard to show throughput and delivery cost against margin as volume rises, before the quarter closes.',
        'You fix the handoffs and rules that eat profit so margin holds when the team is already flat out.',
      ],
    },
  ],
  closing:
    'The Profit Constraint Score shows which of the three is binding you now so you are not guessing where to start.',
  closingLink: { href: scoreCta.href, label: scoreCta.label } as const,
} as const

export const whereToStart = {
  eyebrow: 'How you get there',
  headingLead: 'Find the ',
  headingAccent: 'binding constraint',
  headingTail: ', fix it in weeks, keep profit under control.',
  lede:
    'Most firms start with the Profit Constraint Score, then a short engagement on one lever while the realtime dashboard is live. After that, optional continuity keeps the same dashboard and insights honest as your mix changes.',
  pathCards: [
    {
      pathTitle: 'Find what is binding, then fix it fast',
      offerLabel: routeNames.profitEngineOnRamp,
      ifYou:
        'You want a straight read on what caps margin and a fixed window to move it with a realtime AI dashboard and agents on that lever.',
      body:
        'We map Offers, Demand and Delivery to one scored lever, then deploy the dashboard with automation and agents on that lever. Never advisory-only. Commercial terms are agreed in writing; nothing is priced here.',
      insightsFootnote: profitEngineInsightsFootnote,
      link: { href: routeLinks.profitEngine, label: 'How Profit Engine works' },
    },
    {
      pathTitle: 'Keep profit honest after the first fix',
      offerLabel: routeNames.run,
      ifYou:
        'You already worked with us on that first fix and want always-on profit control as volume shifts.',
      body:
        'The same dashboard and realtime insights, with fix-forward on what we built with you. Not a substitute for that first engagement.',
      insightsFootnote: null,
      link: { href: routeLinks.waysWeWork, label: 'See ways we work' },
    },
  ],
  howWorkGetsDoneHeading: 'How the work gets done',
  buildModeCards: [
    {
      title: 'With your team in the lead',
      ifYou: 'You have people who can build and need direction, pace and a system.',
      body:
        'We run alongside your team. Our senior people lead; your people ship with us. You come out with a working rhythm and a team that knows how to drive it.',
      link: { href: routeLinks.buildWithYourTeam, label: seeBuildWithYourTeamLink },
    },
    {
      title: 'We ship more of the build',
      ifYou: 'You are flat out on client work and need more of the delivery done for you.',
      body:
        'Our team does more of the build. You steer; we ship. Minimal drag on billable time.',
      link: { href: routeLinks.weShipTheBuild, label: seeWeShipTheBuildLink },
    },
  ],
  customSoftwareLine: 'Bigger custom software is scoped separately when the bet needs it.',
  runLine:
    'Ongoing continuity is only for firms who already did that first engagement with us.',
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
    'You name the binding limit across how you win work, fill the calendar, and deliver before it shows up as a bad quarter.',
    'You move one lever in a few weeks with the realtime dashboard and agents on that lever, not a slide deck.',
    'You keep margin when volume rises because throughput and pricing stay tied to the work you want.',
    'You run a weekly rhythm your leadership owns so the next leak surfaces early.',
    'You own code, agents and playbooks; nothing vital sits in a vendor black box.',
  ],
}

export const fit = {
  builtForHeading:
    'Built for owners who need profit from growth, not just more people',
  builtFor:
    'Agencies, consultancies, professional and managed services of around 20 to 200 people. If you need more of the right clients at prices that hold, and delivery that turns that work into margin without a hire for every win, this work runs Offers, Demand and Delivery as one system.',
  gartnerLine:
    'Many agentic AI programmes stall before they reach the P&L. Judgement before build budget moves matters.',
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
  heading: 'From a fast read to a rhythm you run.',
  steps: [
    {
      title: 'Score',
      body:
        'Three minutes. See what is binding across Offers, Demand and Delivery. Instant result before any call.',
    },
    {
      title: 'Constraint review',
      body:
        'A free call. We test the read against your numbers and agree what would matter first. Straight answers, including when we are not the right fit.',
    },
    {
      title: 'Fix the binding constraint in weeks',
      body:
        'A short engagement on one lever: live dashboards and analytics on all three lenses, agents and automation on the lever that caps margin. Profit Engine on-ramp: your firm owns what we ship.',
    },
    {
      title: 'Keep profit under control',
      body:
        'Optional continuity: the same dashboard with fix-forward as mix shifts. Run: only after that first engagement with us.',
    },
  ],
  closing:
    'Fix one limit and the next becomes obvious. That is how profit compounds.',
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
