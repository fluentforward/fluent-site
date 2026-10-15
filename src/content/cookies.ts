import { COOKIE_CONSENT_STORAGE_KEY, COOKIE_POLICY_VERSION } from '@/lib/cookie-consent/constants'
import { MARKETING_ATTRIBUTION_STORAGE_KEY } from '@/lib/marketing-attribution'

export type CookieInventoryRow = {
  name: string
  type: 'Cookie' | 'localStorage' | 'Third-party script'
  category: 'Necessary' | 'Analytics' | 'Marketing'
  purpose: string
  retention: string
}

export const cookiePolicyVersion = COOKIE_POLICY_VERSION

export const cookieInventory: CookieInventoryRow[] = [
  {
    name: COOKIE_CONSENT_STORAGE_KEY,
    type: 'localStorage',
    category: 'Necessary',
    purpose: 'Remembers your cookie choices on this device.',
    retention: '12 months, or until you clear site data',
  },
  {
    name: 'Google Analytics 4 (gtag.js)',
    type: 'Third-party script',
    category: 'Analytics',
    purpose:
      'Measures page views and how visitors move through the site when analytics is enabled.',
    retention: 'See Google’s analytics documentation',
  },
  {
    name: '_ga, _ga_* (Google)',
    type: 'Cookie',
    category: 'Analytics',
    purpose: 'Distinguishes users for Google Analytics 4.',
    retention: 'Up to 2 years (Google default)',
  },
  {
    name: 'Meta Pixel (fbevents.js)',
    type: 'Third-party script',
    category: 'Marketing',
    purpose:
      'Measures ad performance and supports retargeting when marketing is enabled.',
    retention: 'See Meta’s documentation',
  },
  {
    name: '_fbp (Meta)',
    type: 'Cookie',
    category: 'Marketing',
    purpose: 'Identifies browsers for Meta advertising measurement.',
    retention: 'Up to 90 days (Meta default)',
  },
  {
    name: 'LinkedIn Insight Tag (insight.min.js)',
    type: 'Third-party script',
    category: 'Marketing',
    purpose:
      'Measures campaign performance on LinkedIn when marketing is enabled.',
    retention: 'See LinkedIn’s documentation',
  },
  {
    name: 'bcookie, li_sugr, UserMatchHistory (LinkedIn)',
    type: 'Cookie',
    category: 'Marketing',
    purpose: 'LinkedIn advertising and conversion measurement.',
    retention: 'See LinkedIn’s documentation',
  },
  {
    name: MARKETING_ATTRIBUTION_STORAGE_KEY,
    type: 'localStorage',
    category: 'Marketing',
    purpose:
      'Stores UTM campaign parameters from the landing URL when marketing is enabled.',
    retention: 'Until marketing consent is withdrawn or site data is cleared',
  },
  {
    name: 'Cal.com embed (embed.js)',
    type: 'Third-party script',
    category: 'Necessary',
    purpose:
      'Runs the booking calendar when you open it to schedule a call.',
    retention: 'Session and booking cookies per Cal.com',
  },
]

export const cookiesPage = {
  title: 'Cookie notice',
  lastUpdated: 'October 2026',
  intro:
    'This notice lists the cookies, browser storage and third-party scripts used on fluentforward.com, and how you can control optional ones.',
  policyVersionLabel: `Policy version ${COOKIE_POLICY_VERSION}`,
}
