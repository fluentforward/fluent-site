'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { Header, Footer } from '@/components/fluent'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPricingPage = pathname === '/pricing' || pathname.startsWith('/pricing/')

  useEffect(() => {
    if (isPricingPage) {
      document.documentElement.classList.add('pricing-page')
      document.body.classList.add('pricing-page')
      return () => {
        document.documentElement.classList.remove('pricing-page')
        document.body.classList.remove('pricing-page')
      }
    }

    document.documentElement.classList.remove('pricing-page')
    document.body.classList.remove('pricing-page')
  }, [isPricingPage])

  if (isPricingPage) {
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
