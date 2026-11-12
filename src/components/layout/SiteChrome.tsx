'use client'

import { usePathname } from 'next/navigation'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

/** Hides the live header and footer on review routes only. Live pages are unchanged. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/'
  const preview = pathname.startsWith('/mockup') || pathname.startsWith('/agent-planner')

  if (preview) return children

  return (
    <>
      <SiteHeader />
      <main className="flex-auto">{children}</main>
      <SiteFooter />
    </>
  )
}
