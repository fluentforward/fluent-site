import { Container } from './Container'
import { FadeIn } from './FadeIn'

const features = [
  {
    icon: '💬',
    title: 'Conversational',
    description: 'Ask questions in natural language, right in Microsoft Teams. No technical skills required.',
  },
  {
    icon: '⚡',
    title: 'Instant Insights',
    description: 'Get answers in seconds, not days. Real-time data analysis at the speed of conversation.',
  },
  {
    icon: '🤖',
    title: 'Agentic Intelligence',
    description: 'Goes beyond answering questions. Proactively surfaces insights and alerts you to trends.',
  },
]

export function ContentSection() {
  return (
    <section id="how-it-works" className="relative bg-slate-50 py-24 px-6 lg:px-12">
      {/* Subtle gradient at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(132, 204, 22, 0.05) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="text-purple-600 font-bold uppercase text-sm tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Intelligence, Not Dashboards
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Stop wrestling with complex BI tools. Start having conversations with your data.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-10 rounded-2xl border border-slate-200 transition-all hover:-translate-y-2 hover:border-purple-600 shadow-md hover:shadow-2xl hover:shadow-purple-600/15">
                <span className="text-4xl mb-6 block">{feature.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

