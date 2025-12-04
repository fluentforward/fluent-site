import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { JourneyStepCard } from '@/components/JourneyStepCard'
import { ImplementationPhase } from '@/components/ImplementationPhase'
import { UsageScenarioCard } from '@/components/UsageScenarioCard'
import { MetricCard } from '@/components/MetricCard'
import { OutcomeItem } from '@/components/OutcomeItem'
import { SupportCard } from '@/components/SupportCard'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how Cognify transforms your firm from first contact to measurable business outcomes—without the complexity of traditional BI.',
}

const journeySteps = [
  {
    number: '1',
    title: 'Implementation',
    description:
      'We connect your systems and configure your intelligence layer. Most firms are live within 2 weeks with zero disruption to daily operations.',
  },
  {
    number: '2',
    title: 'Daily Usage',
    description:
      'Your team uses Cognify naturally in Word, Excel, PowerPoint, Outlook, and Teams. No training required—it works like their other M365 tools.',
  },
  {
    number: '3',
    title: 'Business Impact',
    description:
      'Measure real outcomes: time saved, revenue protected, risks avoided, and better decisions made with real-time intelligence.',
  },
]

const implementationPhases = [
  {
    number: '1',
    title: 'Connect Your Systems',
    timeline: 'Days 1-3',
    description:
      'We securely connect Cognify to your practice management system and Microsoft 365 environment using OAuth authentication. Your data never leaves your systems—Cognify queries in real-time.',
    details: [
      {
        icon: '🔐',
        title: 'Secure Authentication',
        description: 'OAuth setup with your practice management system and Microsoft tenant—no passwords shared',
      },
      {
        icon: '🔄',
        title: 'Data Sync',
        description: 'Initial historical data import and real-time sync configuration via webhooks',
      },
      {
        icon: '✓',
        title: 'Connection Testing',
        description: 'Validate data flows and permissions across all integrated systems',
      },
      {
        icon: '👥',
        title: 'User Provisioning',
        description: 'Automatic user sync from Azure AD with role-based access control',
      },
    ],
  },
  {
    number: '2',
    title: 'Configure Intelligence',
    timeline: 'Days 4-7',
    description:
      "Through simple conversational questions, we set up your Performance Dashboard and Intelligence Feed. No technical expertise required—just answer questions about your firm's goals and priorities.",
    details: [
      {
        icon: '💬',
        title: 'Guided Setup',
        description: 'Conversational configuration: "What\'s your target revenue per partner?" "What utilization rate is healthy?"',
      },
      {
        icon: '🎯',
        title: 'Target Setting',
        description: 'Establish KPI targets, tolerance bands, and performance thresholds for your firm',
      },
      {
        icon: '🔔',
        title: 'Alert Rules',
        description: 'Configure Intelligence Feed to surface the insights that matter most to your practice',
      },
      {
        icon: '👔',
        title: 'Role Views',
        description: 'Customize dashboard views for managing partners, practice heads, and individual partners',
      },
    ],
  },
  {
    number: '3',
    title: 'Deploy & Train',
    timeline: 'Days 8-12',
    description:
      'We activate Cognify for your team with Microsoft Co-Pilot integration. The interface is familiar—it works just like their other M365 applications. A brief walkthrough session gets everyone started.',
    details: [
      {
        icon: '🚀',
        title: 'Co-Pilot Activation',
        description: 'Enable Cognify plugin across Word, Excel, PowerPoint, Outlook, and Teams',
      },
      {
        icon: '📱',
        title: 'Teams App',
        description: 'Install Intelligence Feed and Performance Dashboard tabs in Microsoft Teams',
      },
      {
        icon: '🎓',
        title: 'Walkthrough Session',
        description: '30-minute session showing key features and common use cases—not traditional "training"',
      },
      {
        icon: '📚',
        title: 'Resource Library',
        description: 'Quick reference guides and video tutorials available in Teams',
      },
    ],
  },
  {
    number: '4',
    title: 'Go Live & Optimize',
    timeline: 'Days 13-14',
    description:
      'Your team starts using Cognify immediately. We monitor adoption metrics, gather feedback, and refine configurations based on actual usage patterns during the first two weeks.',
    details: [
      {
        icon: '📣',
        title: 'Go-Live Announcement',
        description: 'Firm-wide communications and executive sponsorship messaging',
      },
      {
        icon: '📊',
        title: 'Usage Monitoring',
        description: 'Track adoption, query patterns, and feature utilization across the firm',
      },
      {
        icon: '🔧',
        title: 'Configuration Tuning',
        description: 'Refine alert thresholds and dashboard views based on real usage',
      },
      {
        icon: '💬',
        title: 'Feedback Loop',
        description: 'Collect user feedback and adjust Intelligence Feed rules for maximum relevance',
      },
    ],
  },
]

const usageScenarios = [
  {
    icon: '📄',
    title: 'Partner Drafts Client Proposal',
    description: 'A partner is preparing a proposal for a potential client and needs current team capacity and relevant experience.',
    flowSteps: [
      {
        label: 'Action',
        text: 'Opens Word to draft proposal, asks Cognify in Co-Pilot: "Show me our corporate team\'s utilization and recent M&A deals"',
      },
      {
        label: 'Cognify Response',
        text: 'Returns formatted table with team capacity (82% utilized, can take new work) and list of 5 relevant recent matters with values and outcomes',
      },
      {
        label: 'Result',
        text: 'Partner inserts data directly into proposal with one click. What used to take 30 minutes of digging through systems now takes 30 seconds.',
      },
    ],
  },
  {
    icon: '🔔',
    title: 'Intelligence Feed Alert',
    description: 'Monday morning, a partner is reviewing emails when an Intelligence Feed notification appears in Teams.',
    flowSteps: [
      {
        label: 'Alert',
        text: '"Client ABC hasn\'t been invoiced in 45 days despite 12.5 hours of unbilled time—potential £4,800 revenue leak"',
      },
      {
        label: 'Action',
        text: 'Partner clicks "Investigate" to see matter details, realizes invoice was never generated due to administrative oversight',
      },
      {
        label: 'Result',
        text: 'Immediately instructs admin team to generate invoice. Revenue protected, client relationship maintained. Would have been missed without proactive alert.',
      },
    ],
  },
  {
    icon: '✉️',
    title: 'Contextual Email Intelligence',
    description: 'A partner is composing an email to a long-time client about a new matter opportunity.',
    flowSteps: [
      {
        label: 'Context Detection',
        text: 'As partner types client name in Outlook, Cognify sidebar automatically shows: 3 active matters, £15K outstanding invoice (60 days overdue), relationship health score: "At Risk"',
      },
      {
        label: 'Decision',
        text: 'Partner realizes they should address payment issue before pitching new work. Adjusts email tone and approach accordingly.',
      },
      {
        label: 'Result',
        text: 'Potential awkward situation avoided. Partner addresses collections issue diplomatically, strengthening rather than damaging relationship.',
      },
    ],
  },
  {
    icon: '📊',
    title: 'Monthly Partner Meeting',
    description: 'Managing partner is preparing slides for monthly partner meeting 30 minutes before it starts.',
    flowSteps: [
      {
        label: 'Time Pressure',
        text: 'Opens PowerPoint, asks Cognify: "Create practice area performance slide showing revenue, utilization, and realization for last quarter"',
      },
      {
        label: 'Instant Generation',
        text: 'Cognify generates professional slide with current data: bar charts, variance indicators, and key insights highlighted',
      },
      {
        label: 'Result',
        text: 'Partner meeting proceeds with current, accurate data. No last-minute scrambling, no outdated numbers, no manual chart building.',
      },
    ],
  },
]

const metrics = [
  {
    value: '85%',
    label: 'Reduction in time-to-insight',
  },
  {
    value: '£47K',
    label: 'Average revenue protected in first year',
  },
  {
    value: '2 hrs',
    label: 'Saved per partner per week',
  },
]

const outcomes = [
  '<strong>Revenue Protection:</strong> Unbilled time identified and invoiced before write-off deadlines',
  '<strong>Better Resource Allocation:</strong> Real-time capacity visibility enables optimal matter staffing',
  '<strong>Risk Mitigation:</strong> Critical deadlines and client issues flagged before they become crises',
  '<strong>Faster Decision Making:</strong> Partners access data instantly without waiting for reports',
  '<strong>Improved Client Service:</strong> Contextual intelligence ensures informed client communications',
  '<strong>Data-Driven Strategy:</strong> Leadership makes decisions based on real-time metrics, not intuition',
  '<strong>Eliminated BI Waste:</strong> No more unused dashboards or failed implementation investments',
  '<strong>Sustainable Adoption:</strong> Usage increases over time as team discovers new use cases',
]

const supportCards = [
  {
    icon: '📧',
    title: 'Responsive Support',
    description: 'Email support with priority response times based on your plan tier. Technical issues resolved quickly.',
    details: ['Starter: 24-hour response', 'Professional: 4-hour response', 'Enterprise: 1-hour response'],
  },
  {
    icon: '📚',
    title: 'Knowledge Base',
    description: 'Comprehensive documentation, video tutorials, and guides accessible directly in Teams.',
    details: ['Getting started guides', 'Feature walkthroughs', 'Common use cases', 'Troubleshooting tips'],
  },
  {
    icon: '🔄',
    title: 'Regular Check-Ins',
    description: 'Professional and Enterprise plans include scheduled reviews to optimize your configuration.',
    details: ['Quarterly business reviews', 'Usage analytics review', 'Configuration optimization', 'New feature previews'],
  },
]

export default function HowItWorks() {
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
              From Setup to Success
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              See how Cognify transforms your firm from first contact to measurable business outcomes—without the complexity of traditional BI.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your Journey with Cognify
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              From demo to daily usage in three simple phases. No lengthy implementations, no complex training, no dashboard building.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <JourneyStepCard key={index} {...step} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Phase 1
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Implementation in 2 Weeks
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Fast, simple setup with no complex data modeling or dashboard building. We handle the technical work while you continue serving clients.
            </p>
          </FadeIn>

          {implementationPhases.map((phase, index) => (
            <ImplementationPhase key={index} {...phase} delay={index * 0.1} />
          ))}
        </Container>
      </section>

      {/* Daily Usage Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Phase 2
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Daily Usage Scenarios
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              See how Cognify embeds into your team's actual workflow—delivering intelligence at the moment they need it.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usageScenarios.map((scenario, index) => (
              <UsageScenarioCard key={index} {...scenario} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Success Metrics Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Phase 3: Measurable Business Impact
            </h2>
            <p className="text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Track concrete outcomes from Cognify adoption—not just usage metrics, but real business value delivered to your firm.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} delay={index * 0.1} />
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-slate-900 p-12 rounded-xl text-white">
              <h3
                className="text-3xl font-bold text-center mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What Success Looks Like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => (
                  <OutcomeItem key={index} text={outcome} delay={index * 0.05} />
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Support Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ongoing
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Continuous Support & Optimization
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We don't disappear after go-live. Ongoing support ensures you maximize value from Cognify as your firm grows.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCards.map((card, index) => (
              <SupportCard key={index} {...card} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 text-center text-white">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a demo to see the implementation process and daily usage scenarios tailored to your firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/book-demo"
                className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-lime-500/40 hover:shadow-2xl hover:shadow-lime-500/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="bg-white/15 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 backdrop-blur-md hover:bg-white/25 hover:border-white/50"
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

