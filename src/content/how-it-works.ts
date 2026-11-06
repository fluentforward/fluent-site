import { scoreCta, reviewCallCta } from '@/content/board'
import { waysWeWorkPath } from '@/content/routes'

export const howItWorksPageMeta = {
  title: 'How it works | FluentForward',
  description:
    'How Profit Engine runs: Offers, Demand and Delivery, diagnose to one lever, six-week on-ramp with dashboards, realtime analytics and AI agents, then Run for always-on profit control.',
} as const

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

export const howItWorksExplainer = {
  eyebrow: 'How it works',
  heading: 'Offers, Demand and Delivery. One lever at a time.',
  lede:
    'Profit is a system, not a hero project. We read all three lenses, act on the binding constraint first, and keep realtime visibility so the next leak shows up before the quarter closes.',
  blocks: [
    {
      title: 'Diagnose across three lenses',
      body:
        'Offers, Demand and Delivery are where margin is won or lost. The Profit Constraint Score and Constraint review name what is binding now, not what is loudest in the inbox.',
    },
    {
      title: 'Fix one scored lever first',
      body:
        'A six-week on-ramp runs on one lever with clear scope. Dashboards and realtime analytics span all three lenses; build and agents concentrate on the binding one so you get a measurable move, not a slide deck.',
    },
    {
      title: 'Ship, then rhythm',
      body:
        'We ship the first visible win, establish the weekly rhythm your leadership can run, then hand over playbooks and code your firm owns. After that, Run continues sensing and fix-forward so you are not waiting for a bad number to react.',
    },
    {
      title: 'AI in the engine room',
      body:
        'AI agents sit on the scored lever under rules you own. They multiply a fix that already works; they do not replace diagnosis.',
    },
  ],
} as const

export const whenBuild = {
  eyebrow: 'When you build',
  heading: 'Fixed scope, agreed in writing',
  body:
    'Every build is fixed scope and agreed in writing before work starts, whether it is done by your developers, a developer we help you place, your existing vendor, or us when we ship more of the build. Your firm owns the code either way.',
}

export const reassurance = {
  eyebrow: 'The commercial terms',
  heading: 'What you are agreeing to, in plain terms.',
  items: [
    {
      title: 'A path that fits',
      body:
        'The Profit Constraint Score and Constraint review point you to a six-week Profit Engine on-ramp when that is the right move. Profit Engine Insights is call-only when the full on-ramp is wrong-fit for now: we stand up live sensing so both sides see the leak before you commit to the on-ramp. It does not fix the lever. Terms are agreed in writing; nothing is published here.',
    },
    {
      title: 'No lock-in',
      body:
        'Your playbooks and IP stay yours. Pause or leave when you need to; nothing renews by default.',
    },
    {
      title: 'No hourly billing',
      body:
        'There is no rate card, no minimum billable unit, and no invoice that needs decoding at the end of the month.',
    },
    {
      title: 'Clear decision points',
      body:
        'Nothing is built until scope is agreed in writing, and every build ends with a handover, so you always know what you have and what comes next.',
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
        'With the Profit Constraint Score if you want a fast read on which constraint is binding, or a Constraint review if you would rather talk first. Both end in the same straight conversation about fit and what would matter first.',
    },
    {
      question: 'Do you build?',
      answer: {
        before:
          'Yes, when we ship more of the build is the right mode: fixed scope, agreed in writing, your firm owns the code. When we build with your team, we work alongside your developers, or help you place one, with owned shipping capability included when the bet needs it. If you already have a vendor, they can build under your direction. For the full menu, see ',
        link: {
          label: 'what we can build or stand up',
          href: `${waysWeWorkPath}#implementation-menu`,
        },
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
        'You set a baseline for revenue, margin on the work you want more of, and capacity to take the next client. We track movement against that baseline, plus honest ship or do-not-ship decisions you can see in the plan. No invented proof points.',
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
        'Because a published number would be wrong for most firms who read it. Profit Engine and any scoped build work are agreed in writing before they start. You get fixed terms in writing before anything starts.',
    },
  ],
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Find your binding constraint.',
  body:
    'Most firms move from score or review into a six-week on-ramp when the lever and fit line up. Commercial terms stay off the site; you confirm them in writing.',
  primary: scoreCta,
  secondary: reviewCallCta,
}
