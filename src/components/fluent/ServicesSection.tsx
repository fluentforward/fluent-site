import clsx from 'clsx'

import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const services = [
  {
    badge: 'Platform Development',
    title: 'AI-Native Product Development',
    tagline: '"We build products that only work because AI exists"',
    description:
      "End-to-end development of platforms where AI isn't a feature — it's the foundation. From market intelligence to production deployment, we architect systems that scale beyond human capacity. Currently building SurfaceOS: an agentic operating platform for regulated industries.",
    idealFor: 'Founders with domain expertise, no technical co-founder',
    featured: false,
  },
  {
    badge: 'Sector Transformation',
    title: 'Regulated Industry AI Transformation',
    tagline: '"Removing the execution ceiling in professional services"',
    description:
      "We've architected AI systems that let 3-person practices operate like 30-person firms. Proven efficiency gains in conveyancing and property management, with active expansion into accountancy, insurance, and recruitment. The methodology is proven. The verticals are expanding.",
    idealFor: 'Law firms, conveyancers, regulated professional services',
    featured: false,
  },
  {
    badge: 'Channel Partnership',
    title: 'Founding Partner Programme',
    tagline: '"Build a recurring revenue practice on AI infrastructure"',
    description:
      'For consultancies and professional service firms serving regulated verticals. Founding Partners access the SurfaceOS platform, a proven sales methodology, ongoing AI education, and a peer community — for less than the cost of a single coaching programme. Vertical exclusivity available for qualifying partners.',
    idealFor: 'AI automation consultancies, digital transformation practices',
    featured: false,
  },
  {
    badge: 'Fractional Engagement',
    title: 'Fractional AI & Operations Partner',
    tagline: '"Senior AI thinking without the full-time cost"',
    description:
      "A small number of businesses at a time. Strategic direction, practical implementation, honest assessment. From £1,500/month. I'm currently building an AI-native operating platform — I'm not advising on this from a distance.",
    idealFor: '20–150 person businesses in regulated or professional services',
    featured: true,
  },
]

const tiers = [
  {
    name: 'Foundation',
    price: '£1,500',
    cadence: 'per month · rolling',
    description:
      'A thinking partner for businesses in early AI exploration. Right for leadership teams that need senior perspective without hands-on involvement yet.',
    featured: false,
    features: [
      'Monthly 90-minute strategy session',
      'Async channel for AI decisions',
      'Vendor and tool evaluation input',
      'FluentForward intelligence library access',
      'Priority upgrade to Active tier',
    ],
  },
  {
    name: 'Active',
    price: '£3,000',
    cadence: 'per month · rolling',
    description:
      'Strategic direction combined with hands-on involvement. For businesses that are ready to build and need someone steering the work.',
    featured: true,
    mostCommon: true,
    features: [
      'Three working sessions per month',
      'One implementation project per quarter',
      'Process design and agent architecture',
      'Team capability building sessions',
      'Same-day async response on working days',
      'Implementation network access',
    ],
  },
  {
    name: 'Embedded',
    price: '£5,000',
    cadence: 'per month · 3-month minimum',
    description:
      'A genuine fractional engagement for businesses where the AI transformation is material and the cost of getting it wrong is high.',
    featured: false,
    features: [
      'Regular presence — weekly rhythm',
      'Attendance at leadership sessions',
      'Ownership of AI and automation workstream',
      'Stakeholder communication support',
      'Quarterly board-level summary',
      'Direct line between sessions',
    ],
  },
]

export function ServicesSection() {
  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-warm-gray">
        <SectionContainer>
          <SectionHeader
            title="How We Partner With You"
            subtitle="Three capability pillars. One philosophical foundation."
          />
          <p className="text-lg text-neutral-600 -mt-8 mb-12 max-w-xl">
            Every engagement is grounded in Execution Abundance — not as a
            framework we explain, but as a methodology we apply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={clsx(
                  'bg-white p-8 md:p-10 border border-neutral-200 transition-all duration-300 hover:border-neutral-300 relative',
                  service.featured &&
                    'border-fluent-red/30 bg-fluent-red/5'
                )}
              >
                <span className="inline-block font-display font-bold text-[10px] tracking-widest uppercase text-fluent-red border border-fluent-red/30 px-2.5 py-1 mb-5">
                  {service.badge}
                </span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl mb-2 text-charcoal">
                  {service.title}
                </h3>
                <p className="italic text-fluent-red font-semibold mb-4 text-sm">
                  {service.tagline}
                </p>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm text-neutral-500 mt-6 pt-6 border-t border-neutral-200">
                  <strong className="font-display font-bold text-[10px] tracking-wider uppercase text-neutral-400">
                    Ideal for:{' '}
                  </strong>
                  <span className="text-neutral-600">{service.idealFor}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section id="fractional" className="py-16 md:py-24 bg-white">
        <SectionContainer>
          <SectionHeader title="Fractional AI Partner — Detail" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 md:gap-16 mb-14 items-start">
            <div>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl leading-tight mb-4">
                Senior operator thinking.
                <br />
                Available part-time.
                <br />
                Without the overhead.
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                The bottleneck in your business has moved. It is no longer
                execution — you can build, automate, and deploy faster than
                ever. The constraint is now strategic judgment: knowing what to
                build, what to leave alone, and what looks like AI progress but
                is expensive distraction.
              </p>
            </div>
            <div className="border-2 border-fluent-red p-7 md:p-8 bg-fluent-red/5 relative">
              <span className="absolute -top-2.5 left-6 bg-white px-2.5 font-display font-bold text-[10px] tracking-widest uppercase text-fluent-red">
                The core argument
              </span>
              <p className="text-neutral-600 leading-relaxed mb-3">
                Most businesses don&apos;t need a full-time Head of AI. They
                need{' '}
                <strong className="text-charcoal font-normal">
                  senior operator judgment available at the right moments
                </strong>{' '}
                — and the discipline to apply it carefully.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Everything I bring is tested on real operational deployments,
                including my own.{' '}
                <strong className="text-charcoal font-normal">
                  Not advising from a distance.
                </strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={clsx(
                  'bg-warm-gray p-7 md:p-8 border border-neutral-200 relative',
                  tier.featured && 'bg-neutral-100 border-neutral-300'
                )}
              >
                {'mostCommon' in tier && tier.mostCommon && (
                  <span className="absolute top-0 right-0 bg-fluent-red text-white font-display font-bold text-[10px] tracking-wider uppercase px-2.5 py-1">
                    Most Common
                  </span>
                )}
                <p className="font-display font-extrabold text-[10px] tracking-widest uppercase text-neutral-500 mb-2">
                  {tier.name}
                </p>
                <p className="font-display font-extrabold text-4xl text-charcoal leading-none">
                  {tier.price}
                </p>
                <p className="text-xs text-neutral-500 mt-1 mb-5">
                  {tier.cadence}
                </p>
                <p className="text-sm italic text-neutral-600 border-y border-neutral-200 py-3.5 mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <ul className="list-none space-y-1.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-neutral-600 flex gap-2 leading-relaxed"
                    >
                      <span className="text-fluent-red shrink-0">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-warm-gray border border-neutral-200 p-5 flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-fluent-red shrink-0 animate-pulse" />
            <p className="font-display font-bold text-[10px] tracking-wider uppercase text-neutral-500">
              <strong className="text-charcoal">
                Maximum four engagements at any time.
              </strong>{' '}
              &nbsp;Current availability limited — conversation required before
              any commitment.
            </p>
          </div>
        </SectionContainer>
      </section>
    </>
  )
}
