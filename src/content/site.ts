export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline:
    'Senior-led delivery for established businesses. We build the internal systems your team runs on, you own them, and we keep growing the platform.',
  description:
    'Senior-led delivery for established businesses. A fixed-fee Audit and Impact Build, then ongoing strategy and unlimited development on the platform you own, for a flat monthly fee. No hourly billing.',
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
