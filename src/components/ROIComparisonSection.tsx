import { Container } from './Container'
import { FadeIn } from './FadeIn'

const comparisonRows = [
  { label: 'Software licenses', traditionalBI: '£12,000', cognify: '£18,000' },
  { label: 'Implementation & consulting', traditionalBI: '£35,000', cognify: '£0' },
  { label: 'Training & change management', traditionalBI: '£15,000', cognify: '£0' },
  { label: 'Data team time (building dashboards)', traditionalBI: '£25,000', cognify: '£0' },
  { label: 'Ongoing maintenance', traditionalBI: '£18,000', cognify: '£0' },
]

export function ROIComparisonSection() {
  return (
    <section className="relative bg-white py-24 px-6 lg:px-12">
      <Container className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The True Cost of Business Intelligence
          </h2>
          <p className="text-lg text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Compare Cognify's total cost of ownership against traditional BI implementations
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-slate-900 text-white p-6 font-bold">
              <div>First Year Costs</div>
              <div className="text-center">Traditional BI</div>
              <div className="text-center">Cognify</div>
            </div>
            
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`
                  grid grid-cols-[2fr_1fr_1fr] p-6 border-b border-slate-200 items-center
                  ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                `}
              >
                <div className="font-semibold text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {row.label}
                </div>
                <div className="text-center text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {row.traditionalBI}
                </div>
                <div className="text-center text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {row.cognify}
                </div>
              </div>
            ))}
            
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-indigo-600 text-white p-6 font-bold text-lg">
              <div className="text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Total First Year Cost
              </div>
              <div className="text-center text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                £105,000
              </div>
              <div className="text-center text-lime-500 text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                £18,000
              </div>
            </div>
          </div>

          <p className="mt-8 font-semibold text-slate-900 text-center text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            With Cognify, you save £87,000 in year one—and you actually get adoption.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

