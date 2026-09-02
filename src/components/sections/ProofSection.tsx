import { Card } from '@/components/ui/Card'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { proof } from '@/content/home'

export function ProofSection() {
  return (
    <Section tone="paper" id="track-record">
      <Reveal className="max-w-2xl">
        <Eyebrow>{proof.eyebrow}</Eyebrow>
        <Heading as="h2" className="mt-6">
          {proof.heading}
        </Heading>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
        {proof.credentials.map((credential, index) => (
          <Reveal key={credential.figure} delay={index * 90}>
            <Card className="flex h-full flex-col shadow-lift">
              <p className="font-display text-3xl tracking-[-0.02em] text-steel md:text-[2.125rem]">
                {credential.figure}
              </p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate">
                {credential.label}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10 max-w-2xl">
        <p className="text-sm leading-relaxed text-mist">{proof.lede}</p>
      </Reveal>
    </Section>
  )
}
