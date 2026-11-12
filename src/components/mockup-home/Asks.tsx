'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

import { Container } from '@/components/ui/Container'

import { useReducedMotion } from './hooks'
import { Chevron, Eyebrow, Tag } from './Mark'
import { sketchFrom } from './sketch'

const planner = (q: string) => `/agent-planner?q=${encodeURIComponent(q)}`

const ASKS = [
  {
    id: 'reporting',
    ask: 'Our people spend days building client and management reports.',
    fn: 'Reporting',
    does: 'Pulls from your systems, builds the report, and hands it to a person to check and send.',
  },
  {
    id: 'sales-follow-up',
    ask: 'Leads and proposals go quiet because no one follows up in time.',
    fn: 'Sales follow-up',
    does: 'Drafts follow-ups, chases replies and flags the deals that need a human.',
  },
  {
    id: 'intake',
    ask: 'Client intake and onboarding is slow and manual.',
    fn: 'Intake and onboarding',
    does: 'Collects what you need, checks it, sets up the work and keeps the client updated.',
  },
  {
    id: 'insights',
    ask: "Leadership can't see what is happening without chasing three systems.",
    fn: 'Insights',
    does: 'Reads your finance, time and pipeline data every day and tells leadership what changed, in plain English.',
  },
  {
    id: 'delivery-ops',
    ask: "Senior people are stuck doing admin that doesn't need their judgement.",
    fn: 'Delivery ops',
    does: 'Handles status updates, handovers and chasers so your experts can stay on expert work.',
  },
  {
    id: 'built-properly',
    ask: 'We tried ChatGPT internally and it never turned into anything reliable.',
    fn: 'Built properly',
    name: 'One agent, built properly',
    does: 'One job, connected to your tools, tested on your real cases and looked after every month.',
  },
] as const

function AgentCard({ index, animate }: { index: number; animate: boolean }) {
  const item = ASKS[index]
  const sketch = useMemo(() => sketchFrom(item.ask), [item.ask])
  const name = 'name' in item ? item.name : sketch.name

  return (
    <div className="ffh-ask-card">
      <div className="ffh-console-bar">
        <span className="inline-flex items-center gap-2.5">
          <Chevron className="h-[10px] w-[10px]" />
          The agent for this
        </span>
        <Tag>Example</Tag>
      </div>
      <div className="ffh-ask-card-body" key={item.id}>
        <p className="ffh-mono text-mist">
          {String(index + 1).padStart(2, '0')} / {String(ASKS.length).padStart(2, '0')} · {item.fn}
        </p>
        <p className="ffh-agent-name">{name}</p>
        <ol className="ffh-flow" data-run={animate ? (index % 2 ? 'a' : 'b') : undefined}>
          <li aria-hidden="true" className="ffh-flow-line" />
          {animate ? <li aria-hidden="true" className="ffh-flow-run" /> : null}
          <li className="ffh-node is-trigger" style={{ '--i': 0 } as CSSProperties}>
            <span aria-hidden="true" className="ffh-glyph" />
            <span>{sketch.trigger}</span>
          </li>
          {sketch.steps.map((step, stepIndex) => (
            <li
              key={step.text}
              className={clsx('ffh-node', step.human && 'is-human', stepIndex === 4 && 'is-out')}
              style={{ '--i': stepIndex + 1 } as CSSProperties}
            >
              <span aria-hidden="true" className="ffh-glyph" />
              <span className="min-w-0 flex-1">{step.text}</span>
              {step.human ? <span className="ffh-person">A person</span> : null}
            </li>
          ))}
        </ol>
        <div className="ffh-ask-card-meta">
          <div>
            <p className="ffh-mono text-mist">Likely connects to</p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {sketch.tools.map((tool) => (
                <li key={tool.id} className="ffh-chip is-guess">
                  {tool.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ffh-mono text-mist">Then</p>
            <p className="mt-2.5 text-[0.9375rem] leading-snug text-paper">Looked after under Agent Care</p>
          </div>
        </div>
        <Link href={planner(item.ask)} prefetch={false} className="ffh-btn ffh-btn-primary mt-6 self-start">
          Plan an agent like this
        </Link>
      </div>
    </div>
  )
}

export function Asks() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [tracking, setTracking] = useState(false)
  const items = useRef<(HTMLLIElement | null)[]>([])

  // Whichever problem crosses the middle band of the screen is the one in focus.
  useEffect(() => {
    setTracking(true)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: '-46% 0px -46% 0px' },
    )
    items.current.forEach((element) => element && observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="agents" className="ffh-section-pad bg-paper text-ink" aria-labelledby="asks-title">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
          <div>
            <Eyebrow tone="light">Examples of what firms ask for</Eyebrow>
            <h2 id="asks-title" className="ffh-h2-long mt-5 max-w-[13ch]">
              What would you hand to an <span className="text-accent">agent?</span>
            </h2>
            <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-slate">
              Each of these is one job for one agent. Yours is scoped to how your firm works, and it
              connects to the tools you already use.
            </p>

            <ol className={clsx('ffh-asks mt-12 md:mt-16', tracking && 'is-tracking')}>
              {ASKS.map((item, index) => (
                <li
                  key={item.id}
                  ref={(element) => {
                    items.current[index] = element
                  }}
                  data-index={index}
                  className={clsx('ffh-ask', active === index && 'is-active')}
                >
                  <Link href={`/agents#${item.id}`} prefetch={false} className="ffh-ask-link">
                    <span className="ffh-ask-quote">
                      <span aria-hidden="true" className="ffh-ask-mark">
                        “
                      </span>
                      {item.ask}
                    </span>
                  </Link>
                  <div className="ffh-ask-agent">
                    <p className="ffh-mono text-mist-d">
                      <span aria-hidden="true" className="ffh-ask-arrow">
                        →
                      </span>{' '}
                      {item.fn}
                    </p>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate">{item.does}</p>
                  </div>
                  <Link href={planner(item.ask)} prefetch={false} className="ffh-ask-plan lg:hidden">
                    Plan one like this
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden lg:block">
            <div className="ffh-ask-sticky">
              <AgentCard index={active} animate={reduced === false} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
