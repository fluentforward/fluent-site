export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline: 'AI implementation for established businesses',
  description:
    'FluentForward finds the one AI change worth making in your business, builds it, and keeps shipping. A fixed-fee audit and pilot, then ongoing AI strategy and unlimited development requests for a flat monthly fee. No hourly billing.',
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
      { label: 'Strategy and Build', href: '/how-it-works#strategy-and-build' },
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
