'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx'

/**
 * Fades content up as it enters the viewport. The `.reveal` styles only apply
 * once `html.js` is set, so content stays visible if JS never runs.
 */
export function Reveal({
  as = 'div',
  delay,
  className,
  children,
}: {
  as?: 'div' | 'li' | 'section' | 'header' | 'article'
  /** Milliseconds. Stagger siblings sparingly — 60–120ms reads best. */
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    document.documentElement.classList.add('js')

    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)

    // Guarantees content appears even if the observer never fires.
    const failsafe = window.setTimeout(() => el.classList.add('in'), 1600)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      className={clsx('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
