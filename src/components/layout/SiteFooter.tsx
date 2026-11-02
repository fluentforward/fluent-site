import Link from 'next/link'

import { CookieSettingsButton } from '@/components/consent/CookieConsentProvider'
import { MarketingAttributedAnchor } from '@/components/ui/attributed-href'
import { isCapacityScalingRoadmapMagnetUrl } from '@/content/board'
import { Container } from '@/components/ui/Container'
import { footerNav, primaryCta, site } from '@/content/site'

const columns = [footerNav.offer, footerNav.company, footerNav.legal]

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = /^https?:/.test(href)
  const className =
    'text-[15px] text-[#cfcfd3] transition-colors duration-300 hover:text-accent'
  if (external) {
    if (isCapacityScalingRoadmapMagnetUrl(href)) {
      return (
        <MarketingAttributedAnchor href={href} className={className}>
          {label}
        </MarketingAttributedAnchor>
      )
    }
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
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="text-2xl font-semibold tracking-[-0.025em] text-paper underline decoration-white/30 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent md:text-3xl"
            >
              {site.email}
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="footer-wordmark mt-16 overflow-hidden whitespace-nowrap md:mt-24">
          {site.name}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-line-dark pt-6 text-[11px] text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`}</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <CookieSettingsButton className="text-left text-[11px] text-[#cfcfd3] underline underline-offset-4 transition-colors hover:text-accent sm:text-right">
              Cookie settings
            </CookieSettingsButton>
            <p>Registered in England and Wales.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
