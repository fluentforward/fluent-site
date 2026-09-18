import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { contrast } from '@/content/home'

function ContrastColumn({
  heading,
  items,
}: {
  heading: string
  items: string[]
}) {
  return (
    <article className="flex min-w-0 flex-col">
      <div className="rounded-card border border-line bg-paper p-8 md:p-9">
        <h3 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
          {heading}
        </h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[0.9375rem] leading-[1.72] text-slate"
            >
              <span aria-hidden="true" className="shrink-0 text-steel">
                &bull;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function ContrastSection() {
  return (
    <Section tone="muted">
      <Reveal className="max-w-2xl">
        <Eyebrow>{contrast.eyebrow}</Eyebrow>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
        <Reveal delay={80}>
          <ContrastColumn heading={contrast.leadersHeading} items={contrast.leaders} />
        </Reveal>
        <Reveal delay={160}>
          <ContrastColumn
            heading={contrast.followersHeading}
            items={contrast.followers}
          />
        </Reveal>
      </div>

      <Reveal delay={200} className="mt-12 max-w-prose">
        <p className="border-l-2 border-steel pl-7 text-[1.0625rem] leading-[1.72] text-ink">
          {contrast.bridge}
        </p>
        <p className="mt-7 text-[0.9375rem] leading-[1.72] text-slate">
          {contrast.alsoNot}
        </p>
      </Reveal>
    </Section>
  )
}
