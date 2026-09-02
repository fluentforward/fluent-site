import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { strategyBuildTeaser } from '@/content/home'

export function StrategyBuildTeaser() {
  return (
    <Section tone="ink">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal>
          <Eyebrow tone="dark">{strategyBuildTeaser.eyebrow}</Eyebrow>
          <Heading as="h2" tone="dark" className="mt-8">
            {strategyBuildTeaser.heading}
          </Heading>
          <Lede tone="dark" className="mt-8">
            {strategyBuildTeaser.lede}
          </Lede>
          <div className="mt-10">
            <ArrowLink href={strategyBuildTeaser.link.href} tone="dark">
              {strategyBuildTeaser.link.label}
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="rounded-card border border-line-dark p-8 md:p-10">
            {strategyBuildTeaser.points.map((point) => (
              <div
                key={point.term}
                className="grid gap-2 border-t border-line-dark py-6 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <dt className="pt-0.5 font-mono text-label text-mist uppercase">
                  {point.term}
                </dt>
                <dd className="text-paper leading-[1.72]">{point.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
