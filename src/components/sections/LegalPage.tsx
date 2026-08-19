import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { LegalSection } from '@/content/legal'

export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string
  lastUpdated: string
  intro: string
  sections: readonly LegalSection[]
}) {
  return (
    <>
      <Section tone="paper" className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-2xl">
          <Eyebrow>Legal</Eyebrow>
          <Heading as="h1" size="display-sm" className="mt-6">
            {title}
          </Heading>
          <p className="mt-5 font-mono text-xs tracking-wide text-mist uppercase">
            Last updated {lastUpdated}
          </p>
          <Lede className="mt-7">{intro}</Lede>
        </div>
      </Section>

      <Section tone="paper" border>
        <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="font-mono text-label text-mist uppercase">
              On this page
            </p>
            <ul className="mt-5 space-y-2.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-slate transition-colors hover:text-ink"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-2xl">
            {sections.map((section) => (
              <Reveal
                key={section.id}
                as="section"
                className="scroll-mt-28 border-t border-line pt-10 pb-10 first:border-t-0 first:pt-0 last:pb-0"
              >
                <h2 id={section.id} className="scroll-mt-28 text-sub text-ink">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 leading-relaxed text-slate"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-6 space-y-3.5">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 leading-relaxed text-slate"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-steel"
                        >
                          &mdash;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.after?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 leading-relaxed text-slate"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
