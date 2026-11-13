'use client'

import { usePathname } from 'next/navigation'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

/** Pages moved to the new design. The rest keep the previous header and footer until they move. */
const NEW_DESIGN = new Set(['/', '/contact'])

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/'

  // The planner is its own app. Review routes and the internal lead list bring their own chrome.
  if (pathname === '/agent-planner' || pathname.startsWith('/mockup') || pathname.startsWith('/internal')) {
    return children
  }

  if (NEW_DESIGN.has(pathname)) {
    return (
      <div className="ffh flex min-h-full flex-1 flex-col bg-ink text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-auto">
          {children}
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-auto">{children}</main>
      <SiteFooter />
    </>
  )
}
