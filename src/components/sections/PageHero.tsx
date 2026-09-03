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
    <Section tone="paper" className="hero-ambient pt-14 pb-12 md:pt-20 md:pb-16">
      <Reveal className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" size="display-sm" className="mt-5 md:mt-6">
          {heading}
        </Heading>
        {lede && <Lede className="mt-6 max-w-prose md:mt-7">{lede}</Lede>}
        {children}
      </Reveal>
    </Section>
  )
}
