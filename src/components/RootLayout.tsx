'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { Header, Footer } from '@/components/fluent'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const immersiveRouteClass =
    pathname === '/pricing' || pathname.startsWith('/pricing/')
      ? 'pricing-page'
      : pathname === '/surfaceos' || pathname.startsWith('/surfaceos/')
        ? 'surfaceos-page'
        : null

  useEffect(() => {
    const routeClasses = ['pricing-page', 'surfaceos-page']
    document.documentElement.classList.remove(...routeClasses)
    document.body.classList.remove(...routeClasses)

    if (immersiveRouteClass) {
      document.documentElement.classList.add(immersiveRouteClass)
      document.body.classList.add(immersiveRouteClass)
    }

    return () => {
      document.documentElement.classList.remove(...routeClasses)
      document.body.classList.remove(...routeClasses)
    }
  }, [immersiveRouteClass])

  if (immersiveRouteClass) {
    return <main className="w-full flex-auto">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="w-full flex-auto bg-white">{children}</main>
      <Footer />
    </>
  )
}
