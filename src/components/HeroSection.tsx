import Link from 'next/link'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background gradient orbs */}
      <div
        className="absolute top-0 right-0 -translate-y-[30%] translate-x-[-10%] w-[600px] h-[600px] rounded-full opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 translate-y-[20%] -translate-x-[5%] w-[500px] h-[500px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(132, 204, 22, 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <FadeIn className="max-w-5xl">
          <span className="inline-block bg-gradient-to-br from-purple-600/10 to-lime-500/10 text-[#166534] px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-lime-500/30">
            🚀 Now accepting founding clients
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Agentic Business<br />
            Intelligence for<br />
            <span className="bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Law Firms
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-500 mb-10 max-w-3xl leading-relaxed">
            Ask questions in Teams. Get instant insights. No dashboards, no training, no waiting. 
            Transform your firm's data into conversational intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href="/schedule"
              className="bg-gradient-to-br from-lime-500 to-lime-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-lime-500/30 hover:shadow-2xl hover:shadow-lime-500/40"
            >
              Book a Demo
            </Link>
            <Link
              href="#how-it-works"
              className="text-slate-900 px-8 py-4 font-semibold text-lg border-2 border-slate-300 rounded-lg transition-all hover:bg-slate-50 hover:border-purple-600 hover:text-purple-600 bg-white"
            >
              See How It Works
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

