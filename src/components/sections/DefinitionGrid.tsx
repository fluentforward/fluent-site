import clsx from 'clsx'

import { Eyebrow } from '@/components/ui/Eyebrow'
import { AccentPhrase, Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { ArrowLink } from '@/components/ui/ArrowLink'

/** Two-column grid of term/definition cards, separated by hairlines. */
export function DefinitionGrid({
  eyebrow,
  heading,
  lede,
  plainLine,
  items,
  closing,
  closingLink,
  tone = 'paper',
  id,
  size = 'default',
  dense = false,
  variant = 'cards',
}: {
  eyebrow?: string
  heading: string
  lede?: string
  plainLine?: string
  items: readonly { title: string; body: string }[]
  closing?: string
  closingLink?: { href: string; label: string }
  tone?: 'paper' | 'muted'
  id?: string
  size?: 'default' | 'compact'
  dense?: boolean
  /** `quotes` matches preview Sound familiar layout. */
  variant?: 'cards' | 'quotes'
}) {
  const headingParts = heading.includes('unprofitable')
    ? {
        lead: 'Three ways a busy firm stays ',
        accent: 'unprofitable.',
      }
    : null

  return (
    <Section tone={tone} id={id} size={size}>
      <Reveal className="max-w-3xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading as="h2" className={eyebrow ? 'mt-6' : undefined}>
          {headingParts ? (
            <>
              {headingParts.lead}
              <AccentPhrase>{headingParts.accent}</AccentPhrase>
            </>
          ) : (
            heading
          )}
        </Heading>
        {lede && <Lede className="mt-6">{lede}</Lede>}
        {plainLine && (
          <p className="mt-6 text-[1.0625rem] leading-[1.72] text-slate">{plainLine}</p>
        )}
      </Reveal>

      {variant === 'quotes' ? (
        <dl
          className={clsx(
            'mt-12 grid border-t border-ink lg:grid-cols-3',
            dense ? 'mt-10' : 'mt-16',
          )}
        >
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
              className={clsx(
                'flex flex-col gap-6 py-8 lg:py-10',
                index > 0 && 'lg:border-l lg:border-line lg:pl-8',
              )}
            >
              <dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-mist-d">
                <span className="mr-2 font-medium text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.title}
              </dt>
              <dd className="text-lg leading-snug tracking-[-0.012em] text-ink">
                {item.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      ) : (
        <dl
          className={clsx(
            'grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6',
            dense ? 'mt-12' : 'mt-20',
          )}
        >
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
              className="card-lift rounded-card border border-line bg-paper-3 p-8 shadow-card md:p-9"
            >
              <dt className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-ink">
                {item.title}
              </dt>
              <dd className="mt-4 text-[0.9375rem] leading-[1.72] text-slate">
                {item.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      )}

      {closing ? (
        <Reveal
          delay={120}
          className={clsx(
            variant === 'quotes'
              ? 'mt-10 flex flex-col gap-6 rounded-[14px] bg-ink p-8 text-lede-dark md:flex-row md:items-end md:justify-between md:p-10'
              : dense
                ? 'mt-8 max-w-prose'
                : 'mt-12 max-w-prose',
          )}
        >
          <p
            className={clsx(
              variant === 'quotes'
                ? 'max-w-[42ch] text-xl leading-snug tracking-[-0.02em] text-[#bdbdc2] md:text-2xl'
                : 'text-[1.0625rem] leading-[1.72] text-slate',
            )}
          >
            {closing}
          </p>
          {closingLink ? (
            <ArrowLink href={closingLink.href} tone="dark">
              {closingLink.label}
            </ArrowLink>
          ) : null}
        </Reveal>
      ) : null}
    </Section>
  )
}
