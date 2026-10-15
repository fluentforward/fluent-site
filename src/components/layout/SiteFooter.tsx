import Link from 'next/link'

import { CookieSettingsButton } from '@/components/consent/CookieConsentProvider'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { footerNav, primaryCta, site } from '@/content/site'

import { Wordmark } from './Wordmark'

const columns = [footerNav.offer, footerNav.company, footerNav.legal]

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = /^https?:/.test(href)
  const className =
    'text-sm text-paper/60 transition-colors duration-300 hover:text-paper'
  if (external) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

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
                      <FooterLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line-dark pt-10 text-xs text-mist/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`}</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <CookieSettingsButton
              className="text-left text-xs text-paper/60 underline underline-offset-4 transition-colors duration-300 hover:text-paper sm:text-right"
            >
              Cookie settings
            </CookieSettingsButton>
            <p>Registered in England and Wales.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
