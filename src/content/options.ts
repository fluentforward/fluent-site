export const meta = {
  description:
    'Design Sprint, Leverage Board, and Impact Build side by side. Fixed commercial terms stay private until written down.',
} as const

export const hero = {
  heading: 'Three options. One decision for now.',
  deck:
    'Your leadership wants AI leverage without inventing an in-house AI role. You already buy specialist capability from outside. These are the three ways we work. Pick the smallest step that matches how clear the first release is, and how much judgment you want alongside it.',
} as const

export type CompareRowKey =
  | 'whatItIs'
  | 'bestWhen'
  | 'youGet'
  | 'duration'
  | 'buyerTime'
  | 'guaranteeRisk'
  | 'whatItIsNot'
  | 'usualNextStep'

export const compareRowLabels: Record<CompareRowKey, string> = {
  whatItIs: 'What it is',
  bestWhen: 'Best when',
  youGet: 'You get',
  duration: 'Duration',
  buyerTime: 'Buyer time',
  guaranteeRisk: 'Guarantee / risk',
  whatItIsNot: 'What it is not',
  usualNextStep: 'Usual next step',
}

export const compareRowOrder: CompareRowKey[] = [
  'whatItIs',
  'bestWhen',
  'youGet',
  'duration',
  'buyerTime',
  'guaranteeRisk',
  'whatItIsNot',
  'usualNextStep',
]

export type CompareColumn = {
  title: string
  rows: Record<CompareRowKey, string>
}

export const compareColumns: CompareColumn[] = [
  {
    title: 'One-Month Interaction Engine Design Sprint',
    rows: {
      whatItIs:
        'Discovery and prototype. Find the engine worth building before you spend on build.',
      bestWhen:
        'The biggest-impact first release is not yet clear, or you need a pack the CEO and IT can trust before committing build budget.',
      youGet:
        'Clickable prototype, named first-release brief, honest build / don\u2019t-build read. Design pack stays yours either way.',
      duration: 'About one month. Fixed fee.',
      buyerTime:
        'Roughly 8-12 hours across kickoff, interviews, mapping access, and prototype review.',
      guaranteeRisk:
        'Full refund of the Design fee unless you get the prototype and named first-release brief (or an honest "don\u2019t build yet" pack).',
      whatItIsNot: 'Not production build. Not a workshop alone.',
      usualNextStep:
        'Impact Build if build is recommended; or stop with the pack. Board can sit alongside later work.',
    },
  },
  {
    title: 'Leverage Board',
    rows: {
      whatItIs:
        'Fractional Chief of AI seat. Ongoing judgment on where leverage is, where it isn\u2019t, and ship / don\u2019t ship.',
      bestWhen:
        'Leadership wants expert judgment and a decision rhythm without hiring, and may or may not be ready to build yet.',
      youGet:
        'Seat + four touchpoints a year (three strategy sessions + Annual Leverage Summit) + portal office hours + portal AI advisor (prep only) + library + ship-gate before any build budget.',
      duration: 'Membership (quarterly or annual).',
      buyerTime: 'Strategy sessions and Summit; portal submissions between.',
      guaranteeRisk:
        'Commercial terms private and written before start. Not hours. Not open Slack.',
      whatItIsNot: 'Not staff augmentation. Not Release Engine by itself.',
      usualNextStep:
        'Optional Release Engine when ship-gate says yes. Or Board through an Impact Build window, then decide whether to keep the seat.',
    },
  },
  {
    title: 'Impact Build',
    rows: {
      whatItIs:
        'Fixed-fee first owned release of the Interaction Engine, about eight weeks.',
      bestWhen:
        'The first release scope is already clear enough to quote, including process and IT constraints.',
      youGet:
        'Working system in your business, owned by you, with a short adoption note.',
      duration: 'About eight weeks once scoped. Fixed fee.',
      buyerTime:
        'Scoped at sign-off; closer contact while the release settles.',
      guaranteeRisk:
        'Fixed fee agreed before work. Number does not move unless you change scope. You own what ships.',
      whatItIsNot: 'Not discovery. Not an open retainer.',
      usualNextStep:
        'Stop with the system running, or keep a Board seat for ongoing judgment and optional later releases.',
    },
  },
]

export const howTheyFit = {
  heading: 'How they fit together',
  body:
    'Most engagements start with the Design Sprint, then Impact Build for the first owned release. A Board seat can run through that build window, then continue as paid membership. If the first release and IT constraints are already clear, some operators go straight to Impact Build with Board included for the build. Release Engine (Steady / Build / Velocity) is optional ship capacity for Board members only. Never without a seat. Never without a ship-gate.',
} as const

export const choose = {
  heading: 'A simple way to choose',
  items: [
    'Unclear what to build first, or CEO needs a bounded pack before spend \u2192 Design Sprint',
    'Clear that expertise and judgment are the gap, not yet a named build \u2192 Leverage Board',
    'First release already scoped enough to quote, and a first-release build budget is on the table \u2192 Impact Build (often with Board for the window)',
    'Want judgment plus a first release in one commercial conversation \u2192 Board + Impact Build',
  ],
} as const

export const purpose = {
  heading: 'What this page is for',
  body:
    'Internal framing for a leadership conversation. Not a public offer page. Commercial numbers are set in writing before anything starts.',
} as const

export const cta = {
  heading: 'Worth narrowing which of the three fits?',
  email: 'hello@fluentforward.com',
} as const

export const footerStrip =
  'Senior-led delivery for established businesses. Install an Interaction Engine you own, then choose how to stay on.' as const
