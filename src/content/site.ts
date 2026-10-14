import { auditCta } from '@/content/board'

export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://fluentforward.com',
  tagline:
    'The Leverage Board: senior AI and operations judgement every quarter for services firms that want growth without adding headcount.',
  description:
    'The Leverage Board gives services firms senior judgement on what to fix, what to build and who should build it. Start with the AI Readiness and Governance Audit, then membership with strategy sessions, office hours, and an owned roadmap.',
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
