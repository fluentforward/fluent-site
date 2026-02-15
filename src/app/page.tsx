import { type Metadata } from 'next'

import {
  HeroSection,
  PhilosophySection,
  ServicesSection,
  CaseStudySection,
  FounderSection,
  FooterCTA,
} from '@/components/fluent'

export const metadata: Metadata = {
  description:
    'We apply Execution Abundance principles to design businesses where AI removes bottlenecks, creating capacity that compounds—not costs.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <CaseStudySection />
      <FounderSection />
      <FooterCTA />
    </>
  )
}