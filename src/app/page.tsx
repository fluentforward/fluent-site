import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'


export const metadata: Metadata = {
  description:
    'Agentic Business Intelligence for Legal — conversational insights, autonomous actions, Teams-native.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section with modern gradient and pattern background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#102542] via-[#0047AB] to-[#1e3a5f] py-12 sm:py-16 lg:py-20">
        {/* Decorative background pattern elements */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 blur-3xl opacity-20" aria-hidden="true">
            <div className="aspect-square w-[40rem] rounded-full bg-gradient-to-br from-blue-400 to-cyan-300" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 blur-3xl opacity-20" aria-hidden="true">
            <div className="aspect-square w-[35rem] rounded-full bg-gradient-to-tr from-purple-400 to-blue-300" />
          </div>
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          {/* Dot pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <Container>
          <FadeIn className="max-w-4xl mx-auto text-center">
            {/* Brand name with modern styling */}
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-white/10 text-white ring-1 ring-inset ring-white/20 mb-8 backdrop-blur-sm">
              Cognify Legal
            </div>
            
            {/* Main headline with enhanced typography */}
            <h1 className="font-display text-5xl font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
              Agentic Business Intelligence for Legal
            </h1>
            
            {/* Subheadline with better spacing */}
            <p className="mt-8 text-xl leading-8 text-blue-100 sm:text-2xl max-w-3xl mx-auto">
              Move beyond static dashboards. Our conversational agents deliver instant answers to complex business questions—and can act on insights to optimise firm performance in real time.
            </p>

            {/* Value props with cards */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left max-w-4xl mx-auto">
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl ring-1 ring-white/20 hover:shadow-2xl hover:bg-white transition-all">
                <div className="text-3xl mb-3">🗣️</div>
                <h3 className="text-lg font-semibold text-[#102542] mb-2">Conversational Intelligence</h3>
                <p className="text-sm text-neutral-600">Ask questions in plain English. Zero training required.</p>
              </div>
              
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl ring-1 ring-white/20 hover:shadow-2xl hover:bg-white transition-all">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-[#102542] mb-2">Instant Insights</h3>
                <p className="text-sm text-neutral-600">Get answers in seconds, not days. Interactive refinement.</p>
              </div>
              
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl ring-1 ring-white/20 hover:shadow-2xl hover:bg-white transition-all">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-lg font-semibold text-[#102542] mb-2">Agentic Automation</h3>
                <p className="text-sm text-neutral-600">Intelligence that acts on insights, not just reports them.</p>
              </div>
            </div>

            {/* CTA section with enhanced styling */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#0047AB] shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
              >
                Schedule a Demonstration
              </Link>
              <p className="text-sm text-blue-200">Launching soon. Limited pilot invitations available.</p>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}
