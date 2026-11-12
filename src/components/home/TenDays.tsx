'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { clamp01, PIN_QUERY, useReducedMotion } from './hooks'
import { Eyebrow, FOOTNOTE } from './Mark'

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const

const PHASES = [
  {
    when: 'Before day 1',
    title: 'Scope',
    body: "Agree the job, the tools, the human checkpoints and what 'done' means. Written and fixed.",
  },
  { when: 'Days 1 to 2', title: 'Connect', body: 'Access to your tools and data.' },
  {
    when: 'Days 3 to 8',
    title: 'Build and test',
    body: 'We build the agent and test it on your real cases.',
  },
  {
    when: 'Days 9 to 10',
    title: 'Go live',
    body: 'Live with your team, with a human in the loop where it matters.',
  },
  {
    when: 'From day 11',
    title: 'Agent Care',
    body: 'Monitoring, evals, fixes and improvements, every month.',
  },
] as const

/* How scroll progress is spent across the strip. */
const SCOPE_END = 0.1
const DAY = 0.066
const DAYS_END = SCOPE_END + DAY * 10
const LIVE_END = 0.82

function phaseAt(p: number) {
  if (p < SCOPE_END) return 0
  const day = (p - SCOPE_END) / DAY
  if (day < 2) return 1
  if (day < 8) return 2
  if (p < LIVE_END) return 3
  return 4
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * clamp01(t)

function railX(p: number, a: number[]) {
  if (p <= SCOPE_END) return lerp(a[0], a[1], p / SCOPE_END)
  if (p < DAYS_END) {
    const day = (p - SCOPE_END) / DAY
    const index = Math.floor(day)
    return lerp(a[1 + index], a[2 + index], day - index)
  }
  return lerp(a[11], a[12], (p - DAYS_END) / (LIVE_END - DAYS_END))
}

/** A flat line with a heartbeat blip every so often. Drawn with pathLength 1. */
const HEARTBEAT = (() => {
  let d = 'M0 34'
  for (let x = 46; x < 1400; x += 128) {
    d += ` L${x} 34 L${x + 7} 34 L${x + 13} 12 L${x + 21} 54 L${x + 27} 26 L${x + 33} 34`
  }
  return `${d} L1400 34`
})()

export function TenDays() {
  const reduced = useReducedMotion()
  const animate = reduced === false
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(1)
  const [anchors, setAnchors] = useState<number[] | null>(null)

  useEffect(() => {
    if (!animate) {
      setP(1)
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return
      const vh = window.innerHeight
      const pinned = window.matchMedia(PIN_QUERY).matches
      let next: number
      if (pinned) {
        const rect = section.getBoundingClientRect()
        const header = 72
        const range = Math.max(rect.height - (vh - header), 1)
        next = clamp01(((header - rect.top) / range - 0.05) / 0.85)
      } else {
        const rect = track.getBoundingClientRect()
        next = clamp01((vh * 0.85 - rect.top) / (vh * 0.6))
      }
      setP((prev) => (Math.abs(prev - next) < 0.0005 ? prev : next))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [animate])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const base = track.getBoundingClientRect().left
      const rect = (name: string) => track.querySelector(`[data-cell="${name}"]`)?.getBoundingClientRect()
      const scope = rect('scope')
      const live = rect('live')
      if (!scope || !live) return
      const xs = [scope.left - base, scope.right - base]
      for (let day = 1; day <= 10; day += 1) xs.push((rect(`d${day}`)?.right ?? 0) - base)
      xs.push(live.right - base)
      setAnchors(xs)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  const dayFloat = (p - SCOPE_END) / DAY
  const active = animate ? phaseAt(p) : -1
  const live = p >= DAYS_END
  const care = clamp01((p - LIVE_END) / (1 - LIVE_END))
  const nowDay = animate && p >= SCOPE_END && p < DAYS_END ? Math.floor(dayFloat) + 1 : 0
  const counter = p < SCOPE_END ? 0 : Math.min(10, Math.floor(dayFloat) + 1)
  const label =
    p < SCOPE_END
      ? 'Scope first, agreed in writing'
      : !live
        ? `Working day ${counter} of 10*`
        : care > 0.05
          ? 'Live, then looked after every month'
          : 'Live with your team'
  const fill = anchors ? railX(p, anchors) / anchors[12] : 1

  const dayCell = (day: number) => (
    <div
      key={day}
      data-cell={`d${day}`}
      className={clsx('ffh-cell ffh-day', dayFloat >= day && 'is-done', nowDay === day && 'is-now')}
    >
      <span className="ffh-mono">{WEEK[(day - 1) % 5]}</span>
      <span className="ffh-day-num">{String(day).padStart(2, '0')}</span>
    </div>
  )

  return (
    <section
      id="how"
      ref={sectionRef}
      className={clsx('ffh-days', animate && 'is-scrubbed')}
      aria-labelledby="how-title"
    >
      <div className="ffh-days-stage">
        <div className="ffh-days-inner mx-auto flex h-full w-full max-w-page flex-col justify-center px-6 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow tone="light">How it works</Eyebrow>
              <h2 id="how-title" className="ffh-days-title mt-5 max-w-[17ch] text-ink">
                From your problem to a live agent in{' '}
                <span className="text-accent">10 working days.</span>
              </h2>
            </div>
            <div className="ffh-counter" aria-hidden="true">
              <p className={clsx('ffh-counter-num', live && 'is-live')}>
                {String(counter).padStart(2, '0')}
                <span>/10</span>
              </p>
              <p className="ffh-mono mt-3 text-mist-d">{label}</p>
            </div>
          </div>

          <div className="mt-10 lg:mt-[clamp(1.25rem,4vh,2.5rem)]" aria-hidden="true">
            <div className="ffh-groups">
              <p className="ffh-group" style={{ gridColumn: '1 / 2' }}>
                <b>01</b> Scope
              </p>
              <p className="ffh-group" style={{ gridColumn: '2 / 13' }}>
                <b>02</b> Build · fixed price
              </p>
              <p className="ffh-group is-care" style={{ gridColumn: '13 / 15' }}>
                <b>03</b> Agent Care · monthly
              </p>
            </div>
            <div ref={trackRef} className="ffh-track">
              <div
                data-cell="scope"
                className={clsx('ffh-cell ffh-scope', p >= SCOPE_END && 'is-done', active === 0 && 'is-now')}
              >
                <span className="ffh-mono">Scope call</span>
                <span className="ffh-cell-note">{p >= SCOPE_END ? 'Agreed in writing' : 'Before day 1'}</span>
              </div>
              {[1, 2, 3, 4, 5].map(dayCell)}
              <div className="ffh-weekend">
                <span className="ffh-mono">Sat Sun</span>
              </div>
              {[6, 7, 8, 9, 10].map(dayCell)}
              <div data-cell="live" className={clsx('ffh-cell ffh-live', live && 'is-on')}>
                <span aria-hidden="true" className="ffh-live-dot" />
                <span className="ffh-mono">Live</span>
              </div>
              <div className="ffh-care">
                <svg viewBox="0 0 1400 64" preserveAspectRatio="none" className="ffh-care-line">
                  <path d={HEARTBEAT} pathLength={1} className="ffh-care-base" />
                  <path
                    d={HEARTBEAT}
                    pathLength={1}
                    className="ffh-care-draw"
                    style={{ strokeDashoffset: 1 - care }}
                  />
                </svg>
                <span className="ffh-mono ffh-care-label" style={{ opacity: animate ? clamp01(care * 3) : 1 }}>
                  Every month after
                </span>
              </div>
              <div className="ffh-rail">
                <span style={{ transform: `scaleX(${fill})` }} />
              </div>
            </div>
          </div>

          <ol className="ffh-phases mt-10 lg:mt-[clamp(1.25rem,3.6vh,2.25rem)]">
            {PHASES.map((phase, index) => (
              <li
                key={phase.title}
                className={clsx(active === index && 'is-active', active > index && 'is-past')}
              >
                <p className="ffh-mono">{phase.when}</p>
                <h3>{phase.title}</h3>
                <p className="ffh-phase-body">{phase.body}</p>
              </li>
            ))}
          </ol>

          <div className="ffh-yourside mt-10 lg:mt-[clamp(1.25rem,3.6vh,2.25rem)]">
            <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink">
              <span className="ffh-mono mr-3 text-mist-d">Your side</span>
              Give us access, point us at the data, and name one person who knows the process.
              That&apos;s it.
            </p>
            <p className="ffh-footnote max-w-[62ch] text-mist-d">* {FOOTNOTE}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
