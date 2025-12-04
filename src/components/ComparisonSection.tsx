import { Container } from './Container'
import { FadeIn } from './FadeIn'

const oldBI = [
  { icon: '📊', text: 'Complex dashboards requiring weeks of training' },
  { icon: '⏱️', text: '3-6 month implementation timeline' },
  { icon: '💰', text: '£100K-150K upfront investment' },
  { icon: '👨‍💻', text: 'Requires dedicated data analyst team' },
  { icon: '📉', text: 'Low adoption - partners never use it' },
]

const cognify = [
  { icon: '💬', text: 'Conversational interface - ask questions naturally' },
  { icon: '🚀', text: '8-week onboarding to full deployment' },
  { icon: '💚', text: 'Founding client benefits and exclusive terms' },
  { icon: '✨', text: 'Zero training required - works in Teams' },
  { icon: '📈', text: 'Partners actually use it daily' },
]

export function ComparisonSection() {
  return (
    <section className="relative bg-slate-800 py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background gradient orb */}
      <div
        className="absolute top-0 right-0 -translate-y-[20%] translate-x-[-10%] w-[500px] h-[500px] rounded-full opacity-100"
        style={{
          background: 'radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Traditional BI vs Cognify
          </h2>
          <p className="text-xl text-slate-400">
            See the difference for yourself
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="opacity-70">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b-2 border-slate-600 text-slate-400">
                ❌ Traditional BI (Power BI, Tableau)
              </h3>
              <div className="space-y-6">
                {oldBI.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-2xl mt-1 flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-300 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b-2 border-lime-500 text-lime-500">
                ✓ Cognify Legal
              </h3>
              <div className="space-y-6">
                {cognify.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-2xl mt-1 flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-300 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

