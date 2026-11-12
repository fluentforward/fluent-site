'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Chevron } from '@/components/home/Mark'

/* Sections of the home page until the new inner pages exist. Absolute, so they work from any page. */
const links = [
  { href: '/#how', label: 'How it works' },
  { href: '/#agents', label: 'Agents' },
  { href: '/#care', label: 'Agent Care' },
  { href: '/#security', label: 'Security' },
  { href: '/#proof', label: 'Proof' },
  { href: '/strategy-blueprints', label: 'Resources' },
] as const

function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-85"
      aria-label="FluentForward home"
    >
      <Chevron className="h-[18px] w-[18px]" />
      <span className="font-display text-[1.0625rem] font-bold tracking-[-0.03em] text-paper">
        FluentForward
      </span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const onContact = pathname === '/contact'

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="ffh-header sticky top-0 z-50 text-paper">
      <div className="mx-auto max-w-page px-6 sm:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} prefetch={false} className="ffh-navlink">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <Link href="/agent-planner" prefetch={false} className="ffh-planner-chip hidden sm:inline-flex">
              <span aria-hidden="true" className="eyebrow-dot !h-1.5 !w-1.5" />
              Agent Planner
            </Link>
            <Link
              href="/contact"
              prefetch={false}
              aria-current={onContact ? 'page' : undefined}
              className="ffh-btn ffh-btn-primary hidden !min-h-0 !px-5 !py-2.5 !text-sm lg:inline-flex"
            >
              Scope your agent
            </Link>
            <button
              type="button"
              className="relative h-11 w-11 xl:hidden"
              aria-expanded={open}
              aria-controls="ffh-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <span
                aria-hidden="true"
                className={clsx(
                  'absolute left-2.5 right-2.5 h-0.5 bg-paper transition-transform duration-300',
                  open ? 'top-[21px] rotate-45' : 'top-[16px]',
                )}
              />
              <span
                aria-hidden="true"
                className={clsx(
                  'absolute left-2.5 right-2.5 h-0.5 bg-paper transition-transform duration-300',
                  open ? 'top-[21px] -rotate-45' : 'top-[25px]',
                )}
              />
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav id="ffh-menu" aria-label="Main" className="border-t border-line-dark bg-ink xl:hidden">
          <div className="mx-auto flex max-w-page flex-col px-6 py-4 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="border-b border-line-dark py-3.5 text-lg tracking-[-0.01em] text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agent-planner"
              prefetch={false}
              className="border-b border-line-dark py-3.5 text-lg tracking-[-0.01em] text-paper"
              onClick={() => setOpen(false)}
            >
              Agent Planner
            </Link>
            <Link href="/contact" prefetch={false} className="ffh-btn ffh-btn-primary mt-5">
              Scope your agent
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

/** Mobile only: a slim "Scope your agent" bar after the hero CTAs scroll away. */
export function MobileCta() {
  const [show, setShow] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = document.getElementById('hero-ctas')
    const close = document.getElementById('close')
    if (!hero) return
    let heroGone = false
    let closeIn = false
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0
        if (entry.target === close) closeIn = entry.isIntersecting
      }
      setShow(heroGone && !closeIn)
    })
    observer.observe(hero)
    if (close) observer.observe(close)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const bar = barRef.current as (HTMLDivElement & { inert?: boolean }) | null
    if (bar) bar.inert = !show
  }, [show])

  return (
    <div ref={barRef} className={clsx('ffh-mcta lg:hidden', show && 'is-shown')}>
      <Link href="/contact" prefetch={false} className="ffh-btn ffh-btn-primary flex-1">
        Scope your agent
      </Link>
      <Link href="/agent-planner" prefetch={false} className="ffh-btn ffh-btn-ghost">
        Planner
      </Link>
    </div>
  )
}
