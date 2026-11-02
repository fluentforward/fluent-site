import Link from 'next/link'

import { site } from '@/content/site'

export function Wordmark({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const textClass =
    tone === 'light'
      ? 'text-ink'
      : 'text-paper'

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-85"
      aria-label={`${site.name} home`}
    >
      <span
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 bg-accent"
        style={{
          clipPath:
            'polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%)',
        }}
      />
      <span
        className={`font-display text-[1.0625rem] font-bold tracking-[-0.03em] ${textClass}`}
      >
        {site.name}
      </span>
    </Link>
  )
}
