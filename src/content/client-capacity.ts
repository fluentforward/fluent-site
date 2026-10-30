import { gartnerPressReleases } from '@/content/gartner'

export const meta = {
  title: 'Client Capacity | FluentForward',
  description:
    'Clear what\u2019s stopping the next client: offers, demand or delivery. Client Capacity for services firms: Partnership or Delivery after diagnosis. Your firm owns what we build.',
} as const

export const structuredServiceType =
  'AI and operations advisory for services firms' as const

export const hero = {
  eyebrow: 'Client Capacity',
  heading: 'Clear what\u2019s stopping the next client.',
  lede:
    'If the offer is wrong, demand is thin, or delivery breaks when you grow, hiring is the default lever. We find which of those is capping you now, ship one visible win, install a cycle that re-checks all three, and choose Partnership or Delivery only after that. Your firm owns the code, the agents and the roadmap.',
} as const

export const ifYouBeats = {
  eyebrow: 'Offers · Demand · Delivery',
  heading: 'Talk to the limit that is capping you.',
  lede:
    'Start with what\u2019s true in the business, not with a tool wishlist. Fix one, and the next limit shows up. The same programme sequences whatever comes next.',
  items: [
    {
      title: 'If your offer is wrong',
      body:
        'How you package and get paid. Free up hours but keep selling hours or days and you get a leaner timesheet, not more revenue. Seniors reinvent the deal; margin stays stuck. Packaging sits in the trunk, not as a later optional module. Fix how you get paid first so freed time turns into productised offers, retainers or scoped outcomes. Then demand work is worth doing.',
    },
    {
      title: 'If your go-to-market is thin',
      body:
        'If the calendar is not filling with the right conversations, a strong delivery team still starves. Demand work runs inside the programme after diagnosis, not as a separate lead-gen shop. FluentForward owns diagnosis, the relationship and the scorecard. We are not a cold lead-gen agency.',
    },
    {
      title: 'If you struggle to take the next client',
      body:
        'Proposals, handoffs and throughput break when you grow. AI without ownership makes the checking worse. Fix throughput and ownership, install the cycle rhythm that makes the win stick, and the next limit (offers or demand) becomes obvious.',
    },
  ],
} as const

export const oneSystem = {
  heading: 'One system. Not three side projects.',
  body:
    'Offers without demand is a brochure. Demand without packaging is discount volume. Delivery AI without both is busywork. Client Capacity sequences what is capping you now, then re-checks the other two so the gain shows up as revenue and profit, not a leaner timesheet.',
} as const

export const servicesImpact = {
  heading: 'Built for owners who need profit from growth, not just more people',
  body:
    'If you need more of the right clients at prices that hold, and delivery that turns that work into margin without a hire for every win, Client Capacity runs offers, demand and delivery as one growth system. AI under rules you own moves you faster; it is not the product you buy.',
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
    summary: 'Done with you. Clear what\u2019s stopping you through your team.',
    body:
      'We find whether offers, demand or delivery is capping you now, prioritise a leverage list, decide buy / build / place before spend moves, ship the first win with your people, and install the cycle rhythm. Owned shipping capability is included when the bet needs it: we turn your software developers into product engineers, or help you place one, so the code and the capability stay in your firm.',
    bullets: [
      'Clarity on offers, demand or delivery, plus a prioritised leverage backlog.',
      'Buy / build / place decisions before spend moves.',
      'First win shipped through your team on what is capping you now.',
      'Cycle rhythm installed.',
      'Owned shipping capability included when the bet needs it (train your developers, or help place one).',
    ],
  },
  delivery: {
    id: 'delivery',
    name: 'Client Capacity Delivery',
    summary: 'Done for you. Same clearance. We do more of the build and ship.',
    body:
      'Same diagnosis and cycle. We find what is stopping the next client, run the same steps, and do more of the build and ship under fixed scope in writing. Your firm still owns the code. When go-to-market is thin, demand work may use white-labelled specialists or placed people; FluentForward still owns diagnosis, the relationship and the scorecard. Choose this when you need speed or do not have people to run the build yourselves.',
    bullets: [
      'Same Client Capacity cycle as Partnership.',
      'We deliver more of the build and ship, fixed scope.',
      'Demand path when go-to-market is thin; FluentForward owns diagnosis, relationship and scorecard.',
      'Your firm owns the code and the roadmap.',
      'Cycle rhythm installed so the win sticks.',
      'Owned shipping capability available when the bet needs it, if you have or place a developer (optional · not assumed).',
    ],
  },
} as const

export const process = {
  eyebrow: 'Same cycle either mode',
  heading: 'How we run it',
  steps: [
    'Diagnose the growth constraints',
    'Prioritise the leverage list',
    'Decide buy / build / place',
    'Set AI ownership rules',
    'Ship the first win',
    'Install the cycle rhythm',
    'Add owned shipping capability (when the bet needs it)',
  ],
  choiceLine:
    'After we know what\u2019s stopping you, one question: do we run this through your people, or do you want us to deliver more of it?',
  compoundingLine:
    'Fix one limit and the next becomes obvious. The cycle rhythm re-checks offers, demand and delivery; the next cycle runs the same steps on what is capping you now.',
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
  eyebrow: 'Owned shipping capability',
  heading: 'Your team, building with AI.',
  body:
    'On Partnership, owned shipping capability is included when the bet needs it. We work alongside your developers and train them in AI-driven development on your real backlog, so your firm owns the code and keeps the capability. No developers? We help you place one and train them from day one.',
  smallPrint:
    'Included on Client Capacity Partnership when the bet needs owned build. Optional on Delivery if you have or place a developer. Details are agreed with you when Client Capacity says build.',
} as const

export const fitLine =
  'Built for owner-led services firms of 20 to 200 people where offers, demand or delivery is capping growth. Not sure? First AI Move will tell you.' as const

export const faq = {
  eyebrow: 'Common questions',
  heading: 'Client Capacity in practice',
  items: [
    {
      question: 'Do you only fix delivery?',
      answer:
        'No. Offers (packaging and how you get paid), demand (qualified pipeline and sales), and delivery (proposals, handoffs, throughput) can each stop the next client. We start with whichever is capping you now.',
    },
    {
      question: 'Partnership or Delivery?',
      answer:
        'Same cycle either way. Partnership runs through your team with owned shipping capability included when the bet needs it. Delivery is when we ship more of the build under fixed scope. The free Audit review call picks the mode that fits.',
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
      question: 'What if the problem is demand, not delivery?',
      answer:
        'Then demand is the limit. After diagnosis we run demand work inside Client Capacity: FluentForward owns diagnosis, the relationship and the scorecard. Where useful we white-label specialists or place people. We are not a cold lead-gen agency.',
    },
  ],
} as const

export const altRoute = {
  before: 'Want the full menu of scoped build and setup items? ',
  linkLabel: 'See ways we work',
  href: '/ways-we-work',
  after: '.',
} as const
