import { ArrowLink } from '@/components/ui/ArrowLink'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { proof } from '@/content/home'

export function ProofSection() {
  return (
    <Section tone="paper">
      <Reveal className="max-w-2xl">
        <Eyebrow>{proof.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-6">
          {proof.heading}
        </Heading>
        <Lede className="mt-6">{proof.lede}</Lede>
      </Reveal>

      <dl className="mt-14 grid divide-y divide-line border-t border-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {proof.credentials.map((credential, index) => (
          <Reveal
            key={credential.figure}
            delay={index * 90}
            className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"
          >
            <dt className="font-display text-3xl tracking-[-0.02em] text-ink md:text-4xl">
              {credential.figure}
            </dt>
            <dd className="mt-4 text-sm leading-relaxed text-slate">
              {credential.label}
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-12">
        <ArrowLink href={proof.link.href}>{proof.link.label}</ArrowLink>
      </Reveal>
    </Section>
  )
}
