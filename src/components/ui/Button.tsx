import Link from 'next/link'
import clsx from 'clsx'

import { cal, calConfigJson } from '@/content/cal'

type Variant = 'primary' | 'secondary' | 'onDark' | 'onDarkGhost'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ink text-paper hover:bg-ink-3 active:scale-[0.98] active:bg-ink-2',
  secondary:
    'border-line-strong text-ink hover:bg-paper-2 active:scale-[0.98] active:bg-paper-3 border bg-transparent',
  onDark:
    'bg-paper text-ink hover:bg-paper-3 active:scale-[0.98] active:bg-paper-2',
  onDarkGhost:
    'border-line-dark text-paper hover:bg-ink-3 active:scale-[0.98] border bg-transparent',
}

const base =
  'rounded-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.9375rem] font-medium transition-[color,background-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]'

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
