import { auditCta, reviewCallCta } from '@/content/board'
import { clientCapacityPath, waysWeWorkPath } from '@/content/routes'

export type FaqAnswer =
  | string
  | {
      before: string
      link: { href: string; label: string }
      after: string
    }

export function faqAnswerText(answer: FaqAnswer): string {
  if (typeof answer === 'string') return answer
  return `${answer.before}${answer.link.label}${answer.after}`
}

export const meta = {
  title: 'How it works',
  description:
    'Stuck between busy and the next client? First AI Move and a free Audit review call name what is capping offers, demand or delivery, then Client Capacity Partnership or Delivery with code your firm owns.',
} as const

export const structuredServiceType =
  'Client Capacity advisory and implementation for services firms' as const

export const hero = {
  eyebrow: 'How it works',
  heading: 'From First AI Move to capacity that sticks',
  lede:
    'For agencies, consultancies and professional services firms of 20 to 200 people stuck between busy and the next client. You start with First AI Move and a free Audit review call that names what is stopping you (offers, demand or delivery) and picks Partnership or Delivery, then we ship the first win with your team or for you. Your firm owns the code, agents and roadmap.',
}

export const clientCapacityStepsLink = {
  before: 'Want the full Client Capacity picture? ',
  link: {
    label: 'See how we run it',
    href: `${clientCapacityPath}#how-client-capacity-runs`,
  },
  after: '',
} as const

export const whenBuild = {
  eyebrow: 'When you build',
  heading: 'Fixed scope, agreed in writing',
  body:
    'Every build is fixed scope and agreed in writing before work starts, whether it is done by your developers, a developer we help you place, your existing vendor, or us under Client Capacity Delivery. Your firm owns the code either way.',
}

export const reassurance = {
  eyebrow: 'The commercial terms',
  heading: 'What you are agreeing to, in plain terms.',
  items: [
    {
      title: 'A mode that fits',
      body:
        'First AI Move and the review call point you to Client Capacity Partnership, Client Capacity Delivery or AI Quick Start. Each path is scoped before build budget moves.',
    },
    {
      title: 'No lock-in',
      body:
        'Your roadmap and IP stay yours. Pause or leave when you need to; nothing renews by default.',
    },
    {
      title: 'No hourly billing',
      body:
        'There is no rate card, no minimum billable unit, and no invoice that needs decoding at the end of the month.',
    },
    {
      title: 'Clear decision points',
      body:
        'Nothing is built until the scope is agreed in writing, and every build ends with a handover, so you always know what you have and what comes next.',
    },
  ],
}

export const faq = {
  eyebrow: 'Common questions',
  heading: 'The things people ask on the first call.',
  items: [
    {
      question: 'Where do we start?',
      answer:
        'With First AI Move if you want a fast read on the first thing to fix, or a free Audit review call if you would rather talk first. Both end in the same straight conversation about fit and what would matter first.',
    },
    {
      question: 'Do you build?',
      answer: {
        before:
          'Yes, when Client Capacity Delivery is the right mode: fixed scope, agreed in writing, your firm owns the code. On Partnership we work alongside your developers, or help you place one, with owned shipping capability included when the bet needs it. If you already have a vendor, they can build under your direction. For the full menu, see ',
        link: { label: 'Ways we work', href: waysWeWorkPath },
        after: '.',
      },
    },
    {
      question: 'Are you tied to a vendor?',
      answer:
        'No. We are not reselling anyone\u2019s licences and there is no platform we are obliged to steer you towards. Build choice stays on your side of the table.',
    },
    {
      question: 'How do we know it\u2019s working?',
      answer:
        'You set a baseline for revenue, margin on the work you want more of, and capacity to take the next client. We track movement against that baseline, plus honest ship / do not ship decisions you can see in the roadmap. No invented proof points.',
    },
    {
      question: 'What tools do you build with?',
      answer:
        'Whatever fits the problem. We are not reselling anyone\u2019s licences and there is no platform we are obliged to steer you towards. Sometimes the right answer is a spreadsheet and a rule change rather than software at all.',
    },
    {
      question: 'Will our data be used to train anything?',
      answer:
        'No. Your data is used to do your work. It is not pooled, sold, or fed into a model for anyone else\u2019s benefit, and the specifics go in the engagement agreement rather than staying a verbal assurance.',
    },
    {
      question: 'Why are your prices not on the site?',
      answer:
        'Because a published number would be wrong for most firms who read it. Client Capacity and any scoped build work are agreed in writing before they start. You get fixed terms in writing before anything starts.',
    },
  ],
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Find what\u2019s stopping the next client.',
  body:
    'Whether Client Capacity Partnership, Client Capacity Delivery or AI Quick Start fits, First AI Move and the review call show you straight. Terms are agreed in writing, never published here.',
  primary: auditCta,
  secondary: reviewCallCta,
}
