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
        <Heading as="h2" className="mt-6">
          {phasesSection.heading}
        </Heading>
        <Lede className="mt-6">{phasesSection.lede}</Lede>
      </Reveal>

      <ol className="mt-14 grid divide-y divide-line border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {phasesSection.phases.map((phase, index) => (
          <Reveal
            as="li"
            key={phase.name}
            delay={index * 90}
            className="flex flex-col gap-5 py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"
          >
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-mono text-sm text-steel">
                {phase.index}
              </span>
              <h3 className="text-sub text-ink">{phase.name}</h3>
            </div>
            <p className="font-mono text-xs tracking-wide text-mist uppercase">
              {phase.meta}
            </p>
            <p className="leading-relaxed text-slate">{phase.summary}</p>
            <div className="mt-auto border-t border-line pt-5">
              <p className="font-mono text-label text-mist uppercase">
                Decision point
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {phase.gate}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12">
        <ArrowLink href="/how-it-works">
          What happens in each phase, in detail
        </ArrowLink>
      </Reveal>
    </Section>
  )
}
