import { auditCta, boardConversationCta } from '@/content/board'

export const hero = {
  headline: 'Grow without adding headcount.',
  lede:
    'The Leverage Board gives your firm senior AI and operations judgement every quarter, so you know what to fix, what to build and who should build it, before you spend a penny on build.',
  primaryCta: auditCta,
  secondaryCta: boardConversationCta,
  auditHint: auditCta.hint,
}

export const contrast = {
  eyebrow: 'High vs low leverage',
  leadersHeading: 'What high leverage runs on.',
  followersHeading: 'What low leverage still puts up with.',
  leaders: [
    'An owned operating layer beside the CRM: one place people open first for customer and staff work.',
    'Processes and integrations that create leverage, not glue jobs.',
    'AI inside the work on that layer, with governance and ship-gates, not bolted on per vendor.',
    'Growth without a matching headcount curve.',
  ],
  followers: [
    'People as glue between systems. Inbox and sheets still hold the truth.',
    'Shadow AI: ChatGPT paste for work the system should carry, with no policy or control.',
    'Vendor-led roadmaps that make silos smarter without making the firm more productive.',
    'Growth equals hire and grind. Headcount climbs with volume.',
  ],
  bridge:
    'The gap is not ambition. It is leverage: who owns judgement on what to fix, what to build and who builds it.',
  alsoNot:
    'Also not: a chatbot nobody opens, an AI licence with a demo bolted on, or a multi-year programme before anything useful ships.',
}

export const gartnerProofHome = {
  heading: 'Most agentic projects will not survive the forecast',
  body:
    'Analysts forecast that more than 40% of agentic AI projects will be cancelled by the end of 2027, mostly for cost, unclear value, or weak risk controls. That is why strategy comes before build: quarter one on the Board settles what to build, who builds it and how it is controlled.',
  attribution:
    'Source: Gartner public research, June 2025. Not an endorsement of FluentForward.',
}

export const whoItsFor = {
  eyebrow: 'Fit',
  heading:
    'Services firms of about 20 to 200 people, run by owners who own client experience and staff interactions.',
  lede: 'Not sure where you sit? The Audit tells you.',
  rightFit: [
    'Named outcomes and stuck handoffs between systems, even if the path is unclear.',
    'Owners who will own how work runs, not delegate judgement to vendors.',
    'Willingness to measure productivity per head quarter by quarter.',
  ],
  wrongFit: [
    'You want a public chatbot or AI slides with no layer to own.',
    'You want a multi-year transformation programme as the first move.',
    'You want staff augmentation forever, not systems and judgement your team runs.',
  ],
}

export const whenBoardSaysBuild = {
  eyebrow: 'Member-only add-on',
  heading: 'When the Board says build',
  body:
    'Release Engine is optional ship capacity for Leverage Board members only, when judgement says the next release is worth it. Build can be delivered by us, by a partner or by your own vendor under Board oversight. Never sold without an active seat. Ship-gate comes first.',
}

export const closingCta = {
  eyebrow: 'Next step',
  heading: 'Find your stage, then talk if it fits.',
  body:
    'The Audit takes about ten minutes. If you would rather talk first, book a call. No public prices: terms are set in writing before anything starts, and you can pause or leave.',
  primaryCta: auditCta,
  secondaryCta: boardConversationCta,
}
