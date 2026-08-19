import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { hero } from '@/content/home'

export function HomeHero() {
  return (
    <section className="bg-paper pt-14 pb-20 md:pt-32 md:pb-28">
      <Container>
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="display" className="mt-6 max-w-[46rem] md:mt-8">
            {hero.headline}
            <span className="block text-mist">{hero.headlineSecond}</span>
          </Heading>
        </Reveal>

        <Reveal delay={90}>
          <Lede className="mt-8 max-w-xl md:mt-11">{hero.lede}</Lede>
          <div className="mt-9 flex flex-wrap items-center gap-4 md:mt-11">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-9 font-mono text-xs tracking-wide text-mist uppercase">
            {hero.audience}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
