export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline:
    'Senior-led AI implementation for established businesses. We find the one internal app worth building, ship it, and keep growing the platform.',
  description:
    'FluentForward finds the one AI change worth making in your business, builds it, and keeps shipping. A fixed-fee audit and pilot, then ongoing AI strategy and unlimited development requests for a flat monthly fee. No hourly billing.',
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Practice', href: '/about' },
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
    title: 'Practice',
    links: [
      { label: 'About the practice', href: '/about' },
      { label: 'Track record', href: '/about#background' },
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
