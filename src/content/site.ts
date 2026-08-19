export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline: 'AI implementation for established businesses',
  description:
    'FluentForward finds the one AI change worth making in your business, builds it, and keeps shipping. Fixed-fee audit and pilot, then an implementation queue with a turnaround guarantee. No hourly billing.',
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'About', href: '/about' },
] as const

export const footerNav = {
  offer: {
    title: 'The offer',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'The Implementation Queue', href: '/how-it-works#queue' },
      { label: 'Common questions', href: '/how-it-works#faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Results', href: '/results' },
      { label: 'Book a call', href: '/contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
} as const

export const primaryCta = {
  label: 'Book a call',
  href: '/contact',
} as const
