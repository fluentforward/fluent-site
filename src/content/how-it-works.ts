import { auditCta, boardConversationCta } from '@/content/board'

export const hero = {
  eyebrow: 'How the Board works',
  heading: 'Audit, judgement, quarters, compounding.',
  lede:
    'The Leverage Board is a membership seat, not a build retainer. You start with the Audit and a free call, then quarter one settles strategy before any build. Each quarter after, re-score, plug gaps and decide ship or hold.',
}

export const whenBuild = {
  eyebrow: 'When the Board says build',
  heading: 'Impact Build is a later decision',
  body:
    'When the operation is ready and judgement says ship, Impact Build can be scoped as a fixed engagement: us, a partner or your vendor under Board oversight. Release Engine is optional ship capacity for members only, after ship-gate. The Interaction Engine is the system the Board plans and governs; it is not a separate product you buy off the page.',
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
        'Build and Release Engine only move when the Board says ship. Stopping is a normal outcome, not a failure.',
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
        'With the Growth Without Headcount Audit if you want a fast read on stage and gaps, or a free thirty-minute call if you would rather talk first. Both routes end in the same straight conversation about fit and what would matter first.',
    },
    {
      question: 'Do you build?',
      answer:
        'Sometimes, when the Board says ship and you want us to deliver. Often a partner or your own vendor builds under Board oversight. Impact Build is scoped as a later decision, not the default entry.',
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
