import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SpecRow } from '@/components/ui/SpecRow'
import { strategyBuild } from '@/content/how-it-works'

export function StrategyBuildSection() {
  return (
    <Section tone="ink" id="strategy-and-build" size="loose">
      <Reveal className="max-w-3xl">
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="font-display text-[2.5rem] font-medium leading-none tracking-[-0.04em] text-mist/30"
          >
            03
          </span>
          <Eyebrow tone="dark" rule={false}>
            {strategyBuild.eyebrow}
          </Eyebrow>
        </div>
        <Heading as="h2" size="display-sm" tone="dark" className="mt-8">
          {strategyBuild.heading}
        </Heading>
        <Lede tone="dark" className="mt-8">
          {strategyBuild.lede}
        </Lede>
      </Reveal>

      <Reveal delay={100} className="mt-20">
        <h3 className="font-mono text-label text-mist uppercase">
          {strategyBuild.how.heading}
        </h3>
        <ol className="mt-8 grid divide-y divide-line-dark border-y border-line-dark lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {strategyBuild.how.steps.map((step, index) => (
            <li key={step} className="py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <span
                aria-hidden="true"
                className="block font-display text-[1.75rem] font-medium leading-none tracking-[-0.03em] text-mist/40"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-5 text-[0.9375rem] leading-[1.72] text-paper">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={100} className="mt-24">
        <div className="max-w-2xl">
          <Heading as="h3" size="sub" tone="dark">
            {strategyBuild.spec.heading}
          </Heading>
          <p className="mt-5 text-mist leading-[1.72]">{strategyBuild.spec.lede}</p>
        </div>
        <dl className="mt-10 rounded-card border border-line-dark p-8 md:p-10">
          {strategyBuild.spec.rows.map((row) => (
            <SpecRow key={row.term} term={row.term} tone="dark">
              {row.value}
            </SpecRow>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
