export const hero = {
  eyebrow: 'How it works',
  heading: 'Three phases. Each one ends in a decision, not an upsell.',
  lede:
    'Phase one is a One-Month Interaction Engine Design Sprint: fixed fee. Phase two is Impact Build, a fixed-fee first release of about eight weeks. Phase three is Strategy and Build: grow the engine you own with senior strategy and ongoing development on a flat monthly fee. No hourly billing. Nothing rolls over automatically.',
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
    meta: 'Fixed fee · multi-week · founder-led throughout',
    intro:
      'Before anything gets built, we work out what winning in your category means, what is blocking it, and what your Interaction Engine needs to do. You leave with a prototype you can click, a named first release, and a clear commercial next step. Sometimes the right next step is not to build.',
    happens: [
      'Interviews and work-mapping across the stuck stacks, broken handoffs, and places customer and staff interactions fail.',
      'A clear picture of category-win outcomes: customer experience, internal experience, and capacity with the same headcount.',
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
      'Design is discovery and prototype, not production build. We do not ship the first release during it, because that window is for finding the engine worth building.',
  },
  {
    index: '02',
    name: 'Impact Build',
    meta: 'Fixed fee · about 8 weeks · scoped at the end of Design',
    intro:
      'When the first release is clear, we build the Interaction Engine properly and put it in front of real users. About eight weeks. Fixed fee, agreed before work starts, and it does not move unless you change the scope. You own what ships.',
    happens: [
      'We build the first release scoped in Design, shaped around your processes. Real UX. Used by the people who will run it. You own it.',
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

export const strategyBuild = {
  eyebrow: 'Phase three',
  heading: 'Strategy and Build',
  lede:
    'Once Impact Build has landed, most businesses need to grow the engine without hiring a permanent technical team and without losing ownership of what shipped. Strategy and Build is that follow-on: senior strategy each month on what the platform should do next, plus ongoing development on the system you own. Pause anytime.',
  how: {
    heading: 'What you get each month',
    steps: [
      'A strategy session on what the platform you own should do next.',
      'Requests against the platform, submitted whenever they occur to you. No forms to justify them, no meeting to scope each one.',
      'Priorities set by you, and reordered by you whenever the business moves.',
      'Work delivered back inside the turnaround window agreed in your contract.',
    ],
  },
  spec: {
    heading: 'The specification',
    lede: 'Published in full, because “unlimited” only means something when the terms around it are written down.',
    rows: [
      {
        term: 'Strategy',
        value:
          'A monthly strategy call, so the work stays pointed at things that matter rather than things that are merely annoying.',
      },
      {
        term: 'Requests',
        value:
          'Unlimited. Submit as many as you like, whenever you like, at no extra cost.',
      },
      {
        term: 'Turnaround',
        value:
          'A fixed window per request, written into your contract. Generous rather than heroic, so that it holds every week rather than most weeks.',
      },
      {
        term: 'One request',
        value:
          'One increment of the platform: a screen, a workflow inside the app, or a second named app that sits with it.',
      },
      {
        term: 'Larger than that',
        value:
          'Scoped and quoted as its own project, so nothing gets quietly absorbed and you never get a surprise about why something has taken a month.',
      },
      {
        term: 'Billing',
        value:
          'A flat monthly fee. Not hours, not days, not a bucket of time that expires.',
      },
      {
        term: 'Commitment',
        value:
          'Monthly. Pause it when you are between priorities, cancel it when you are done.',
      },
      {
        term: 'Availability',
        value:
          'A deliberately small number of ongoing engagements, so the turnaround window is a commitment rather than an aspiration. If there is a wait, you will be told rather than squeezed in.',
      },
    ],
  },
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
      title: 'Turnaround, not timesheets',
      body: 'The retainer is priced against how quickly work comes back to you, not how long it took us. Efficiency is our problem to solve, not yours to pay for.',
    },
    {
      title: 'No hourly billing anywhere',
      body: 'There is no rate card, no minimum billable unit, and no invoice that needs decoding at the end of the month.',
    },
    {
      title: 'Every phase is a decision point',
      body: 'Nothing renews by default and nothing assumes the next phase. Stopping is a normal outcome, not a failure.',
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
        'Because a published number would be wrong for most people who read it. The Design fee depends on how many people we need to talk to and how tangled the process is; the retainer depends on the turnaround window and the request size threshold you want. You get a fixed number in writing before anything starts, and it will not move on its own.',
    },
    {
      question: 'What if my request is bigger than “one request”?',
      answer:
        'Then it is not a request, it is a project, and we scope and quote it as one. The threshold is written into your contract so this is a boring conversation rather than an argument. Holding that line is the only reason unlimited requests can work at all. A request can still be a single automation, a single build, or a single workflow change when that is the honest increment. The picture on the site is the named system those sit inside, not invisible automations nobody on the team can see.',
    },
    {
      question: 'Is “unlimited” actually unlimited?',
      answer:
        'Yes, in the sense that matters: there is no per-request charge, no ticket allowance, and no bucket of hours to run down. What keeps that honest rather than a marketing line is that the turnaround window and the definition of a request are both written into your contract, so you can work out exactly what throughput you are buying before you sign anything.',
    },
    {
      question: 'Do we have to start with a One-Month Interaction Engine Design Sprint?',
      answer:
        'Almost always, yes. Building the wrong thing quickly is worse than building the right thing slowly, and proper Design is what separates the two. If you have already done equivalent work and can show it, we will pick up from there.',
    },
    {
      question: 'What if Design concludes we should not build yet?',
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
    'If category-win outcomes are clear enough to name, and the stack is the quiet blocker, talk. The usual next step is a One-Month Interaction Engine Design Sprint.',
}
