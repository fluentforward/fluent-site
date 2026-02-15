import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  href: string
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  href,
  children,
  className,
}: ButtonProps) {
  const base =
    'inline-block px-8 py-4 text-lg font-semibold rounded transition-all duration-300'
  const variants = {
    primary:
      'bg-fluent-red text-white border-2 border-fluent-red hover:bg-transparent hover:text-fluent-red',
    secondary:
      'bg-transparent text-white border-2 border-white hover:bg-white hover:text-charcoal',
  }

  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </Link>
  )
}
