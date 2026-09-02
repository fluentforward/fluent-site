import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { founder } from '@/content/home'

export function FounderStrip() {
  return (
    <Section tone="muted" size="compact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <Heading as="h2" size="sub" className="mt-5">
            {founder.heading}
          </Heading>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <p className="text-[1.0625rem] leading-relaxed text-slate">
            {founder.body}
          </p>

          <p className="mt-8 border-t border-line pt-8 text-sm leading-relaxed text-slate">
            {founder.secondary}
          </p>

          <div className="mt-8">
            <ArrowLink href={founder.link.href}>{founder.link.label}</ArrowLink>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
