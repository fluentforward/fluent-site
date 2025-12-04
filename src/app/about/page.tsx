import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MissionPillar } from '@/components/MissionPillar'
import { StoryInsightItem } from '@/components/StoryInsightItem'
import { ValueCard } from '@/components/ValueCard'
import { FoundingBenefit } from '@/components/FoundingBenefit'

export const metadata: Metadata = {
  title: 'About',
  description: 'Building the future of legal intelligence. We\'re on a mission to solve the widespread failure of traditional BI in law firms.',
}

const missionPillars = [
  {
    icon: '✨',
    title: 'Zero Friction',
    description: 'Intelligence appears in the tools lawyers use daily. No new apps, no training, no dashboards to remember.',
  },
  {
    icon: '🎯',
    title: 'Proactive, Not Reactive',
    description: 'Critical insights surface automatically before issues become crises. Stop asking what to look for.',
  },
  {
    icon: '🚀',
    title: 'Built for Law Firms',
    description: 'Purpose-designed for mid-market UK law firms, not adapted from generic enterprise BI.',
  },
]

const storyInsights = [
  '<strong>People don\'t go look:</strong> No matter how good your dashboards are, users won\'t open them regularly. They need intelligence in their workflow.',
  '<strong>People don\'t know what to ask:</strong> Even when they check dashboards, users don\'t know which metrics matter. Critical issues go unnoticed.',
  '<strong>Context matters:</strong> Generic BI tools don\'t understand law firm workflows, KPIs, or practice management systems.',
  '<strong>Adoption is everything:</strong> The best insights are worthless if nobody sees them. Technology must adapt to users, not vice versa.',
]

const founderData = {
  name: 'Matt',
  title: 'Founder & CEO',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Email', href: 'mailto:matt@cognifylegal.com' },
  ],
  bioTitle: 'Founder-Market Fit',
  bioParagraphs: [
    'I spent over a decade as an enterprise consultant working with organizations across multiple sectors. My specialty? Implementing business intelligence systems and digital transformation initiatives. I was the person firms hired to "finally get their data working for them."',
    'The uncomfortable truth I discovered: the vast majority of these implementations failed to deliver value. Not because of technical issues, but because of human behavior. Partners wouldn\'t open dashboards. Fee earners wouldn\'t check reports. Critical insights sat unused while firms continued operating on gut feel.',
    'I saw this pattern most acutely in law firms. Despite investing enormous sums in BI platforms, adoption remained abysmal. Meanwhile, partners were making decisions worth millions based on incomplete information. Revenue leaked. Risks went unnoticed. Opportunities were missed.',
    'Cognify exists to solve this problem at its root. Not by building better dashboards, but by eliminating the need for dashboards entirely. By embedding intelligence into the Microsoft 365 tools lawyers already use and proactively surfacing what matters before they need to ask.',
  ],
  experience: [
    {
      title: 'Enterprise Consulting',
      description: '10+ years implementing BI systems across industries',
    },
    {
      title: 'Legal Tech Expertise',
      description: 'Deep experience with practice management systems and law firm operations',
    },
    {
      title: 'Product Development',
      description: 'Building solutions that actually get adopted, not just deployed',
    },
  ],
}

const values = [
  {
    icon: '🎯',
    title: 'Adoption Over Features',
    description:
      'The best feature is worthless if nobody uses it. We prioritize making Cognify effortless to adopt over adding complexity. Zero training, zero friction, zero excuses.',
  },
  {
    icon: '🤝',
    title: 'Partner Success',
    description:
      'Our founding clients aren\'t just customers—they\'re partners shaping the future of legal intelligence. Their feedback directly influences our roadmap.',
  },
  {
    icon: '⚡',
    title: 'Speed to Value',
    description:
      'Traditional BI takes 6-12 months to deploy. We get firms live in 2 weeks. Fast implementation, immediate results, measurable outcomes.',
  },
  {
    icon: '🔍',
    title: 'Transparency',
    description:
      'We\'re honest about what we can and can\'t do. Clear pricing, realistic timelines, transparent security practices. No overpromising.',
  },
  {
    icon: '🏗️',
    title: 'Built for Purpose',
    description:
      'We don\'t adapt generic tools for law firms. Cognify is purpose-built from the ground up for legal practice management and law firm workflows.',
  },
  {
    icon: '📊',
    title: 'Outcomes, Not Outputs',
    description:
      'We measure success by business impact—revenue protected, time saved, risks avoided—not by feature count or usage metrics.',
  },
]

const foundingBenefits = [
  {
    icon: '💰',
    title: 'Lifetime Pricing Lock',
    description: '50% discount locked in permanently—your rates never increase',
  },
  {
    icon: '🎯',
    title: 'Roadmap Influence',
    description: 'Direct input on feature priorities and product direction',
  },
  {
    icon: '🤝',
    title: 'White-Glove Support',
    description: 'Dedicated implementation and priority support throughout your journey',
  },
  {
    icon: '⚡',
    title: 'Early Access',
    description: 'First to see and test new features before general release',
  },
]

export default function About() {
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
              Building the Future of Legal Intelligence
        </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We're on a mission to solve the widespread failure of traditional BI in law firms—replacing unused dashboards with intelligence that meets lawyers where they work.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Mission
            </h2>
            <p
              className="text-xl text-slate-700 leading-relaxed italic mb-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              "To eliminate the £100K+ waste that law firms experience with traditional business intelligence by delivering intelligence where lawyers actually work—making data-driven decision making effortless, not burdensome."
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {missionPillars.map((pillar, index) => (
              <MissionPillar key={index} {...pillar} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Story
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why Cognify Exists
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Born from witnessing the same BI implementation failure pattern across dozens of enterprises over more than a decade.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <div className="bg-white p-12 rounded-xl shadow-lg">
                <h3
                  className="text-3xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  The Pattern Recognition
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  After more than a decade as an enterprise consultant, I watched the same story unfold repeatedly across industries: organizations invest £100K+ in BI platforms like Power BI and Tableau, spend 6-12 months building dashboards, and achieve single-digit adoption rates.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  The problem wasn't the technology. It was the fundamental assumption that people would open another application, know what questions to ask, and check dashboards regularly. They don't. They're too busy doing their actual jobs.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  But nowhere was this failure more pronounced—and more costly—than in law firms. Partners are billing at £400/hour. They're not spending time navigating BI tools. And yet, firms kept making the same investment, experiencing the same disappointment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-lime-500 p-12 rounded-xl text-slate-900">
                <h3
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Key Insights from a Decade of BI Failures
                </h3>
                {storyInsights.map((insight, index) => (
                  <StoryInsightItem key={index} text={insight} delay={index * 0.05} />
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Leadership
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Meet the Founder
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify was founded by someone who's seen both sides: the promise of BI and its consistent failure.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center backdrop-blur-md">
                  <div className="bg-gradient-to-br from-indigo-600 to-lime-500 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center text-7xl">
                    👤
                  </div>
                  <h3
                    className="text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {founderData.name}
                  </h3>
                  <p className="text-lime-500 font-semibold mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {founderData.title}
                  </p>
                  <div className="flex justify-center gap-4">
                    {founderData.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white/70 hover:text-lime-500 transition-colors text-xl"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-2">
              <FadeIn delay={0.3}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-12 backdrop-blur-md">
                  <h3
                    className="text-3xl font-bold text-white mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {founderData.bioTitle}
                  </h3>
                  {founderData.bioParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-white/90 leading-relaxed mb-6 text-lg last:mb-0"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <ul className="mt-8 space-y-4">
                    {founderData.experience.map((item, index) => (
                      <li key={index} className="pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                        <strong className="text-lime-500 block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.title}
                        </strong>
                        <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Values
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How We Build
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              The principles that guide every decision, from product design to customer relationships.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Founding Client Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12 text-center">
        <Container className="max-w-5xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Join Us as a Founding Client
            </h2>
            <p className="text-lg text-slate-800 mb-12 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We're looking for forward-thinking law firms who see the opportunity to move beyond traditional BI and are willing to help shape the future of legal intelligence platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {foundingBenefits.map((benefit, index) => (
                <FoundingBenefit key={index} {...benefit} delay={index * 0.1} />
              ))}
            </div>

            <Link
              href="/pricing"
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Learn About Founding Client Program →
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 text-center text-white">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let's Talk
            </h2>
            <p className="text-xl mb-10 text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Want to learn more about our story, vision, or founding client opportunities? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/book-demo"
                className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-lime-500/40 hover:shadow-2xl hover:shadow-lime-500/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Demo
              </Link>
          <Link
                href="/contact"
                className="bg-white/15 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 backdrop-blur-md hover:bg-white/25 hover:border-white/50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
                Get in Touch
          </Link>
        </div>
      </FadeIn>
    </Container>
      </section>
    </>
  )
}
