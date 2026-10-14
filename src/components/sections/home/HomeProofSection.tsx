import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { proofPacksHome, proofSection } from '@/content/proof'

export function HomeProofSection() {
  const pack = proofPacksHome[0]
  if (!pack) return null

  return (
    <Section id="proof" tone="paper" border>
      <Reveal className="max-w-3xl">
        <Eyebrow>{proofSection.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-8">{pack.title}</Heading>
        {pack.homeFounderLine ? (
          <p className="mt-8 text-[1.0625rem] leading-[1.72] text-slate">
            {pack.homeFounderLine}
          </p>
        ) : null}
        {pack.homeQuote ? (
          <blockquote className="mt-8 border-l-2 border-steel pl-7 text-[1.0625rem] leading-[1.72] text-ink">
            &quot;{pack.homeQuote}&quot;
          </blockquote>
        ) : null}
        <p className="mt-4 font-mono text-xs tracking-wide text-mist uppercase">
          {pack.label}
        </p>
        <div className="mt-8">
          <ArrowLink href={pack.href} newTab>{pack.ctaLabel}</ArrowLink>
        </div>
      </Reveal>
    </Section>
  )
}
