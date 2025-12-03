'use client'

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const navigation = [
  { name: 'Product', href: '/' },
  { name: 'Why Cognify', href: '/why-cognify' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <Link href="/" className="text-2xl font-extrabold text-slate-900">
        Cognify <span className="font-normal opacity-70">Legal</span>
      </Link>
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-slate-900 font-medium opacity-80 transition-all hover:opacity-100 hover:text-purple-600"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link
          href="/schedule"
          className="hidden sm:inline-block bg-lime-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30"
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
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-slate-900 font-medium opacity-80 transition-all hover:opacity-100 hover:text-purple-600 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/schedule"
                className="bg-lime-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all inline-block text-center w-full"
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

