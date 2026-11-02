import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { scoreCta } from '@/content/board'
import { hero } from '@/content/home'

export function HomeHero() {
  return (
    <section className="hero-ambient relative pt-14 pb-20 md:pt-20 md:pb-24">
      <Container>
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            {hero.headline}
          </Heading>
        </Reveal>

        <Reveal delay={120}>
          <Lede className="mt-6 max-w-prose md:mt-8">{hero.subhead}</Lede>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryWebinar.href} variant="secondary">
              {hero.secondaryWebinar.label}
            </Button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">{scoreCta.hint}</p>
        </Reveal>
      </Container>
    </section>
  )
}
