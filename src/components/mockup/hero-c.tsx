'use client'

import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'
import { useId } from 'react'

import {
  AGENT_EXAMPLES,
  clamp01,
  easeOutQuint,
  heroCFrame,
  heroCTimeline,
} from '@/lib/motion'

import { useInView, useMockPhase, useTimeline } from './playback'
import { MockTag, OwnProblemForm, PauseButtons } from './ui'

const LINES = [
  ['Agent', 'Monthly client report agent'],
  ['Checkpoint', 'A person approves every report'],
  ['Promise', 'Live in 10 working days*'],
  ['Status', 'Healthy · ran 2 min ago'],
] as const

function lineStyle(lines: number, index: number) {
  const shown = easeOutQuint(clamp01(lines - index))
  return { opacity: shown }
}

function HeroCView({
  progress,
  live,
  paused,
  settled,
  onToggle,
  onReplay,
  onFocusOwn,
}: {
  progress: number
  live: boolean
  paused: boolean
  settled: boolean
  onToggle: () => void
  onReplay: () => void
  onFocusOwn: () => void
}) {
  const example = AGENT_EXAMPLES[0]
  const frame = heroCFrame(progress, example.problem)
  const inputId = useId()

  return (
    <figure className="ffm-frame-light ffm-frame overflow-hidden" data-mock="hero-c">
      <figcaption className="ffm-bar">
        <span>Build docket</span>
        <MockTag label="Example" tone="light" />
      </figcaption>
      <div className="flex flex-1 flex-col bg-paper p-4 text-ink md:p-5">
        {live ? (
          <p className="sr-only">
            Example build docket. Problem: {example.problem} Agent: Monthly client report agent.
            A person approves every report. Live in 10 working days. Healthy, ran 2 minutes ago.
          </p>
        ) : null}
        <div aria-hidden={live} className="font-mono text-[14px] leading-relaxed">
          <p className="text-[12px] uppercase tracking-[0.08em] text-mist-d">Job ticket</p>
          <p className="mt-3 min-h-[4.5rem] text-base text-ink">
            <span className="text-mist-d">Problem. </span>
            {frame.typed}
            {frame.showCaret ? <span className="ffm-caret" style={{ background: '#0a0a0b' }} /> : null}
          </p>
          <ul className="mt-2 space-y-2 border-t border-line pt-3">
            {LINES.map(([label, value], index) => (
              <li key={label} className="min-h-[1.6rem]" style={lineStyle(frame.lines, index)}>
                <span className="text-mist-d">{label}. </span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <m.div
            className="mt-4 h-0.5 origin-left bg-accent"
            style={{ transform: `scaleX(${frame.rule})` }}
          />
        </div>
        <OwnProblemForm id={inputId} tone="light" onFocus={onFocusOwn} />
      </div>
      {live ? (
        <div className="ffm-controls bg-paper">
          <PauseButtons
            paused={paused}
            settled={settled}
            loop
            tone="light"
            onToggle={onToggle}
            onReplay={onReplay}
            label="docket"
          />
        </div>
      ) : null}
    </figure>
  )
}

function HeroCLive() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const duration = heroCTimeline(AGENT_EXAMPLES[0].problem).total
  const { progress, paused, setPaused, settled, replay } = useTimeline({
    durationMs: duration,
    loop: true,
    live: true,
    inView,
  })

  return (
    <div ref={ref}>
      <HeroCView
        progress={progress}
        live
        paused={paused}
        settled={settled}
        onToggle={() => setPaused((value) => !value)}
        onReplay={replay}
        onFocusOwn={() => setPaused(true)}
      />
    </div>
  )
}

export function HeroC({ still, t }: { still: boolean; t: number }) {
  const phase = useMockPhase(still)
  if (phase !== 'live') {
    return (
      <HeroCView
        progress={phase === 'still' ? t : 1}
        live={false}
        paused={false}
        settled
        onToggle={() => undefined}
        onReplay={() => undefined}
        onFocusOwn={() => undefined}
      />
    )
  }
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <HeroCLive />
      </MotionConfig>
    </LazyMotion>
  )
}
