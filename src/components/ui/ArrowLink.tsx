import Link from 'next/link'
import clsx from 'clsx'

export function ArrowLink({
  href,
  tone = 'light',
  className,
  children,
}: {
  href: string
  tone?: 'light' | 'dark'
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center gap-2 text-[0.9375rem] font-medium underline decoration-line-strong underline-offset-[6px] transition-colors',
        tone === 'light'
          ? 'text-ink hover:text-steel hover:decoration-steel'
          : 'text-paper decoration-line-dark hover:text-paper',
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  )
}
