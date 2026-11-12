'use client'

import clsx from 'clsx'
import type { CSSProperties } from 'react'

import { useInView, useReducedMotion } from './hooks'

/** A line drawn through a phrase once, when it is fully in view. Static (already struck) without JS. */
export function Strike({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 1, once: true })

  return (
    <span
      ref={ref}
      className={clsx('ffh-strike', reduced === false && 'is-armed', inView && 'is-in')}
      style={{ '--d': `${delay}ms` } as CSSProperties}
    >
      {children}
    </span>
  )
}
