import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { webinar } from '@/content/home'

export function HomeWebinarSection() {
  return (
    <Section
      id="webinar"
      size="compact"
      className="webinar-band relative overflow-hidden py-20 md:py-28"
      tone="paper"
    >
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.8fr_1fr] lg:gap-16">
        <Reveal className="max-w-3xl">
          <Eyebrow dot={false} tone="light" className="text-black/70">
            {webinar.eyebrow}
          </Eyebrow>
          <Heading as="h2" size="display-sm" className="mt-5 max-w-[16ch] text-ink">
            {webinar.heading}
          </Heading>
          <Lede className="mt-6 max-w-[46ch] text-black/82">{webinar.subtitle}</Lede>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-end">
          <ul className="mb-7 border-t border-black/30">
            {webinar.meta.map((row) => (
              <li
                key={row.label}
                className="flex justify-between gap-4 border-b border-black/30 py-3.5 text-xs"
              >
                <span className="font-mono uppercase tracking-[0.06em] text-black/60">
                  {row.label}
                </span>
                <span className="text-right text-[0.9375rem] text-ink">{row.value}</span>
              </li>
            ))}
          </ul>
          <Button href={webinar.ctaHref} variant="ink" className="w-full">
            {webinar.ctaLabel} →
          </Button>
          <p className="mt-4 text-sm leading-relaxed text-black/75">{webinar.ctaNote}</p>
        </Reveal>
      </div>
    </Section>
  )
}
