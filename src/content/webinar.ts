import { site } from '@/content/site'

/** Edit this block only if the live session date or time changes. */
export const webinarSession = {
  whenLine: 'Tuesday 15 December 2026 · 11:00 GMT · live online (Demio)',
  homeDateLabel: 'Tue 15 Dec 2026 · 11:00 GMT',
  isoStart: '2026-12-15T11:00:00.000Z',
} as const

export const webinarMeta = {
  title: 'Stop Getting Busier. Install a Profit Engine.',
  description:
    'Free live webinar for owner-led agencies, consultancies and professional services firms. Why AI and extra capacity fail when Offers, Demand or Delivery is wrong, and how to fix the binding constraint.',
} as const

export const webinarHero = {
  eyebrow: 'Free live webinar',
  title: webinarMeta.title,
  subtitle:
    'Why AI and extra capacity fail when Offers, Demand or Delivery is wrong, and how to fix the binding constraint.',
  whenLine: webinarSession.whenLine,
  lede:
    'Free live session for owners of agencies, consultancies and professional and managed services firms of about 20 to 200 people (UK and US). More of the right client work at stronger margins, without hiring in a straight line.',
} as const

export const webinarWhoFor = {
  heading: 'Who it is for',
  items: [
    'Owner-led agencies, consultancies, professional and managed services',
    'About 20 to 200 people; UK first, US welcome',
    'Busy firms where Offers, Demand or Delivery is capping margin',
  ],
} as const

export const webinarLeaveWith = {
  heading: 'What you will leave with',
  items: [
    'Why busy is not the same as profitable',
    'How to tell which of Offers, Demand or Delivery is binding you now',
    'What not to fix first (and why AI and extra headcount fail when pointed at the wrong lever)',
    'A clear next step after the session',
  ],
} as const

export const webinarNotFor = {
  heading: 'Who it is not for',
  items: [
    'SaaS or product-core businesses',
    'Solo operators and firms under about 10',
    'Anyone shopping for a chatbot licence, day-rate developers, or a multi-year transformation programme',
  ],
} as const

export const webinarTrust = {
  heading: 'What to expect',
  items: [
    'Free. About 50 minutes plus optional Q&A.',
    'No price, no offer close on stage, and no pitch on stage.',
    'After the session you can book a free Constraint review if useful.',
    'Cannot make it live? Register and we will send the replay and join details via Demio.',
  ],
} as const

export const webinarFaq = {
  eyebrow: 'Questions',
  heading: 'Before you register',
  items: [
    {
      question: 'Is it free?',
      answer: 'Yes.',
    },
    {
      question: 'Will I be sold to on the call?',
      answer:
        'The session is teaching. The only hard ask at the end is a free Constraint review if you want one.',
    },
    {
      question: 'Is this about AI?',
      answer:
        'AI runs inside the engine. Diagnosis of Offers, Demand or Delivery comes first.',
    },
    {
      question: 'Replay?',
      answer: 'Yes for registrants, via Demio.',
    },
  ],
} as const

export const webinarPostPath = {
  before: 'After the webinar, book your free Constraint review at ',
  linkLabel: 'fluentforward.com/review',
  href: '/review',
  after:
    '. The Profit Constraint Score is optional prep after booking only, not a prerequisite to register.',
} as const

export const webinarForm = {
  ctaLabel: 'Register free',
  firstNameLabel: 'First name',
  emailLabel: 'Work email',
  marketingOptInLabel:
    'Send me occasional FluentForward updates on Profit Engine and related topics. You can unsubscribe any time.',
  privacyNote: `By registering you agree we may process your details to run this webinar and send Demio confirmations. See our `,
  privacyHref: '/privacy',
  privacyLinkLabel: 'Privacy Policy',
  demioPendingNote:
    'Live registration needs Demio API keys or the embed ref on this deployment. See README (Demio event 1021063).',
} as const

export const webinarThanks = {
  eyebrow: 'You are in',
  title: 'See you on the webinar.',
  body:
    'Demio will send your confirmation email and calendar invite. Your join link arrives from Demio before we go live. Add the session to your diary:',
  whenLine: webinarSession.whenLine,
  replayNote:
    'If you cannot make it live, keep the Demio emails. Registrants get the replay.',
  reviewSoft: {
    before: 'After the session, a free Constraint review may be useful. Book at ',
    linkLabel: 'fluentforward.com/review',
    href: '/review',
    after: ' when you are ready.',
  },
  helpEmail: site.email,
} as const

export const webinarPath = '/webinar' as const
export const webinarThanksPath = '/webinar/thanks' as const
