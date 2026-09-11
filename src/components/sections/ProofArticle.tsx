import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { ProofPack } from '@/content/proof'

function ComparisonBlock({
  before,
  withUs,
}: {
  before: string
  withUs: string
}) {
  return (
    <div className="mt-16 grid gap-5 lg:grid-cols-2 lg:gap-6">
      <Card className="h-full">
        <p className="font-mono text-label uppercase text-mist">Before</p>
        <p className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
          {before}
        </p>
      </Card>
      <Card tone="dark" className="h-full border-ink-3">
        <p className="font-mono text-label uppercase text-mist">With us</p>
        <p className="mt-4 text-[0.9375rem] leading-[1.72] text-paper/90">
          {withUs}
        </p>
      </Card>
    </div>
  )
}

export function ProofArticle({ pack }: { pack: ProofPack }) {
  const metaLine = pack.meta.join(' · ')

  return (
    <>
      <Section tone="paper" className="hero-ambient pt-14 pb-10 md:pt-20 md:pb-12">
        <Reveal className="max-w-prose">
          <p className="font-mono text-label uppercase text-mist">{metaLine}</p>
          <h1 className="mt-6 text-display-sm text-ink">{pack.title}</h1>
        </Reveal>
      </Section>

      <Section tone="paper" border width="prose">
        <Reveal>
          <div className="space-y-7">
            {pack.body.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="text-[1.0625rem] leading-[1.72] text-slate"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {pack.comparison && (
            <ComparisonBlock
              before={pack.comparison.before}
              withUs={pack.comparison.withUs}
            />
          )}

          <div className="mt-16 border-t border-line pt-12">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact">Talk through your process</Button>
              <Button href="/how-it-works" variant="secondary">
                How it works
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
