import Link from 'next/link'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

const benefits = [
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

export function FoundingClientSection() {
  return (
    <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
      <Container className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2
                className="text-4xl font-bold text-slate-900 mb-4 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Founding Client Program
              </h2>
              <p className="text-lg text-slate-800 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Join our founding client program and get exclusive benefits while helping shape the future of legal intelligence platforms.
              </p>
              <Link
                href="/book-demo"
                className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Learn More →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg flex items-center gap-4 shadow-md"
                >
                  <span className="text-3xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <strong className="text-slate-900 font-bold block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {benefit.title}
                    </strong>
                    <span className="text-slate-700 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {benefit.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

