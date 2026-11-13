'use client'

import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'
import { useId } from 'react'

import { AGENT_EXAMPLES, clamp01, easeOutQuint, heroBFrame } from '@/lib/motion'

import { useInView, useMockPhase, useTimeline } from './playback'
import { MockTag, PauseButtons } from './ui'

const example = AGENT_EXAMPLES[0]

function appear(amount: number) {
  const shown = easeOutQuint(clamp01(amount))
  return {
    opacity: shown,
    transform: shown >= 1 ? 'none' : `translateY(${(1 - shown) * 4}px)`,
  }
}

function HeroBView({
  progress,
  live,
  paused,
  settled,
  onToggle,
  onReplay,
}: {
  progress: number
  live: boolean
  paused: boolean
  settled: boolean
  onToggle: () => void
  onReplay: () => void
}) {
  const frame = heroBFrame(progress)
  const noteId = useId()

  return (
    <figure className="ffm-frame ffm-frame-light overflow-hidden" data-mock="hero-b">
      <figcaption className="ffm-bar">
        <span>Problem stays in view</span>
        <MockTag label="Example" tone="light" />
      </figcaption>
      {live ? (
        <p className="sr-only">
          Example. The problem stays visible: {example.problem} Beside it, the {example.agent}.{' '}
          {example.human}. Status: Healthy, ran 2 minutes ago.
        </p>
      ) : null}
      <div className="grid flex-1 md:grid-cols-2">
        <blockquote className="self-start border-b border-line p-5 md:border-b-0 md:border-r">
          <p className="text-lg leading-snug tracking-[-0.02em] text-ink">
            {example.problem}
          </p>
          <footer className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
            Example of what a firm might ask
          </footer>
        </blockquote>
        <div className="bg-ink-2 p-5 text-paper" aria-hidden={live} id={noteId}>
          <p className="text-lg font-semibold tracking-[-0.02em]">{example.agent}</p>
          <ol className="mt-4 space-y-2">
            {example.steps.map((step, index) => (
              <li key={step} className="text-sm leading-snug text-lede-dark" style={appear(frame.visibleSteps - index)}>
                <span className="mr-2 font-mono text-[12px] text-mist">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <m.span
              className={[
                'ffm-approve',
                frame.approve > 0.4 ? 'is-live' : '',
                frame.pressed ? 'is-pressed' : '',
              ].join(' ')}
            >
              Approve
            </m.span>
            <p
              className="font-mono text-[12px] uppercase tracking-[0.06em]"
              style={{ color: 'var(--ffm-healthy)', opacity: frame.status }}
            >
              Healthy · ran 2 min ago
            </p>
          </div>
        </div>
      </div>
      {live ? (
        <div className="ffm-controls">
          <PauseButtons
            paused={paused}
            settled={settled}
            loop
            onToggle={onToggle}
            onReplay={onReplay}
            label="example"
            tone="light"
          />
        </div>
      ) : null}
    </figure>
  )
}

function HeroBLive() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const { progress, paused, setPaused, settled, replay } = useTimeline({
    durationMs: 9000,
    loop: true,
    live: true,
    inView,
  })

  return (
    <div ref={ref}>
      <HeroBView
        progress={progress}
        live
        paused={paused}
        settled={settled}
        onToggle={() => setPaused((value) => !value)}
        onReplay={replay}
      />
    </div>
  )
}

export function HeroB({ still, t }: { still: boolean; t: number }) {
  const phase = useMockPhase(still)
  if (phase !== 'live') {
    return (
      <HeroBView
        progress={phase === 'still' ? t : 1}
        live={false}
        paused={false}
        settled
        onToggle={() => undefined}
        onReplay={() => undefined}
      />
    )
  }
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <HeroBLive />
      </MotionConfig>
    </LazyMotion>
  )
}
