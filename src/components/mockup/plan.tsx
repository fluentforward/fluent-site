'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const sections = [
  ['The problem you described', 'Two people spend about three days a month building client reports from the finance system, the CRM and a spreadsheet.'],
  ['What the agent does', "On the first working day it pulls last month's figures, flags what does not match, drafts each report, and sends drafts to the account lead. After approval it sends the report and logs it."],
  ['Connects to', 'Finance system, CRM, spreadsheet, email. To be confirmed on the call.'],
  ['Stays with a human', 'Checking the figures that do not match, approving every report before it goes out, and any client commentary.'],
  ['Rough time saved', 'Estimate only, based on the answers in this example: most of the three days of assembly each month, with review time remaining.'],
  ['Live in 10 working days would include', "Connections to the three systems, your report template, testing on last month's real data, a human approval step, and go-live under Agent Care."],
  ['Next step', 'Book a call to scope this agent. We will confirm it is buildable in 10 working days.'],
] as const

export function PlanAssembly() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState('')
  const announced = useRef(new Set<string>())

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-announce]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.6) return
          const text = entry.target.getAttribute('data-announce')
          if (!text || announced.current.has(text)) return
          announced.current.add(text)
          setMessage(text)
        })
      },
      { threshold: [0.6] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef} data-mock="plan">
      <p className="sr-only" aria-live="polite">
        {message}
      </p>
      <div className="rounded-[14px] border border-line bg-paper p-6 md:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
            Example plan · illustration only
          </p>
          <span className="ffm-tag ffm-tag-light">Example</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">
          Your first agent: Monthly client report agent
        </h3>
        <div className="mt-6 space-y-5">
          {sections.map(([title, body]) => (
            <div key={title} className="ffm-plan-line min-h-[4.5rem]" data-announce={title}>
              <h4 className="font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
                {title}
                {title === 'Rough time saved' ? (
                  <span className="ml-2 rounded-full border border-line-strong px-2 py-0.5">
                    Estimate
                  </span>
                ) : null}
              </h4>
              <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-slate">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[12px] leading-relaxed text-mist-d">
          * Once we have access to your systems, the data the agent needs, and scope agreed in
          writing.
        </p>
        <Link
          href="/contact"
          className="rounded-btn mt-6 inline-flex min-h-[48px] items-center bg-accent px-6 font-semibold text-ink"
        >
          Book a call to scope this agent
        </Link>
      </div>
    </div>
  )
}
