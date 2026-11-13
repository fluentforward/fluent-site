'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { CookieSettingsButton } from '@/components/consent/CookieConsentProvider'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#agents', label: 'Agents' },
  { href: '#care', label: 'Agent Care' },
  { href: '#security', label: 'Security' },
  { href: '#proof', label: 'Proof' },
  { href: '#resources', label: 'Resources' },
] as const

function Mark({ href }: { href: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5" aria-label="FluentForward mockup">
      <span
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 bg-accent"
        style={{ clipPath: 'polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%)' }}
      />
      <span className="font-display text-[1.0625rem] font-bold tracking-[-0.03em] text-paper">
        FluentForward
      </span>
    </Link>
  )
}

export function MockupHeader({ home }: { home: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink/80 text-paper backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-3">
          <Mark href={home} />
          <nav aria-label="Mockup" className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-[0.9375rem] text-[#cfcfd3] hover:text-paper">
                {link.label}
              </Link>
            ))}
            <Link href="/agent-planner" className="text-[0.9375rem] text-[#cfcfd3] hover:text-paper">
              Agent Planner
            </Link>
          </nav>
          <div className="hidden lg:block">
            <Button href="/contact" prefetch={false} className="px-4 py-2.5 text-sm">
              Scope your agent
            </Button>
          </div>
          <button
            type="button"
            className="relative h-11 w-11 lg:hidden"
            aria-expanded={open}
            aria-controls="mockup-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="absolute left-2.5 right-2.5 top-[16px] h-0.5 bg-paper" />
            <span aria-hidden="true" className="absolute left-2.5 right-2.5 top-[24px] h-0.5 bg-paper" />
          </button>
        </div>
      </Container>
      {open ? (
        <nav id="mockup-menu" aria-label="Mockup" className="border-t border-line-dark bg-ink lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-1 py-3 text-base text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/agent-planner" className="rounded-md px-1 py-3 text-base text-paper" onClick={() => setOpen(false)}>
              Agent Planner
            </Link>
            <Button href="/contact" prefetch={false} className="mt-2">
              Scope your agent
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}

export function MockupFooter() {
  const columns = [
    {
      title: 'What we do',
      links: [
        ['How it works', '#how'],
        ['Agents', '#agents'],
        ['Agent Care', '#care'],
        ['Agent Planner', '/agent-planner'],
        ['Security', '#security'],
      ],
    },
    {
      title: 'Company',
      links: [
        ['Proof', '#proof'],
        ['Resources', '/strategy-blueprints'],
        ['Scope your agent', '/contact'],
      ],
    },
    {
      title: 'Legal',
      links: [
        ['Privacy', '/privacy'],
        ['Terms', '/terms'],
        ['Cookies', '/cookies'],
      ],
    },
  ] as const

  return (
    <footer className="border-t border-line-dark bg-ink text-mist">
      <Container className="py-16 md:py-24">
        <a
          href="mailto:hello@fluentforward.com"
          className="text-2xl font-semibold tracking-[-0.025em] text-paper underline decoration-white/30 underline-offset-[6px] md:text-3xl"
        >
          hello@fluentforward.com
        </a>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[15px] text-[#cfcfd3] hover:text-paper">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer-wordmark mt-16 md:mt-24">FluentForward</p>
        <div className="mt-8 flex flex-col gap-3 border-t border-line-dark pt-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FluentForward Limited. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <CookieSettingsButton className="text-left text-[11px] text-[#cfcfd3] underline underline-offset-4 sm:text-right">
              Cookie settings
            </CookieSettingsButton>
            <p>Registered in England and Wales.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
