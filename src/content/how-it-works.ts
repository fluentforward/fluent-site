export const hero = {
  eyebrow: 'How it works',
  heading: 'Three phases. Each one ends in a decision, not an upsell.',
  lede: 'Phases one and two are fixed fee, agreed in writing before anything starts. Phase three is a flat monthly fee against a turnaround commitment. There is no hourly billing anywhere in this, and nothing rolls over automatically.',
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
    name: 'Audit',
    meta: 'Fixed fee · about 4 weeks · one client at a time',
    intro:
      'Before anything gets built, we work out what is actually worth building. Four weeks looking closely at how your business runs, from the people who run it.',
    happens: [
      'Interviews with three to five people across the business, including the ones doing the work rather than only the ones describing it.',
      'Process mapping across sales, marketing and operations, following the work rather than the org chart.',
      'Every candidate opportunity sized against effort, risk and how much time it would genuinely give back.',
    ],
    deliverables: [
      'A written report you can hand to anyone, including your own team or another supplier.',
      'A prioritised opportunity map, ordered by value rather than by novelty.',
      'One recommended pilot, scoped and costed, ready to start or ready to shelve.',
    ],
    gate: 'Stop here and the report is yours. There is no obligation to continue, and the recommendation is written to be useful even if we never speak again.',
    boundary:
      'The audit is recommendations only. We do not build during it, even when asked to, because a four week window spent building is a four week window not spent finding out what to build.',
  },
  {
    index: '02',
    name: 'Pilot',
    meta: 'Fixed fee · 4 to 8 weeks · scoped at the end of the audit',
    intro:
      'One recommendation, built properly and put in front of the people who will use it. The fee is agreed before work starts and does not move unless you change the scope.',
    happens: [
      'We build the single pilot the audit recommended, using whatever tooling actually fits the problem.',
      'It goes into your business rather than a sandbox, with real data and real users.',
      'We stay close to the people using it while it settles, because the first week of real use always teaches you something the spec did not.',
    ],
    deliverables: [
      'A working system, running, owned by you.',
      'A short adoption note covering how it runs, what to watch, and what to do when it misbehaves.',
      'An honest read on whether it worked, including the parts that did not.',
    ],
    gate: 'Stop here and the pilot keeps running. Plenty of engagements should end at this point, and saying so is part of the job.',
  },
]

export const queue = {
  eyebrow: 'Phase three',
  heading: 'The Implementation Queue',
  lede: 'Once a pilot has landed, most businesses discover the same thing: there is a steady stream of small, valuable changes and no sensible way to buy them. Each one is too small to scope as a project and too important to ignore. The queue is the answer to that.',
  how: {
    heading: 'How it runs',
    steps: [
      'You submit a request whenever one occurs to you. No forms to justify it, no meeting to scope it.',
      'It joins your queue in the order you set. You can reorder it whenever priorities change.',
      'We pick up the request at the top and deliver it inside the agreed turnaround window.',
      'As it lands, or as it comes to you for review, the next one starts.',
    ],
  },
  spec: {
    heading: 'The specification',
    lede: 'Published in full, because “unlimited” only means something when the limits are written down.',
    rows: [
      {
        term: 'Requests',
        value:
          'Unlimited. Submit as many as you like, whenever you like, at no extra cost.',
      },
      {
        term: 'In progress',
        value:
          'One at a time. The next request begins once the current one is delivered or sitting with you for review.',
      },
      {
        term: 'Turnaround',
        value:
          'A fixed window per request, written into your contract. Generous rather than heroic, so that it holds every week rather than most weeks.',
      },
      {
        term: 'One request',
        value:
          'A single automation, a single build, or a single workflow change. Defined in the contract, not decided case by case.',
      },
      {
        term: 'Larger than that',
        value:
          'Scoped and quoted as its own project. It never gets quietly absorbed into the queue, and you never get a surprise about why something has taken a month.',
      },
      {
        term: 'Also included',
        value:
          'A monthly strategy call, so the queue stays pointed at things that matter rather than things that are merely annoying.',
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
          'One client slot at a time. When it is taken, it is taken, and you will be told rather than queued behind someone else.',
      },
    ],
  },
}

export const reassurance = {
  eyebrow: 'The commercial terms',
  heading: 'What you are agreeing to, in plain terms.',
  items: [
    {
      title: 'Fixed fees for the audit and the pilot',
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
        'Because a published number would be wrong for most people who read it. The audit fee depends on how many people we need to talk to and how tangled the process is; the retainer depends on the turnaround window and the request size threshold you want. You get a fixed number in writing before anything starts, and it will not move on its own.',
    },
    {
      question: 'What if my request is bigger than “one request”?',
      answer:
        'Then it is not a request, it is a project, and we scope and quote it as one. The threshold is written into your contract so this is a boring conversation rather than an argument. Holding that line is the only reason unlimited requests can work at all.',
    },
    {
      question: 'Is “unlimited” actually unlimited?',
      answer:
        'Unlimited requests, yes. Unlimited simultaneous delivery, no, and anyone promising that is quietly relying on you not using it. One request is in progress at a time and the turnaround window is written down, so you can work out exactly what throughput you are buying.',
    },
    {
      question: 'Do we have to start with the audit?',
      answer:
        'Almost always, yes. Building the wrong thing quickly is worse than building the right thing slowly, and four weeks of looking properly is what separates the two. If you have already done equivalent work and can show it, we will pick up from there.',
    },
    {
      question: 'What if the audit concludes we should not do this?',
      answer:
        'Then that is what the report says, and it is the most valuable version of the report you could have received. It has happened, and it will happen again. A recommendation you can trust requires the possibility of a no.',
    },
    {
      question: 'Who actually does the work?',
      answer:
        'Matt Todd, throughout. The person on the call is the person writing the code. That is the point of the model, and it is also why the retainer only runs one client slot at a time.',
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
  heading: 'Start with a conversation, not a commitment.',
  body: 'Thirty minutes to work out whether an audit would find anything worth acting on in your business. If it would not, that is a useful answer too, and it costs you half an hour to get it.',
}
