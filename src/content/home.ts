export const hero = {
  headline:
    'For ambitious businesses that intend to lead their category.',
  lede:
    'Category leaders grow without a matching hire curve. They delight customers and staff on every interaction because the work sits on an owned operating layer, not on people as glue between systems.',
  audience:
    'For owners, COOs, and ops leaders who will own how the work runs.',
  primaryCta: { label: 'Worth a conversation?', href: '/contact' },
  proofChips: [
    'Process-fit.',
    'Customer and staff.',
    'First release in about eight weeks.',
  ],
}

export const contrast = {
  eyebrow: 'High vs low leverage',
  leadersHeading: 'What high leverage runs on.',
  followersHeading: 'What low leverage still puts up with.',
  leaders: [
    'An owned operating layer beside the CRM: one place people open first for customer and staff work.',
    'Processes and integrations that create leverage, not glue jobs.',
    'AI inside the work, on that owned layer, not bolted on per vendor.',
    'Keep, integrate, or replace: the stack matches how the work already runs.',
    'Growth without a matching headcount curve. Capacity rises; headcount does not climb in lockstep.',
  ],
  followers: [
    'People as glue between systems. Inbox and sheets still hold the truth.',
    'Fragmented processes and integrations. A bent CRM owns the process.',
    'AI bolted on per vendor. ChatGPT paste for work the system should carry.',
    'Renting capability you should own. Empty SaaS tabs and bolted-on tools.',
    'Growth equals hire and grind. Headcount climbs with volume. Leverage debt and integration debt compound quietly.',
  ],
  bridge:
    'The gap is not ambition. It is leverage: who owns the operating layer under customer and staff work, and whether every new tool adds capacity or adds glue.',
  alsoNot:
    'Also not: a chatbot nobody opens, an AI licence with a demo bolted on, or an 18-month programme before anything useful ships.',
}

export const engineDefinition = {
  eyebrow: 'The mechanism',
  heading: 'The Interaction Engine is how you get there.',
  lede:
    'In the One-Month Interaction Engine Design Sprint, we design the owned operating layer under every customer and staff interaction so you can move from low-leverage patterns to high-leverage outcomes. The first release lands in Impact Build, in about eight weeks. Not an 18-month programme as the first move.',
  plainLine:
    'Operators open it first. Customers feel the coherence. AI multiplies the stack it is plugged into, because the layer is yours. The work stops living in inbox, sheets, and empty tabs.',
  chips: [
    {
      title: 'Fits how you already work',
      body:
        'Keep, integrate, or replace. Not a vendor process you have to adopt forever.',
    },
    {
      title: 'Customer and staff',
      body:
        'One spine for internal work and client-facing journeys.',
    },
    {
      title: 'First release in about eight weeks',
      body:
        'Useful software in front of real users in Impact Build, then you decide what grows next.',
    },
  ],
  closing:
    'You keep control of what ships. AI is leverage only on an owned layer. We do not lead with another licence pile.',
}

export const whoItsFor = {
  eyebrow: 'Fit',
  heading: 'Built for established businesses that will own the operating layer.',
  lede:
    'Owners, COOs, ops directors, and IT-adjacent leaders who feel volume, handoffs, or product ambition outrunning headcount and tooling.',
  rightFit: [
    'Nothing off the shelf fits how you work.',
    'People are still the glue, or the CRM owns the process, or inbox and sheets hold the truth.',
    'You can name the outcome you want (throughput, revenue, NPS, capacity), even if the path is unclear.',
    'You want to see the engine before you commit to an eight-week build.',
  ],
  wrongFit: [
    'You want a public chatbot or AI slides with no layer to own.',
    'You want a multi-year transformation programme as the first move.',
    'You want staff augmentation forever, not a system your team runs.',
  ],
}

export const sectors = {
  heading: 'Sectors we know from the inside.',
  lede:
    'Same pressure everywhere: interactions and headcount cannot keep up with volume. An owned operating layer changes both.',
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
  briefDownload?: { label: string; href: string }
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
      name: 'One-Month Interaction Engine Design Sprint',
      meta: 'Fixed fee · about one month',
      pillars: [
        {
          title: 'Where you win',
          body:
            'Where category leaders get to for you: customer experience, staff experience, growth without a matching headcount curve.',
        },
        {
          title: 'What’s stuck',
          body:
            'Leverage debt and integration debt mapped: stuck stacks, broken handoffs, where customer and staff interactions fail.',
        },
        {
          title: 'Clickable prototype',
          body:
            'An interactive prototype of your owned operating layer, plus a named first-release brief. You leave able to click the machine, not read another deck. Sometimes the right next step is not to build; the Design Sprint is still yours.',
        },
      ],
      briefDownload: {
        label: 'Download the Interaction Engine Design brief',
        href: '/offers/interaction-engine-design.pdf',
      },
      gate:
        'Stop here. The Design pack is yours to act on, with us or anyone else.',
    },
    {
      index: '02',
      name: 'Impact Build',
      meta: 'Fixed fee · about 8 weeks',
      summary:
        'First release of that Interaction Engine in front of real users. You own it. Short adoption note so the team can run it without us.',
      gate: 'Stop here. The system is yours, running.',
    },
    {
      index: '03',
      name: 'Strategy & Build',
      meta: 'Monthly · pause anytime',
      summary:
        'Grow the engine you own. Senior strategy plus ongoing development on your platform. Pause or cancel whenever you like.',
      gate: 'Pause or cancel anytime.',
    },
  ] as HomePhase[],
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
    'If Growth Without Headcount outcomes are clear enough to name, and low leverage in the stack is the quiet blocker, talk. The usual next paid step is a One-Month Interaction Engine Design Sprint.',
}
