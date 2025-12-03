'use client'

import { Header } from './Header'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex-auto bg-white">{children}</main>
    </>
  )
}
