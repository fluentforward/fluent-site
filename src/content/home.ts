import { auditCta, reviewCallCta } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import {
  routeLinks,
  routeNames,
  seeAiQuickStartLink,
  seeDeliveryLink,
  seePartnershipLink,
} from '@/content/routes'

export const hero = {
  headline: 'Win more client work without hiring more people.',
  subhead:
    'More proposals out, fewer handoff failures, and a team that can take the next client without burning out.',
  whoFor:
    'For services firms stuck between "we\'re busy" and "we can\'t take the next client."',
  buyerLine:
    'Services firms know AI will reshape the work, and worry they will be disrupted if they do not move. We give you a safe path to more client capacity: with your team, or we deliver more of it.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}

export const growthLimits = {
  eyebrow: 'What\u2019s actually stopping you',
  heading: 'Three places growth dies in a services firm.',
  lede:
    'Most firms start with tools. Start with what\u2019s capping the next client. Fix one, and the next limit shows up. That is how capacity compounds.',
  items: [
    {
      title: 'If your offer is wrong',
      body:
        'If you still sell hours or days, every AI win becomes a leaner timesheet, not more revenue. Seniors reinvent the deal. Margin stays stuck. Fix packaging and how you get paid first, so freed time turns into productised offers, retainers or scoped outcomes. Then demand work is worth doing.',
    },
    {
      title: 'If your go-to-market is thin',
      body:
        'If the calendar is not filling with the right conversations, a strong delivery team still starves. Feast and famine. Partners become the pipeline. Fix demand inside the same programme after diagnosis, on a scorecard you own, so new work is real before you scale throughput.',
    },
    {
      title: 'If delivery breaks when you grow',
      body:
        'If you struggle to get proposals out, hand work cleanly, or take the next client without your best people becoming the glue, growth means hiring. AI without ownership makes the checking worse. Fix throughput and ownership so the team can say yes, then the next limit (offers or demand) becomes obvious.',
    },
  ],
  closing:
    'Client Capacity finds which of these is stopping you now, clears it, and runs the same cycle when the next one shows up.',
} as const

export const whereToStart = {
  eyebrow: 'Where to start',
  heading: 'Client Capacity',
  lede:
    'One programme for offers, demand and delivery. Two modes. Same outcome: more client work without a linear headcount climb.',
  cards: [
    {
      title: routeNames.clientCapacityPartnership,
      ifYou:
        'You want this cleared through your team, and the capability left in the firm.',
      body:
        'Done with you. We find what\u2019s stopping the next client, ship the first win with your people, install the cycle rhythm, and include owned shipping capability when the bet needs it.',
      link: { href: routeLinks.partnership, label: seePartnershipLink },
    },
    {
      title: routeNames.clientCapacityDelivery,
      ifYou:
        'You want the same clearance, with us doing more of the build and ship.',
      body:
        'Done for you. Same diagnosis and cycle. Fixed scope, your firm owns the code.',
      link: { href: routeLinks.delivery, label: seeDeliveryLink },
    },
    {
      title: routeNames.aiQuickStart,
      ifYou:
        'You are around 20 people and want one thing working with AI, not another programme.',
      body:
        'Thirty days, fixed scope. Then a path into Client Capacity as you grow.',
      link: { href: routeLinks.aiQuickStart, label: seeAiQuickStartLink },
    },
  ],
  auditLine:
    'Not sure which fits? Start with First AI Move. Leave with one first AI move for your firm, how it fits the tools you already pay for, and a rough idea of what it could free up, using your own numbers.',
} as const

export const sectorStrip = {
  eyebrow: "Sectors we've already been inside",
  heading: 'Services firms where people are the product.',
  lede:
    'Anonymised engagements. Same buyer shape: owners and operators who need more client work without a linear headcount climb.',
  chips: [
    {
      label: 'Energy & utilities',
      line: 'Process owned, not bent around the CRM.',
    },
    {
      label: 'Healthcare',
      line: 'An owned platform that could match, meet, take payment, and partner.',
    },
  ],
} as const

export const whyFixesFail = {
  heading: 'Your best people have become the glue between your systems.',
  intro:
    'Every new client adds chasing, copying and checking, so growth means hiring. More licences rarely fix a weak offer, a thin pipeline, or broken handoffs. They add tools while the firm stays dependent on the same people.',
  gartner: {
    heading: 'Most agentic projects will not survive the forecast',
    body:
      'Gartner forecasts that more than 40% of agentic AI projects will be cancelled by the end of 2027, mostly for cost, unclear value, or weak risk controls. Strategy has to come before build: decide what to fix, what to build, who builds it and how AI stays under your control.',
    attribution:
      'Source: Gartner press release, 25 June 2025. Not an endorsement of FluentForward.',
    sourceUrl: gartnerPressReleases.agenticProjectsCancelled2027,
  },
}

export const outcomes = {
  heading: 'What changes for your firm',
  items: [
    'Clarity on what\u2019s stopping the next client: offers, demand or delivery.',
    'A first win you can see in the business, not a pilot deck.',
    'Packaging that captures freed capacity so it does not fall back into billable hours.',
    'AI ownership rules so people own the commercial, the relationship and the quality bar.',
    'A rhythm that re-checks offers, demand and delivery when one limit clears.',
    'Code, agents and roadmap your firm owns.',
  ],
}

export const fit = {
  builtForHeading:
    'Built for services firms stuck between busy and the next client',
  builtFor:
    'Agencies, consultancies, professional and managed services of around 20 to 200 people, where client work runs on people, inboxes and spreadsheets. Client Capacity clears what\u2019s capping growth across offers, demand and delivery: Partnership or Delivery.',
  lineHeading: 'Where we draw the line',
  notForHeading: "We're not the right fit if:",
  notFor: [
    'You sell software. If SaaS or a product is your core business, you need a product team.',
    "You're a team of fewer than about 10. First AI Move is still useful, but our work pays off once there is a team to multiply.",
    "You want a chatbot or a licence. We don't resell tools.",
    'You want to rent developers by the day. Every build we do is fixed scope, and your firm owns it.',
    'You want a multi-year transformation programme. We work in short, visible steps, and you see progress as it happens.',
  ],
  auditLine: 'Not sure? First AI Move takes about five minutes. No sales pitch.',
}

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Find what\u2019s stopping you. Clear it. Repeat.',
  steps: [
    {
      title: 'Find where capacity is leaking',
      body:
        'First AI Move shows where capacity is leaking, how it fits the tools you already pay for, and what a first win could free up, using your own numbers.',
    },
    {
      title: 'Name what\u2019s stopping you and how we run it',
      body:
        'On a free Audit review call we name whether offers, demand or delivery is capping you now, and agree the mode: Client Capacity Partnership (through your team, with owned shipping capability when the bet needs it) or Client Capacity Delivery (we ship more of it). Straight answers, including when we are not the right fit.',
    },
    {
      title: 'Ship the first win, then re-check',
      body:
        'Same Tess cycle either way. We clear that limit with your team or deliver more of it under your control, with AI ownership rules and a cycle rhythm that re-checks offers, demand and delivery. Your firm owns the code, the agents and the know-how.',
    },
  ],
  closing:
    'Fix one limit and the next becomes obvious. That is how capacity compounds.',
}

export const closing = {
  eyebrow: 'Next step',
  heading: 'Find what\u2019s stopping the next client.',
  buildLine:
    'However you start, your firm owns the code and keeps the capability.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}
