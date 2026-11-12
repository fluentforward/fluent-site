'use client'

import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'

import { cal } from '@/content/cal'
import { loadCal } from '@/lib/cal-embed'

/*
  "Scope your agent" opens the booking calendar in a popup, so booking a call takes one click.
  Each button is still a real link to /contact: without JavaScript, or with Cmd/Ctrl/middle click,
  the visitor goes to the page instead.
*/

let rememberedProblem = ''
let styled = false

/** What the visitor typed into the home page console, so they don't have to type it again. */
export function rememberProblem(text: string) {
  rememberedProblem = text.trim().slice(0, 500)
}

/** Opens the booking popup. Returns false if the calendar could not be started. */
export function openBooking() {
  const api = loadCal()
  if (!api) return false
  if (!styled) {
    api('ui', cal.ui)
    styled = true
  }
  // Cal builds a new popup on every open and leaves closed ones in the page. Clear them out.
  document.querySelectorAll('cal-modal-box[state="closed"]').forEach((box) => box.remove())
  // Cal pre-fills "Additional notes" from `notes`, so we can read the problem before the call.
  api('modal', {
    calLink: cal.link,
    config: rememberedProblem ? { ...cal.config, notes: rememberedProblem } : cal.config,
  })
  return true
}

function isPlainClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  )
}

export function ScopeLink({
  className,
  children,
  onOpen,
  ...rest
}: {
  className?: string
  children: ReactNode
  /** Called after the popup opens, for example to close a mobile menu. */
  onOpen?: () => void
  'aria-current'?: 'page'
}) {
  return (
    <Link
      href="/contact"
      prefetch={false}
      aria-haspopup="dialog"
      className={className}
      onClick={(event) => {
        if (!isPlainClick(event)) return
        if (openBooking()) {
          event.preventDefault()
          onOpen?.()
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
