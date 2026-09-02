import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { footerNav, primaryCta, site } from '@/content/site'

import { Wordmark } from './Wordmark'

const columns = [footerNav.offer, footerNav.company, footerNav.legal]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-mist">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="max-w-md">
            <Wordmark tone="dark" />
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-paper/80">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={primaryCta.href} variant="onDark" className="px-5 py-2.5 text-sm">
                {primaryCta.label}
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-paper/70 underline underline-offset-4 transition-colors hover:text-paper"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-mono text-label uppercase text-mist">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-paper/70 transition-colors hover:text-paper"
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

        <div className="mt-14 flex flex-col gap-2 border-t border-line-dark pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`}</p>
          <p>Registered in England and Wales.</p>
        </div>
      </Container>
    </footer>
  )
}
