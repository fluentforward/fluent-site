import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { FeaturePillarCard } from '@/components/FeaturePillarCard'
import { AppFeature } from '@/components/AppFeature'
import { IntelligenceFeedCategory } from '@/components/IntelligenceFeedCategory'
import { KPICard } from '@/components/KPICard'
import { DashboardFeatureCard } from '@/components/DashboardFeatureCard'
import { PlatformCard } from '@/components/PlatformCard'
import wordIntegration from '@/images/app/word-integration.png'
import excelIntegration from '@/images/app/excel-integration.png'
import powerpointIntegration from '@/images/app/powerpoint-integration.png'
import outlookIntegration from '@/images/app/outlook-integration.png'
import performanceDashboard from '@/images/app/performance-dashboard.png'


export const metadata: Metadata = {
  title: 'Features',
  description: 'Everything you need to make data-driven decisions without the complexity of traditional BI. Intelligence where you work, when you need it.',
}

const pillars = [
  {
    icon: '💬',
    title: 'Co-Pilot Integration',
    description: 'Reactive intelligence embedded in Word, Excel, PowerPoint, Outlook, and Teams. Get answers in the context of your actual work.',
  },
  {
    icon: '🔔',
    title: 'Intelligence Feed',
    description: 'Proactive alerts that surface critical insights before they become problems. Never miss revenue leaks or client risks again.',
  },
  {
    icon: '📊',
    title: 'Performance Dashboard',
    description: 'Clean, prebuilt KPI dashboard for management teams. No configuration nightmare, no data expertise required.',
  },
]

const copilotFeatures = [
  {
    title: 'Work in Word',
    description: 'Draft proposals, reports, and client communications with live data from your practice management system at your fingertips.',
    capabilities: [
      { text: 'Insert live data: Matter status, billing history, team assignments, client details—formatted and ready' },
      { text: 'Template population: Auto-fill proposal templates with current matter data' },
      { text: 'Natural language queries: Ask in plain English, get formatted tables and text' },
      { text: 'Contextual suggestions: Based on document content, Cognify suggests relevant data' },
    ],
    screenshot: {
      image: wordIntegration,
      alt: 'Microsoft Word document with Cognify Co-Pilot sidebar',
    },
  },
  {
    title: 'Analyze in Excel',
    description: 'Build financial models and perform deep analysis with data that flows directly from your practice management system.',
    capabilities: [
      { text: 'Structured data queries: Revenue projections, matter profitability, client concentration—instantly' },
      { text: 'Pivot tables & analysis: Create dynamic reports from live practice management data' },
      { text: 'Financial modeling: Real-time revenue and cost data for accurate forecasting' },
      { text: 'Refresh on demand: Keep analysis current as data changes throughout the day' },
    ],
    screenshot: {
      image: excelIntegration,
      alt: 'Excel spreadsheet being populated by Cognify',
    },
    reverse: true,
  },
  {
    title: 'Present in PowerPoint',
    description: 'Create compelling board presentations and client decks with current KPIs and performance metrics that update automatically.',
    capabilities: [
      { text: 'Insert live charts & KPIs: Practice area performance, pipeline analysis, financial metrics' },
      { text: 'Generate slides: "Create practice area performance slide" → professional slide with current data' },
      { text: 'Update presentations: Refresh data in existing decks with one command' },
      { text: 'Template library: Pre-built slides for common board and client presentations' },
    ],
    screenshot: {
      image: powerpointIntegration,
      alt: 'PowerPoint with Cognify generating a board presentation slide',
    },
  },
  {
    title: 'Context in Outlook',
    description: 'See critical client and matter intelligence right in your inbox—before you hit send on that email.',
    capabilities: [
      { text: 'Contextual sidebar: Client intelligence appears automatically when composing emails' },
      { text: 'Smart detection: Cognify identifies client names and surfaces relevant insights' },
      { text: 'Critical alerts: "This client has £15K outstanding invoices" shown at the right moment' },
      { text: 'Quick actions: Insert matter status or billing summary directly into email body' },
    ],
    screenshot: {
      image: outlookIntegration,
      alt: 'Outlook email composition with Cognify contextual sidebar',
    },
    reverse: true,
  },
  {
    title: 'Chat in Teams',
    description: 'Ask questions in natural language and get instant answers from all connected systems. No special commands or syntax required.',
    capabilities: [
      { text: 'Conversational interface: Ask questions like you\'re talking to a colleague' },
      { text: 'Multi-turn conversations: Follow-up questions maintain context' },
      { text: 'Cross-system queries: Data from practice management, finance, HR, and CRM' },
      { text: 'Shareable insights: Export answers to other M365 apps with one click' },
    ],
    screenshotTitle: 'TEAMS CHAT',
    screenshotDescription:
      'Screenshot showing Teams chat with Cognify bot. Natural conversation showing query "What\'s our litigation team\'s utilization this month?" followed by clear response with percentage, comparison to target, and breakdown by fee earner. Shows conversational interface with multi-turn context.',
  },
]

const feedCategories = [
  {
    icon: '💰',
    title: 'Revenue Protection',
    alerts: [
      { text: "Client ABC hasn't been invoiced in 45 days despite 12.5 hours of unbilled time—potential £4,800 revenue leak" },
      { text: 'Invoice #1847 to Client XYZ is 60 days overdue (£23,500)—collection risk increasing' },
      { text: 'Matter #2341 has £18K unbilled time—approaching write-off risk threshold' },
      { text: "Unusual billing pattern detected: Partner Sarah's realization rate dropped 15% this month" },
    ],
  },
  {
    icon: '📊',
    title: 'Utilization & Capacity',
    alerts: [
      { text: 'Litigation team utilization dropped 8% this week—three matters went quiet simultaneously' },
      { text: 'Associate Tom has recorded no billable time in 5 days—check for capacity or assignment issues' },
      { text: 'Commercial team at 95% capacity—consider resource reallocation or hiring' },
      { text: 'Matter velocity declining: 12 matters showing no activity for 14+ days' },
    ],
  },
  {
    icon: '⚠️',
    title: 'Risk Management',
    alerts: [
      { text: 'Partner Sarah has 5 matters approaching statute of limitations in next 30 days' },
      { text: 'Matter #4523 exceeded budget by 35%—client notification recommended' },
      { text: 'Compliance deadline: 3 regulatory filings due within 7 days' },
      { text: 'Potential conflict detected: New matter intake involves existing adverse party' },
    ],
  },
  {
    icon: '🤝',
    title: 'Client Relationship',
    alerts: [
      { text: 'Client XYZ: No contact in 90 days, annual retainer renews in 45 days—schedule check-in' },
      { text: 'Client ABC has 3 matters with budget overruns—satisfaction risk detected' },
      { text: 'Cross-sell opportunity: Client using only commercial services, has corporate structure suggesting M&A needs' },
      { text: 'Top client concentration risk: Top 3 clients represent 67% of revenue' },
    ],
  },
]

const kpiCategories = [
  {
    category: 'Financial Metrics',
    items: [
      'Revenue (total, by practice area, by partner)',
      'Revenue per partner/lawyer',
      'Collection rates & AR aging',
      'Matter profitability',
      'Lock-up (work to cash)',
    ],
  },
  {
    category: 'Operational Metrics',
    items: [
      'Utilization by fee earner',
      'Realization rates',
      'Matter velocity',
      'WIP aging',
      'New matter intake',
    ],
  },
  {
    category: 'Client Metrics',
    items: [
      'Client concentration',
      'Lifetime value & retention',
      'Matter volume per client',
      'Client acquisition cost',
    ],
  },
  {
    category: 'People Metrics',
    items: [
      'Headcount by role',
      'Leverage ratios',
      'Productivity per fee earner',
      'Capacity utilization',
    ],
  },
]

const dashboardFeatures = [
  {
    icon: '💬',
    title: 'Guided Setup',
    description:
      'Cognify asks simple questions to configure your dashboard: "What\'s your target revenue per partner?" No data modeling expertise needed.',
  },
  {
    icon: '🎯',
    title: 'Smart Defaults',
    description:
      'Pre-populated targets based on firm size, practice areas, and legal industry benchmarks. Customize or accept recommendations.',
  },
  {
    icon: '🔔',
    title: 'Proactive Maintenance',
    description:
      'Intelligence Feed reminds you to review targets near year-end, adjust tolerances quarterly, update thresholds when conditions change.',
  },
  {
    icon: '👥',
    title: 'Role-Based Views',
    description:
      'Managing partners see firm-wide metrics. Practice heads see their department. Partners see their portfolio. Everyone sees what matters to them.',
  },
]

const platformFeatures = [
  {
    title: 'Multi-Tenant Architecture',
    description: 'Complete data isolation between firms with tenant-specific configuration and customization.',
    details: ['Dedicated data partitions', 'Independent configuration', 'Scalable per tenant'],
  },
  {
    title: 'Real-Time Synchronization',
    description: 'Webhooks and intelligent polling keep your data current across all connected systems.',
    details: ['Sub-second data updates', 'Conflict resolution', 'Automatic retry logic'],
  },
  {
    title: 'Security & Encryption',
    description: 'Bank-level security protecting your most sensitive client and matter data.',
    details: ['AES-256 encryption (in transit & at rest)', 'SOC 2 Type II (in progress)', 'GDPR compliant'],
  },
  {
    title: 'Access Controls',
    description: 'Granular role-based permissions with support for Chinese walls and conflict separation.',
    details: ['Role-based permissions', 'Matter-level access control', 'Audit logging'],
  },
  {
    title: 'API Gateway',
    description: 'Unified interface for all external integrations with intelligent caching and rate limiting.',
    details: ['REST API access (Enterprise)', 'Webhook notifications', 'Query optimization'],
  },
  {
    title: 'Reliability & Uptime',
    description: 'Built on enterprise cloud infrastructure with redundancy and monitoring.',
    details: ['99.9% uptime SLA (Enterprise)', 'Automated backups', '24/7 monitoring'],
  },
]

export default function Features() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 overflow-hidden text-center">
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`,
            animation: 'float 20s linear infinite',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Features Built for Law Firms
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Everything you need to make data-driven decisions without the complexity of traditional BI. Intelligence where you work, when you need it.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Three Pillars of Intelligence
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify delivers intelligence through three integrated components designed to eliminate the adoption problems of traditional BI platforms.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <FeaturePillarCard key={index} {...pillar} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Co-Pilot Features Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Reactive Intelligence
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Microsoft Co-Pilot Integration
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify works as an intelligent agent inside Microsoft 365, providing instant access to your firm's data without leaving your workflow.
            </p>
          </FadeIn>

          {copilotFeatures.map((feature, index) => (
            <AppFeature key={index} {...feature} delay={index * 0.1} />
          ))}
        </Container>
      </section>

      {/* Intelligence Feed Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Proactive Intelligence
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Intelligence Feed
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Continuous monitoring across all systems surfacing insights, alerts, and recommendations before issues become crises.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {feedCategories.map((category, index) => (
              <IntelligenceFeedCategory key={index} {...category} delay={index * 0.1} />
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 rounded-xl p-12 border border-white/10">
              <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-xl p-12 text-center min-h-[300px] flex flex-col justify-center items-center">
                <strong className="block text-xl text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  INTELLIGENCE FEED INTERFACE
                </strong>
                <small className="block text-sm text-white/70 max-w-[90%]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Screenshot showing Microsoft Teams Intelligence Feed tab with clean card-based interface. Shows 5-6 prioritized alerts with clear visual hierarchy (red/amber/green status indicators), timestamps, and action buttons ("Investigate", "Snooze", "Mark Resolved", "Share with Team"). Demonstrates how critical insights interrupt workflow at the right time.
                </small>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Performance Dashboard Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Executive View
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Performance Dashboard
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Clean, prebuilt KPI dashboard for management teams. No configuration expertise required—just answer simple questions to set targets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 mb-16 items-center">
            <FadeIn>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-dashed border-indigo-600 rounded-xl p-12 text-center min-h-[400px] flex flex-col justify-center items-center">
                <strong className="block text-xl text-slate-900 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  PERFORMANCE DASHBOARD
                </strong>
                <small className="block text-sm text-slate-700 max-w-[90%]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Screenshot showing clean Teams dashboard with KPI cards in grid layout. Each card shows: metric name, current value, target, variance indicator (green/amber/red), sparkline trend, and "View Details" link. Shows metrics like "Revenue Per Partner: £387K (Target: £400K, -3.25%)", "Utilization Rate: 82% (Target: 75%, +9.3%)", "Collection Rate: 94%". Professional but not overwhelming.
                </small>
              </div>
            </FadeIn>
            <div>
              <h3
                className="text-3xl font-bold text-slate-900 mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Prebuilt KPIs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {kpiCategories.map((kpi, index) => (
                  <KPICard key={index} {...kpi} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <DashboardFeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Platform Features Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Platform
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Enterprise-Grade Foundation
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Built for security, scalability, and reliability from day one.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <PlatformCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12 text-center">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See These Features in Action
            </h2>
            <p className="text-lg text-slate-800 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a personalized demo to see how Cognify delivers intelligence where your team actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/book-demo"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all border-2 border-slate-900 hover:bg-slate-900 hover:text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Pricing
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}

