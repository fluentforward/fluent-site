'use client'

import { useEffect } from 'react'

import { cal } from '@/content/cal'
import { loadCal } from '@/lib/cal-embed'

/**
 * Loads the Cal.com embed only after the visitor asks to book (popup or inline),
 * not on first paint.
 */
export function CalBookingInit() {
  useEffect(() => {
    const ensureCal = () => {
      const api = loadCal()
      api?.('ui', cal.ui)
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('[data-cal-link]')) {
        ensureCal()
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
