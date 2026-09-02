'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx'

/**
 * Fades content up as it enters the viewport. The `.reveal` styles only apply
 * once `html.js` is set, so content stays visible if JS never runs.
 *
 * Pass `stagger` to animate direct children with incremental delays.
 */
export function Reveal({
  as = 'div',
  delay,
  stagger,
  className,
  children,
}: {
  as?: 'div' | 'li' | 'section' | 'header' | 'article' | 'ol' | 'ul'
  /** Milliseconds. Stagger siblings sparingly — 80–140ms reads best. */
  delay?: number
  /** Stagger delay between direct children, in ms */
  stagger?: number
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
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(el)

    // Guarantees content appears even if the observer never fires.
    const failsafe = window.setTimeout(() => el.classList.add('in'), 2000)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  const Tag = as as React.ElementType

  if (stagger) {
    return (
      <Tag
        ref={ref}
        className={clsx('reveal-stagger', className)}
        style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className="reveal-child"
                style={{ transitionDelay: `${index * stagger}ms` }}
              >
                {child}
              </div>
            ))
          : children}
      </Tag>
    )
  }

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
