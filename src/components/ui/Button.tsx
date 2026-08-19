import Link from 'next/link'
import clsx from 'clsx'

import { cal, calConfigJson } from '@/content/cal'

type Variant = 'primary' | 'secondary' | 'onDark' | 'onDarkGhost'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-ink-3',
  secondary:
    'border-line-strong text-ink hover:bg-paper-2 border bg-transparent',
  onDark: 'bg-paper text-ink hover:bg-paper-3',
  onDarkGhost:
    'border-line-dark text-paper hover:bg-ink-3 border bg-transparent',
}

const base =
  'rounded-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.9375rem] font-medium transition-colors duration-200'

type BaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

type LinkProps = BaseProps & { href: string; cal?: never }
type CalProps = BaseProps & { href?: never; cal: true }

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
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
