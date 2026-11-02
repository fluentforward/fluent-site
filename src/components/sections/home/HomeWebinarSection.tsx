import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { webinar } from '@/content/home'

export function HomeWebinarSection() {
  return (
    <Section tone="muted" border id="webinar" size="compact">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>{webinar.eyebrow}</Eyebrow>
          <Heading as="h2" className="mt-8">
            {webinar.heading}
          </Heading>
          <Lede className="mt-8">{webinar.subtitle}</Lede>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center">
          <ul className="space-y-4 border-t border-line pt-8">
            {webinar.meta.map((row) => (
              <li
                key={row.label}
                className="flex flex-col gap-1 sm:flex-row sm:gap-6 sm:justify-between"
              >
                <span className="font-mono text-label uppercase text-mist">
                  {row.label}
                </span>
                <span className="text-[0.9375rem] leading-[1.72] text-slate">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={webinar.ctaHref} variant="secondary">
              {webinar.ctaLabel}
            </Button>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              {webinar.ctaNote}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
