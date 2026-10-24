import { auditCta, boardConversationCta } from '@/content/board'
import { waysWeWorkPath } from '@/content/routes'

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
    'From the free AI Readiness and Governance Audit to AI that works: a review call to pick your starting point, fixed-scope build, and code your firm owns.',
} as const

export const hero = {
  eyebrow: 'How it works',
  heading: 'From Audit to AI that works.',
  lede:
    "For agencies, consultancies and professional services firms of 20 to 200 people. You start with the free Audit and a review call that picks the right route, then we fix the first problem with your team or for you, and your firm owns the result.",
}

export const leverageBoardStepsLink = {
  before: 'On the Leverage Board? ',
  link: {
    label: "Here's how the Board works",
    href: '/leverage-board#how-the-board-works',
  },
  after: '',
} as const

export const whenBuild = {
  eyebrow: 'When you build',
  heading: 'Fixed scope, agreed in writing',
  body:
    'Every build is fixed scope and agreed in writing before work starts, whether it is done by your developers, a developer we help you place, your existing vendor, or us. Your firm owns the code either way.',
}

export const reassurance = {
  eyebrow: 'The commercial terms',
  heading: 'What you are agreeing to, in plain terms.',
  items: [
    {
      title: 'A starting point that fits',
      body:
        'The Audit and review call point you to the Leverage Board, Build Partner or AI Quick Start. Each route is scoped before build budget moves.',
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
        'You can pause or step off between phases. Stopping is a normal outcome, not a failure.',
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
        'With the AI Readiness and Governance Audit if you want a fast read on stage and gaps, or a free Audit review call if you would rather talk first. Both routes end in the same straight conversation about fit and what would matter first.',
    },
    {
      question: 'Do you build?',
      answer: {
        before:
          'Not as the default. When the Board says build, we work alongside your developers, or help you place one, and train them in AI-driven development, so your firm owns the code and keeps the capability. If you already have a vendor, they can build under Board oversight. Impact Build is always a later Board decision. For the other starting points, see ',
        link: { label: 'Ways we work', href: waysWeWorkPath },
        after: '.',
      },
    },
    {
      question: 'Are you tied to a vendor?',
      answer:
        'No. We are not reselling anyone\u2019s licences and there is no platform we are obliged to steer you towards. Build-partner choice is independent and on your side of the table.',
    },
    {
      question: 'How do we know it\u2019s working?',
      answer:
        'Productivity per head, tracked quarter by quarter against the baseline set in quarter one, plus honest ship / don\u2019t ship decisions you can see in the roadmap.',
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
        'Because a published number would be wrong for most firms who read it. Membership and any build work are scoped to your stage and constraints. You get fixed terms in writing before anything starts.',
    },
  ],
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Start with the Audit or book a call.',
  body:
    'Whether the Leverage Board, Build Partner or AI Quick Start fits, the Audit and review call show you straight. Terms stay private until they are written down.',
  primary: auditCta,
  secondary: boardConversationCta,
}
