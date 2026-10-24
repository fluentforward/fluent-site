import { auditCta, boardConversationCta } from '@/content/board'
import { gartnerPressReleases } from '@/content/gartner'
import {
  routeLinks,
  routeNames,
  seeAiQuickStartLink,
  seeBuildPartnerLink,
  seeLeverageBoardLink,
  waysWeWorkPath,
  routeAnchors,
} from '@/content/routes'

export const hero = {
  headline:
    'Senior AI judgement for services firms that want to grow without adding headcount.',
  lede:
    'For owner-led agencies, consultancies and professional services firms of 20 to 200 people. We help you decide what to fix, what to build and who should build it, before you spend a penny on build.',
  primaryCta: auditCta,
  secondaryCta: boardConversationCta,
  auditHint: auditCta.hint,
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
        'In 30 days, the one problem your Audit found is handled by an agent or workflow your people know how to run, and it stays yours.',
      link: { href: routeLinks.aiQuickStart, label: seeAiQuickStartLink },
    },
  ],
  auditLine:
    'Not sure which fits? The free AI Readiness and Governance Audit will show you.',
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
  heading: 'What changes when judgement stays with you',
  items: [
    'AI you control, not AI that happens to you.',
    'A build partner chosen on merit, not on who pitched first.',
    "A roadmap and IP you own, not a vendor's lock-in.",
    'More output per person, not more people.',
  ],
}

export const fit = {
  builtForHeading: 'Built for',
  builtFor:
    'Owner-led services firms of 20 to 200 people (agencies, consultancies, professional and managed services) where client work runs on people, inboxes and spreadsheets, and the owner wants growth without adding the same again in headcount.',
  lineHeading: 'Where we draw the line',
  notForHeading: "The Board isn't for you if:",
  notFor: [
    "You sell software. If SaaS or a product is your core business, you need a product team, not a Board.",
    {
      before: "You're under about 20 people. ",
      link: {
        label: routeNames.aiQuickStart,
        href: `${waysWeWorkPath}#${routeAnchors.smallFirm}`,
      },
      after:
        ' is the starting point; the Board pays off once there is a team to multiply.',
    },
    "You want a chatbot or a licence. We don't resell tools.",
    'You want to rent a development team. We build capability inside your firm instead.',
    'You want a multi-year transformation programme. We work in short, visible steps, and you see progress as it happens.',
  ],
  auditLine:
    'Not sure which side you are on? The Audit will tell you in about ten minutes.',
}

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Three steps in',
  steps: [
    {
      title: 'AI Readiness and Governance Audit',
      body:
        'A short online assessment of where you stand on AI control and capacity, and where leverage is stuck.',
    },
    {
      title: 'Free Audit review call',
      body:
        'Thirty minutes with the practice to sense-check fit and pick the right route. Straight answers, including when the Board is not the right move.',
    },
    {
      title: 'Start on the right route',
      body:
        'Settle what to fix, what to build, who builds it and how AI is controlled on the route that fits, before build budget moves.',
    },
  ],
  closing: 'Then we keep re-scoring as you grow.',
}

export const closing = {
  eyebrow: 'Next step',
  heading: "See if you're a fit.",
  buildLine:
    'When the Board says build, we work alongside your developers, or help you place one, and train them in AI-driven development, so your firm owns the code and keeps the capability.',
  primaryCta: auditCta,
  secondaryCta: boardConversationCta,
}
