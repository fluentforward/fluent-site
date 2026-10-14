import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { whenBoardSaysBuild } from '@/content/home'

/** Compact Release Engine framing for the homepage. */
export function WhenBoardSaysBuildSection() {
  return (
    <Section tone="ink" size="default">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="dark">{whenBoardSaysBuild.eyebrow}</Eyebrow>
        <Heading as="h2" tone="dark" className="mt-8">
          {whenBoardSaysBuild.heading}
        </Heading>
        <p className="mt-8 text-lede leading-[1.72] text-mist">{whenBoardSaysBuild.body}</p>
      </Reveal>
    </Section>
  )
}
