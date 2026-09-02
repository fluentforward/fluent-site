import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

export function PageHero({
  eyebrow,
  heading,
  lede,
  children,
}: {
  eyebrow: string
  heading: string
  lede?: string
  children?: React.ReactNode
}) {
  return (
    <Section tone="paper" className="hero-ambient pt-20 pb-16 md:pt-32 md:pb-24">
      <Reveal className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" size="display-sm" className="mt-8">
          {heading}
        </Heading>
        {lede && <Lede className="mt-8 max-w-prose">{lede}</Lede>}
        {children}
      </Reveal>
    </Section>
  )
}
