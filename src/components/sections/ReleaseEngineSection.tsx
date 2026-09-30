import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { releaseEngine } from '@/content/leverage-board'

export function ReleaseEngineSection() {
  return (
    <Section tone="ink" id="release-engine" size="loose">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="dark">{releaseEngine.eyebrow}</Eyebrow>
        <Heading as="h2" tone="dark" className="mt-8">
          {releaseEngine.heading}
        </Heading>
        <p className="mt-8 text-lede leading-[1.72] text-mist">
          {releaseEngine.body}
        </p>
      </Reveal>

      <dl className="mt-20 grid gap-5 sm:grid-cols-3 lg:gap-6">
        {releaseEngine.intensities.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 90}
            className="rounded-card border border-line-dark bg-ink-2/40 p-8 md:p-9"
          >
            <dt className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-paper">
              {item.title}
            </dt>
            <dd className="mt-4 text-[0.9375rem] leading-[1.72] text-mist">
              {item.body}
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={120} className="mt-12 max-w-prose">
        <p className="text-[0.9375rem] leading-[1.72] text-mist/90">
          {releaseEngine.rule}
        </p>
      </Reveal>
    </Section>
  )
}
