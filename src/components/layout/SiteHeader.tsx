'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { CookieSettingsButton } from '@/components/consent/CookieConsentProvider'
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
        'sticky top-0 z-50 border-b border-transparent bg-ink/72 text-paper backdrop-blur-xl transition-[background-color,backdrop-filter,border-color] duration-300',
        scrolled && 'header-scrolled',
      )}
    >
      <Container>
        <div className="flex h-[4.5rem] min-w-0 items-center justify-between gap-3 lg:gap-4">
          <Wordmark tone="dark" />

          <nav
            aria-label="Main"
            className="hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-5 lg:flex xl:gap-7"
          >
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              const isResources = item.href === '/#webinar'
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    'inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[0.9375rem] transition-colors duration-200',
                    active ? 'text-paper' : 'text-[#cfcfd3] hover:text-paper',
                  )}
                >
                  {item.label}
                  {isResources ? (
                    <span className="rounded-full border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-accent">
                      Webinar
                    </span>
                  ) : null}
                </Link>
              )
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button
              href={primaryCta.href}
              className="whitespace-nowrap px-4 py-2.5 text-sm xl:px-5 xl:text-[0.9375rem]"
            >
              {primaryCta.label}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative ml-auto flex h-10 w-10 shrink-0 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span
              aria-hidden="true"
              className={clsx(
                'absolute left-2.5 right-2.5 h-0.5 bg-paper transition-transform duration-300',
                open ? 'top-[19px] rotate-45' : 'top-[15px]',
              )}
            />
            <span
              aria-hidden="true"
              className={clsx(
                'absolute left-2.5 right-2.5 h-0.5 bg-paper transition-transform duration-300',
                open ? 'top-[19px] -rotate-45' : 'top-[23px]',
              )}
            />
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line-dark bg-ink lg:hidden"
        >
          <Container className="py-5">
            <nav aria-label="Main" className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'border-b border-line-dark py-4 text-xl font-semibold tracking-[-0.02em] transition-colors',
                    pathname === item.href ? 'text-paper' : 'text-[#cfcfd3]',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href={primaryCta.href} className="mt-6 w-full justify-center">
              {primaryCta.label}
            </Button>
            <CookieSettingsButton className="mt-4 w-full py-3 text-center text-sm text-mist transition-colors hover:text-paper">
              Cookie settings
            </CookieSettingsButton>
          </Container>
        </div>
      )}
    </header>
  )
}
