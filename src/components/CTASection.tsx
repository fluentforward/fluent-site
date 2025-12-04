import Link from 'next/link'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

export function CTASection() {
  return (
    <section id="book-demo" className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 text-center text-white">
      <Container className="max-w-4xl mx-auto">
        <FadeIn>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            See Cognify in Action
          </h2>
          <p className="text-xl mb-10 text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Book a 30-minute demo to see how Cognify delivers intelligence where your team actually works—no dashboards required.
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
  )
}
