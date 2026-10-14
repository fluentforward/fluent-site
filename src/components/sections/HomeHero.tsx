import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { hero } from '@/content/home'

export function HomeHero() {
  return (
    <section className="hero-ambient relative pt-14 pb-20 md:pt-20 md:pb-24">
      <Container>
        <Reveal>
          <Heading as="h1" size="display" className="max-w-[48rem]">
            {hero.headline}
          </Heading>
        </Reveal>

        <Reveal delay={120}>
          <Lede className="mt-6 max-w-prose md:mt-8">{hero.lede}</Lede>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">{hero.auditHint}</p>
        </Reveal>
      </Container>
    </section>
  )
}
