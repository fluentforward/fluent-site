import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Schedule a Demo',
  description: 'Schedule a demonstration of Cognify Legal\'s agentic business intelligence platform.',
}

export default function Schedule() {
  return (
    <>
      {/* Header Section with matching gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#102542] via-[#0047AB] to-[#1e3a5f] py-16 sm:py-20">
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
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-white/10 text-white ring-1 ring-inset ring-white/20 mb-6 backdrop-blur-sm">
              Cognify Legal
            </div>
            
            {/* Page title */}
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              Schedule a Demonstration
            </h1>
            
            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
              See Cognify Legal in action. Book a personalized demo to explore how conversational intelligence can transform your firm's decision-making.
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Booking Form Section */}
      <Container className="py-16 sm:py-20">
        <FadeIn>
          <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden" style={{ minHeight: '800px' }}>
            <iframe 
              src='https://outlook.office.com/book/CognifyLegalDemo@fluentforward.co/?ismsaljsauthenabled' 
              width='100%' 
              height='800' 
              scrolling='yes' 
              style={{ border: 0 }}
            />
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
