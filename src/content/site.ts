import { auditCta } from '@/content/board'

export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline:
    'Senior AI judgement for services firms that want to grow without adding headcount.',
  description:
    'For owner-led agencies, consultancies and professional services firms of 20 to 200 people. We help you decide what to fix, what to build and who should build it, before you spend a penny on build.',
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'Leverage Board', href: '/leverage-board' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Interaction insights', href: '/strategy-blueprints' },
  { label: 'Practice', href: '/about' },
] as const

export const footerNav = {
  offer: {
    title: 'The offer',
    links: [
      { label: 'Leverage Board', href: '/leverage-board' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'AI Readiness and Governance Audit', href: auditCta.href },
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
  label: auditCta.label,
  href: auditCta.href,
} as const
