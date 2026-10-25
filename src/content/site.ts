import { auditCta } from '@/content/board'

export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline: 'Win more client work without hiring more people.',
  description:
    "For agencies, consultancies and professional services firms of 20 to 200 people. We find the work that eats your team's time, get AI doing it safely, and your firm owns the result.",
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'Leverage Board', href: '/leverage-board' },
  { label: 'Ways we work', href: '/ways-we-work' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Practice', href: '/about' },
] as const

export const footerNav = {
  offer: {
    title: 'The offer',
    links: [
      { label: 'Leverage Board', href: '/leverage-board' },
      { label: 'Ways we work', href: '/ways-we-work' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'First AI Move', href: auditCta.href },
      { label: 'Common questions', href: '/how-it-works#faq' },
    ],
  },
  company: {
    title: 'Practice',
    links: [
      { label: 'About the practice', href: '/about' },
      { label: 'Track record', href: '/about#background' },
      { label: 'Interaction insights', href: '/strategy-blueprints' },
      { label: 'Book a call', href: '/contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
} as const

export const primaryCta = {
  label: auditCta.label,
  href: auditCta.href,
} as const
