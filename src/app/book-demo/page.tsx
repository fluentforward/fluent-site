import { type Metadata } from 'next'
import Script from 'next/script'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Book a 30-minute demo to see how Cognify delivers intelligence where your team actually works—in Word, Excel, PowerPoint, Outlook, and Teams.',
}

const benefits = [
  {
    icon: '💬',
    title: 'Live Platform Walkthrough',
    description: 'See Cognify working in real Microsoft 365 apps with your practice management data',
  },
  {
    icon: '🎯',
    title: 'Tailored to Your Firm',
    description: "We'll discuss your specific challenges, systems, and use cases",
  },
  {
    icon: '📊',
    title: 'Integration Overview',
    description: 'Learn how Cognify connects with ActionStep, Clio, or your practice management system',
  },
  {
    icon: '⚡',
    title: 'Implementation Timeline',
    description: "Understand setup process, timeline, and what's required from your team",
  },
  {
    icon: '💷',
    title: 'Pricing & ROI Discussion',
    description: 'Clear pricing structure and expected return on investment for your firm size',
  },
]

const trustPoints = [
  'Purpose-built for mid-market UK law firms',
  'Zero training required—works in M365',
  'Bank-level security & data encryption',
  'Live in 2 weeks, not 6 months',
  'Founding client program available',
]

const timelineItems = [
  {
    number: '1',
    title: 'Discovery (5 mins)',
    description: "We'll start by understanding your firm's current challenges with business intelligence and data access",
  },
  {
    number: '2',
    title: 'Live Platform Demo (15 mins)',
    description: 'See Cognify working in Microsoft 365—asking questions in Teams, pulling data into Word and Excel, Intelligence Feed alerts',
  },
  {
    number: '3',
    title: 'Integration & Implementation (5 mins)',
    description: 'Review how Cognify connects with your practice management system and what the setup process looks like',
  },
  {
    number: '4',
    title: 'Q&A & Next Steps (5 mins)',
    description: 'Answer your questions about pricing, security, rollout, and determine if Cognify is the right fit for your firm',
  },
]

export default function BookDemo() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 overflow-hidden">
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`,
            animation: 'float 20s linear infinite',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See Cognify in Action
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a 30-minute demo to see how Cognify delivers intelligence where your team actually works—in Word, Excel, PowerPoint, Outlook, and Teams. No dashboards required.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Main Content */}
      <section className="relative bg-slate-50 py-16 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Benefits Sidebar */}
            <div className="lg:sticky lg:top-24">
              <FadeIn>
                <div className="bg-white p-10 rounded-xl shadow-lg mb-8">
                  <h2
                    className="text-2xl font-bold text-slate-900 mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    What You'll See
                  </h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {benefit.title}
                          </h3>
                          <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-lime-500">
                  <h3
                    className="text-lg font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Why Law Firms Choose Cognify
                  </h3>
                  <div className="space-y-3">
                    {trustPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-lime-500 font-bold text-xl">✓</span>
                        <span className="text-slate-700 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Calendly Section */}
            <div>
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-8 border-b border-slate-200">
                    <h2
                      className="text-2xl font-bold text-slate-900 mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Choose Your Time
                    </h2>
                    <p className="text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Select a convenient time for your personalized demo. All times are shown in your local timezone.
                    </p>
                  </div>
                  <div className="p-8">
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/matt-fluentforward/cognify-legal-demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=84cc16"
                      style={{ minWidth: '320px', height: '700px' }}
                    />
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-lg mt-8">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    What to Expect During Your Demo
                  </h3>
                  <div className="space-y-4">
                    {timelineItems.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.number}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {item.title}
                          </h4>
                          <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-lg mt-8 text-white text-center">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Prefer to Talk First?
                  </h3>
                  <p className="text-white/80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Have questions before booking? Want to discuss founding client opportunities?
                  </p>
                  <p className="text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Email us at{' '}
                    <a href="mailto:matt@cognifylegal.com" className="text-lime-500 font-bold hover:text-lime-400 transition-colors">
                      matt@cognifylegal.com
                    </a>
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}

