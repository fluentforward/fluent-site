'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12 bg-white/95 backdrop-blur-xl border-b border-slate-200">
      <Link href="/" className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <span className="text-indigo-600">Cognify</span> Legal
      </Link>
      <ul className="hidden md:flex items-center gap-10 list-none">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-slate-700 font-medium transition-colors hover:text-indigo-600"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link
          href="/book-demo"
          className="hidden sm:inline-block bg-lime-500 text-slate-900 px-7 py-3 rounded-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-lime-500/25 hover:shadow-xl hover:shadow-lime-500/35"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Book a Demo
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-900"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 md:hidden shadow-lg">
          <ul className="flex flex-col p-6 gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-slate-700 font-medium transition-colors hover:text-indigo-600 block"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book-demo"
                className="bg-lime-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all inline-block text-center w-full"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
