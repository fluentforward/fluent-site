import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { M365AppCard } from '@/components/M365AppCard'
import { PMSCard } from '@/components/PMSCard'
import { ComingSoonCard } from '@/components/ComingSoonCard'
import { SetupTimelineItem } from '@/components/SetupTimelineItem'
import { APIFeatureItem } from '@/components/APIFeatureItem'

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Cognify integrates seamlessly with your practice management system, Microsoft 365, and the tools you already use—no rip-and-replace required.',
}

const m365Apps = [
  {
    icon: '📄',
    title: 'Word',
    description: 'Insert live data from practice management into proposals, reports, and client documents.',
    features: ['Matter status & billing history', 'Template auto-population', 'Formatted tables & charts', 'Natural language queries'],
  },
  {
    icon: '📊',
    title: 'Excel',
    description: 'Build financial models and analysis with real-time data from all connected systems.',
    features: ['Revenue & profitability data', 'Pivot tables from live data', 'Dynamic dashboards', 'One-click refresh'],
  },
  {
    icon: '📊',
    title: 'PowerPoint',
    description: 'Generate professional presentations with current KPIs and performance metrics.',
    features: ['Board presentation slides', 'Practice area performance', 'Pipeline & forecast charts', 'Auto-updating data'],
  },
  {
    icon: '✉️',
    title: 'Outlook',
    description: 'Contextual client intelligence appears automatically when you need it most.',
    features: ['Client name detection', 'Outstanding invoice alerts', 'Matter status sidebar', 'Relationship health scores'],
  },
  {
    icon: '💬',
    title: 'Teams',
    description: 'Chat interface for natural language queries and Intelligence Feed notifications.',
    features: ['Conversational queries', 'Intelligence Feed alerts', 'Performance Dashboard', 'Share insights with team'],
  },
  {
    icon: '🤖',
    title: 'Co-Pilot',
    description: 'Cognify works as an intelligent agent across all M365 apps via Co-Pilot.',
    features: ['Unified intelligence layer', 'Cross-app consistency', 'Zero training overhead', 'Seamless experience'],
  },
]

const pmsSystems = [
  {
    name: 'ActionStep',
    status: '✓ Available Now',
    statusType: 'available' as const,
    dataPoints: [
      'Matters & cases',
      'Time entries',
      'Invoices & billing',
      'Client records',
      'Financial transactions',
      'Document metadata',
      'Staff assignments',
      'Custom fields',
    ],
    learnMoreHref: '/contact',
    learnMoreText: 'Learn more about ActionStep integration',
  },
  {
    name: 'Clio',
    status: '✓ Available Now',
    statusType: 'available' as const,
    dataPoints: [
      'Matters & contacts',
      'Time tracking',
      'Bills & invoices',
      'Trust accounting',
      'Calendar & tasks',
      'Documents',
      'Communication logs',
      'Custom fields',
    ],
    learnMoreHref: '/contact',
    learnMoreText: 'Learn more about Clio integration',
  },
  {
    name: 'LEAP',
    status: 'Coming Q2 2025',
    statusType: 'coming-soon' as const,
    dataPoints: [
      'Matter management',
      'Time recording',
      'Billing & accounts',
      'Client database',
      'Document assembly',
      'Workflows',
      'Reporting data',
      'Practice analytics',
    ],
    learnMoreHref: '/book-demo',
    learnMoreText: 'Join the waitlist',
  },
  {
    name: 'Custom Integration',
    status: 'Enterprise Plan',
    statusType: 'enterprise' as const,
    dataPoints: ['API assessment', 'Custom connector development', 'Data mapping & testing', 'Ongoing maintenance'],
    learnMoreHref: '/contact',
    learnMoreText: 'Contact us about custom integration',
  },
]

const comingSoonIntegrations = [
  {
    badge: 'Q2 2025',
    icon: '💰',
    title: 'Accounting Systems',
    description: 'Xero, QuickBooks, Sage for comprehensive financial intelligence and reconciliation.',
  },
  {
    badge: 'Q3 2025',
    icon: '📞',
    title: 'CRM Platforms',
    description: 'Salesforce, HubSpot for client development, pipeline tracking, and marketing insights.',
  },
  {
    badge: 'Q3 2025',
    icon: '👥',
    title: 'HR Systems',
    description: 'BambooHR, Workday for people analytics, capacity planning, and resource optimization.',
  },
  {
    badge: 'Q4 2025',
    icon: '📁',
    title: 'Document Management',
    description: 'iManage, NetDocuments for matter document intelligence and metadata extraction.',
  },
  {
    badge: '2026',
    icon: '📧',
    title: 'E-Signature Platforms',
    description: 'DocuSign, Adobe Sign for contract lifecycle insights and completion tracking.',
  },
  {
    badge: '2026',
    icon: '🔍',
    title: 'Legal Research',
    description: 'LexisNexis, Westlaw for research cost analysis and citation intelligence.',
  },
]

const setupTimeline = [
  {
    number: '1',
    title: 'Connect Your Systems',
    duration: 'Day 1-2',
    description:
      'We connect Cognify to your practice management system and Microsoft 365 environment using secure OAuth authentication.',
    details: [
      'OAuth authentication setup (no passwords shared)',
      'API permissions configuration',
      'Initial data sync (historical data import)',
      'Connection validation and testing',
    ],
  },
  {
    number: '2',
    title: 'Configure Your Dashboard',
    duration: 'Day 3-5',
    description:
      'Through simple conversational questions, we set up your Performance Dashboard with targets, tolerances, and role-based views.',
    details: [
      'Guided setup conversation (no technical knowledge required)',
      'Target setting for key metrics',
      'Tolerance band configuration',
      'Role-based view customization',
      'Intelligence Feed rule configuration',
    ],
  },
  {
    number: '3',
    title: 'Deploy to Your Team',
    duration: 'Day 6-10',
    description:
      'We activate Cognify for your team with Microsoft Co-Pilot integration. Zero training required—it works just like their other M365 tools.',
    details: [
      'User provisioning via Azure AD sync',
      'Co-Pilot plugin activation',
      'Teams app installation',
      'Role assignment and permissions',
      'Initial walkthrough session',
    ],
  },
  {
    number: '4',
    title: 'Go Live & Optimize',
    duration: 'Day 11-14',
    description:
      'Your team starts using Cognify immediately. We monitor adoption, gather feedback, and refine configurations during the first week.',
    details: [
      'Go-live announcement and support',
      'Usage monitoring and feedback collection',
      'Configuration refinement based on actual usage',
      'Additional Intelligence Feed rules as needed',
      'Ongoing support and optimization',
    ],
  },
]

const apiFeatures = [
  {
    icon: '📊',
    title: 'Query Intelligence',
    description: "Programmatically query your firm's data and receive structured responses",
  },
  {
    icon: '🔔',
    title: 'Webhook Notifications',
    description: 'Receive real-time alerts when Intelligence Feed triggers important events',
  },
  {
    icon: '🎯',
    title: 'Custom KPI Management',
    description: "Define and track custom metrics specific to your firm's unique needs",
  },
  {
    icon: '🔗',
    title: 'Third-Party Integration',
    description: 'Connect Cognify to your custom internal tools and workflows',
  },
]

export default function Integrations() {
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
              Connects to Your Entire Tech Stack
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify integrates seamlessly with your practice management system, Microsoft 365, and the tools you already use—no rip-and-replace required.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Microsoft 365 Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Core Integration
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Microsoft 365 & Co-Pilot
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify embeds directly into your Microsoft 365 environment through Co-Pilot integration, delivering intelligence where you already work.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {m365Apps.map((app, index) => (
              <M365AppCard key={index} {...app} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Practice Management Systems Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Practice Management
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Connect Your Core Systems
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Cognify pulls data from your practice management platform to power intelligence across all M365 applications.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pmsSystems.map((pms, index) => (
              <PMSCard key={index} {...pms} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon Integrations Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Roadmap
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Additional Integrations Coming Soon
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Expand Cognify's intelligence layer across your entire tech stack with upcoming integrations.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonIntegrations.map((integration, index) => (
              <ComingSoonCard key={index} {...integration} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Setup Process Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Implementation
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Simple, Fast Setup Process
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Most firms are live within 2 weeks. No complex data modeling, no dashboard building, no training required.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            {setupTimeline.map((item, index) => (
              <SetupTimelineItem
                key={index}
                {...item}
                delay={index * 0.1}
                isLast={index === setupTimeline.length - 1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* API Access Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Enterprise
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              API Access for Custom Integrations
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Build custom workflows and integrations with Cognify's REST API. Available on Enterprise plans.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div className="bg-white p-12 rounded-xl shadow-lg">
                <h3
                  className="text-3xl font-bold text-slate-900 mb-8"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  API Capabilities
                </h3>
                {apiFeatures.map((feature, index) => (
                  <APIFeatureItem key={index} {...feature} delay={index * 0.1} />
                ))}
                <Link
                  href="/contact"
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:bg-slate-900 hover:-translate-y-0.5 shadow-lg mt-8"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Contact Sales for API Access
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-900 p-8 rounded-xl font-mono text-sm text-lime-500 leading-relaxed overflow-x-auto">
                <div className="text-white/50 mb-2">// Example: Query firm revenue data</div>
                <div>
                  <span className="text-pink-400">const</span> response = <span className="text-pink-400">await</span> fetch(
                  <span className="text-yellow-300">'https://api.cognifylegal.com/v1/query'</span>, {'{'}
                </div>
                <div className="ml-4">
                  method: <span className="text-yellow-300">'POST'</span>,
                </div>
                <div className="ml-4">
                  headers: {'{'}
                </div>
                <div className="ml-8">
                  <span className="text-yellow-300">'Authorization'</span>: <span className="text-yellow-300">'Bearer YOUR_API_KEY'</span>,
                </div>
                <div className="ml-8">
                  <span className="text-yellow-300">'Content-Type'</span>: <span className="text-yellow-300">'application/json'</span>
                </div>
                <div className="ml-4">
                  {'}'},
                </div>
                <div className="ml-4">
                  body: JSON.stringify({'{'}
                </div>
                <div className="ml-8">
                  query: <span className="text-yellow-300">'revenue by practice area, last 6 months'</span>,
                </div>
                <div className="ml-8">
                  format: <span className="text-yellow-300">'structured'</span>
                </div>
                <div className="ml-4">
                  {'}'})
                </div>
                <div>
                  {'}'});
                </div>
                <div className="mt-4">
                  <span className="text-pink-400">const</span> data = <span className="text-pink-400">await</span> response.json();
                </div>
                <div className="text-white/50 mt-2">// Returns: structured revenue data</div>
              </div>
            </FadeIn>
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-lg text-slate-800 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a demo to see how Cognify integrates with your tech stack and delivers intelligence where you work.
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
                href="/contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all border-2 border-slate-900 hover:bg-slate-900 hover:text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Sales
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}

