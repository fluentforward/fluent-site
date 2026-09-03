'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { nav, primaryCta } from '@/content/site'

import { Wordmark } from './Wordmark'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b border-line bg-paper/75 backdrop-blur-xl transition-[background-color,backdrop-filter,border-color] duration-500',
        scrolled && 'header-scrolled',
      )}
    >
      <Container>
        <div className="flex h-[3.75rem] items-center justify-between gap-6 md:h-16">
          <Wordmark />

          <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    'text-[0.875rem] font-medium tracking-[-0.01em] transition-colors duration-300',
                    active
                      ? 'text-ink'
                      : 'text-slate hover:text-ink',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Button href={primaryCta.href} className="px-6 py-2.5 text-sm">
              {primaryCta.label}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-paper-2 md:hidden"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
              {open ? (
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              ) : (
                <path
                  d="M1 4h14M1 11h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper/95 backdrop-blur-xl md:hidden"
        >
          <Container className="py-5">
            <nav aria-label="Main" className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'border-b border-line py-4 text-base transition-colors',
                    pathname === item.href ? 'text-ink' : 'text-slate',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href={primaryCta.href} className="mt-6 w-full">
              {primaryCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
