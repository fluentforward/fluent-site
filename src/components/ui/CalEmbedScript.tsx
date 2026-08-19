'use client'

import { useEffect } from 'react'

import { cal } from '@/content/cal'
import { loadCal } from '@/lib/cal-embed'

/** Mounted once in the root layout so any Button with `cal` can open the popup. */
export function CalEmbedScript() {
  useEffect(() => {
    loadCal()?.('ui', cal.ui)
  }, [])

  return null
}
