import { type Metadata } from 'next'
import Script from 'next/script'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Schedule a Demo',
  description: 'Schedule a demonstration of Cognify Legal\'s agentic business intelligence platform.',
}

export default function Schedule() {
  return (
    <>
      {/* Header Section with new branding style */}
      <div className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
        {/* Background gradient orbs matching hero section */}
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
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-gradient-to-br from-purple-600/10 to-lime-500/10 text-[#166534] px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-lime-500/30">
              Book Your Demo
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Schedule a Demonstration
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              See Cognify Legal in action. Book a personalized demo to explore how conversational intelligence can transform your firm's decision-making.
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Booking Form Section */}
      <div className="relative bg-slate-50 py-16 sm:py-24">
        <Container>
          <FadeIn>
            <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 p-4">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/matt-fluentforward/cognify-legal-demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=84cc16" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </FadeIn>
        </Container>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
