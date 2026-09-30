export const hero = {
  eyebrow: 'How it works',
  heading: 'Two decisions. Then you choose how to stay on.',
  lede:
    'Each step is scoped and fixed fee where it matters. You only continue when the next step has earned it. You own what ships. Phase one is a One-Month Interaction Engine Design Sprint. Phase two is Impact Build, a fixed-fee first release of about eight weeks. After the first release, continuity is optional.',
}

export type Phase = {
  index: string
  name: string
  meta: string
  intro: string
  happens: string[]
  deliverables: string[]
  gate: string
  boundary?: string
}

export const phases: Phase[] = [
  {
    index: '01',
    name: 'One-Month Interaction Engine Design Sprint',
    meta: 'Fixed fee · about one month · founder-led throughout',
    intro:
      'Before anything gets built, we work out what winning in your category means, what is blocking it, and what your Interaction Engine needs to do. You leave with a prototype you can click, a named first release, and a clear commercial next step. Sometimes the right next step is not to build.',
    happens: [
      'Interviews and work-mapping across the stuck stacks, broken handoffs, and places customer and staff interactions fail.',
      'A clear picture of customer experience, staff experience, and growth without a matching headcount curve.',
      'An interactive prototype of your engine until it bridges the blockers to those outcomes.',
    ],
    deliverables: [
      'The Design Sprint pack you can hand to anyone, including your own team or another supplier.',
      'A named first release: scope, outcomes it must move, and the commercial next step.',
      'An honest read on whether to build, including when the answer is not yet.',
    ],
    gate:
      'Stop here and the Design pack is yours. There is no obligation to continue, and the work is written to be useful even if we never speak again.',
    boundary:
      'The Design Sprint is discovery and prototype, not production build. We do not ship the first release during it, because that window is for finding the engine worth building.',
  },
  {
    index: '02',
    name: 'Impact Build',
    meta: 'Fixed fee · about 8 weeks · scoped at the end of the Design Sprint',
    intro:
      'When the first release is clear, we build the Interaction Engine properly and put it in front of real users. About eight weeks. Fixed fee, agreed before work starts, and it does not move unless you change the scope. You own what ships.',
    happens: [
      'We build the first release scoped in the Design Sprint, shaped around your processes. Real UX. Used by the people who will run it. You own it.',
      'It goes into your business rather than a sandbox, with real data and real users.',
      'We stay close to the people using it while it settles, because the first week of real use always teaches you something the spec did not.',
    ],
    deliverables: [
      'A working system, running, owned by you. Their team opens it first.',
      'A short adoption note covering how it runs, what to watch, and what to do when it misbehaves.',
      'An honest read on whether it worked, including the parts that did not.',
    ],
    gate: 'Stop here and the system keeps running. Plenty of engagements should end at this point, and saying so is part of the job.',
  },
]

export const afterImpact = {
  eyebrow: 'After Impact Build',
  heading: 'After the first release',
  body:
    'Stay on with us for quarterly AI and technology strategy, plus a shared library of patterns and resources for the engine you own. When strategy says ship, we build the next release on that same layer. No hours hunting. No token counting. You decide when to continue.',
}

export const reassurance = {
  eyebrow: 'The commercial terms',
  heading: 'What you are agreeing to, in plain terms.',
  items: [
    {
      title: 'Fixed fees for One-Month Interaction Engine Design Sprint and Impact Build',
      body: 'Both are quoted as a single number, in writing, before work starts. If the scope does not change, the number does not change.',
    },
    {
      title: 'Optional continuity after Impact Build',
      body: 'Quarterly AI and technology strategy and a shared library on the engine you own. Build capacity when strategy says the next ship is worth it. Pause or leave whenever you like.',
    },
    {
      title: 'No hourly billing anywhere',
      body: 'There is no rate card, no minimum billable unit, and no invoice that needs decoding at the end of the month.',
    },
    {
      title: 'Every step is a decision point',
      body: 'Nothing renews by default and nothing assumes the next step. Stopping is a normal outcome, not a failure.',
    },
  ],
}

export const faq = {
  eyebrow: 'Common questions',
  heading: 'The things people ask on the first call.',
  items: [
    {
      question: 'Why are your prices not on the site?',
      answer:
        'Because a published number would be wrong for most people who read it. The Design Sprint fee depends on how many people we need to talk to and how tangled the process is. Continuity after Impact Build is scoped when you are ready to talk about it. You get a fixed number in writing before anything starts, and it will not move on its own.',
    },
    {
      question: 'Do we have to start with a One-Month Interaction Engine Design Sprint?',
      answer:
        'Almost always, yes. Building the wrong thing quickly is worse than building the right thing slowly, and a proper Design Sprint is what separates the two. If you have already done equivalent work and can show it, we will pick up from there.',
    },
    {
      question: 'What happens after Impact Build?',
      answer:
        'You can stop with the system running, which is a normal outcome. If you want to stay on, continuity is optional: quarterly AI and technology strategy on the engine you own, a library you can draw on between releases, and build capacity when strategy says the next ship is worth it. You decide when to continue.',
    },
    {
      question: 'What if the Design Sprint concludes we should not build yet?',
      answer:
        'Then that is what the pack says, and it is the most valuable version you could have received. It has happened, and it will happen again. A recommendation you can trust requires the possibility of a no.',
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
  ],
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Worth a conversation?',
  body:
    'If rapid growth without adding headcount and complexity is clear enough to name, and low leverage in the stack is the quiet blocker, talk. The usual next paid step is a One-Month Interaction Engine Design Sprint.',
}
