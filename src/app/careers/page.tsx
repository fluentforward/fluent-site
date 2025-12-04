import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StageCard } from '@/components/StageCard'
import { ValueCard } from '@/components/ValueCard'
import { RoleCard } from '@/components/RoleCard'
import { ChecklistItem } from '@/components/ChecklistItem'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join us in building the future of legal intelligence. Help us eliminate the £100K+ waste that law firms experience with traditional BI.',
}

const stages = [
  {
    icon: '🚀',
    title: 'Early Stage',
    description: 'Post-MVP with first customers onboarded. Preparing for pre-seed fundraising while maintaining focus on execution velocity.',
  },
  {
    icon: '💰',
    title: 'Revenue Generating',
    description: 'First paying customer at £1K/month with pipeline representing significant potential ARR. Product-market fit validated.',
  },
  {
    icon: '🎯',
    title: 'Focused Market',
    description: 'Clear target: mid-market UK law firms (20-200 staff) using ActionStep or Clio who\'ve struggled with traditional BI.',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Adoption Over Features',
    description: 'We measure success by whether people actually use what we build, not by feature count. The best technology is invisible—it just works.',
  },
  {
    icon: '⚡',
    title: 'Execution Velocity',
    description: 'We ship fast, learn quickly, and iterate based on real customer feedback. Perfection is the enemy of progress.',
  },
  {
    icon: '🤝',
    title: 'Customer Partnership',
    description: 'Our founding clients aren\'t just users—they\'re partners shaping the product. We build with them, not for them.',
  },
  {
    icon: '🔍',
    title: 'Radical Transparency',
    description: 'We\'re honest about what we can and can\'t do, our current stage, and our limitations. No overpromising, no BS.',
  },
  {
    icon: '📊',
    title: 'Outcomes, Not Outputs',
    description: 'We care about business impact—revenue protected, time saved, risks avoided—not lines of code or features shipped.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Growth',
    description: 'We\'re building for the long term. That means saying no to opportunities that don\'t align with our mission and maintaining work-life balance.',
  },
]

const futureRoles = [
  {
    icon: '💻',
    title: 'Full-Stack Engineer',
    timing: 'Q2 2025',
    description: 'Generalist engineer comfortable with TypeScript, React, Node.js, and Azure/AWS. Experience with Microsoft 365 APIs and multi-tenant architecture a plus.',
  },
  {
    icon: '🎨',
    title: 'Product Designer',
    timing: 'Q3 2025',
    description: 'Designer who understands both B2B SaaS and AI-powered interfaces. Passionate about making complex systems feel simple and obvious.',
  },
  {
    icon: '📈',
    title: 'Growth Lead',
    timing: 'Q3 2025',
    description: 'Experienced in outbound sales to professional services firms. Comfortable with founder-led sales transitioning to scalable processes.',
  },
  {
    icon: '🤝',
    title: 'Customer Success',
    timing: 'Q4 2025',
    description: 'Former legal operations professional or practice management consultant who understands law firm workflows and challenges.',
  },
  {
    icon: '🔧',
    title: 'Integration Engineer',
    timing: '2026',
    description: 'Specialist in building and maintaining integrations with practice management systems, accounting software, and enterprise platforms.',
  },
  {
    icon: '📝',
    title: 'Technical Writer',
    timing: '2026',
    description: 'Someone who can translate complex technical concepts into clear documentation and help content for non-technical law firm users.',
  },
]

const checklistItems = [
  'You\'ve read our <a href="/about" style="color: #4F46E5; font-weight: 700;">about page</a> and understand our mission and approach',
  'You have specific ideas about how you could contribute to solving our customers\' problems',
  'You\'re comfortable with early-stage uncertainty and the reality that we may not have immediate opportunities',
  'You can articulate why this specific problem (BI adoption in law firms) interests you',
  'You\'re based in or willing to relocate to the UK (we\'re building a UK-focused team)',
]

export default function Careers() {
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
              Join Us in Building the Future
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Help us eliminate the £100K+ waste that law firms experience with traditional BI by delivering intelligence where lawyers actually work.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2
              className="text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why Cognify Exists
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We're solving a real problem that costs law firms millions collectively: traditional business intelligence platforms that nobody uses. After witnessing this same failure pattern across dozens of enterprises over more than a decade, we're building the solution—intelligence that embeds into daily workflow rather than sitting in forgotten dashboards.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              This isn't about building another BI tool. It's about fundamentally rethinking how professional services firms access and act on data. If that mission resonates with you, we'd love to talk.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Stage Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
        <Container className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Where We Are
            </h2>
            <p className="text-lg text-slate-800 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Early-stage startup with first paying customers, validated product-market fit, and clear path to revenue growth.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <StageCard key={index} {...stage} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Values
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What We Believe
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              The principles that guide how we build, who we hire, and how we treat customers and each other.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Future Roles Section */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-lime-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Future Hiring
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Roles We'll Be Hiring
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              As we grow and secure funding, these are the areas where we'll need exceptional people.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureRoles.map((role, index) => (
              <RoleCard key={index} {...role} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Current Openings Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto text-center">
          <FadeIn className="mb-12">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Current Openings
            </div>
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Open Positions
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-16 rounded-xl mb-12">
              <div className="text-7xl mb-6">📭</div>
              <h2
                className="text-4xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                No Active Openings
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We're not actively hiring right now as we're in the early stages of building out our founding client base and preparing for fundraising.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                However, if you're exceptional at what you do and passionate about our mission, we'd still love to hear from you. See below for how to reach out.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Speculative Applications Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
        <Container className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Think You Can Add Value?
                </h2>
                <p className="text-lg text-slate-800 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Even though we're not actively hiring, we're always interested in talking to exceptional people who are genuinely excited about what we're building.
                </p>
                <p className="text-lg text-slate-800 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  If you have relevant experience, unique skills, or insights that could help us solve the traditional BI adoption problem in law firms, we want to hear from you.
                </p>
                <a
                  href="mailto:careers@cognifylegal.com"
                  className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get in Touch
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-xl shadow-lg">
                <h3
                  className="text-2xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Before You Reach Out
                </h3>
                {checklistItems.map((item, index) => (
                  <ChecklistItem key={index} text={item} delay={index * 0.05} />
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  )
}

