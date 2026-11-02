import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AccentPhrase, Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { closing } from '@/content/home'

export function HomeClosingSection({
  fitLine,
  secondaryCta,
}: {
  fitLine?: string
  secondaryCta?: { label: string; href: string }
}) {
  const secondary = secondaryCta ?? closing.secondaryCta
  return (
    <Section tone="ink" size="default" className="overflow-hidden">
      <Reveal className="relative max-w-4xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[40%] -right-[10%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(255,74,28,0.22),transparent_60%)]"
        />
        <Eyebrow tone="dark">{closing.eyebrow}</Eyebrow>
        <Heading as="h2" size="display-sm" tone="dark" className="relative mt-6 max-w-[18ch]">
          {closing.heading.split('three minutes').map((part, index, arr) =>
            index < arr.length - 1 ? (
              <span key={index}>
                {part}
                <AccentPhrase>three minutes</AccentPhrase>
              </span>
            ) : (
              <span key={index}>{part}</span>
            ),
          )}
        </Heading>
        {fitLine ? (
          <p className="relative mt-8 text-lede text-lede-dark">{fitLine}</p>
        ) : null}
        <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={closing.primaryCta.href} className="px-6 py-4 text-base">
            {closing.primaryCta.label} →
          </Button>
          <Button href={secondary.href} variant="onDarkGhost">
            {secondary.label}
          </Button>
        </div>
        <p className="relative mt-8 text-[15px] text-mist">{closing.buildLine}</p>
      </Reveal>
    </Section>
  )
}
