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
    'For services firms where "we\'re busy" still means "we can\'t take the next client."',
  buyerLine:
    'Services firms know AI will reshape the work, and worry they will be disrupted if they do not move. We give you a safe path to more client capacity: with your team, or we deliver more of it.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}

export const bindingWall = {
  eyebrow: 'The real problem',
  heading: 'Busy is not capacity.',
  lede:
    'In a services firm, growth dies at one wall. Offers (how you package and get paid). Leads (whether enough of the right work comes in). Delivery (whether the team can take the next client). Client Capacity finds the wall that binds now, clears it, and captures the gain so you are not stuck selling more hours.',
  items: [
    {
      title: 'Offers bind',
      body:
        'You free time, still sell time, and revenue does not move. Packaging has to capture the capacity you create.',
    },
    {
      title: 'Leads bind',
      body:
        'The team could take more work. Qualified pipeline is the wall. Demand belongs in the same programme as delivery, after diagnosis.',
    },
    {
      title: 'Delivery bind',
      body:
        'Proposals, handoffs and throughput break when you grow. AI without ownership makes the glue people worse.',
    },
  ],
  closing:
    'Fix one wall and the next becomes the bottleneck. That is the point of the cycle, not a one-off project.',
} as const

export const whereToStart = {
  eyebrow: 'Where to start',
  heading: 'Client Capacity',
  lede:
    'One programme that clears the binding wall across Offers, Leads and Delivery. Two modes. Same outcome: more client work without a linear headcount climb.',
  cards: [
    {
      title: routeNames.clientCapacityPartnership,
      ifYou:
        'You want the wall cleared through your team, and the capability left in the firm.',
      body:
        'Done with you. We name the binding wall, ship the first win with your people, install the cycle rhythm, and include owned shipping capability when the bet needs it.',
      link: { href: routeLinks.partnership, label: seePartnershipLink },
    },
    {
      title: routeNames.clientCapacityDelivery,
      ifYou:
        'You want the same clearance, with us doing more of the build and ship.',
      body:
        'Done for you. Same diagnosis and cycle. Fixed scope, your firm owns the code, win lands in the cycle rhythm.',
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
    'Every new client adds chasing, copying and checking, so "growth" means hiring. More licences and vendor agents rarely clear the wall that actually binds. They add tools while Offers still sells time, Leads still runs dry, or Delivery still breaks on handoffs.',
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
    'A named binding wall: Offers, Leads or Delivery, not a generic AI wishlist.',
    'A first win on that wall, visible in the business, not a pilot deck.',
    'A commercial model that captures freed capacity so it does not collapse back into billable hours.',
    'AI ownership rules so people own the commercial, the relationship and the quality bar.',
    'A cycle that re-scores all three walls when one clears.',
    'Code, agents and roadmap your firm owns.',
  ],
}

export const fit = {
  builtForHeading:
    'Built for services firms stuck between busy and the next client',
  builtFor:
    'Agencies, consultancies, professional and managed services of around 20 to 200 people, where client work runs on people, inboxes and spreadsheets. Client Capacity clears the binding wall across Offers, Leads and Delivery: with your team (Partnership), or we deliver more of it (Delivery).',
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
  heading: 'Name the wall. Clear it. Repeat.',
  steps: [
    {
      title: 'Find where capacity is leaking',
      body:
        'First AI Move shows where capacity is leaking, how it fits the tools you already pay for, and what a first win could free up, using your own numbers.',
    },
    {
      title: 'Name the binding wall and the mode',
      body:
        'On a free Audit review call we name the binding wall (Offers, Leads or Delivery) and agree the mode: Client Capacity Partnership (through your team, with owned shipping capability when the bet needs it) or Client Capacity Delivery (we ship more of it). Straight answers, including when we are not the right fit.',
    },
    {
      title: 'Ship the first win, then re-score',
      body:
        'Same Tess cycle either way. We clear that wall with your team or deliver more of it under your control, with AI ownership rules and a cycle rhythm that re-scores all three walls. Your firm owns the code, the agents and the know-how.',
    },
  ],
  closing:
    'Fix one wall and the next becomes the bottleneck. That is how capacity compounds.',
}

export const closing = {
  eyebrow: 'Next step',
  heading: 'Find the wall that binds.',
  buildLine:
    'However you start, your firm owns the code and keeps the capability.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}
