import { scoreCta } from '@/content/board'

export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://www.fluentforward.com',
  tagline: 'Install a Profit Engine. Busy is not profitable.',
  description:
    'FluentForward installs Profit Engines in agencies, consultancies and professional and managed services firms: the right clients, stronger margins, without linear headcount.',
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'Ways we work', href: '/ways-we-work' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Proof', href: '/#proof' },
  { label: 'Resources', href: '/#webinar' },
] as const

export const footerNav = {
  offer: {
    title: 'The offer',
    links: [
      { label: 'Profit Engine', href: '/profit-engine' },
      { label: 'Ways we work', href: '/ways-we-work' },
      { label: 'Profit Constraint Score', href: scoreCta.href },
      { label: 'Common questions', href: '/ways-we-work#faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Webinar', href: '/#webinar' },
      { label: 'Interaction insights', href: '/strategy-blueprints' },
      { label: 'Constraint review call', href: '/contact' },
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
  label: scoreCta.label,
  href: scoreCta.href,
} as const
