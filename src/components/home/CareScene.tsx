'use client'

import clsx from 'clsx'
import type { CSSProperties } from 'react'

import { Container } from '@/components/ui/Container'

import { CareConsole, type CareFocus, type CareScene as Scene } from './CareConsole'
import { clamp01, usePinnedProgress, useReducedMotion } from './hooks'
import { Eyebrow } from './Mark'

const INCLUDED: { focus: CareFocus; title: string; body: string }[] = [
  { focus: 'run', title: 'Monitoring', body: 'We watch every run. If something fails or looks wrong, we know before you do.' },
  { focus: 'evals', title: 'Evals', body: 'We test output against agreed quality checks, continuously.' },
  { focus: 'drift', title: 'Drift fixes', body: 'When quality slips, we fix it.' },
  { focus: 'improve', title: 'Small improvements', body: 'Steady tweaks as your team uses it and asks for more.' },
  { focus: 'connector', title: 'Connector and model updates', body: 'When your tools or the AI models change, we handle it.' },
  { focus: 'report', title: 'Real-time reporting', body: 'See what each agent did, in real time.' },
]

/** Scroll position through the pinned stage becomes what the console is showing. */
function sceneAt(p: number): { scene: Scene; step: number; t: number } {
  const step = Math.min(INCLUDED.length - 1, Math.floor(p * INCLUDED.length))
  const t = clamp01(p * INCLUDED.length - step)
  const scene: Scene = {
    log: step > 0 ? 3 : Math.min(3, Math.floor(t * 4.4)),
    waiting: step > 0 || t > 0.8,
    evals: step > 1 ? 1 : step === 1 ? clamp01(t * 1.35) : 0,
    drift: step < 2 ? 'none' : step === 2 && t < 0.5 ? 'drifting' : 'fixed',
    focus: INCLUDED[step].focus,
  }
  return { scene, step, t }
}

export function CareSection() {
  const reduced = useReducedMotion()
  const [ref, p, pinned] = usePinnedProgress<HTMLDivElement>(reduced === false)
  const { scene, step, t } = sceneAt(p)

  return (
    <section id="care" className="ffh-care-section text-paper" aria-labelledby="care-title">
      <Container className="pt-20 md:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Agent Care</Eyebrow>
            <h2 id="care-title" className="ffh-h2-long mt-5 max-w-[15ch]">
              Live agents need <span className="text-accent">care.</span> That’s our job.
            </h2>
          </div>
          <p className="text-lede max-w-[46ch] text-lede-dark lg:pb-2">
            AI agents drift. Models change, your tools update, your firm evolves. Agent Care means
            every live agent is monitored, tested and improved by us, every month, so it keeps doing
            the job you built it for.
          </p>
        </div>
      </Container>

      <div ref={ref} className={clsx('ffh-pin ffh-care-pin', pinned && 'is-pinned')}>
        <div className="ffh-pin-stage">
          <Container className="ffh-care-stage">
            <ol className="ffh-care-steps">
              {INCLUDED.map((item, index) => (
                <li
                  key={item.title}
                  className={clsx(pinned && index === step && 'is-active', pinned && index < step && 'is-past')}
                  style={{ '--fill': pinned ? (index < step ? 1 : index === step ? t : 0) : 1 } as CSSProperties}
                >
                  <span aria-hidden="true" className="ffh-care-step-bar" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
            <div className="ffh-care-console-wrap">
              <p className="ffh-care-note">
                <span aria-hidden="true">↓</span> You are the person in the loop. Try approving the draft.
              </p>
              <div className="mt-3">
                <CareConsole scene={pinned ? scene : undefined} />
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container className="pb-20 md:pb-32">
        <div className="flex flex-col gap-4 border-t border-line-dark pt-10 lg:flex-row lg:items-baseline lg:justify-between lg:gap-12">
          <p className="text-sub max-w-[30ch] text-paper">
            Your first agent is the start of a fleet. Each new one is another 10-Day Agent Build.
          </p>
          <p className="ffh-mono text-mist">Monthly per live agent · No day rates · Terms agreed in writing</p>
        </div>
      </Container>
    </section>
  )
}
