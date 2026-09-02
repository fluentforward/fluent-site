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
        'group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium underline decoration-line-strong underline-offset-[7px] transition-[color,text-decoration-color] duration-300',
        tone === 'light'
          ? 'text-ink hover:text-steel hover:decoration-steel'
          : 'text-paper decoration-line-dark hover:text-paper',
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  )
}
