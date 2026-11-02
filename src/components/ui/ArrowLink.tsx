import Link from 'next/link'
import clsx from 'clsx'

export function ArrowLink({
  href,
  tone = 'light',
  newTab = false,
  className,
  children,
}: {
  href: string
  tone?: 'light' | 'dark'
  newTab?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
      className={clsx(
        'group inline-flex items-center gap-2.5 border-b pb-1 text-[0.9375rem] font-semibold transition-[color,gap] duration-300',
        tone === 'light'
          ? 'border-accent text-accent hover:gap-3.5'
          : 'border-paper/40 text-paper hover:gap-3.5',
        className,
      )}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  )
}
