import { Container } from '@/components/ui/Container'

import { TenDayNote } from './ui'

const stages = [
  {
    label: 'Scope',
    when: 'Before day 1',
    body: 'Agree the job, the tools, the human checkpoints and what done means. Written and fixed.',
  },
  {
    label: 'Connect',
    when: 'Days 1 to 2',
    body: 'Access to your tools and data.',
  },
  {
    label: 'Build and test',
    when: 'Days 3 to 8',
    body: 'We build the agent and test it on your real cases.',
  },
  {
    label: 'Go live',
    when: 'Days 9 to 10',
    body: 'Live with your team, with a human in the loop where it matters.',
  },
  {
    label: 'Agent Care',
    when: 'From day 11',
    body: 'Monitoring, evals, fixes and improvements, every month.',
  },
] as const

export function TenDayTimeline() {
  return (
    <div data-mock="timeline" className="relative">
      <div className="ffm-track mb-8 hidden md:block" aria-hidden="true">
        <div className="ffm-fill" />
      </div>
      <div className="absolute bottom-8 left-1 top-0 w-0.5 bg-line-strong md:hidden" aria-hidden="true">
        <div className="ffm-fill ffm-fill-mobile" />
      </div>
      <ol className="grid gap-2 md:grid-cols-5 md:gap-6">
        {stages.map((stage, index) => (
          <li key={stage.label} className="pb-8 pl-8 md:pb-0 md:pl-0">
            <div className="flex items-center gap-3">
              <span className="ffm-dot md:hidden" aria-hidden="true" />
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">0{index + 1}</p>
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">{stage.label}</h3>
            <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-mist-d">{stage.when}</p>
            <p className="mt-2 text-base leading-relaxed text-slate">{stage.body}</p>
          </li>
        ))}
      </ol>
      <TenDayNote id="timeline-footnote" tone="light" />
    </div>
  )
}

export function StepsSection() {
  return (
    <section id="how" className="ffm-section border-t border-line bg-paper py-16 md:py-24">
      <Container>
        <p className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-mist-d">
          <span aria-hidden="true" className="eyebrow-dot" />
          How it works
        </p>
        <h2 className="text-section mt-4 max-w-[18ch] text-balance text-ink">
          Scope, build, then <span className="text-accent">Agent Care.</span>
        </h2>
        <div className="mt-10 grid gap-px border-y border-line md:grid-cols-3">
          {[
            ['Scope', 'A short call. You tell us the problem; we agree what the agent does.'],
            ['Build', 'Fixed price. Live in 10 working days*.'],
            ['Agent Care', 'We host it, watch it and improve it, every month.'],
          ].map(([title, body]) => (
            <div key={title} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate">
                {title === 'Build' ? (
                  <span aria-describedby="timeline-footnote">{body}</span>
                ) : (
                  body
                )}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function TimelineSection() {
  return (
    <section id="timeline" className="ffm-section border-t border-line bg-paper py-16 md:py-24">
      <Container>
        <h2 className="text-section max-w-[16ch] text-balance text-ink">
          Ten working days, then we <span className="text-accent">keep it working.</span>
        </h2>
        <p className="text-lede mt-5 max-w-[52ch] text-slate">
          You bring a problem or a process. We scope one agent with you, build it, connect it
          to your tools and put it live. Then Agent Care keeps it healthy and improving.
        </p>
        <div className="mt-12">
          <TenDayTimeline />
        </div>
      </Container>
    </section>
  )
}
