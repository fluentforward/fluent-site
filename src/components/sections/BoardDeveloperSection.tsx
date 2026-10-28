import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { productEngineerPath } from '@/content/client-capacity'

export function BoardDeveloperSection() {
  return (
    <Section tone="ink" size="default">
      <Reveal className="max-w-3xl">
        <Eyebrow tone="dark">{productEngineerPath.eyebrow}</Eyebrow>
        <Heading as="h2" tone="dark" className="mt-8">
          {productEngineerPath.heading}
        </Heading>
        <p className="mt-8 text-lede leading-[1.72] text-mist">{productEngineerPath.body}</p>
        <p className="mt-6 text-sm leading-relaxed text-mist/90">
          {productEngineerPath.smallPrint}
        </p>
      </Reveal>
    </Section>
  )
}
