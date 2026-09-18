export const hero = {
  eyebrow: 'Interaction Engine',
  headline: 'Install an Interaction Engine. Win your category in 2026.',
  lede:
    'The owned system under every customer and staff interaction. Delight on every interaction. Capacity with the same headcount. First release in about eight weeks.',
  audience:
    'For owners and leadership teams of established businesses.',
  primaryCta: { label: 'Worth a conversation?', href: '/contact' },
  proofChips: [
    'Owned. Process-fit.',
    'Customer and staff.',
    'First release in about eight weeks.',
  ],
}

export const contrast = {
  eyebrow: 'The contrast',
  heading: 'Not another portal project.',
  paragraphs: [
    'Not a chatbot nobody opens. Not an AI licence with a demo bolted on. Not an 18-month digital transformation before anything useful ships.',
    'This is an Interaction Engine: one owned, process-fit system under customer journeys and the work your team does every day.',
  ],
}

export const engineDefinition = {
  eyebrow: 'The engine',
  heading: 'What an Interaction Engine is.',
  lede:
    'The owned system that sits under every customer and staff interaction. Operators open it first. Customers feel the coherence. Capacity rises without a linear hiring curve. AI only shows up inside the workflow where it earns its place.',
  chips: [
    {
      title: 'Owned process-fit',
      body:
        'Shaped around how you already work, not a vendor\u2019s process.',
    },
    {
      title: 'Customer and staff',
      body:
        'One spine for internal work and client-facing journeys.',
    },
    {
      title: 'First release in about eight weeks',
      body: 'Not a two-year programme as the first move.',
    },
  ],
}

export const whoItsFor = {
  eyebrow: 'Fit',
  heading: 'Built for established businesses that will own the system.',
  lede:
    'Owners, COOs, ops directors, and IT-adjacent leaders who feel volume, handoffs, or product ambition outrunning headcount and tooling.',
  rightFit: [
    'Nothing off the shelf fits how you work.',
    'The CRM owns the process, or the inbox and sheets hold the truth.',
    'You can name the outcome you want (throughput, revenue, NPS, capacity), even if the path is unclear.',
    'You want to see the engine before you commit to an eight-week build.',
  ],
  wrongFit: [
    'You want a public chatbot or AI slides with no system to own.',
    'You want a multi-year transformation programme as the first move.',
    'You want staff augmentation forever, not a system your team runs.',
  ],
}

export const sectors = {
  heading: 'Sectors we know from the inside.',
  lede:
    'Same pressure everywhere: interactions and headcount cannot keep up with volume. An Interaction Engine changes both.',
  items: [
    {
      title: 'Energy and utilities',
      before:
        'When sales and delivery run on spreadsheets and inbox, every customer and staff handoff frays.',
      withUs:
        'An Interaction Engine for pipeline, contracts, and delivery work, so the team serves a larger book without a larger headcount.',
    },
    {
      title: 'eCommerce and retail operations',
      before:
        'Order volume grows faster than the team. Every interaction costs more attention.',
      withUs:
        'Systems that absorb thousands to millions of orders a day without a linear hiring curve.',
    },
    {
      title: 'Transport and mobility',
      before:
        'Ops and customer journeys sit in different tools. Handoffs multiply.',
      withUs:
        'Internal and customer-facing platforms that keep operations moving as one.',
    },
    {
      title: 'Finance',
      before:
        'Regulated workflows and back office only grow by adding people.',
      withUs:
        'Platforms for payroll, invoice financing, and investment ops that take load off the team and keep journeys coherent.',
    },
    {
      title: 'Healthcare',
      before:
        'When a regulated product stalls in delivery, the business waits on a team it does not have.',
      withUs:
        'Rescue, multi-system platforms, and clinical matching products that ship without standing up a permanent eng org.',
    },
  ],
  alsoDelivered: {
    title: 'Also delivered',
    body: 'Via partner agencies: education, attractions, defence, automotive, creative.',
  },
}

export type HomePhasePillar = {
  title: string
  body: string
}

export type HomePhase = {
  index: string
  name: string
  meta: string
  summary?: string
  pillars?: HomePhasePillar[]
  footnote?: string
  gate: string
}

export const phasesSection = {
  eyebrow: 'How we work',
  heading: 'Three phases. Each one ends in a decision.',
  lede:
    'Each phase is scoped and fixed fee where it matters. You only continue when the next step has earned it. You own what ships.',
  phases: [
    {
      index: '01',
      name: 'Interaction Engine Design',
      meta: 'Fixed fee · multi-week',
      pillars: [
        {
          title: 'Where category leaders get to',
          body:
            'What winning in your category in 2026 means for you. Customer experience. Internal experience. Capacity with the same headcount. Delight on every interaction. Concrete outcomes, not vague aspiration.',
        },
        {
          title: 'What is holding you back',
          body:
            'Deep analysis of the stuck stacks, broken handoffs, and places customer and staff interactions fail. Interviews and work-mapping. Not a surface survey.',
        },
        {
          title: 'The Interaction Engine prototype',
          body:
            'An interactive prototype of your engine until it clearly bridges the blockers to the outcomes. You leave able to click the machine, not read another deck.',
        },
      ],
      footnote:
        'You also leave with a named first release: scope, outcomes it must move, and the commercial next step. Sometimes the right next step is not to build. The Design is still yours.',
      gate:
        'Stop here and the Design pack is yours to act on, with us or anyone else.',
    },
    {
      index: '02',
      name: 'Impact Build',
      meta: 'Fixed fee · about 8 weeks',
      summary:
        'The first release of that Interaction Engine, in front of real users. You own it. Short adoption note so the team can run it without us.',
      gate: 'Stop here and the system is yours, running.',
    },
    {
      index: '03',
      name: 'Strategy and Build',
      meta: 'Monthly · pause anytime',
      summary:
        'Grow the engine you own. Senior strategy plus ongoing development on your platform. Pause or cancel whenever you like.',
      gate: 'Pause or cancel anytime.',
    },
  ] satisfies HomePhase[],
}

export const engagementFeels = {
  eyebrow: 'Engagement',
  heading: 'How the engagement feels.',
  lede:
    'Senior-led. Fixed fee where it matters. You own what ships.',
  body:
    'Strategy and Build is how you grow the engine after the first release proves itself. Senior strategy each month on what the platform should do next. Ongoing development on the system you own. Turnaround written into the contract. Never hours. Pause or cancel anytime.',
  link: {
    label: 'Read the full specification',
    href: '/how-it-works#strategy-and-build',
  },
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Worth a conversation?',
  body:
    'If category-win outcomes are clear enough to name, and the stack is the quiet blocker, talk. The usual next step is Interaction Engine Design.',
}
