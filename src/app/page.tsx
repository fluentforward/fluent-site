import { type Metadata } from 'next'

import { HeroSection } from '@/components/HeroSection'
import { LimeSection } from '@/components/LimeSection'
import { ContentSection } from '@/components/ContentSection'
import { ComparisonSection } from '@/components/ComparisonSection'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  description:
    'Agentic Business Intelligence for Legal — conversational insights, autonomous actions, Teams-native.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <LimeSection />
      <ContentSection />
      <ComparisonSection />
      <CTASection />
    </>
  )
}
