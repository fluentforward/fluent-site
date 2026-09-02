import { Card } from '@/components/ui/Card'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { sectors } from '@/content/home'

export function SectorsSection() {
  return (
    <Section tone="paper">
      <Reveal className="max-w-2xl">
        <Heading as="h2">{sectors.heading}</Heading>
        <Lede className="mt-8">{sectors.lede}</Lede>
      </Reveal>

      <dl className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {sectors.items.map((sector, index) => (
          <Reveal key={sector.title} delay={index * 90}>
            <Card hover className="h-full">
              <dt className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {sector.title}
              </dt>
              <dd className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
                {sector.body}
              </dd>
            </Card>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={140} className="mt-14 border-t border-line pt-10">
        <p className="font-display text-sm font-medium text-slate/80">
          {sectors.alsoDelivered.title}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-[1.72] text-mist">
          {sectors.alsoDelivered.body}
        </p>
      </Reveal>
    </Section>
  )
}
