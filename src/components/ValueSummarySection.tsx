import { Container } from './Container'
import { FadeIn } from './FadeIn'

const valuePoints = [
  {
    number: '01',
    bold: 'Zero friction adoption:',
    text: ' Intelligence appears in tools lawyers use daily. No new applications, no training, no separate logins.',
  },
  {
    number: '02',
    bold: 'Impossible to ignore:',
    text: " Proactive alerts interrupt workflow at the right moment. Users don't need to remember to check anything.",
  },
  {
    number: '03',
    bold: 'Immediate value:',
    text: ' The first time a partner pulls matter data into a proposal, the value is obvious and tangible.',
  },
  {
    number: '04',
    bold: 'Solves both failures:',
    text: " Co-Pilot means they don't need to \"go look.\" Intelligence Feed means they don't need to \"know what to look for.\"",
  },
]

export function ValueSummarySection() {
  return (
    <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
      <Container className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Why Traditional BI Fails and Cognify Succeeds
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {valuePoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl text-left">
                <div
                  className="text-4xl font-bold text-indigo-600 mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {point.number}
                </div>
                <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <strong>{point.bold}</strong>{point.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="bg-slate-900 p-12 rounded-xl text-white shadow-2xl">
            <p
              className="text-xl italic leading-relaxed text-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              "Traditional BI expects partners to open dashboards and know what questions to ask. Cognify works the opposite way: When you're actively working, Cognify is right there with the answers. When you're not thinking about something, Cognify taps you on the shoulder to say 'this needs attention.' You never need to remember to check a dashboard again."
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

