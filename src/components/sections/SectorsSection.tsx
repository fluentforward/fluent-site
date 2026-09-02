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
        <Lede className="mt-6">{sectors.lede}</Lede>
      </Reveal>

      <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {sectors.items.map((sector, index) => (
          <Reveal key={sector.title} delay={index * 70}>
            <Card className="h-full shadow-lift">
              <dt className="font-display text-[1.0625rem] font-medium text-ink">
                {sector.title}
              </dt>
              <dd className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
                {sector.body}
              </dd>
            </Card>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={120} className="mt-10 border-t border-line pt-8">
        <p className="font-display text-sm font-medium text-slate">
          {sectors.alsoDelivered.title}
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mist">
          {sectors.alsoDelivered.body}
        </p>
      </Reveal>
    </Section>
  )
}
