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
    'For firms stuck between "we\'re busy" and "we can\'t take the next client."',
  buyerLine:
    'Services firms know AI will reshape the work, and worry they will be disrupted if they do not move. We give you a safe path to more client capacity: with your team, or we deliver more of it.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}

export const whereToStart = {
  eyebrow: 'Where to start',
  heading: 'Client Capacity',
  lede:
    'One program across Offers, Leads and Delivery. Two modes. Same outcome: win more client work without hiring more people.',
  cards: [
    {
      title: routeNames.clientCapacityPartnership,
      ifYou:
        'You want the process run through your team, and to keep the capability in your firm.',
      body:
        'Done with you. Diagnosis across Offers, Leads and Delivery, leverage list, first win, cycle rhythm, and owned shipping capability included when the bet needs it.',
      link: { href: routeLinks.partnership, label: seePartnershipLink },
    },
    {
      title: routeNames.clientCapacityDelivery,
      ifYou:
        'You want the same process, with us doing more of the build and ship.',
      body:
        'Done for you. Same process, with us doing more of the build and ship. Fixed scope, your firm owns the code, and the win still lands in a cycle rhythm.',
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
    "Every new client adds more chasing, copying and checking, so growth means hiring. Vendor AI, more licences, chatbots, and agencies selling builds rarely fix the work between systems. They add tools while the firm stays dependent.",
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
    'A clear read of the binding constraint: Offers, Leads or Delivery.',
    'More client capacity without a linear headcount climb.',
    'A commercial model that captures the capacity you free.',
    'AI you control, not AI that happens to you.',
    "A roadmap and IP you own, not a vendor's lock-in.",
    'More output per person, not more people.',
  ],
}

export const fit = {
  builtForHeading:
    'Built for services firms stuck between busy and the next client',
  builtFor:
    'Agencies, consultancies, professional and managed services firms of around 20 to 200 people, where client work runs on people, inboxes and spreadsheets. Client Capacity clears the binding wall across Offers, Leads and Delivery: with your team (Partnership), or we deliver more of it (Delivery).',
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
  heading: 'From First AI Move to capacity that sticks',
  steps: [
    {
      title: 'Find your first AI move',
      body:
        'First AI Move shows where capacity is leaking, how it fits the tools you already pay for, and what a first win could free up, using your own numbers.',
    },
    {
      title: 'Pick Partnership or Delivery',
      body:
        'On a free Audit review call we name the binding wall (Offers, Leads or Delivery) and agree the mode: Client Capacity Partnership (through your team, training included) or Client Capacity Delivery (we ship more of it). Straight answers, including when we are not the right fit.',
    },
    {
      title: 'Ship the first win',
      body:
        'Same process either way. We clear that first wall with your team, or we deliver more of it, under your control. Your firm owns the code, the agents and the know-how.',
    },
  ],
  closing:
    'Then we re-score as you grow. Fix one wall and the next becomes the bottleneck.',
}

export const closing = {
  eyebrow: 'Next step',
  heading: 'Find your starting point.',
  buildLine:
    'However you start, your firm owns the code and keeps the capability.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}
