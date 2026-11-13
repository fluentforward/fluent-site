'use client'

import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'
import { useId, useState } from 'react'

import {
  AGENT_EXAMPLES,
  clamp01,
  easeOutQuint,
  heroAFrame,
  heroATimeline,
} from '@/lib/motion'

import { useInView, useMockPhase, useTimeline } from './playback'
import { MockTag, OwnProblemForm, PauseButtons } from './ui'

function appear(amount: number) {
  const shown = easeOutQuint(clamp01(amount))
  return {
    opacity: shown,
    transform: shown >= 1 ? 'none' : `translateY(${(1 - shown) * 4}px)`,
  }
}

function HeroAView({
  progress,
  exampleIndex,
  live,
  paused,
  settled,
  onToggle,
  onReplay,
  onNext,
  onFocusOwn,
}: {
  progress: number
  exampleIndex: number
  live: boolean
  paused: boolean
  settled: boolean
  onToggle: () => void
  onReplay: () => void
  onNext: () => void
  onFocusOwn: () => void
}) {
  const example = AGENT_EXAMPLES[exampleIndex]
  const frame = heroAFrame(progress, example.problem)
  const inputId = useId()

  return (
    <figure className="ffm-frame" data-mock="hero-a">
      <figcaption className="ffm-bar">
        <span>Problem in, agent out</span>
        <MockTag label="Example" />
      </figcaption>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {live ? (
          <p className="sr-only">
            Example. {example.problem} The same box becomes the {example.agent}. {example.human}.
            Status: Healthy, ran 2 minutes ago.
          </p>
        ) : null}
        <div className="ffm-stage" aria-hidden={live}>
          <m.div
            className="ffm-morph"
            style={{ height: frame.height, borderRadius: frame.radius }}
          >
            <div
              className="flex min-h-24 items-center px-4 text-base leading-snug text-paper"
              style={{ opacity: frame.inputOpacity }}
            >
              <p>
                {frame.typed}
                {frame.showCaret ? <span className="ffm-caret" /> : null}
              </p>
            </div>
            <div
              className="absolute inset-0 flex flex-col justify-between p-4"
              style={{ opacity: frame.cardOpacity }}
            >
              <div>
                <p className="text-lg font-semibold tracking-[-0.02em] text-paper">
                  {example.agent}
                </p>
                <ol className="mt-3 space-y-1.5">
                  {example.steps.map((step, index) => (
                    <li
                      key={step}
                      className="text-sm leading-snug text-lede-dark"
                      style={appear(frame.visibleSteps - index)}
                    >
                      <span className="mr-2 font-mono text-[12px] text-mist">
                        0{index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className={[
                    'ffm-approve',
                    frame.approve > 0.35 ? 'is-live' : '',
                    frame.pressed ? 'is-pressed' : '',
                  ].join(' ')}
                  style={{ opacity: Math.max(frame.cardOpacity, frame.approve) }}
                >
                  Approve
                </span>
                <p
                  className="font-mono text-[12px] uppercase tracking-[0.06em]"
                  style={{ color: 'var(--ffm-healthy)', opacity: frame.status }}
                >
                  Healthy · ran 2 min ago
                </p>
              </div>
            </div>
          </m.div>
        </div>
        <OwnProblemForm id={inputId} onFocus={onFocusOwn} />
      </div>
      <div className="ffm-controls">
        {live ? (
          <PauseButtons
            paused={paused}
            settled={settled}
            loop
            onToggle={onToggle}
            onReplay={onReplay}
            label="example"
          />
        ) : (
          <button type="button" className="ffm-control" onClick={onNext}>
            Next example
          </button>
        )}
        {live ? (
          <button type="button" className="ffm-control" onClick={onNext}>
            Next example
          </button>
        ) : null}
      </div>
    </figure>
  )
}

function HeroALive({
  exampleIndex,
  onNext,
}: {
  exampleIndex: number
  onNext: () => void
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const example = AGENT_EXAMPLES[exampleIndex]
  const duration = heroATimeline(example.problem).total
  const { progress, paused, setPaused, settled, replay } = useTimeline({
    durationMs: duration,
    loop: true,
    live: true,
    inView,
  })

  return (
    <div ref={ref}>
      <HeroAView
        progress={progress}
        exampleIndex={exampleIndex}
        live
        paused={paused}
        settled={settled}
        onToggle={() => setPaused((value) => !value)}
        onReplay={() => {
          setPaused(false)
          replay()
        }}
        onNext={() => {
          setPaused(true)
          onNext()
          replay()
        }}
        onFocusOwn={() => setPaused(true)}
      />
    </div>
  )
}

export function HeroA({ still, t }: { still: boolean; t: number }) {
  const phase = useMockPhase(still)
  const [exampleIndex, setExampleIndex] = useState(0)
  const onNext = () => setExampleIndex((index) => (index + 1) % AGENT_EXAMPLES.length)

  if (phase !== 'live') {
    return (
      <HeroAView
        progress={phase === 'still' ? t : 1}
        exampleIndex={exampleIndex}
        live={false}
        paused={false}
        settled
        onToggle={() => undefined}
        onReplay={() => undefined}
        onNext={onNext}
        onFocusOwn={() => undefined}
      />
    )
  }

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <HeroALive exampleIndex={exampleIndex} onNext={onNext} />
      </MotionConfig>
    </LazyMotion>
  )
}
