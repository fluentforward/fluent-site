'use client'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return <main className="w-full flex-auto bg-white">{children}</main>
}
