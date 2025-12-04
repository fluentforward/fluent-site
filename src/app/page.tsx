import { type Metadata } from 'next'

import { HeroSection } from '@/components/HeroSection'
import { ProblemSection } from '@/components/ProblemSection'
import { ReactiveIntelligenceSection } from '@/components/ReactiveIntelligenceSection'
import { ProactiveIntelligenceSection } from '@/components/ProactiveIntelligenceSection'
import { PerformanceDashboardSection } from '@/components/PerformanceDashboardSection'
import { ValueSummarySection } from '@/components/ValueSummarySection'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  description:
    'Intelligence, Not Dashboards. Get instant insights from your practice management systems—right where you work.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ReactiveIntelligenceSection />
      <ProactiveIntelligenceSection />
      <PerformanceDashboardSection />
      <ValueSummarySection />
      <CTASection />
    </>
  )
}
