'use client'

import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'

import { ArrowLink } from '@/components/ui/ArrowLink'
import { Card } from '@/components/ui/Card'
import type { ProofPack } from '@/content/proof'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
    >
      <path
        d={direction === 'left' ? 'M14 6l-6 6 6 6' : 'M10 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CarouselNavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}) {
  const label =
    direction === 'left' ? 'Previous case study' : 'Next case study'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={clsx(
        'flex shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper text-ink shadow-card transition-[background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        'h-12 w-12 sm:h-14 sm:w-14',
        disabled
          ? 'cursor-default opacity-35 shadow-none'
          : 'hover:bg-paper-3 hover:shadow-card-hover active:scale-[0.97]',
      )}
    >
      <ChevronIcon direction={direction} />
    </button>
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

  const navDisabled = count <= 1

  return (
    <div className="mt-16">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Proof case studies"
      >
        <div
          className="flex items-center gap-3 sm:gap-5 md:gap-6"
          aria-live="polite"
        >
          <CarouselNavButton
            direction="left"
            disabled={navDisabled}
            onClick={() => goTo(index - 1)}
          />

          <Card hover className="min-w-0 flex-1 max-w-3xl">
            <p className="font-mono text-label uppercase text-mist">
              {active.label}
            </p>
            <h3 className="mt-5 font-display text-sub text-ink">
              {active.title}
            </h3>
            <p className="mt-5 text-[0.9375rem] leading-[1.72] text-slate">
              {active.summary}
            </p>
            <div className="mt-8 border-t border-line pt-8">
              <ArrowLink href={active.href} newTab>
                {active.ctaLabel}
              </ArrowLink>
            </div>
          </Card>

          <CarouselNavButton
            direction="right"
            disabled={navDisabled}
            onClick={() => goTo(index + 1)}
          />
        </div>

        {count > 1 && (
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2.5">
              {packs.map((pack, dotIndex) => (
                <button
                  key={pack.slug}
                  type="button"
                  aria-label={`Show ${pack.label} case study`}
                  aria-current={dotIndex === index ? 'true' : undefined}
                  onClick={() => setIndex(dotIndex)}
                  className={clsx(
                    'h-2.5 rounded-full transition-all duration-300',
                    dotIndex === index
                      ? 'w-7 bg-ink'
                      : 'w-2.5 bg-line-strong hover:bg-mist',
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
