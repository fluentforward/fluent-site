import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { hero } from '@/content/home'

export function HomeHero() {
  return (
    <section className="hero-ambient relative pt-14 pb-20 md:pt-20 md:pb-24">
      <Container>
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="display" className="mt-5 max-w-[48rem] md:mt-6">
            {hero.headline}
            <span className="block text-mist">{hero.headlineSecond}</span>
          </Heading>
        </Reveal>

        <Reveal delay={120}>
          <Lede className="mt-6 max-w-prose md:mt-8">{hero.lede}</Lede>
          <div className="mt-7 flex flex-wrap items-center gap-4 md:mt-8">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-mist uppercase md:mt-9">
            {hero.audience}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
