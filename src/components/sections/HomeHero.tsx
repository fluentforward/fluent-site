import { Button, ButtonMeta } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AccentPhrase, Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { ProfitConstraintReadout } from '@/components/sections/ProfitConstraintReadout'
import { ProfitEngineScorecardVisual } from '@/components/sections/ProfitEngineScorecardVisual'
import { reviewCallCta, scoreCta } from '@/content/board'
import { hero } from '@/content/home'

const marqueeItems = [
  'Consulting agencies',
  'Management consultancies',
  'Professional services firms',
  'Managed service providers',
] as const

function HeroSubhead({ text }: { text: string }) {
  const parts = text.split(/(Offers, Demand and Delivery|Offers · Demand · Delivery)/)
  return (
    <p className="max-w-[54ch] text-lede text-lede-dark">
      {parts.map((part, index) =>
        part === 'Offers, Demand and Delivery' || part === 'Offers · Demand · Delivery' ? (
          <strong key={index} className="font-semibold text-paper">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  )
}

export function HomeHero() {
  return (
    <section className="hero-ambient relative pb-0 pt-12 md:pt-16">
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16 xl:gap-28">
          <div>
            <Reveal>
              <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
              <Heading as="h1" size="display" tone="dark" className="mt-7 max-w-[22ch]">
                {hero.headlineLead}{' '}
                <AccentPhrase>{hero.headlineAccent}</AccentPhrase>
              </Heading>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 md:mt-10">
                <HeroSubhead text={hero.subhead} />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-9">
                <Button href={scoreCta.href} className="px-6 py-4 text-base">
                  {scoreCta.label}
                  <ButtonMeta>3 min</ButtonMeta>
                </Button>
                <Button href={reviewCallCta.href} variant="ghost">
                  {reviewCallCta.label} →
                </Button>
                <Button href={hero.secondaryWebinar.href} variant="ghost">
                  {hero.secondaryWebinar.label} →
                </Button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">{scoreCta.hint}</p>
            </Reveal>
          </div>

          <Reveal delay={180} className="space-y-6 lg:pt-4">
            <ProfitEngineScorecardVisual />
            <ProfitConstraintReadout />
          </Reveal>
        </div>
      </Container>

      <div className="hero-marquee relative mt-14 overflow-hidden md:mt-20">
        <div className="hero-marquee-track flex w-max gap-7 py-5">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap text-lg font-medium tracking-[-0.02em] text-[#e3e3e6] md:text-xl"
            >
              {item}
              <span className="mx-7 text-accent" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
