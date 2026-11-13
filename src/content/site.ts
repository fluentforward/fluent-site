import { scoreCta } from '@/content/board'
import { howItWorksPath } from '@/content/routes'

export const site = {
  name: 'FluentForward',
  legalName: 'FluentForward Limited',
  url: 'https://www.fluentforward.com',
  tagline: 'AI agents for UK services firms',
  description:
    'We build, host and look after AI agents for UK services firms. Bring us a problem: we build the agent at a fixed price and keep it working under Agent Care.',
  email: 'hello@fluentforward.com',
  privacyEmail: 'privacy@fluentforward.com',
} as const

export const nav = [
  { label: 'Ways we work', href: '/ways-we-work' },
  { label: 'How it works', href: howItWorksPath },
  { label: 'Proof', href: '/#proof' },
  { label: 'Resources', href: '/#webinar' },
] as const

export const footerNav = {
  offer: {
    title: 'The offer',
    links: [
      { label: 'Profit Engine', href: '/profit-engine' },
      { label: 'Ways we work', href: '/ways-we-work' },
      { label: 'How it works', href: howItWorksPath },
      { label: 'Profit Constraint Score', href: scoreCta.href },
      { label: 'Common questions', href: '/ways-we-work#faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Webinar', href: '/webinar' },
      { label: 'Interaction insights', href: '/strategy-blueprints' },
      { label: 'Constraint review', href: '/review' },
      { label: 'Contact', href: '/contact' },
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
