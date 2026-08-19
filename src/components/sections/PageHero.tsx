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
    <Section tone="paper" className="pt-16 pb-14 md:pt-24 md:pb-20">
      <Reveal className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" size="display-sm" className="mt-6">
          {heading}
        </Heading>
        {lede && <Lede className="mt-6">{lede}</Lede>}
        {children}
      </Reveal>
    </Section>
  )
}
