import { gartnerPressReleases } from '@/content/gartner'

export const meta = {
  title: 'Client Capacity | FluentForward',
  description:
    'One program across Offers, Leads and Delivery. Win more client work without hiring more people. Partnership through your team, or Delivery when we ship more of it. Your firm owns what we build.',
} as const

export const structuredServiceType =
  'AI and operations advisory for services firms' as const

export const hero = {
  eyebrow: 'Client Capacity',
  heading: 'More client work without hiring more people',
  lede:
    'One program across Offers, Leads and Delivery. After First AI Move and a free Audit review call, we name the binding wall, then you choose Partnership (done with you) or Delivery (done for you). Your firm owns the code, the agents and the roadmap.',
} as const

export const pillars = {
  eyebrow: 'What the program clears',
  heading: 'Offers · Leads · Delivery',
  lede:
    'Most firms guess at AI. We start with the binding wall: how you package and get paid, whether enough qualified work is coming in, or whether the team can take the next client without burning out. Fix one and the next becomes the bottleneck. The same program sequences whatever is next.',
  items: [
    {
      title: 'Offers',
      body:
        'How you package and get paid. Free up hours but keep selling hours or days and you get a leaner timesheet, not more revenue. Packaging sits here, not as a later optional module.',
    },
    {
      title: 'Leads',
      body:
        'Demand and sales when pipeline is the wall. First-class when the constraint is not enough qualified work coming in. Demand work runs inside the program after diagnosis, not as a separate lead-gen shop.',
    },
    {
      title: 'Delivery',
      body:
        'Capacity to do the work: proposals, handoffs, throughput, AI with ownership, and the operating rhythm that makes the win stick.',
    },
  ],
} as const

export const gartnerProof = {
  heading: 'Vendor-led agentic programmes do not stick',
  body:
    'Gartner forecasts that by 2028, 70% of enterprises on the vendor-led agentic AI route will abandon it: too expensive, and the organisation cannot evolve the system alone. Client Capacity puts judgement on your side of the table before build budget moves.',
  attribution:
    'Source: Gartner press release, 29 September 2026. Not an endorsement of FluentForward.',
  sourceUrl: gartnerPressReleases.vendorFdeAbandon2028,
} as const

export const modes = {
  partnership: {
    id: 'partnership',
    name: 'Client Capacity Partnership',
    summary: 'Done with you. We run the process through your team.',
    body:
      'We diagnose the binding wall across Offers, Leads and Delivery, prioritise a leverage list, make buy vs build decisions, ship the first win with your people (offers, leads or delivery, as diagnosed), and install the operating rhythm. Product-engineer training is included: we turn your software developers into product engineers, or help you place one, so the code and the capability stay in your firm.',
    bullets: [
      'Constraint diagnosis across Offers, Leads and Delivery, plus a prioritised leverage backlog.',
      'Buy vs build decisions before spend moves.',
      'First win shipped through your team (offers, leads or delivery, as diagnosed).',
      'Operating rhythm installed.',
      'Product-engineer training included (train your developers, or help place one).',
    ],
  },
  delivery: {
    id: 'delivery',
    name: 'Client Capacity Delivery',
    summary: 'Done for you. Same process. We do more of the build and ship.',
    body:
      'Same diagnosis across Offers, Leads and Delivery, leverage list, buy vs build, first ship and operating rhythm. The difference is who does the heavy lifting: FluentForward ships more of the build under your control, with fixed scope in writing, and your firm still owns the code. When Leads is the wall, demand work may use white-labelled specialists or placed people; FluentForward still owns diagnosis, the relationship and the scorecard. Choose this when you need speed or do not have people to run the build yourselves.',
    bullets: [
      'Same Client Capacity process as Partnership.',
      'We deliver more of the build and ship, fixed scope.',
      'Demand path available when pipeline is the wall; FluentForward owns diagnosis, relationship and scorecard.',
      'Your firm owns the code and the roadmap.',
      'Operating rhythm installed so the win sticks.',
      'Product-engineer path available if you have or place a developer (not assumed).',
    ],
  },
} as const

export const process = {
  eyebrow: 'Same process either way',
  heading: 'How Client Capacity runs',
  steps: [
    'Diagnose Offers, Leads and Delivery (which wall binds)',
    'Prioritise the leverage list (clear the wall; capture the gain)',
    'Buy vs build (and what to white-label or place)',
    'Set AI governance',
    'Ship the first win (offers, leads or delivery, as diagnosed)',
    'Install the operating rhythm',
    'Product-engineer path when you have or place a developer (included on Partnership)',
  ],
  choiceLine:
    'After diagnosis, one question: do we run this through your people, or do you want us to deliver more of it?',
  compoundingLine:
    'Fix one wall and the next becomes the bottleneck. The next cycle picks the next high-leverage constraint across Offers, Leads or Delivery, and runs the same steps.',
} as const

export const governance = {
  heading: 'Governance and ownership',
  intro:
    'Every engagement is scoped in writing before work starts. Your firm owns the code, the agents and the roadmap. We do not bill by the hour.',
  items: [
    {
      title: 'Judgement on your side',
      body: 'AI and build decisions checked before you spend.',
    },
    {
      title: 'A roadmap and IP you own',
      body: 'Priorities set with you, never by a vendor.',
    },
    {
      title: 'Ship-gate before build budget moves',
      body: 'A short written review so scope and ownership are clear first.',
    },
    {
      title: "Proof it's working",
      body: 'Output per person tracked as you grow.',
    },
    {
      title: 'Playbooks your team can run',
      body: 'Documentation and handover so the win sticks without us in the loop.',
    },
    {
      title: 'Fixed scope when we build',
      body: 'Client Capacity Delivery is agreed in writing; your firm still owns the code.',
    },
  ],
} as const

export const shipGateDelivery = {
  heading: 'Ship-gate and Client Capacity Delivery',
  body:
    'Ship-gate is the short written review before build budget moves. Client Capacity Delivery is when we ship more of the build under fixed scope, with the code staying yours. We do not publish commercial terms on this page.',
} as const

export const productEngineerPath = {
  eyebrow: 'Product-engineer path',
  heading: 'Your team, building with AI.',
  body:
    'On Partnership, product-engineer training is included. We work alongside your developers and train them in AI-driven development on your real backlog, so your firm owns the code and keeps the capability. No developers? We help you place one and train them from day one.',
  smallPrint:
    'Included on Client Capacity Partnership. Details are agreed with you when Client Capacity says build.',
} as const

export const fitLine =
  'Built for owner-led services firms of 20 to 200 people where Offers, Leads or Delivery is the wall. Not sure? First AI Move will tell you.' as const

export const faq = {
  eyebrow: 'Common questions',
  heading: 'Client Capacity in practice',
  items: [
    {
      question: 'Partnership or Delivery?',
      answer:
        'Same process either way. Partnership runs through your team with product-engineer training included. Delivery is when we ship more of the build under fixed scope. The free Audit review call picks the mode that fits.',
    },
    {
      question: 'Can we pause or leave?',
      answer:
        'Your roadmap and IP stay yours. Pause or leave when you need to; nothing renews by default.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is confirmed in writing before work starts.',
    },
    {
      question: 'What if the problem is leads, not delivery?',
      answer:
        'Then Leads is the binding wall. After diagnosis we run demand work inside Client Capacity: FluentForward owns diagnosis, the relationship and the scorecard. Where useful we white-label specialists or place people. We are not a cold lead-gen agency.',
    },
  ],
} as const

export const altRoute = {
  before: 'Want the full menu of scoped build and setup items? ',
  linkLabel: 'See ways we work',
  href: '/ways-we-work',
  after: '.',
} as const
