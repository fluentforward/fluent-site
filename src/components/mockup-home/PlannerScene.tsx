'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { Container } from '@/components/ui/Container'

import { usePinnedProgress, useReducedMotion } from './hooks'
import { Chevron, Eyebrow, Tag } from './Mark'

/* The example plan from the brief (§7.9), split into the pieces that assemble one by one. */
const STEPS = [
  'On the first working day of each month, it pulls last month’s figures from your finance system and CRM.',
  'It reconciles them against the tracking spreadsheet and flags anything that doesn’t match.',
  'It drafts each client’s report in your template, with a short plain-English summary.',
  'It sends the drafts to the account lead to review.',
  'Once a draft is approved, it sends the report and logs it in the CRM.',
]

const PIECES = 10 // problem, 5 steps, connects, human, time saved, live in 10 days

function PlanSheet({ revealed, pinned }: { revealed: number; pinned: boolean }) {
  const viewport = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [bottoms, setBottoms] = useState<number[]>([])
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!inner.current || !viewport.current) return
      setHeight(viewport.current.clientHeight)
      setBottoms(
        [...inner.current.querySelectorAll<HTMLElement>('[data-piece]')].map(
          (element) => element.offsetTop + element.offsetHeight,
        ),
      )
    }
    measure()
    const observer = new ResizeObserver(measure)
    if (viewport.current) observer.observe(viewport.current)
    return () => observer.disconnect()
  }, [])

  // Follow the newest piece, like a document being written.
  const last = Math.min(revealed, PIECES) - 1
  const offset = pinned && last >= 0 && bottoms[last] ? Math.max(0, bottoms[last] + 40 - height) : 0
  const shown = (index: number) => (pinned ? index < revealed : true)
  const ready = !pinned || revealed > PIECES

  return (
    <figure className={clsx('ffh-sheet-wrap', pinned && 'is-live')} aria-label="Example first-agent plan. Illustration only.">
      <div className="ffh-sheet-back" aria-hidden="true" />
      <div ref={viewport} className="ffh-sheet">
        <div ref={inner} className="ffh-sheet-inner" style={{ transform: offset ? `translateY(${-offset}px)` : undefined }}>
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2">
              <Chevron className="h-3 w-3" />
              <span className="text-[0.9375rem] font-bold tracking-[-0.03em]">First-agent plan</span>
            </span>
            <Tag tone="light">Example plan · Illustration only</Tag>
          </div>

          <p className="ffh-mono mt-6 text-mist-d">Your first agent</p>
          <p className="mt-1.5 text-[1.625rem] font-semibold leading-tight tracking-[-0.03em]">
            Monthly client report agent
          </p>

          <dl className="ffh-sheet-list">
            <div data-piece className={clsx('ffh-piece', !shown(0) && 'is-pending')}>
              <dt>The problem you described</dt>
              <dd>
                Two people spend about three days a month building client reports from the finance
                system, the CRM and a spreadsheet.
              </dd>
            </div>
            <div>
              <dt className={clsx('ffh-piece', !shown(1) && 'is-pending')}>What the agent does</dt>
              <dd>
                <ol className="ffh-sheet-steps">
                  {STEPS.map((step, index) => (
                    <li key={step} data-piece className={clsx('ffh-piece', !shown(index + 1) && 'is-pending')}>
                      {step}
                    </li>
                  ))}
                </ol>
              </dd>
            </div>
            <div data-piece className={clsx('ffh-piece', !shown(6) && 'is-pending')}>
              <dt>Connects to</dt>
              <dd>
                Finance system, CRM, spreadsheet, email{' '}
                <span className="text-mist-d">(to be confirmed on the call)</span>
              </dd>
            </div>
            <div data-piece className={clsx('ffh-piece', !shown(7) && 'is-pending')}>
              <dt>Stays with a human</dt>
              <dd>
                Checking the figures that don’t match, approving every report before it goes out, and
                any client commentary.
              </dd>
            </div>
            <div data-piece className={clsx('ffh-piece', !shown(8) && 'is-pending')}>
              <dt>
                Rough time saved <span className="ffh-estimate">Estimate</span>
              </dt>
              <dd>
                Estimate only, based on your answers: most of the three days of assembly each month,
                with review time remaining.
              </dd>
            </div>
            <div data-piece className={clsx('ffh-piece', !shown(9) && 'is-pending')}>
              <dt>Live in 10 working days would include</dt>
              <dd>
                Connections to the three systems, your report template, testing on last month’s real
                data, a human approval step, and go-live under Agent Care.*
              </dd>
            </div>
          </dl>
        </div>
        {pinned && !ready ? (
          <p className="ffh-sheet-status" aria-hidden="true">
            <span className="ffh-sheet-pulse" />
            Writing your plan · {Math.max(0, Math.min(revealed, PIECES))} of {PIECES}
          </p>
        ) : null}
        <div className="ffh-sheet-fade" aria-hidden="true" />
      </div>
      <figcaption className={clsx('ffh-sheet-foot', ready && 'is-ready')}>
        <span className="ffh-sheet-cta" aria-hidden="true">
          <span className="ffh-envelope" />
          Email me the full plan
        </span>
        <span className="text-mist">Then: book a call to scope this agent</span>
      </figcaption>
    </figure>
  )
}

export function PlannerSection() {
  const reduced = useReducedMotion()
  const [ref, p, pinned] = usePinnedProgress<HTMLDivElement>(reduced === false)
  const revealed = Math.floor(p * (PIECES + 1.6))

  return (
    <section id="planner" className="bg-paper-2 text-ink" aria-labelledby="planner-title">
      <div ref={ref} className={clsx('ffh-pin ffh-planner-pin', pinned && 'is-pinned')}>
        <div className="ffh-pin-stage">
          <Container className="ffh-planner-stage">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
              <div>
                <Eyebrow tone="light">Agent Planner</Eyebrow>
                <h2 id="planner-title" className="ffh-h2-long mt-5 max-w-[15ch]">
                  Describe a problem or process. See your first <span className="text-accent">agent.</span>
                </h2>
                <p className="ffh-planner-lede mt-6 max-w-[44ch] text-slate">
                  Tell us what takes too long, goes wrong or depends on one person. In under three
                  minutes you’ll see what an agent would do, what it connects to, and what stays with
                  your team.
                </p>
                <form action="/agent-planner" method="get" className="mt-[clamp(1.25rem,3.5vh,2.25rem)] max-w-[36rem]">
                  <label htmlFor="planner-q" className="ffh-mono text-mist-d">
                    The problem or process
                  </label>
                  <div className="ffh-planner-box mt-3">
                    <textarea
                      id="planner-q"
                      name="q"
                      rows={2}
                      maxLength={500}
                      autoComplete="off"
                      placeholder="e.g. We spend two days a month building client reports from three systems"
                      aria-describedby="planner-privacy"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-sm text-mist-d">2 or 3 quick questions, then your plan.</span>
                      <button type="submit" className="ffh-btn ffh-btn-ink">
                        Plan my agent
                      </button>
                    </div>
                  </div>
                  <p id="planner-privacy" className="mt-3 text-sm leading-relaxed text-mist-d">
                    Please don’t include personal, client or confidential data. Describe the process,
                    not the people.{' '}
                    <Link href="/privacy" prefetch={false} className="text-ink underline underline-offset-4">
                      Privacy notice
                    </Link>
                  </p>
                </form>
              </div>
              <PlanSheet revealed={revealed} pinned={pinned} />
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
