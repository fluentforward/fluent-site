import { Button } from '@/components/ui/Button'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Card } from '@/components/ui/Card'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AccentPhrase, Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { scoreCta } from '@/content/board'
import { whereToStart } from '@/content/home'

export function HomeWhereToStartSection() {
  return (
    <Section tone="muted" border id="where-to-start" size="compact">
      <Reveal className="max-w-3xl">
        <Eyebrow>{whereToStart.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">
          {whereToStart.headingLead}
          <AccentPhrase>{whereToStart.headingAccent}</AccentPhrase>
          {whereToStart.headingTail}
        </Heading>
        <Lede className="mt-8">{whereToStart.lede}</Lede>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
        {whereToStart.pathCards.map((card, index) => (
          <Reveal key={card.pathTitle} delay={index * 80}>
            <Card hover className="flex h-full flex-col">
              <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {card.pathTitle}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.06em] text-mist">
                {card.offerLabel}
              </p>
              <p className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
                <span className="font-medium text-ink">This is for you if:</span> {card.ifYou}
              </p>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.72] text-slate">
                {card.body}
              </p>
              {card.insightsFootnote ? (
                <p className="mt-6 border-t border-line pt-6 text-[0.875rem] leading-[1.72] text-slate">
                  {card.insightsFootnote}
                </p>
              ) : null}
              <div className="mt-8">
                <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160} className="mt-14 max-w-prose">
        <p className="font-display text-[1.125rem] font-medium text-ink">{whereToStart.howWorkGetsDoneHeading}</p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
        {whereToStart.buildModeCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 80}>
            <Card className="flex h-full flex-col border-line bg-paper/60">
              <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
                <span className="font-medium text-ink">This is for you if:</span> {card.ifYou}
              </p>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.72] text-slate">{card.body}</p>
              <div className="mt-8">
                <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={220} className="mt-12 max-w-prose space-y-6">
        <p className="text-[1.0625rem] leading-[1.72] text-slate">{whereToStart.customSoftwareLine}</p>
        <p className="text-[1.0625rem] leading-[1.72] text-slate">{whereToStart.runLine}</p>
        <p className="text-[1.0625rem] leading-[1.72] text-slate">{whereToStart.scoreLine}</p>
        <div>
          <Button href={scoreCta.href}>{scoreCta.label}</Button>
        </div>
      </Reveal>
    </Section>
  )
}
