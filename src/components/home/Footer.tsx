import Link from 'next/link'

import { CookieSettingsButton } from '@/components/consent/CookieConsentProvider'
import { Container } from '@/components/ui/Container'
import { site } from '@/content/site'

/* Section links point at this page while the new inner pages are being built. */
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

export function HomeFooter() {
  return (
    <footer className="border-t border-line-dark bg-ink text-mist">
      <Container className="py-16 md:py-24">
        <a
          href={`mailto:${site.email}`}
          className="text-2xl font-semibold tracking-[-0.025em] text-paper underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white md:text-3xl"
        >
          {site.email}
        </a>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} prefetch={false} className="text-[15px] text-[#cfcfd3] transition-colors hover:text-paper">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p aria-hidden="true" className="footer-wordmark mt-16 overflow-hidden whitespace-nowrap md:mt-24">
          {site.name}
        </p>
        <div className="mt-8 flex flex-col gap-3 border-t border-line-dark pt-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`}</p>
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
