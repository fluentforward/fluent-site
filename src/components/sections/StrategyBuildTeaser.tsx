import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { engagementFeels } from '@/content/home'

export function StrategyBuildTeaser() {
  return (
    <Section tone="ink">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="dark">{engagementFeels.eyebrow}</Eyebrow>
        <Heading as="h2" tone="dark" className="mt-8">
          {engagementFeels.heading}
        </Heading>
        <Lede tone="dark" className="mt-8">
          {engagementFeels.lede}
        </Lede>
        <p className="mt-8 text-lede text-mist">{engagementFeels.body}</p>
        <div className="mt-10">
          <ArrowLink href={engagementFeels.link.href} tone="dark">
            {engagementFeels.link.label}
          </ArrowLink>
        </div>
      </Reveal>
    </Section>
  )
}
