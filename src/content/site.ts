export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline:
    'Senior-led delivery for established businesses. Install an Interaction Engine you own, then grow it with Strategy and Build.',
  description:
    'Senior-led delivery for established businesses. One-Month Interaction Engine Design Sprint, Impact Build, and Strategy and Build on the platform you own. Fixed fee where it matters. No hourly billing.',
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Interaction insights', href: '/strategy-blueprints' },
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
      { label: 'Worth a conversation?', href: '/contact' },
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
  label: 'Worth a conversation?',
  href: '/contact',
} as const
