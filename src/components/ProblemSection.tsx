import { Container } from './Container'
import { FadeIn } from './FadeIn'

const failureModes = [
  {
    number: '01',
    title: "People Don't Go Look",
    description: "Partners are too busy serving clients to remember to check dashboards. Traditional BI requires users to open another app, know what to ask, and navigate complex interfaces. It never becomes part of their workflow.",
  },
  {
    number: '02',
    title: "People Don't Know What to Look For",
    description: "Even when users check dashboards, they don't know which metrics matter or what questions to ask. Critical issues—revenue leaks, utilization drops, client risks—fall through the cracks because nobody thought to look.",
  },
]

const stats = [
  { number: '<10%', label: 'Average BI adoption rate in law firms' },
  { number: '£100K+', label: 'Wasted on unused dashboards' },
  { number: 'Zero', label: 'ROI from traditional BI' },
]

export function ProblemSection() {
  return (
    <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
      <Container className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div
            className="text-sm font-bold uppercase tracking-widest text-slate-900/60 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            The Problem
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Traditional BI Fails Law Firms
          </h2>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Despite investing £50-150K in business intelligence platforms, mid-market law firms achieve single-digit adoption rates. Your data team builds dashboards nobody uses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {failureModes.map((failure, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-10 rounded-xl shadow-lg">
                <div
                  className="text-5xl font-bold text-indigo-600 mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {failure.number}
                </div>
                <h3
                  className="text-2xl font-bold text-slate-900 mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {failure.title}
                </h3>
                <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {failure.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-slate-900 text-white p-10 rounded-xl text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center flex-wrap">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1 min-w-[200px]">
                  <span
                    className="block text-5xl font-bold text-lime-500 mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.number}
                  </span>
                  <span className="text-base text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

