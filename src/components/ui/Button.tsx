'use client'

import Link from 'next/link'
import clsx from 'clsx'

import {
  useFirstAiMoveClickHandler,
  useMarketingAttributedHref,
} from '@/components/ui/attributed-href'
import { cal, calConfigJson } from '@/content/cal'
import { isCapacityScalingRoadmapMagnetUrl } from '@/content/board'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark' | 'onDarkGhost'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-ink hover:bg-accent-2 active:scale-[0.98] font-semibold',
  secondary:
    'border-line-strong text-ink hover:bg-paper-2 active:scale-[0.98] border bg-transparent font-semibold',
  ghost:
    'border border-white/28 text-paper hover:border-white hover:bg-white/6 active:scale-[0.98] bg-transparent font-semibold',
  onDark:
    'bg-accent text-ink hover:bg-accent-2 active:scale-[0.98] font-semibold',
  onDarkGhost:
    'border border-white/28 text-paper hover:border-white hover:bg-white/6 active:scale-[0.98] bg-transparent font-semibold',
}

const base =
  'rounded-btn inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.9375rem] tracking-[-0.005em] transition-[color,background-color,transform,border-color] duration-300 ease-[cubic-bezier(0.2,0.7,0.1,1)]'

type BaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

type LinkProps = BaseProps & { href: string; cal?: never }
type CalProps = BaseProps & { href?: never; cal: true }

function ExternalButton({
  href,
  classes,
  children,
}: {
  href: string
  classes: string
  children: React.ReactNode
}) {
  const externalHref = useMarketingAttributedHref(href)
  const onExternalClick = useFirstAiMoveClickHandler(href)
  const attributionClick = isCapacityScalingRoadmapMagnetUrl(href)
    ? onExternalClick
    : undefined

  return (
    <a href={externalHref} className={classes} onClick={attributionClick}>
      {children}
    </a>
  )
}

/** Renders an internal link, an external link, or a Cal.com popup trigger. */
export function Button({
  href,
  cal: isCal,
  variant = 'primary',
  className,
  children,
}: LinkProps | CalProps) {
  const classes = clsx(base, variantClasses[variant], className)

  if (isCal) {
    return (
      <button
        type="button"
        className={classes}
        data-cal-link={cal.link}
        data-cal-namespace={cal.namespace}
        data-cal-config={calConfigJson}
      >
        {children}
      </button>
    )
  }

  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <ExternalButton href={href} classes={classes}>
        {children}
      </ExternalButton>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export function ButtonMeta({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-black/14 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.06em]">
      {children}
    </span>
  )
}
