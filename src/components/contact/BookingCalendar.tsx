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
export function BookingCalendar({ notes, planId }: { notes?: string; planId?: string }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const problem = (notes || readProblem()).trim().slice(0, 500)
    const api = loadCal()
    api?.('on', { action: 'linkReady', callback: () => setReady(true) })
    api?.('on', {
      action: 'bookingSuccessful',
      callback: () => {
        if (!planId) return
        void fetch('/api/agent-planner/booked', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ plan: planId }),
        })
      },
    })
    api?.('inline', {
      elementOrSelector: `#${ELEMENT_ID}`,
      calLink: cal.link,
      // Cal prefills its "Additional notes" field from `notes`, so we see the plan before the call.
      config: problem ? { ...cal.config, notes: problem } : cal.config,
    })
    api?.('ui', cal.ui)
    const fallback = window.setTimeout(() => setReady(true), 9000)
    return () => window.clearTimeout(fallback)
  }, [notes, planId])

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

/** Shows the problem or plan a visitor arrived with, so they can see it is going with the booking. */
export function BroughtProblem({
  title,
  problem,
}: {
  title?: string
  problem?: string
}) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!problem) setQuery(readProblem())
  }, [problem])

  const text = (problem || query).trim()
  if (!text) return null

  return (
    <figure className="ffc-brought">
      <figcaption className="ffh-mono text-mist">{title ? 'The plan you brought' : 'The problem you brought'}</figcaption>
      {title ? <p className="mt-2 font-semibold text-paper">{title}</p> : null}
      <blockquote className="mt-2 text-paper">&ldquo;{text}&rdquo;</blockquote>
      <p className="mt-2 text-[0.8125rem] text-mist">It is added to your booking notes, so we can read it before the call.</p>
    </figure>
  )
}
