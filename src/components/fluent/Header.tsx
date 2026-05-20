'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Philosophy', href: '/#philosophy' },
  { name: 'Services', href: '/#services' },
  { name: 'Fractional', href: '/#fractional' },
  { name: 'Case Study', href: '/#casestudy' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-charcoal px-[5%] py-6">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-display font-extrabold text-2xl text-white tracking-wide"
        >
          FLUENT<span className="text-fluent-red">FORWARD</span>
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white font-semibold no-underline transition-colors duration-300 hover:text-fluent-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal border-t border-white/20">
          <ul className="flex flex-col p-6 gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white font-semibold block py-2 hover:text-fluent-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
