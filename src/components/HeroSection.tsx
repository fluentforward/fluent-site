import Link from 'next/link'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

export function HeroSection() {
  return (
    <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-32 px-6 lg:px-12 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center max-w-7xl mx-auto">
          <FadeIn className="text-white">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Intelligence, Not Dashboards
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get instant insights from your practice management systems—right where you work. No dashboards to check. No training required. Just answers when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link
                href="/book-demo"
                className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-lime-500/30 hover:shadow-xl hover:shadow-lime-500/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Demo
              </Link>
              <Link
                href="#solution"
                className="bg-white/15 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 backdrop-blur-md hover:bg-white/25 hover:border-white/50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                See How It Works
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-xl p-12 text-center backdrop-blur-md min-h-[400px] flex flex-col justify-center items-center">
                <strong className="block text-xl text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  HERO IMAGE PLACEHOLDER
                </strong>
                <small className="block text-sm text-white/80 max-w-[80%]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Screenshot: Microsoft Teams chat interface showing a natural language query ("What's our utilization this month?") with Cognify's response showing clear metrics and insights. Clean, conversational interface demonstrating zero learning curve.
                </small>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
