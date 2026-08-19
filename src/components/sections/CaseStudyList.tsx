import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { CaseStudy } from '@/content/results'

function Detail({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-mono text-label text-mist uppercase">{title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">{body}</p>
    </div>
  )
}

export function CaseStudyList({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <>
      {caseStudies.map((study, index) => (
        <Section
          key={study.slug}
          id={study.slug}
          tone={index % 2 === 0 ? 'paper' : 'muted'}
          border={index % 2 === 0}
        >
          <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-xs tracking-wide text-mist uppercase">
                  {study.sector}
                </p>
                <Heading as="h2" size="sub" className="mt-4">
                  {study.client}
                </Heading>
                <p className="mt-3 font-mono text-xs tracking-wide text-mist uppercase">
                  {study.phases}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="max-w-2xl text-lede text-ink">{study.headline}</p>

              <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="bg-paper p-6">
                    <dt className="font-display text-3xl tracking-[-0.02em] text-ink">
                      {metric.figure}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-slate">
                      {metric.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
                <Detail title="The challenge" body={study.challenge} />
                <Detail title="What we did" body={study.approach} />
                <Detail title="What changed" body={study.outcome} />
              </div>

              {study.quote && (
                <blockquote className="mt-12 border-l-2 border-steel pl-6">
                  <p className="text-[1.0625rem] leading-relaxed text-ink">
                    {study.quote.text}
                  </p>
                  <footer className="mt-3 font-mono text-xs tracking-wide text-mist uppercase">
                    {study.quote.attribution}
                  </footer>
                </blockquote>
              )}
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  )
}
