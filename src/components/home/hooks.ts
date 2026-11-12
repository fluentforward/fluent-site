'use client'

import { useEffect, useRef, useState } from 'react'

/** null until mounted, so server HTML always renders the finished, still state. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState<boolean | null>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  return reduced
}

export function useInView<T extends Element>({
  threshold = 0.35,
  once = false,
  rootMargin,
}: { threshold?: number; once?: boolean; rootMargin?: string } = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return [ref, inView] as const
}

export const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

/** Pinned scenes only run where there is room: desktop width and a laptop-height screen or taller. */
export const PIN_QUERY = '(min-width: 1024px) and (min-height: 680px)'
const HEADER = 72

/**
 * Progress through a tall section whose stage is sticky. p runs 0..1 while the stage is pinned.
 * Not pinned (phones, short screens, reduced motion, no JS): p is 1, the finished state.
 */
export function usePinnedProgress<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null)
  const scheduleRef = useRef<() => void>(() => undefined)
  /** A screen size where the pinned stage did not fit. That section stays static there. */
  const misfitRef = useRef<string | null>(null)
  const [state, setState] = useState({ p: 1, pinned: false })

  useEffect(() => {
    if (!enabled) {
      setState({ p: 1, pinned: false })
      return
    }
    const media = window.matchMedia(PIN_QUERY)
    let frame = 0
    const update = () => {
      frame = 0
      const element = ref.current
      if (!element) return
      if (!media.matches || misfitRef.current === `${window.innerWidth}x${window.innerHeight}`) {
        setState((current) => (current.pinned || current.p !== 1 ? { p: 1, pinned: false } : current))
        return
      }
      const rect = element.getBoundingClientRect()
      const range = Math.max(rect.height - (window.innerHeight - HEADER), 1)
      // A short dwell at each end so the first and last frames can be read.
      const p = clamp01(((HEADER - rect.top) / range - 0.04) / 0.88)
      setState((current) =>
        current.pinned && Math.abs(current.p - p) < 0.0005 ? current : { p, pinned: true },
      )
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    scheduleRef.current = schedule
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    media.addEventListener('change', schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      media.removeEventListener('change', schedule)
    }
  }, [enabled])

  // The section grows when it pins, so measure again once that has rendered. If the stage's
  // content is taller than the screen, fall back to the static layout rather than cut it off.
  useEffect(() => {
    if (state.pinned) {
      const stage = ref.current?.querySelector<HTMLElement>(':scope > .ffh-pin-stage')
      const content = stage?.firstElementChild as HTMLElement | null
      if (stage && content && content.offsetHeight > stage.clientHeight + 2) {
        misfitRef.current = `${window.innerWidth}x${window.innerHeight}`
      }
    }
    scheduleRef.current()
  }, [state.pinned])

  return [ref, state.p, state.pinned] as const
}
