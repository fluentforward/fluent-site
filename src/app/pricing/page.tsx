import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for FluentForward with plans for growing legal teams.',
}

type Plan = {
  name: string
  description: string
  price: string
  period: string
  note: string
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  features: Array<{ text: string; included: boolean }>
}

const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small firms testing the waters',
    price: '£750',
    period: '/month',
    note: 'Up to 10 users',
    ctaLabel: 'Book a Demo',
    ctaHref: '/book-demo',
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
  },
  {
    name: 'Professional',
    description: 'For growing firms ready to scale',
    price: '£1,500',
    period: '/month',
    note: 'Up to 30 users',
    ctaLabel: 'Book a Demo',
    ctaHref: '/book-demo',
    featured: true,
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
  },
  {
    name: 'Enterprise',
    description: 'For large firms with complex needs',
    price: 'Custom',
    period: 'Contact us',
    note: 'Unlimited users',
    ctaLabel: 'Contact Sales',
    ctaHref: '/contact',
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
  },
]

const foundingBenefits = [
  {
    icon: '💰',
    title: '50% off for life:',
    description: 'Lock in founding rates permanently',
  },
  {
    icon: '🎯',
    title: 'Influence the roadmap:',
    description: 'Direct input on feature priorities',
  },
  {
    icon: '🤝',
    title: 'White-glove service:',
    description: 'Dedicated support & onboarding',
  },
  {
    icon: '⚡',
    title: 'Early access:',
    description: 'New features before general release',
  },
]

const roiRows = [
  ['Software licenses', '£12,000', '£18,000'],
  ['Implementation & consulting', '£35,000', '£0'],
  ['Training & change management', '£15,000', '£0'],
  ['Data team time (building dashboards)', '£25,000', '£0'],
  ['Ongoing maintenance', '£18,000', '£0'],
]

const faqs = [
  {
    question: 'What happens when I exceed user limits?',
    answer:
      "You can upgrade to the next tier or add users at £75/user/month on Starter and Professional plans. We'll notify you when you're approaching your limit so there are no surprises.",
  },
  {
    question: 'Are there setup or onboarding fees?',
    answer:
      "No. All plans include setup and onboarding at no additional cost. We'll have you live within 2 weeks with full data integration and user training.",
  },
  {
    question: "What's included in the practice management integration?",
    answer:
      'We connect to your ActionStep, Clio, or other practice management system to pull matter data, time entries, invoices, client information, and financial metrics. All data syncs automatically in real-time.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. All plans are month-to-month with no long-term contracts. Cancel with 30 days notice. Your data remains accessible for 90 days after cancellation.',
  },
  {
    question: 'Do I need Microsoft Co-Pilot licenses?',
    answer:
      "Co-Pilot integration provides the best experience, but it's not required. You'll still get full Intelligence Feed, Performance Dashboard, and Teams chat functionality. We recommend Co-Pilot for maximum value.",
  },
  {
    question: 'What about data security and compliance?',
    answer:
      'All plans include bank-level encryption (AES-256), SOC 2 Type II compliance (in progress), GDPR compliance, and role-based access controls. Enterprise plans offer additional security features and custom data residency options.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most firms are live within 2 weeks. This includes connecting your systems, configuring your Performance Dashboard, and training your team. No complex data modeling or dashboard building required.',
  },
  {
    question: 'What if I need features from a higher tier?',
    answer:
      "You can upgrade anytime, and we'll pro-rate your billing. We can also create custom plans combining features from different tiers—just ask during your demo.",
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="mt-20 bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#7c3aed] px-[5%] py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90 md:text-xl">
            Choose the plan that fits your firm. No hidden fees. No per-user
            surprise charges. Cancel anytime.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-[5%] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-xl border-2 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  plan.featured
                    ? 'border-lime-400 ring-2 ring-lime-300/40'
                    : 'border-transparent'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                    Most Popular
                  </div>
                )}

                <div className="border-b-2 border-slate-100 pb-8 text-center">
                  <h2 className="font-display text-3xl font-bold text-slate-950">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-slate-700">{plan.description}</p>
                  <div className="mt-6">
                    <div className="font-display text-5xl font-extrabold text-slate-950">
                      {plan.price}
                    </div>
                    <div className="mt-1 text-slate-700">{plan.period}</div>
                    <p className="mt-2 text-sm text-slate-600">{plan.note}</p>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 text-sm font-bold ${
                          feature.included ? 'text-lime-500' : 'text-slate-300'
                        }`}
                      >
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`mt-8 inline-flex items-center justify-center rounded-lg border-2 px-5 py-3 text-center text-base font-bold transition ${
                    plan.featured
                      ? 'border-lime-400 bg-lime-400 text-charcoal hover:-translate-y-0.5 hover:shadow-md'
                      : plan.name === 'Enterprise'
                        ? 'border-indigo-600 bg-indigo-600 text-white hover:bg-charcoal hover:border-charcoal'
                        : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime-400 px-[5%] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-charcoal md:text-5xl">
              Founding Client Program
            </h2>
            <p className="mt-4 text-lg text-slate-800">
              Join our founding client program and get exclusive benefits while
              helping shape the future of legal intelligence platforms.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-charcoal px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Learn More
            </Link>
          </div>

          <ul className="space-y-4">
            {foundingBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm"
              >
                <span className="text-3xl" aria-hidden="true">
                  {benefit.icon}
                </span>
                <p className="text-slate-700">
                  <strong className="text-charcoal">{benefit.title}</strong>{' '}
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-[5%] py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-slate-950 md:text-5xl">
            The True Cost of Business Intelligence
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-700">
            Compare Cognify&apos;s total cost of ownership against traditional BI
            implementations.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-charcoal px-4 py-4 text-sm font-bold text-white md:px-6 md:text-base">
              <div className="text-left">First Year Costs</div>
              <div className="text-center">Traditional BI</div>
              <div className="text-center">Cognify</div>
            </div>

            {roiRows.map((row, rowIndex) => (
              <div
                key={row[0]}
                className={`grid grid-cols-[2fr_1fr_1fr] px-4 py-4 text-sm md:px-6 md:text-base ${
                  rowIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                }`}
              >
                <div className="text-left font-semibold text-slate-900">
                  {row[0]}
                </div>
                <div className="text-center text-slate-700">{row[1]}</div>
                <div className="text-center text-slate-700">{row[2]}</div>
              </div>
            ))}

            <div className="grid grid-cols-[2fr_1fr_1fr] bg-indigo-600 px-4 py-4 text-sm font-bold text-white md:px-6 md:text-base">
              <div className="text-left">Total First Year Cost</div>
              <div className="text-center">£105,000</div>
              <div className="text-center text-lime-300 md:text-xl">
                £18,000
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-semibold text-slate-900">
            With Cognify, you save £87,000 in year one—and you actually get
            adoption.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-[5%] py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-4xl font-extrabold text-slate-950 md:text-5xl">
            Pricing FAQs
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl bg-white p-8 shadow-sm"
              >
                <h3 className="font-display text-2xl font-bold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#7c3aed] px-[5%] py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90 md:text-xl">
            Book a demo to see Cognify in action and find the right plan for
            your firm.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-demo"
              className="inline-flex rounded-lg bg-lime-400 px-6 py-3 text-base font-bold text-charcoal transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Book Your Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white/20"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
