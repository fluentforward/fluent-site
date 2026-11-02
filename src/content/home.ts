import { scoreCta, reviewCallCta } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import {
  routeLinks,
  routeNames,
  seeAiQuickStartLink,
  seeDeliveryLink,
  seePartnershipLink,
} from '@/content/routes'
import { site } from '@/content/site'

export const hero = {
  eyebrow:
    'Profit Engine for agencies, consultancies and professional services firms',
  headline: 'Busy is not profitable. Install the engine that is.',
  subhead:
    'More people, more tools, more AI just makes the wrong work go faster. We find the one constraint across your Offers, Demand and Delivery that is capping margin, then install the engine that brings in the right clients at the right margin. Without hiring in a straight line.',
  primaryCta: scoreCta,
  secondaryCta: reviewCallCta,
  secondaryWebinar: { label: 'Watch the webinar', href: '/#webinar' },
}

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
  heading: 'Two ways to install. Ninety days either way.',
  lede:
    'Same engine, same outcome. The difference is who does the building. Either way, it is yours when we are done.',
  cards: [
    {
      title: routeNames.installPartnership,
      ifYou:
        'You have people who can build and need direction, pace and a system.',
      body:
        'We install with your team. Our senior team leads. Your people build alongside us. You come out with a working engine and a team that knows how to drive it.',
      link: { href: routeLinks.partnership, label: seePartnershipLink },
    },
    {
      title: routeNames.installDelivery,
      ifYou:
        'You are flat out on client work and cannot spare people to build.',
      body:
        'We install for you. Our team does the build. You make the calls; we ship the engine. Minimal drag on billable time.',
      link: { href: routeLinks.delivery, label: seeDeliveryLink },
    },
    {
      title: routeNames.aiQuickStart,
      ifYou:
        'You want a short, fixed-scope sprint on one lever before a full Install.',
      body:
        'Not ready for ninety days? A clean way to prove the case, then move into Install when you are ready.',
      link: { href: routeLinks.aiQuickStart, label: seeAiQuickStartLink },
    },
  ],
  runLine:
    'After Install comes Run. We can stay on to operate, tune and extend the engine month to month. Run is only for firms who have installed. We do not run engines we did not build.',
  scoreLine:
    'Not sure which fits? Get your Profit Constraint Score first. Three minutes, instant result, no sales pitch.',
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
    'Clarity on whether Offers, Demand or Delivery is binding you now.',
    'Packaging that turns freed capacity into priced outcomes, not more billable hours.',
    'Demand aimed at work that fits the offer and the margin you want.',
    'Delivery with AI under ownership that protects profit as volume rises.',
    'A cycle that re-checks all three so the next limit does not quietly kill growth.',
    'Code, agents and playbooks your firm owns.',
  ],
}

export const fit = {
  builtForHeading:
    'Built for owners who need profit from growth, not just more people',
  builtFor:
    'Agencies, consultancies, professional and managed services of around 20 to 200 people. If you need more of the right clients at prices that hold, and delivery that turns that work into margin without a hire for every win, Profit Engine runs Offers, Demand and Delivery as one system: Install Partnership or Install Delivery.',
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
  heading: 'Fix the one thing that is holding it back.',
  steps: [
    {
      title: 'Score',
      body:
        'Three minutes. Know what is binding across Offers, Demand and Delivery. Instant result before any call.',
    },
    {
      title: 'Constraint review',
      body:
        'A free call. We test the score against your numbers and agree whether Install Partnership or Install Delivery fits. Straight answers, including when we are not the right fit.',
    },
    {
      title: 'Install',
      body:
        'Ninety days. The fix goes in and stays in. Your firm owns the engine, the code and the playbooks.',
    },
    {
      title: 'Run',
      body:
        'Optional after Install. We stay on to tune and extend the engine month to month. Run is only for firms who have installed.',
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
    { label: 'Date', value: 'To be announced' },
  ],
  ctaLabel: 'Register soon',
  ctaHref: `mailto:${site.email}?subject=Profit%20Engine%20webinar`,
  ctaNote:
    'Registration opens soon. Email us if you want a note when the date is set.',
} as const

export const closing = {
  eyebrow: 'Start here',
  heading: 'Find your binding constraint in three minutes.',
  buildLine:
    'If the review does not find a constraint worth fixing, we will say so. No pitch.',
  primaryCta: scoreCta,
  secondaryCta: reviewCallCta,
}
