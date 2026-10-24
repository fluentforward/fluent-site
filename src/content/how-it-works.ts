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

export const hero = {
  eyebrow: 'How the Board works',
  heading: 'Audit, judgement, quarters, compounding.',
  lede:
    'The Leverage Board is a membership seat, not a build retainer. You start with the Audit and a free Audit review call, then quarter one settles strategy before any build. Each quarter after, re-score, plug gaps and decide ship or hold.',
}

export const whenBuild = {
  eyebrow: 'When the Board says build',
  heading: 'Impact Build is a later decision',
  body:
    'When the operation is ready and judgement says ship, Impact Build is scoped as a fixed engagement under Board oversight. Your own developers build it, trained in AI-driven development, or your existing vendor does. Either way, your firm owns the code. The Board plans and governs the method.',
}

export const reassurance = {
  eyebrow: 'The commercial terms',
  heading: 'What you are agreeing to, in plain terms.',
  items: [
    {
      title: 'A seat, not hours',
      body:
        'Leverage Board membership is a seat with a defined rhythm of sessions and office hours, not an hourly retainer or open chat queue.',
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
      title: 'Every step is a decision point',
      body:
        'Build only moves when the Board says ship. Stopping is a normal outcome, not a failure.',
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
  heading: 'Take the Audit or book a call.',
  body:
    'If growth without headcount is the goal and judgement on AI and operations is the blocker, start with the Audit or talk it through. Terms stay private until they are written down.',
  primary: auditCta,
  secondary: boardConversationCta,
}
