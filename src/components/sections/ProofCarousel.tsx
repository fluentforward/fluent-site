'use client'

import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'

import { ArrowLink } from '@/components/ui/ArrowLink'
import { Card } from '@/components/ui/Card'
import type { ProofPack } from '@/content/proof'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d={direction === 'left' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProofCarousel({ packs }: { packs: readonly ProofPack[] }) {
  const [index, setIndex] = useState(0)
  const count = packs.length
  const active = packs[index]

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return
      setIndex((next + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (index >= count && count > 0) setIndex(0)
  }, [count, index])

  if (!active) return null

  const prevDisabled = count <= 1
  const nextDisabled = count <= 1

  return (
    <div className="mt-16">
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Proof case studies"
      >
        <div aria-live="polite" className="min-h-[1px]">
          <Card hover className="max-w-3xl">
            <p className="font-mono text-label uppercase text-mist">
              {active.label}
            </p>
            <h3 className="mt-5 font-display text-sub text-ink">{active.title}</h3>
            <p className="mt-5 text-[0.9375rem] leading-[1.72] text-slate">
              {active.summary}
            </p>
            <div className="mt-8 border-t border-line pt-8">
              <ArrowLink href={active.href} newTab>
                {active.ctaLabel}
              </ArrowLink>
            </div>
          </Card>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {packs.map((pack, dotIndex) => (
              <button
                key={pack.slug}
                type="button"
                aria-label={`Show ${pack.label} case study`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
                className={clsx(
                  'h-2 rounded-full transition-all duration-300',
                  dotIndex === index
                    ? 'w-6 bg-ink'
                    : 'w-2 bg-line-strong hover:bg-mist',
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={prevDisabled}
              aria-label="Previous case study"
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors',
                prevDisabled
                  ? 'cursor-default opacity-40'
                  : 'hover:bg-paper-3',
              )}
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={nextDisabled}
              aria-label="Next case study"
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors',
                nextDisabled
                  ? 'cursor-default opacity-40'
                  : 'hover:bg-paper-3',
              )}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
