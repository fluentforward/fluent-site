import Link from 'next/link'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

const benefits = [
  { text: 'Exclusive founding<br />client terms' },
  { text: '8-week onboarding<br />to prove value' },
  { text: 'Influence product<br />roadmap' },
]

export function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-500 py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="absolute top-0 left-0 -translate-y-[30%] -translate-x-[10%] w-[600px] h-[600px] rounded-full opacity-150"
        style={{
          background: 'radial-gradient(circle, rgba(132, 204, 22, 0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 translate-y-[30%] translate-x-[10%] w-[500px] h-[500px] rounded-full opacity-200"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Become a Founding Client
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
            Join as a founding client and shape the future of legal business intelligence. 
            Limited spots available for forward-thinking firms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl transition-all hover:bg-white/15 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-slate-900 font-extrabold text-base mx-auto mb-4">
                    ✓
                  </div>
                  <div
                    className="text-white font-semibold text-lg text-center"
                    dangerouslySetInnerHTML={{ __html: benefit.text }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <Link
            href="/schedule"
            className="inline-block bg-lime-500 text-slate-900 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:-translate-y-1 shadow-2xl shadow-lime-500/40 hover:shadow-lime-500/60"
          >
            Book Your Demo Call
          </Link>
        </FadeIn>
      </Container>
    </section>
  )
}

