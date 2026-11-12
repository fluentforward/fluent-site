'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { cal } from '@/content/cal'
import { loadCal } from '@/lib/cal-embed'

const ELEMENT_ID = 'scope-calendar'

/** Text a visitor brought from the Agent Planner or the home page, via ?q=. */
export function readProblem() {
  if (typeof window === 'undefined') return ''
  return (new URLSearchParams(window.location.search).get('q') || '').trim().slice(0, 500)
}

/**
 * The Cal.com booking calendar, inline. Its column is kept at least ~780px wide on desktop so
 * Cal uses its side-by-side layout (details, month and times in one row, about 540px tall),
 * which fits on a laptop screen without scrolling.
 */
export function BookingCalendar() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const problem = readProblem()
    const api = loadCal()
    api?.('on', { action: 'linkReady', callback: () => setReady(true) })
    api?.('inline', {
      elementOrSelector: `#${ELEMENT_ID}`,
      calLink: cal.link,
      // Cal prefills its "Additional notes" field from `notes`, so we see the problem before the call.
      config: problem ? { ...cal.config, notes: problem } : cal.config,
    })
    api?.('ui', cal.ui)
    // Don't leave the loading state up for ever if Cal never reports in.
    const fallback = window.setTimeout(() => setReady(true), 9000)
    return () => window.clearTimeout(fallback)
  }, [])

  return (
    <div className="ffc-cal">
      <div className={clsx('ffc-cal-loading', ready && 'is-hidden')} aria-hidden={ready}>
        <span className="ffc-cal-pulse" />
        Loading available times
      </div>
      <div id={ELEMENT_ID} className="ffc-cal-frame" />
    </div>
  )
}

/** Shows the problem a visitor arrived with, so they can see it is going with the booking. */
export function BroughtProblem() {
  const [problem, setProblem] = useState('')

  useEffect(() => {
    setProblem(readProblem())
  }, [])

  if (!problem) return null

  return (
    <figure className="ffc-brought">
      <figcaption className="ffh-mono text-mist">The problem you brought</figcaption>
      <blockquote className="mt-2 text-paper">“{problem}”</blockquote>
      <p className="mt-2 text-[0.8125rem] text-mist">It is added to your booking notes, so we can read it before the call.</p>
    </figure>
  )
}
