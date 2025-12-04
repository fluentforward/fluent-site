'use client'

import { Header } from './Header'
import { Footer } from './Footer'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex-auto bg-white">{children}</main>
      <Footer />
    </>
  )
}
