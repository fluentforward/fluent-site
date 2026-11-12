'use client'

import { animate, type AnimationPlaybackControls } from 'motion/react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export type MockPhase = 'poster' | 'reduced' | 'still' | 'live'

export function useMockPhase(still: boolean): MockPhase {
  const [phase, setPhase] = useState<MockPhase>(still ? 'still' : 'poster')

  useLayoutEffect(() => {
    if (still) {
      setPhase('still')
      return
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setPhase(media.matches ? 'reduced' : 'live')
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [still])

  return phase
}

export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const shown = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
    if (shown / Math.max(rect.height, 1) >= 0.5) setInView(true)
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.5)
      },
      { threshold: [0, 0.5, 0.75, 1] },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

/**
 * One Motion timeline per mock. Progress is linear in time (the clock only).
 * Pausing freezes the clock. Off-screen mocks stay paused.
 */
export function useTimeline({
  durationMs,
  loop,
  live,
  inView,
}: {
  durationMs: number
  loop: boolean
  live: boolean
  inView: boolean
}) {
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const [settled, setSettled] = useState(false)
  const controlsRef = useRef<AnimationPlaybackControls | null>(null)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (!live) return
    setSettled(false)
    setProgress(0)
    const controls = animate(0, 1, {
      duration: durationMs / 1000,
      ease: 'linear',
      repeat: loop ? Infinity : 0,
      onUpdate: (value) => setProgress(value),
      onComplete: () => {
        if (!loop) {
          setProgress(1)
          setSettled(true)
        }
      },
    })
    controls.pause()
    controlsRef.current = controls
    return () => {
      controls.stop()
      if (controlsRef.current === controls) controlsRef.current = null
    }
  }, [live, durationMs, loop, runId])

  useEffect(() => {
    const controls = controlsRef.current
    if (!controls || !live || settled) return
    if (paused || !inView) controls.pause()
    else controls.play()
  }, [paused, inView, live, settled, runId])

  const replay = () => {
    setPaused(false)
    setSettled(false)
    setRunId((id) => id + 1)
  }

  return { progress, paused, setPaused, settled, replay }
}
