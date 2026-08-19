import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import { footerNav, site } from '@/content/site'

import { Wordmark } from './Wordmark'

const columns = [footerNav.offer, footerNav.company, footerNav.legal]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Senior-led AI implementation for established businesses. We find
              the one change worth making, build it, and keep shipping.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-steel"
            >
              {site.email}
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-label text-mist uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`}</p>
          <p>Registered in England and Wales.</p>
        </div>
      </Container>
    </footer>
  )
}
