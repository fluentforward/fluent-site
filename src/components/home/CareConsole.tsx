'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useInView, useReducedMotion } from './hooks'
import { Chevron, Tag } from './Mark'

/* Everything in this console is an illustration: times, counts and events are scene dressing. */

export type CareFocus = 'run' | 'evals' | 'drift' | 'improve' | 'connector' | 'report'

/** What the console shows. A pinned scroll scene drives it; otherwise it plays once on a timer. */
export type CareScene = {
  log: number
  waiting: boolean
  drift: 'none' | 'drifting' | 'fixed'
  /** 0..1 how much of the quality line is drawn */
  evals: number
  focus: CareFocus | null
}

const FINISHED: CareScene = { log: 3, waiting: true, drift: 'fixed', evals: 1, focus: null }

const RUN = [
  { at: '09:00:04', text: "Pulled last month's figures from the finance system and CRM" },
  { at: '09:00:41', text: 'Reconciled them with the tracking sheet', note: '2 items flagged' },
  { at: '09:02:13', text: "Drafted each client's report in your template" },
] as const

/* Timed playback, in ms after the run comes into view */
const CUE = { log: [250, 700, 1150], drift: 1500, waiting: 1750, fixed: 3900 } as const

/* 30 days of quality-check results, with one dip that was caught and fixed. */
const EVALS = [
  97, 98, 97, 99, 98, 98, 99, 97, 98, 99, 98, 99, 98, 97, 99, 98, 99, 98, 99, 98, 99, 98, 88, 84,
  96, 99, 98, 99, 98, 99,
]

function sparkPath(values: number[], width: number, height: number) {
  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width
      const y = height - ((value - 80) / 20) * height
      return `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

function Status({ tone, children }: { tone: 'healthy' | 'drift' | 'build'; children: React.ReactNode }) {
  return (
    <span className={clsx('ffh-status', `is-${tone}`)}>
      <span aria-hidden="true" className="ffh-status-dot" />
      {children}
    </span>
  )
}

function useTimedScene(enabled: boolean, inView: boolean) {
  const [scene, setScene] = useState<CareScene>(FINISHED)

  // Server HTML shows the finished scene. With motion allowed, reset off-screen and play once in view.
  useEffect(() => {
    if (enabled && !inView) setScene({ log: 0, waiting: false, drift: 'none', evals: 1, focus: null })
  }, [enabled, inView])

  useEffect(() => {
    if (!enabled || !inView) return
    const at = (ms: number, change: Partial<CareScene>) =>
      window.setTimeout(() => setScene((current) => ({ ...current, ...change })), ms)
    const ids = [
      ...CUE.log.map((ms, index) => at(ms, { log: index + 1 })),
      at(CUE.drift, { drift: 'drifting' }),
      at(CUE.waiting, { waiting: true }),
      at(CUE.fixed, { drift: 'fixed' }),
    ]
    return () => ids.forEach((id) => window.clearTimeout(id))
  }, [enabled, inView])

  return scene
}

export function CareConsole({ scene: driven }: { scene?: CareScene }) {
  const reduced = useReducedMotion()
  const animate = reduced === false
  // Start when the run itself is on screen (the console is very tall on phones).
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.45, once: true })
  const timed = useTimedScene(animate && !driven, inView)
  const scene = driven ?? timed
  const [approved, setApproved] = useState(false)
  const [message, setMessage] = useState('')

  const drifting = scene.drift === 'drifting'
  const fixed = scene.drift === 'fixed'

  const approve = () => {
    if (approved) return
    setApproved(true)
    setMessage('Approved. The report was sent and logged in the CRM.')
  }

  return (
    <div className="ffh-care-console" data-focus={scene.focus ?? undefined}>
      <div className="ffh-console-bar">
        <span className="inline-flex items-center gap-2.5">
          <Chevron className="h-[10px] w-[10px]" />
          Agent Care<span className="hidden sm:inline"> · your agents</span>
        </span>
        <span className="flex items-center gap-3">
          <span className="hidden normal-case tracking-normal sm:inline" data-region="report drift">
            {drifting ? (
              <Status tone="drift">1 needs attention</Status>
            ) : (
              <Status tone="healthy">All live agents healthy</Status>
            )}
          </span>
          <Tag>Illustration</Tag>
        </span>
      </div>

      <div className="ffh-care-grid">
        {/* Fleet */}
        <aside className="ffh-fleet" aria-label="Your agents">
          <p className="ffh-mono text-mist">Your agents</p>
          <ul className="mt-3 space-y-1">
            <li className="ffh-fleet-row is-selected" data-region="run report">
              <p className="ffh-fleet-name">Client report agent</p>
              <Status tone="healthy">{approved ? 'Live · ran just now' : 'Live · ran 2 min ago'}</Status>
            </li>
            <li className={clsx('ffh-fleet-row', drifting && 'is-alert')} data-region="drift report">
              <p className="ffh-fleet-name">Sales follow-up agent</p>
              {drifting ? (
                <Status tone="drift">Drifting · Agent Care on it</Status>
              ) : (
                <Status tone="healthy">{fixed ? 'Live · fixed and re-tested' : 'Live · ran 6 min ago'}</Status>
              )}
            </li>
            <li className="ffh-fleet-row" data-region="report">
              <p className="ffh-fleet-name">Intake agent</p>
              <Status tone="build">In build · day 6 of 10</Status>
              <span className="ffh-fleet-days" aria-hidden="true">
                {Array.from({ length: 10 }, (_, index) => (
                  <i key={index} className={index < 6 ? 'is-done' : undefined} />
                ))}
              </span>
            </li>
          </ul>
          <Link href="/contact" prefetch={false} className="ffh-fleet-next" data-region="fleet">
            <span className="ffh-fleet-plus" aria-hidden="true">
              +
            </span>
            <span>
              <span className="block font-medium text-paper">Your next agent</span>
              <span className="block text-[0.8125rem] text-mist">Scope it when the first one earns its keep</span>
            </span>
          </Link>
        </aside>

        {/* Selected agent run */}
        <div ref={ref} className="ffh-run">
          <div className="flex flex-wrap items-start justify-between gap-3" data-region="run report">
            <div>
              <p className="ffh-mono text-mist">Client report agent · monthly run</p>
              <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-paper">October reports</p>
            </div>
            <Status tone="healthy">{approved ? 'Healthy · ran just now' : 'Healthy · ran 2 min ago'}</Status>
          </div>

          <ol className="ffh-log" data-region="run report">
            {RUN.map((line, index) => (
              <li key={line.at} className={clsx('ffh-log-row', scene.log <= index && 'is-hidden')}>
                <time className="ffh-log-time">{line.at}</time>
                <span aria-hidden="true" className="ffh-log-tick" />
                <span className="min-w-0">
                  {line.text}
                  {'note' in line ? <span className="ffh-log-note">{line.note}</span> : null}
                </span>
              </li>
            ))}
            <li className={clsx('ffh-log-row is-person', !scene.waiting && 'is-hidden', approved && 'is-done')}>
              <time className="ffh-log-time">{approved ? '09:06:30' : '09:02:15'}</time>
              <span aria-hidden="true" className="ffh-log-ring" />
              <span>{approved ? 'Approved by you' : 'Waiting for a person to approve'}</span>
            </li>
            {approved ? (
              <li className="ffh-log-row is-new">
                <time className="ffh-log-time">09:06:31</time>
                <span aria-hidden="true" className="ffh-log-tick" />
                <span>Sent to each client and logged in the CRM</span>
              </li>
            ) : null}
          </ol>

          <div
            className={clsx('ffh-approval', !scene.waiting && 'is-hidden', approved && 'is-approved')}
            data-region="run report approve"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="ffh-mono text-mist">Draft for review</p>
                <p className="mt-1.5 font-medium text-paper">Client A · October report</p>
                <p className="mt-1 text-sm leading-relaxed text-lede-dark">
                  Figures reconciled. Two items flagged for your eye before it goes out.
                </p>
              </div>
              <span className="ffh-doc" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className={clsx('ffh-btn ffh-btn-primary ffh-approve', approved && 'is-done')}
                onClick={approve}
                aria-disabled={approved}
              >
                {approved ? 'Approved and sent' : 'Approve and send'}
              </button>
              <span className="text-sm text-mist">
                {approved ? 'That is the only step that needed you.' : 'Nothing goes out until a person says so.'}
              </span>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            {message}
          </p>
        </div>

        {/* Care */}
        <div className="ffh-care-col">
          <div data-region="evals">
            <div className="flex items-center justify-between">
              <p className="ffh-mono text-mist">Quality checks</p>
              <Status tone="healthy">Passing</Status>
            </div>
            <svg
              viewBox="0 0 240 64"
              className="ffh-spark"
              aria-hidden="true"
              data-run={animate && !driven && inView ? 'on' : undefined}
            >
              <line x1="0" x2="240" y1="22" y2="22" className="ffh-spark-bar" />
              <path
                d={sparkPath(EVALS, 240, 64)}
                pathLength={1}
                className="ffh-spark-line"
                style={driven ? { strokeDashoffset: 1 - scene.evals } : undefined}
              />
              <circle
                cx={(23 / 29) * 240}
                cy={64 - ((84 - 80) / 20) * 64}
                r="3.5"
                className="ffh-spark-dip"
                style={driven ? { opacity: scene.evals > 0.8 ? 1 : 0 } : undefined}
              />
            </svg>
            <p className="mt-1.5 text-[0.8125rem] text-mist">One dip in 30 days, fixed the same day.</p>
            <ul className="ffh-checks mt-3 space-y-1.5 text-[0.875rem] text-lede-dark">
              {['Figures match the source systems', 'Follows your report template', 'Flags anything it cannot match'].map(
                (check) => (
                  <li key={check} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="ffh-check" />
                    {check}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="mt-5 border-t border-line-dark pt-4">
            <p className="ffh-mono text-mist">Care log</p>
            <ul className="mt-2 space-y-0.5 text-[0.875rem] leading-snug">
              <li className={clsx('ffh-event', !fixed && 'is-hidden')} data-region="drift">
                <span className="ffh-event-at">09:31</span>
                <span>
                  <Status tone="healthy">Fixed</Status> Follow-up tone back on spec, re-tested
                </span>
              </li>
              <li className={clsx('ffh-event', scene.drift === 'none' && 'is-hidden')} data-region="drift">
                <span className="ffh-event-at">09:14</span>
                <span>
                  <Status tone="drift">Drift</Status> Follow-up tone slipped after a model update
                </span>
              </li>
              <li className="ffh-event" data-region="connector">
                <span className="ffh-event-at">Tue</span>
                <span className="text-lede-dark">CRM connector updated after a change on their side</span>
              </li>
              <li className="ffh-event" data-region="improve">
                <span className="ffh-event-at">Mon</span>
                <span className="text-lede-dark">Added the summary section your team asked for</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
