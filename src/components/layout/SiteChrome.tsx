'use client'

import { usePathname } from 'next/navigation'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

/** The home page and review routes bring their own header and footer. Other pages use the site chrome. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/'
  const ownChrome =
    pathname === '/' || pathname.startsWith('/mockup') || pathname.startsWith('/agent-planner')

  if (ownChrome) return children

  return (
    <>
      <SiteHeader />
      <main className="flex-auto">{children}</main>
      <SiteFooter />
    </>
  )
}
