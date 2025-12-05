import { Container } from './Container'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import performanceDashboard from '@/images/app/performance-dashboard.png'

const features = [
  {
    icon: '💬',
    title: 'Guided Setup',
    description: "Cognify asks simple questions to configure targets and tolerances. \"What's your target revenue per partner?\" No data expertise required.",
  },
  {
    icon: '📈',
    title: 'Prebuilt KPIs',
    description: 'Core metrics defined using legal industry best practices. Customize targets without needing to understand data modeling.',
  },
  {
    icon: '🔔',
    title: 'Proactive Maintenance',
    description: 'Intelligence Feed reminds you to update targets near year-end, review tolerances quarterly, adjust thresholds when conditions change.',
  },
  {
    icon: '👥',
    title: 'Role-Based Views',
    description: 'Managing partners see firm-wide metrics. Practice heads see their department. Partners see their portfolio. Everyone sees what matters to them.',
  },
]

export function PerformanceDashboardSection() {
  return (
    <section id="how-it-works" className="relative bg-slate-50 py-24 px-6 lg:px-12">
      <Container className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <div
            className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Performance Dashboard
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Simplified Executive View
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            For management teams who want at-a-glance firm performance, the Performance tab provides a clean dashboard—without the configuration nightmare of traditional BI.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src={performanceDashboard}
                  alt="Performance dashboard showing key metrics"
                  className="rounded-xl shadow-2xl bg-white object-contain"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4
                      className="text-xl font-bold text-slate-900 mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

