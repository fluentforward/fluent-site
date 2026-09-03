import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { Phase } from '@/content/how-it-works'

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-label text-mist uppercase">{title}</h4>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[0.9375rem] leading-[1.72] text-slate"
          >
            <span aria-hidden="true" className="shrink-0 text-steel">
              &mdash;
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PhaseDetail({ phase }: { phase: Phase }) {
  return (
    <Section tone="paper" border id={phase.name.toLowerCase()}>
      <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <span
              aria-hidden="true"
              className="font-display text-[3rem] font-medium leading-none tracking-[-0.04em] text-steel/25"
            >
              {phase.index}
            </span>
            <Heading as="h2" size="display-sm" className="mt-6">
              {phase.name}
            </Heading>
            <p className="mt-5 font-mono text-xs tracking-wide text-mist uppercase">
              {phase.meta}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="max-w-prose text-lede text-slate">{phase.intro}</p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <DetailList title="What happens" items={phase.happens} />
            <DetailList title="What you get" items={phase.deliverables} />
          </div>

          {phase.boundary && (
            <p className="mt-14 border-l border-line pl-7 text-[0.9375rem] leading-[1.72] text-slate">
              {phase.boundary}
            </p>
          )}

          <div className="mt-12 rounded-card border border-line bg-paper-2 p-8 md:p-9">
            <p className="font-mono text-label text-mist uppercase">
              Decision point
            </p>
            <p className="mt-4 leading-[1.72] text-ink">{phase.gate}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
