import { Container } from './Container'
import { FadeIn } from './FadeIn'

const alerts = [
  {
    type: 'Revenue Protection',
    message: "Client ABC hasn't been invoiced in 45 days despite 12.5 hours of unbilled time—potential £4,800 revenue leak.",
  },
  {
    type: 'Utilization Monitoring',
    message: "Your litigation team's utilization dropped 8% this week—three matters went quiet. Investigate?",
  },
  {
    type: 'Risk Management',
    message: 'Partner Sarah has five matters approaching statute of limitations in the next 30 days.',
  },
  {
    type: 'Performance Insights',
    message: 'Q4 revenue trending 15% below target—current forecast shows £127K shortfall by year-end.',
  },
  {
    type: 'Client Relationship',
    message: "Client XYZ last contacted 90 days ago. Their annual retainer renews in 45 days—schedule a check-in?",
  },
]

export function ProactiveIntelligenceSection() {
  return (
    <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
      <Container className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <div
            className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Proactive Intelligence
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Alerts for What You're Not Thinking About
          </h2>
          <p className="text-xl text-white/80 max-w-4xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Intelligence Feed continuously monitors all connected systems and surfaces insights, recommendations, and alerts. It tells you what matters before problems become crises.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="flex flex-col gap-5">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="bg-white/5 border-l-4 border-lime-500 p-6 rounded-lg backdrop-blur-md transition-all hover:bg-white/8 hover:translate-x-1"
                >
                  <div
                    className="text-xs font-bold uppercase tracking-wider text-lime-500 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {alert.type}
                  </div>
                  <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {alert.message}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-xl p-12 text-center backdrop-blur-md min-h-[400px] flex flex-col justify-center items-center">
                <strong className="block text-xl text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  INTELLIGENCE FEED
                </strong>
                <small className="block text-sm text-white/70 max-w-[80%]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Screenshot: Microsoft Teams showing the Cognify Intelligence tab with a feed of prioritized alerts. Clean card-based interface showing alerts with action buttons ("Investigate", "Snooze", "Mark Resolved"). Shows time-based organization and visual priority indicators.
                </small>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

