'use client'

import { useEffect } from 'react'

import { cal } from '@/content/cal'
import { loadCal } from '@/lib/cal-embed'

const elementId = 'cal-inline'

export function CalInline() {
  useEffect(() => {
    const api = loadCal()
    api?.('inline', {
      elementOrSelector: `#${elementId}`,
      calLink: cal.link,
      config: cal.config,
    })
    api?.('ui', cal.ui)
  }, [])

  return (
    <div
      id={elementId}
      className="min-h-[640px] overflow-hidden rounded-card border border-line bg-paper"
    />
  )
}
