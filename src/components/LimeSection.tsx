import { Container } from './Container'
import { FadeIn } from './FadeIn'

const stats = [
  { number: '15-20hrs', label: 'Wasted monthly pulling reports' },
  { number: '£150K', label: 'Average Power BI implementation' },
  { number: '3-6mo', label: 'To go live (then unused)' },
]

export function LimeSection() {
  return (
    <section className="relative bg-lime-500 py-24 px-6 lg:px-12 overflow-hidden">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(101, 163, 13, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight max-w-4xl">
            80% of UK law firms waste £100K+ on Power BI that nobody uses
          </h2>
          <p className="text-xl text-slate-950 mb-12 max-w-2xl font-medium">
            Complex dashboards. Months of implementation. Zero adoption. Sound familiar?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white/25 backdrop-blur-md p-8 rounded-2xl border border-white/40 transition-all hover:bg-white/35 hover:-translate-y-1">
                  <span className="block text-5xl font-extrabold text-slate-900 mb-2">
                    {stat.number}
                  </span>
                  <span className="text-lg text-slate-950 font-semibold">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

