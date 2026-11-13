'use client'

import Link from 'next/link'
import {
  useScoreMagnetAttributionClick,
  useMarketingAttributedHref,
} from '@/components/ui/attributed-href'
import { cal, calConfigJson } from '@/content/cal'
import { isCapacityScalingRoadmapMagnetUrl } from '@/content/board'
import { buttonClasses, type ButtonVariant as Variant } from '@/components/ui/button-classes'

type BaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

type LinkProps = BaseProps & { href: string; cal?: never; prefetch?: boolean }
type CalProps = BaseProps & { href?: never; cal: true; prefetch?: never }

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
  const onExternalClick = useScoreMagnetAttributionClick(href)
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
  prefetch,
}: LinkProps | CalProps) {
  const classes = buttonClasses(variant, className)

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
    <Link href={href} className={classes} prefetch={prefetch}>
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
