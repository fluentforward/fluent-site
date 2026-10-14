import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { primaryCta } from '@/content/site'

type Cta = { label: string; href: string }

export function CtaBand({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
}: {
  eyebrow: string
  heading: string
  body: string
  primary?: Cta
  secondary?: Cta
}) {
  const primaryLink = primary ?? primaryCta
  return (
    <Section tone="ink" size="default">
      <Reveal className="max-w-3xl">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <Heading as="h2" size="display-sm" tone="dark" className="mt-8">
          {heading}
        </Heading>
        <p className="mt-8 text-lede text-mist">{body}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={primaryLink.href} variant="onDark">
            {primaryLink.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="onDarkGhost">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </Reveal>
    </Section>
  )
}
