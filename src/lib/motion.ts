/**
 * FluentForward motion tokens and seekable mock timelines.
 * One progress value in [0, 1] drives every signature mock.
 * Linear time is only the timeline clock. Position uses ease-out or a
 * critically damped spring sample. Opacity never overshoots.
 */

export const MOTION = {
  ease: {
    appleOut: 'cubic-bezier(0.2, 0.7, 0.1, 1)',
    outQuint: 'cubic-bezier(0.22, 1, 0.36, 1)',
    outCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
    inOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
  },
  spring: {
    snappy: { stiffness: 320, damping: 30 },
    morph: { stiffness: 170, damping: 26 },
  },
  /** Critically damped morph (170/26), sampled. No overshoot. */
  morphLinear:
    'linear(0, 0.2329, 0.5498, 0.752, 0.8748, 0.9359, 0.9691, 0.9846, 0.9927, 0.9964, 1)',
  duration: {
    press: 150,
    move: 250,
    panel: 450,
    heroMock: 700,
  },
  staggerMs: 60,
} as const

/**
 * Status colours inside agent mocks only. Desaturated.
 * #a8c4a4 on #121214 is 9.9:1. #d4c09a on #121214 is 10.5:1.
 */
export const MOCK_STATUS = {
  healthy: '#a8c4a4',
  drift: '#d4c09a',
} as const

export const FOOTNOTE =
  'Once we have access to your systems, the data the agent needs, and scope agreed in writing.'

export const HERO_HEADLINE = "Tell us the problem. We'll build the agent that fixes it."

export const HERO_SUBHEAD =
  'Live in 10 working days*, hosted and looked after by us, improving every month.'

export const OWNERSHIP =
  'You own your data, processes and outputs. We host, run and improve the agents.'

export type AgentExample = {
  problem: string
  agent: string
  steps: readonly string[]
  human: string
}

/** Brief §2.4 problems, paired with the §7.9 reporting pattern. Examples only. */
export const AGENT_EXAMPLES: readonly AgentExample[] = [
  {
    problem: 'Our people spend days building client and management reports.',
    agent: 'Monthly client report agent',
    steps: [
      'Pull figures from the finance system and CRM',
      'Flag anything that does not match',
      'Draft the report in your template',
      'Send the draft to the account lead',
    ],
    human: 'A person approves every report before it is sent',
  },
  {
    problem: 'Leads and proposals go quiet because no one follows up in time.',
    agent: 'Sales follow-up agent',
    steps: [
      'Read new leads and open proposals',
      'Draft a follow-up in your tone',
      'Chase replies that have gone quiet',
      'Flag the deals that need a person',
    ],
    human: 'A person sends anything that needs judgement',
  },
  {
    problem: 'Client intake and onboarding is slow and manual.',
    agent: 'Intake agent',
    steps: [
      'Collect the details you always ask for',
      'Check nothing required is missing',
      'Set the work up in your tools',
      'Keep the client updated',
    ],
    human: 'A person checks exceptions before the work starts',
  },
] as const

export const REPORT_RUN = {
  request: "Build this month's client reports.",
  steps: [
    "Pull last month's figures from finance and CRM",
    'Reconcile them against the spreadsheet',
    'Draft each report in the template',
    'Send the drafts to the account lead',
  ],
  output: 'Drafts sent to the account lead',
  status: 'Healthy · ran just now',
} as const

const MORPH_SAMPLES = [0, 0.2329, 0.5498, 0.752, 0.8748, 0.9359, 0.9691, 0.9846, 0.9927, 0.9964, 1]

export function clamp01(value: number) {
  if (value <= 0) return 0
  if (value >= 1) return 1
  return value
}

export function lerp(from: number, to: number, amount: number) {
  return from + (to - from) * clamp01(amount)
}

export function easeOutQuint(value: number) {
  const t = clamp01(value)
  return 1 - (1 - t) ** 5
}

export function easeInOutQuart(value: number) {
  const t = clamp01(value)
  return t < 0.5 ? 8 * t * t * t * t : 1 - (-2 * t + 2) ** 4 / 2
}

/** Spring sample for position. Opacity should not use this. */
export function morphEase(value: number) {
  const t = clamp01(value)
  const scaled = t * (MORPH_SAMPLES.length - 1)
  const index = Math.floor(scaled)
  const next = Math.min(MORPH_SAMPLES.length - 1, index + 1)
  const fraction = scaled - index
  return MORPH_SAMPLES[index] + (MORPH_SAMPLES[next] - MORPH_SAMPLES[index]) * fraction
}

export function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

/** 0.3s per word + 0.5s. Text must not move during this hold. */
export function readingHoldMs(text: string) {
  return 300 * wordCount(text) + 500
}

function windowAt(elapsed: number, start: number, duration: number) {
  if (elapsed <= start) return 0
  if (elapsed >= start + duration) return 1
  return (elapsed - start) / duration
}

export function heroATimeline(problem: string) {
  const typeMs = Math.max(900, problem.length * 42)
  const holdMs = readingHoldMs(problem)
  const morphMs = 700
  const stepsMs = 2800
  const approveMs = 800
  const statusMs = 1500
  const total = typeMs + holdMs + morphMs + stepsMs + approveMs + statusMs
  return { typeMs, holdMs, morphMs, stepsMs, approveMs, statusMs, total }
}

export type HeroAFrame = {
  typed: string
  showCaret: boolean
  morph: number
  inputOpacity: number
  cardOpacity: number
  height: number
  radius: number
  visibleSteps: number
  approve: number
  pressed: boolean
  status: number
}

export function heroAFrame(progress: number, problem: string): HeroAFrame {
  const timing = heroATimeline(problem)
  const elapsed = clamp01(progress) * timing.total
  let cursor = 0
  const typeT = windowAt(elapsed, cursor, timing.typeMs)
  cursor += timing.typeMs
  const holdEnd = cursor + timing.holdMs
  cursor = holdEnd
  const morphT = windowAt(elapsed, cursor, timing.morphMs)
  const morphStart = cursor
  cursor += timing.morphMs
  const stepsT = windowAt(elapsed, cursor, timing.stepsMs)
  cursor += timing.stepsMs
  const approveT = windowAt(elapsed, cursor, timing.approveMs)
  cursor += timing.approveMs
  const statusT = windowAt(elapsed, cursor, timing.statusMs)

  const typedCount = Math.round(typeT * problem.length)
  const morph = morphEase(morphT)
  const swap = elapsed >= morphStart + 67

  return {
    typed: problem.slice(0, typedCount),
    showCaret: elapsed < holdEnd && Math.floor(elapsed / 460) % 2 === 0,
    morph,
    inputOpacity: swap ? 0 : 1,
    cardOpacity: swap ? easeOutQuint(Math.min(1, (elapsed - (morphStart + 67)) / 180)) : 0,
    height: lerp(128, 320, morph),
    radius: lerp(999, 14, morph),
    visibleSteps: stepsT * 4,
    approve: easeOutQuint(approveT),
    pressed: approveT > 0.35 && approveT < 0.7,
    status: easeOutQuint(statusT),
  }
}

export type HeroBFrame = {
  visibleSteps: number
  approve: number
  pressed: boolean
  status: number
}

export function heroBTimeline() {
  return { total: 9000 }
}

export function heroBFrame(progress: number): HeroBFrame {
  const elapsed = clamp01(progress) * 9000
  const stepsT = windowAt(elapsed, 1200, 4200)
  const approveT = windowAt(elapsed, 5600, 1400)
  const statusT = windowAt(elapsed, 7200, 1800)
  return {
    visibleSteps: stepsT * 4,
    approve: easeOutQuint(approveT),
    pressed: approveT > 0.4 && approveT < 0.72,
    status: easeOutQuint(statusT),
  }
}

export type HeroCFrame = {
  typed: string
  showCaret: boolean
  lines: number
  rule: number
  status: number
}

export function heroCTimeline(problem: string) {
  const typeMs = Math.max(900, problem.length * 42)
  const holdMs = readingHoldMs(problem)
  const linesMs = 2400
  const ruleMs = 700
  const statusMs = 1600
  return { total: typeMs + holdMs + linesMs + ruleMs + statusMs, typeMs, holdMs, linesMs, ruleMs }
}

export function heroCFrame(progress: number, problem: string): HeroCFrame {
  const timing = heroCTimeline(problem)
  const elapsed = clamp01(progress) * timing.total
  const typeT = windowAt(elapsed, 0, timing.typeMs)
  const afterHold = timing.typeMs + timing.holdMs
  const linesT = windowAt(elapsed, afterHold, timing.linesMs)
  const ruleT = windowAt(elapsed, afterHold + timing.linesMs, timing.ruleMs)
  const statusT = windowAt(elapsed, afterHold + timing.linesMs + 200, 1200)
  return {
    typed: problem.slice(0, Math.round(typeT * problem.length)),
    showCaret: elapsed < timing.typeMs + timing.holdMs && Math.floor(elapsed / 460) % 2 === 0,
    lines: linesT * 4,
    rule: morphEase(ruleT),
    status: easeOutQuint(statusT),
  }
}

export type AgentRunFrame = {
  request: number
  bars: number[]
  cursor: number
  pressed: boolean
  output: number
  status: number
}

export function agentRunFrame(progress: number): AgentRunFrame {
  const elapsed = clamp01(progress) * 9000
  const request = easeOutQuint(windowAt(elapsed, 0, 400))
  const bars = [0, 1, 2, 3].map((index) => {
    const start = 700 + index * 1100
    return windowAt(elapsed, start, 900)
  })
  const cursor = easeInOutQuart(windowAt(elapsed, 5200, 1600))
  const pressT = windowAt(elapsed, 6800, 500)
  const output = easeOutQuint(windowAt(elapsed, 7400, 500))
  const status = easeOutQuint(windowAt(elapsed, 8000, 1000))
  return {
    request,
    bars,
    cursor,
    pressed: pressT > 0.25 && pressT < 0.7,
    output,
    status,
  }
}

export function cursorPoint(cursor: number) {
  const t = easeInOutQuart(cursor)
  const x0 = 18
  const y0 = 22
  const x1 = 48
  const y1 = 8
  const x2 = 62
  const y2 = 74
  const u = 1 - t
  return {
    x: u * u * x0 + 2 * u * t * x1 + t * t * x2,
    y: u * u * y0 + 2 * u * t * y1 + t * t * y2,
  }
}

export type HealthFrame = {
  draw: number
  drift: number
  alert: number
  fix: number
  healthy: number
  tone: 'healthy' | 'drift'
}

export function healthFrame(progress: number): HealthFrame {
  const elapsed = clamp01(progress) * 10000
  const draw = windowAt(elapsed, 200, 2800)
  const drift = easeOutQuint(windowAt(elapsed, 3200, 700))
  const alert = easeOutQuint(windowAt(elapsed, 4000, 600))
  const fix = easeOutQuint(windowAt(elapsed, 5600, 600))
  const healthy = easeOutQuint(windowAt(elapsed, 6800, 900))
  const tone = healthy > 0.65 ? 'healthy' : drift > 0.4 ? 'drift' : 'healthy'
  return { draw, drift, alert, fix, healthy, tone }
}
