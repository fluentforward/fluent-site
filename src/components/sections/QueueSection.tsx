import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SpecRow } from '@/components/ui/SpecRow'
import { queue } from '@/content/how-it-works'

export function QueueSection() {
  return (
    <Section tone="ink" id="queue" size="loose">
      <Reveal className="max-w-3xl">
        <div className="flex items-baseline gap-4">
          <span aria-hidden="true" className="font-mono text-sm text-mist">
            03
          </span>
          <Eyebrow tone="dark" rule={false}>
            {queue.eyebrow}
          </Eyebrow>
        </div>
        <Heading as="h2" size="display-sm" tone="dark" className="mt-6">
          {queue.heading}
        </Heading>
        <Lede tone="dark" className="mt-6">
          {queue.lede}
        </Lede>
      </Reveal>

      <Reveal delay={80} className="mt-16">
        <h3 className="font-mono text-label text-mist uppercase">
          {queue.how.heading}
        </h3>
        <ol className="mt-6 grid divide-y divide-line-dark border-y border-line-dark lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {queue.how.steps.map((step, index) => (
            <li key={step} className="py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <span
                aria-hidden="true"
                className="block font-mono text-xs text-mist"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={80} className="mt-20">
        <div className="max-w-2xl">
          <Heading as="h3" size="sub" tone="dark">
            {queue.spec.heading}
          </Heading>
          <p className="mt-4 text-mist">{queue.spec.lede}</p>
        </div>
        <dl className="mt-8 rounded-card border border-line-dark p-7 md:p-9">
          {queue.spec.rows.map((row) => (
            <SpecRow key={row.term} term={row.term} tone="dark">
              {row.value}
            </SpecRow>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
