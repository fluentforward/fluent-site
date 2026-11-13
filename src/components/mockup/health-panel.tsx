'use client'

import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'

import { MOCK_STATUS, healthFrame } from '@/lib/motion'

import { useInView, useMockPhase, useTimeline } from './playback'
import { MockTag, PauseButtons } from './ui'

function HealthView({
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
  const frame = healthFrame(progress)
  const drifting = frame.tone === 'drift'
  const stroke = drifting ? MOCK_STATUS.drift : MOCK_STATUS.healthy
  const chip = frame.healthy > 0.65 ? 'Healthy' : frame.drift > 0.45 ? 'Drifting' : 'Healthy'

  return (
    <figure className="ffm-frame" data-mock="health">
      <figcaption className="ffm-bar">
        <span>Agent health</span>
        <MockTag label="Illustration" />
      </figcaption>
      <div className="flex-1 p-4 md:p-6">
        {live ? (
          <p className="sr-only">
            Illustration. Drift is raised when a check falls below the agreed threshold, then
            resolved after a fix. The agent returns to healthy. Not live monitoring data.
          </p>
        ) : null}
        <div className="flex flex-wrap items-center justify-between gap-3" aria-hidden={live}>
          <p
            className="font-mono text-[12px] uppercase tracking-[0.08em]"
            style={{ color: chip === 'Drifting' ? 'var(--ffm-drift)' : 'var(--ffm-healthy)' }}
          >
            {chip}
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-mist">
            ran 2 min ago
          </p>
        </div>
        <m.svg viewBox="0 0 400 80" className="mt-4 h-20 w-full" aria-hidden="true">
          <m.path
            d="M4 24 C 70 22, 120 20, 170 28 S 230 68, 270 58 S 340 16, 396 18"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - frame.draw}
          />
        </m.svg>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-mist">
          Agreed checks
        </p>
        <ul className="mt-3 min-h-[4.75rem] space-y-2 text-sm text-lede-dark" aria-hidden={live}>
          <li style={{ opacity: frame.alert }}>Eval below agreed threshold</li>
          <li style={{ opacity: frame.fix }}>Fix deployed</li>
          <li style={{ opacity: frame.healthy }}>Back to healthy</li>
        </ul>
      </div>
      <div className="ffm-controls">
        {live ? (
          <PauseButtons
            paused={paused}
            settled={settled}
            loop
            onToggle={onToggle}
            onReplay={onReplay}
            label="health"
          />
        ) : progress > 0.98 ? (
          <p className="max-w-[40ch] text-sm leading-relaxed text-mist">
            Resolved state. The check was raised, a fix was deployed, and the agent is healthy
            again.
          </p>
        ) : null}
      </div>
    </figure>
  )
}

function HealthLive() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const { progress, paused, setPaused, settled, replay } = useTimeline({
    durationMs: 10000,
    loop: true,
    live: true,
    inView,
  })
  return (
    <div ref={ref}>
      <HealthView
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

export function HealthPanel({ still, t }: { still: boolean; t: number }) {
  const phase = useMockPhase(still)
  if (phase !== 'live') {
    return (
      <HealthView
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
        <HealthLive />
      </MotionConfig>
    </LazyMotion>
  )
}
