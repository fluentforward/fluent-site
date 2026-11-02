import { Eyebrow } from '@/components/ui/Eyebrow'
import { AccentPhrase, Heading, Lede } from '@/components/ui/Heading'
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
  const accentBuild = heading.includes('build.')
  return (
    <Section
      tone="ink"
      className="hero-ambient overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16"
    >
      <Reveal className="relative max-w-4xl">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <Heading as="h1" size="display-sm" tone="dark" className="mt-5 md:mt-6">
          {accentBuild ? (
            <>
              Judgement before <AccentPhrase>build.</AccentPhrase>
            </>
          ) : (
            heading
          )}
        </Heading>
        {lede && (
          <Lede tone="dark" className="mt-6 max-w-prose md:mt-7">
            {lede}
          </Lede>
        )}
        {children}
      </Reveal>
    </Section>
  )
}
