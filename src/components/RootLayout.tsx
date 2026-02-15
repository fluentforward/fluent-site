'use client'

import { Header, Footer } from '@/components/fluent'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex-auto bg-white">{children}</main>
      <Footer />
    </>
  )
}
