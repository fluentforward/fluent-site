import { Button } from '@/components/ui/Button'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Card } from '@/components/ui/Card'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { auditCta } from '@/content/board'
import { whereToStart } from '@/content/home'

export function HomeWhereToStartSection() {
  return (
    <Section tone="muted" border id="where-to-start" size="compact">
      <Reveal className="max-w-3xl">
        <Eyebrow>{whereToStart.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {whereToStart.heading}
        </Heading>
        <Lede className="mt-8">{whereToStart.lede}</Lede>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {whereToStart.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 80}>
            <Card hover className="flex h-full flex-col">
              <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
                <span className="font-medium text-ink">This is for you if:</span>{' '}
                {card.ifYou}
              </p>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.72] text-slate">
                {card.body}
              </p>
              <div className="mt-8">
                <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 max-w-prose">
        <p className="text-[1.0625rem] leading-[1.72] text-slate">
          {whereToStart.auditLine}
        </p>
        <div className="mt-8">
          <Button href={auditCta.href}>{auditCta.label}</Button>
        </div>
      </Reveal>
    </Section>
  )
}
