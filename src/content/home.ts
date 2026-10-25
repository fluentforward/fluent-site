import { auditCta, firstAiMoveBuyerOneLiner, reviewCallCta } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import {
  routeLinks,
  routeNames,
  seeAiQuickStartLink,
  seeBuildPartnerLink,
  seeLeverageBoardLink,
} from '@/content/routes'

export const hero = {
  headline: 'Win more client work without hiring more people.',
  lede:
    "For agencies, consultancies and professional services firms of 20 to 200 people. We find the work that eats your team's time, get AI doing it safely, and your firm owns the result.",
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}

export const whereToStart = {
  heading: 'Where to start',
  cards: [
    {
      title: routeNames.leverageBoard,
      ifYou:
        'You run a 50 to 200 person firm and nobody senior owns AI or tech.',
      outcome:
        'Senior AI judgement on your side, so every AI and build decision is checked before you spend.',
      link: { href: routeLinks.leverageBoard, label: seeLeverageBoardLink },
    },
    {
      title: routeNames.buildPartner,
      ifYou:
        'You have an IT director, but no one to build what they have planned.',
      outcome:
        'Your IT director stays in charge, the build gets a fixed plan and a fixed scope, and your firm owns the code.',
      link: { href: routeLinks.buildPartner, label: seeBuildPartnerLink },
    },
    {
      title: routeNames.aiQuickStart,
      ifYou:
        'You are a firm of around 20 people and want one thing working with AI, not another meeting.',
      outcome:
        'In 30 days, that first AI move is handled by an agent or workflow your people know how to run, and it stays yours.',
      link: { href: routeLinks.aiQuickStart, label: seeAiQuickStartLink },
    },
  ],
  auditLine: `Not sure which fits? Start with First AI Move. ${firstAiMoveBuyerOneLiner}`,
} as const

export const pain = {
  heading: 'Your best people have become the glue between your systems.',
  body:
    'Every new client adds more chasing, copying and checking, so growth means hiring.',
}

export const whyFixesFail = {
  heading: 'Why the usual fixes fail',
  intro:
    'Vendor AI, more licences, chatbots, and agencies selling builds rarely fix the work between systems. They add tools while the firm stays dependent.',
  gartner: {
    heading: 'Most agentic projects will not survive the forecast',
    body:
      'Gartner forecasts that more than 40% of agentic AI projects will be cancelled by the end of 2027, mostly for cost, unclear value, or weak risk controls. Strategy has to come before build: decide what to fix, what to build, who builds it and how AI stays under your control.',
    attribution:
      'Source: Gartner press release, 25 June 2025. Not an endorsement of FluentForward.',
    sourceUrl: gartnerPressReleases.agenticProjectsCancelled2027,
  },
}

export const theBoard = {
  eyebrow: 'The Leverage Board',
  heading: 'Judgement on your side of the table',
  body:
    'The Leverage Board puts senior AI and operations judgement on your side of the table, so every AI and build decision makes your firm more productive per head and never more dependent on a vendor.',
  support:
    'Between sessions, scheduled portal office hours and the AI advisor help you prepare and recall decisions. The decisions stay with people.',
}

export const outcomes = {
  heading: 'What changes for your firm',
  items: [
    'AI you control, not AI that happens to you.',
    'A build partner chosen on merit, not on who pitched first.',
    "A roadmap and IP you own, not a vendor's lock-in.",
    'More output per person, not more people.',
  ],
}

export const fit = {
  builtForHeading: 'Built for services firms where people are the glue',
  builtFor:
    'Agencies, consultancies, professional and managed services firms of around 20 to 200 people, where client work runs on people, inboxes and spreadsheets. Whether you have an IT director, your own developers or nobody technical at all, there is a starting point that fits.',
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
  heading: 'From your first AI move to AI that works',
  steps: [
    {
      title: 'Find your first AI move',
      body: firstAiMoveBuyerOneLiner,
    },
    {
      title: 'Pick your starting point',
      body: `On a free Audit review call we agree the right route for your firm: the ${routeNames.leverageBoard}, ${routeNames.buildPartner} or ${routeNames.aiQuickStart}. Straight answers, including when we are not the right fit.`,
    },
    {
      title: 'Get it working',
      body:
        'We fix that first problem with your team, or for you, under your control. Your firm owns the code, the agents and the know-how.',
    },
  ],
  closing: 'Then we re-score as you grow and take on the next one.',
}

export const closing = {
  eyebrow: 'Next step',
  heading: 'Find your starting point.',
  buildLine:
    'However you start, your firm owns the code and keeps the capability.',
  primaryCta: auditCta,
  secondaryCta: reviewCallCta,
}
