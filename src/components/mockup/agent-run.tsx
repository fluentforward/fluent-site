'use client'

import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'

import { REPORT_RUN, agentRunFrame, lerp } from '@/lib/motion'

import { useInView, useMockPhase, useTimeline } from './playback'
import { MockTag, PauseButtons } from './ui'

function Cursor({ progress }: { progress: number }) {
  const frame = agentRunFrame(progress)
  const travel = frame.cursor
  const arc = Math.sin(travel * Math.PI) * -48
  if (travel <= 0.02 || frame.output > 0.85) return null
  return (
    <m.span
      aria-hidden="true"
      className="ffm-cursor"
      style={{
        transform: `translate(${lerp(-220, -14, travel)}px, ${lerp(-200, 2, travel) + arc}px)`,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M4 2 L4 16 L8.2 12.2 L11.4 18 L13.5 17 L10.2 11.2 L16 10.6 Z" fill="#f4f4f1" />
      </svg>
    </m.span>
  )
}

function AgentRunView({
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
  const frame = agentRunFrame(progress)

  return (
    <figure className="ffm-frame" data-mock="agent-run">
      <figcaption className="ffm-bar">
        <span>One run</span>
        <MockTag label="Illustration" />
      </figcaption>
      {live ? (
        <p className="sr-only">
          Illustration of one run. Request: {REPORT_RUN.request} A person clicks Approve. Output:{' '}
          {REPORT_RUN.output}. Status: Healthy, ran just now.
        </p>
      ) : null}
      <div className="relative flex-1 p-4 md:p-6" aria-hidden={live}>
        <p className="font-mono text-sm text-paper" style={{ opacity: frame.request }}>
          <span className="text-mist">Request. </span>
          {REPORT_RUN.request}
        </p>
        <ol className="mt-5 space-y-3">
          {REPORT_RUN.steps.map((step, index) => (
            <li key={step}>
              <p className="text-sm leading-snug text-lede-dark">
                <span className="mr-2 font-mono text-[12px] text-mist">0{index + 1}</span>
                {step}
              </p>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full w-full origin-left rounded-full bg-paper/80"
                  style={{ transform: `scaleX(${frame.bars[index]})` }}
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="relative mt-6 flex flex-wrap items-center gap-4">
          <span
            className={[
              'ffm-approve relative',
              frame.cursor > 0.72 ? 'is-live' : '',
              frame.pressed ? 'is-pressed' : '',
            ].join(' ')}
          >
            Approve
            <Cursor progress={progress} />
          </span>
          <p className="text-sm text-paper" style={{ opacity: frame.output }}>
            {REPORT_RUN.output}
          </p>
        </div>
        <p
          className="mt-5 font-mono text-[12px] uppercase tracking-[0.06em]"
          style={{ color: 'var(--ffm-healthy)', opacity: frame.status }}
        >
          {REPORT_RUN.status}
        </p>
      </div>
      <div className="ffm-controls">
        {live ? (
          <PauseButtons
            paused={paused}
            settled={settled}
            loop={false}
            onToggle={onToggle}
            onReplay={onReplay}
            label="run"
          />
        ) : progress > 0.98 ? (
          <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-mist">
            Finished illustration
          </p>
        ) : null}
      </div>
    </figure>
  )
}

function AgentRunLive() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const { progress, paused, setPaused, settled, replay } = useTimeline({
    durationMs: 9000,
    loop: false,
    live: true,
    inView,
  })
  return (
    <div ref={ref}>
      <AgentRunView
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

export function AgentRun({ still, t }: { still: boolean; t: number }) {
  const phase = useMockPhase(still)
  if (phase !== 'live') {
    return (
      <AgentRunView
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
        <AgentRunLive />
      </MotionConfig>
    </LazyMotion>
  )
}
