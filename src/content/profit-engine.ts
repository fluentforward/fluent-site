import { gartnerPressReleases } from '@/content/gartner'
import { scoreCta } from '@/content/board'

export const meta = {
  title: 'Profit Engine | FluentForward',
  description:
    'Install a Profit Engine across Offers, Demand and Delivery. Partnership or Delivery after diagnosis. Your firm owns what we build.',
} as const

export const structuredServiceType =
  'Profit Engine advisory and implementation for services firms' as const

export const hero = {
  eyebrow: 'Profit Engine',
  heading: 'More of the right client work at stronger margins.',
  lede:
    'If Offers, Demand or Delivery is wrong, hiring and AI just make you busier. We find the binding constraint, ship one visible win, install the engine in ninety days, and choose Install Partnership or Install Delivery only after that. Your firm owns the code, the agents and the playbooks.',
} as const

export const ifYouBeats = {
  eyebrow: 'Offers · Demand · Delivery',
  heading: 'Talk to the limit that is binding you.',
  lede:
    'Start with what is true in the business, not with a tool wishlist. Fix one constraint, and the next shows up. The same programme sequences whatever comes next.',
  items: [
    {
      title: 'If Offers bind you',
      body:
        'How you package and get paid. Free up hours but keep selling hours or days and you get a leaner timesheet, not more revenue. Fix how you get paid first so freed time turns into productised offers, retainers or scoped outcomes.',
    },
    {
      title: 'If Demand binds you',
      body:
        'If the calendar is not filling with the right conversations, a strong delivery team still starves. Demand work runs inside the programme after diagnosis. FluentForward owns diagnosis, the relationship and the scorecard. We are not a cold lead-gen agency.',
    },
    {
      title: 'If Delivery binds you',
      body:
        'Proposals, handoffs and throughput break when you grow. AI without ownership makes the checking worse. Fix throughput and ownership, install the cycle rhythm that makes the win stick, and the next limit becomes obvious.',
    },
  ],
} as const

export const oneSystem = {
  heading: 'One engine. Not three side projects.',
  body:
    'Offers without demand is a brochure. Demand without packaging is discount volume. Delivery AI without both is busywork. Profit Engine sequences what is binding you now, then re-checks the other two so the gain shows up as revenue and profit.',
} as const

export const servicesImpact = {
  heading: 'Built for owners who need profit from growth, not just more people',
  body:
    'If you need more of the right clients at prices that hold, and delivery that turns that work into margin without a hire for every win, Profit Engine runs Offers, Demand and Delivery as one system. AI under rules you own runs inside the engine. It is never the product name.',
} as const

export const gartnerProof = {
  heading: 'Vendor-led agentic programmes do not stick',
  body:
    'Gartner forecasts that by 2028, 70% of enterprises on the vendor-led agentic AI route will abandon it: too expensive, and the organisation cannot evolve the system alone. Profit Engine puts judgement on your side of the table before build budget moves.',
  attribution:
    'Source: Gartner press release, 29 September 2026. Not an endorsement of FluentForward.',
  sourceUrl: gartnerPressReleases.vendorFdeAbandon2028,
} as const

export const modes = {
  partnership: {
    id: 'partnership',
    name: 'Install Partnership',
    summary: 'We install it with your team.',
    body:
      'Our senior team leads. Your people build alongside us. We diagnose the binding constraint, prioritise the leverage list, decide buy, build or place before spend moves, ship the first win with your people, and install the cycle rhythm. Owned shipping capability is included when the bet needs it.',
    bullets: [
      'Constraint diagnosis across Offers, Demand and Delivery.',
      'Weekly working sessions with your leadership.',
      'Offer and pricing rebuilt where it binds.',
      'Demand and delivery systems built by you, reviewed by us.',
      'AI workflows set up in the engine room.',
      'A scorecard your leadership runs every week.',
    ],
  },
  delivery: {
    id: 'delivery',
    name: 'Install Delivery',
    summary: 'We install it for you.',
    body:
      'Our team does the build. You make the calls; we ship the engine. Same diagnosis and ninety-day Install. Fixed scope in writing. Your firm still owns the code and playbooks.',
    bullets: [
      'Everything in Install Partnership, with our Strategy, Growth, Delivery and Ops leads building hands-on.',
      'Offers, sales assets and campaigns produced by us where needed.',
      'Delivery workflows and AI tooling configured for you.',
      'Handover with a run playbook your team can own.',
      'Demand path when go-to-market is thin; FluentForward owns diagnosis, relationship and scorecard.',
      'Owned shipping capability available when the bet needs it, if you have or place a developer (optional).',
    ],
  },
} as const

export const process = {
  eyebrow: 'Same cycle either mode',
  heading: 'How we run an Install',
  steps: [
    'Score and constraint review',
    'Diagnose the binding constraint',
    'Prioritise the leverage list',
    'Decide buy, build or place',
    'Set AI ownership rules',
    'Ship the first win',
    'Install the cycle rhythm',
  ],
  choiceLine:
    'After we know what is binding you, one question: do we run this through your people, or do you want us to deliver more of it?',
  compoundingLine:
    'Fix one constraint and the next becomes obvious. The cycle re-checks Offers, Demand and Delivery on what is binding now.',
} as const

export const governance = {
  heading: 'Governance and ownership',
  intro:
    'Every engagement is scoped in writing before work starts. Your firm owns the code, the agents and the playbooks. We do not bill by the hour.',
  items: [
    {
      title: 'Judgement on your side',
      body: 'AI and build decisions checked before you spend.',
    },
    {
      title: 'Priorities you own',
      body: 'Leverage and scope set with you, never by a vendor.',
    },
    {
      title: 'Ship-gate before build budget moves',
      body: 'A short written review so scope and ownership are clear first.',
    },
    {
      title: "Proof it's working",
      body: 'Output per person tracked as you grow. No invented proof points.',
    },
    {
      title: 'Playbooks your team can run',
      body: 'Documentation and handover so the win sticks without us in the loop.',
    },
    {
      title: 'Fixed scope when we build',
      body: 'Install Delivery is agreed in writing; your firm still owns the code.',
    },
  ],
} as const

export const shipGateDelivery = {
  heading: 'Ship-gate and Install Delivery',
  body:
    'Ship-gate is the short written review before build budget moves. Install Delivery is when we ship more of the build under fixed scope, with the code staying yours. We do not publish commercial terms on this page.',
} as const

export const productEngineerPath = {
  eyebrow: 'Owned shipping capability',
  heading: 'Your team, building with AI.',
  body:
    'On Install Partnership, owned shipping capability is included when the bet needs it. We work alongside your developers and train them in AI-driven development on your real backlog, so your firm owns the code and keeps the capability. No developers? We help you place one and train them from day one.',
  smallPrint:
    'Included on Install Partnership when the bet needs owned build. Optional on Delivery if you have or place a developer. Details are agreed with you when the Install needs build.',
} as const

export const fitLine =
  `Built for owner-led services firms of 20 to 200 people where Offers, Demand or Delivery is capping growth. Not sure? ${scoreCta.label}.` as const

export const faq = {
  eyebrow: 'Common questions',
  heading: 'Profit Engine in practice',
  items: [
    {
      question: 'Do you only fix delivery?',
      answer:
        'No. Offers, Demand and Delivery can each bind growth. We start with whichever is capping margin now.',
    },
    {
      question: 'Install Partnership or Install Delivery?',
      answer:
        'Same ninety-day Install either way. Partnership runs through your team with owned shipping capability when the bet needs it. Delivery is when we ship more of the build under fixed scope. The free Constraint review call picks the mode that fits.',
    },
    {
      question: 'Can we pause or leave?',
      answer:
        'Your playbooks and IP stay yours. Pause or leave when you need to; nothing renews by default.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is confirmed in writing before work starts.',
    },
    {
      question: 'What if the problem is demand, not delivery?',
      answer:
        'Then Demand is the binding constraint. After diagnosis we run demand work inside Profit Engine. FluentForward owns diagnosis, the relationship and the scorecard. Where useful we white-label specialists or place people. We are not a cold lead-gen agency.',
    },
  ],
} as const

export const altRoute = {
  before: 'Want the full menu of scoped build and setup items? ',
  linkLabel: 'See ways we work',
  href: '/ways-we-work',
  after: '.',
} as const
