import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { phasesSection } from '@/content/home'

export function PhaseRail() {
  return (
    <Section tone="paper">
      <Reveal className="max-w-2xl">
        <Eyebrow>{phasesSection.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {phasesSection.heading}
        </Heading>
        <Lede className="mt-8">{phasesSection.lede}</Lede>
      </Reveal>

      <ol className="mt-20 grid divide-y divide-line border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {phasesSection.phases.map((phase, index) => (
          <Reveal
            as="li"
            key={phase.name}
            delay={index * 120}
            className="flex flex-col gap-6 py-12 lg:px-10 lg:first:pl-0 lg:last:pr-0"
          >
            <span
              aria-hidden="true"
              className="font-display text-[3.5rem] font-medium leading-none tracking-[-0.04em] text-steel/25 md:text-[4rem]"
            >
              {phase.index}
            </span>
            <h3 className="text-sub text-ink">{phase.name}</h3>
            <p className="font-mono text-xs tracking-wide text-mist uppercase">
              {phase.meta}
            </p>
            <p className="leading-[1.72] text-slate">{phase.summary}</p>
            <div className="mt-auto border-t border-line pt-6">
              <p className="font-mono text-label text-mist uppercase">
                Decision point
              </p>
              <p className="mt-3 text-sm leading-[1.72] text-ink">
                {phase.gate}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={140} className="mt-16">
        <ArrowLink href="/how-it-works">
          What happens in each phase, in detail
        </ArrowLink>
      </Reveal>
    </Section>
  )
}
