import Link from 'next/link'

import { site } from '@/content/site'

export function Wordmark({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
      aria-label={`${site.name} — home`}
    >
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        className={tone === 'light' ? 'h-5 w-5 text-ink' : 'h-5 w-5 text-paper'}
      >
        <rect width="20" height="20" rx="5" fill="currentColor" />
        <path
          d="M7 5.5 12 10l-5 4.5"
          fill="none"
          stroke={tone === 'light' ? '#ffffff' : '#0b0c0e'}
          strokeWidth="1.75"
          strokeLinecap="square"
        />
      </svg>
      <span
        className={
          tone === 'light'
            ? 'font-display text-[1.0625rem] font-semibold tracking-[-0.025em] text-ink'
            : 'font-display text-[1.0625rem] font-semibold tracking-[-0.025em] text-paper'
        }
      >
        {site.name}
      </span>
    </Link>
  )
}
