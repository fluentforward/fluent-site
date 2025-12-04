import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PricingCard } from '@/components/PricingCard'
import { FoundingClientSection } from '@/components/FoundingClientSection'
import { ROIComparisonSection } from '@/components/ROIComparisonSection'
import { FAQSection } from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Cognify Legal. Choose the plan that fits your firm. No hidden fees.',
}

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small firms testing the waters',
    price: 750,
    pricePeriod: '/month',
    priceNote: 'Up to 10 users',
    features: [
      { text: 'Microsoft Teams chat interface', included: true },
      { text: 'Intelligence Feed (proactive alerts)', included: true },
      { text: 'Performance Dashboard', included: true },
      { text: '1 practice management integration', included: true },
      { text: 'Co-Pilot integration (Word, Excel, PowerPoint)', included: true },
      { text: 'Email support (24hr response)', included: true },
      { text: 'Core KPIs & metrics', included: true },
      { text: 'Custom KPI configuration', included: false },
      { text: 'API access', included: false },
      { text: 'Priority support', included: false },
    ],
    ctaText: 'Book a Demo',
    ctaHref: '/book-demo',
    ctaVariant: 'secondary' as const,
  },
  {
    name: 'Professional',
    description: 'For growing firms ready to scale',
    price: 1500,
    pricePeriod: '/month',
    priceNote: 'Up to 30 users',
    features: [
      { text: 'Everything in Starter, plus:', included: true },
      { text: 'Outlook contextual intelligence', included: true },
      { text: 'Custom KPI configuration', included: true },
      { text: 'Multiple system integrations', included: true },
      { text: 'Advanced Intelligence Feed rules', included: true },
      { text: 'Role-based dashboard views', included: true },
      { text: 'Priority email support (4hr response)', included: true },
      { text: 'Quarterly business reviews', included: true },
      { text: 'Dedicated onboarding', included: true },
      { text: 'API access', included: false },
    ],
    ctaText: 'Book a Demo',
    ctaHref: '/book-demo',
    ctaVariant: 'featured' as const,
    featured: true,
    featuredBadge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'For large firms with complex needs',
    price: 'Custom',
    pricePeriod: 'Contact us',
    priceNote: 'Unlimited users',
    features: [
      { text: 'Everything in Professional, plus:', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'API access for custom integrations', included: true },
      { text: 'Custom feature development', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: '99.9% SLA guarantee', included: true },
      { text: 'Phone & chat support (1hr response)', included: true },
      { text: 'Advanced security & compliance', included: true },
      { text: 'Data residency options', included: true },
      { text: 'Custom training & workshops', included: true },
    ],
    ctaText: 'Contact Sales',
    ctaHref: '/book-demo',
    ctaVariant: 'primary' as const,
  },
]

const faqItems = [
  {
    question: 'What happens when I exceed user limits?',
    answer:
      'You can upgrade to the next tier or add users at <strong>£75/user/month</strong> on Starter and Professional plans. We\'ll notify you when you\'re approaching your limit so there are no surprises.',
  },
  {
    question: 'Are there setup or onboarding fees?',
    answer:
      '<strong>No.</strong> All plans include setup and onboarding at no additional cost. We\'ll have you live within 2 weeks with full data integration and user training.',
  },
  {
    question: "What's included in the practice management integration?",
    answer:
      'We connect to your ActionStep, Clio, or other practice management system to pull matter data, time entries, invoices, client information, and financial metrics. All data syncs automatically in real-time.',
  },
  {
    question: 'Do I need Microsoft Co-Pilot licenses?',
    answer:
      'Co-Pilot integration provides the best experience, but it\'s not required. You\'ll still get full Intelligence Feed, Performance Dashboard, and Teams chat functionality. We recommend Co-Pilot for maximum value.',
  },
  {
    question: 'What about data security and compliance?',
    answer:
      'All plans include bank-level encryption (AES-256), SOC 2 Type II compliance (in progress), GDPR compliance, and role-based access controls. Enterprise plans offer additional security features and custom data residency options.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most firms are live within <strong>2 weeks</strong>. This includes connecting your systems, configuring your Performance Dashboard, and training your team. No complex data modeling or dashboard building required.',
  },
  {
    question: 'What if I need features from a higher tier?',
    answer:
      'You can upgrade anytime, and we\'ll pro-rate your billing. We can also create custom plans combining features from different tiers—just ask during your demo.',
  },
]

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 overflow-hidden text-center">
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`,
            animation: 'float 20s linear infinite',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Choose the plan that fits your firm. No hidden fees. No per-user surprise charges. Cancel anytime.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.1}>
                <PricingCard {...plan} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Founding Client Section */}
      <FoundingClientSection />

      {/* ROI Comparison Section */}
      <ROIComparisonSection />

      {/* FAQ Section */}
      <FAQSection items={faqItems} />

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 text-center text-white">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a demo to see Cognify in action and find the right plan for your firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/book-demo"
                className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-lime-500/40 hover:shadow-2xl hover:shadow-lime-500/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book Your Demo
              </Link>
              <Link
                href="/contact"
                className="bg-white/15 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 backdrop-blur-md hover:bg-white/25 hover:border-white/50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Talk to Sales
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}

