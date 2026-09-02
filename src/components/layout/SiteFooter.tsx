import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { footerNav, primaryCta, site } from '@/content/site'

import { Wordmark } from './Wordmark'

const columns = [footerNav.offer, footerNav.company, footerNav.legal]

export function SiteFooter() {
  return (
    <footer className="border-t border-line-dark bg-ink text-mist">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <div className="max-w-md">
            <Wordmark tone="dark" />
            <p className="mt-6 text-[1.0625rem] leading-[1.72] text-paper/75">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={primaryCta.href} variant="onDark" className="px-6 py-2.5 text-sm">
                {primaryCta.label}
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-paper/60 underline underline-offset-4 transition-colors duration-300 hover:text-paper"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 sm:gap-10">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-mono text-label uppercase text-mist/80">
                  {column.title}
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line-dark pt-10 text-xs text-mist/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`}</p>
          <p>Registered in England and Wales.</p>
        </div>
      </Container>
    </footer>
  )
}
