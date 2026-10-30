import { auditCta } from '@/content/board'

export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://www.fluentforward.com',
  tagline: 'Win more client work without hiring more people.',
  description:
    "For agencies, consultancies and professional services firms of 20 to 200 people. We find the work that eats your team's time, get AI doing it safely, and your firm owns the result.",
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'Client Capacity', href: '/client-capacity' },
  { label: 'Ways we work', href: '/ways-we-work' },
] as const

export const footerNav = {
  offer: {
    title: 'The offer',
    links: [
      { label: 'Client Capacity', href: '/client-capacity' },
      { label: 'Ways we work', href: '/ways-we-work' },
      { label: 'First AI Move', href: auditCta.href },
      { label: 'Common questions', href: '/ways-we-work#faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
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
