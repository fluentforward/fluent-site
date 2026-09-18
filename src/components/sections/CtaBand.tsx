import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { primaryCta } from '@/content/site'

export function CtaBand({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string
  heading: string
  body: string
}) {
  return (
    <Section tone="ink" size="default">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <Heading as="h2" size="display-sm" tone="dark" className="mt-8">
          {heading}
        </Heading>
        <p className="mt-8 text-lede text-mist">{body}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={primaryCta.href} variant="onDark">
            {primaryCta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
