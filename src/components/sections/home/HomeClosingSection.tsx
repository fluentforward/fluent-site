import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { closing } from '@/content/home'

export function HomeClosingSection({ fitLine }: { fitLine?: string }) {
  return (
    <Section tone="ink" size="default">
      <Reveal className="max-w-3xl">
        <Eyebrow tone="dark">{closing.eyebrow}</Eyebrow>
        <Heading as="h2" size="display-sm" tone="dark" className="mt-8">
          {closing.heading}
        </Heading>
        {fitLine ? (
          <p className="mt-8 text-lede text-mist">{fitLine}</p>
        ) : null}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={closing.primaryCta.href} variant="onDark">
            {closing.primaryCta.label}
          </Button>
          <Button href={closing.secondaryCta.href} variant="onDarkGhost">
            {closing.secondaryCta.label}
          </Button>
        </div>
        <p className="mt-8 text-lede text-mist">{closing.buildLine}</p>
      </Reveal>
    </Section>
  )
}
