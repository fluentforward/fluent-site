import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { AuthorSection } from '@/components/AuthorSection'
import { TableOfContents } from '@/components/TableOfContents'
import { ShareButtons } from '@/components/ShareButtons'
import { RelatedPostCard } from '@/components/RelatedPostCard'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // For now, return default metadata. Later this can be fetched from CMS
  return {
    title: 'Why Traditional BI Fails in Law Firms: The £100K Problem',
    description: 'After witnessing dozens of failed BI implementations across enterprises, one pattern became crystal clear: law firms invest heavily in platforms like Power BI and Tableau, achieve single-digit adoption rates, and waste massive resources.',
  }
}

const tableOfContents = [
  { label: 'The Typical BI Pattern', href: '#typical-pattern' },
  { label: 'Two Fundamental Problems', href: '#fundamental-problems' },
  { label: 'Why Law Firms Are Affected', href: '#law-firms' },
  { label: 'The Real Solution', href: '#solution' },
  { label: 'What This Means for You', href: '#your-firm' },
]

const relatedPosts = [
  {
    slug: 'two-failure-modes-of-business-intelligence',
    title: 'The Two Failure Modes of Business Intelligence',
    excerpt: 'Deep dive into why BI implementations fail: people don\'t go look, and they don\'t know what to ask.',
    imageAlt: 'Related post image',
  },
  {
    slug: 'intelligence-where-you-work-microsoft-365',
    title: 'Intelligence Where You Work: The M365 Advantage',
    excerpt: 'Why embedding intelligence into Word, Excel, and PowerPoint eliminates the adoption problem.',
    imageAlt: 'Related post image',
  },
  {
    slug: 'proactive-vs-reactive-intelligence',
    title: 'Proactive vs. Reactive Intelligence',
    excerpt: 'The difference between answering questions when asked versus surfacing critical issues automatically.',
    imageAlt: 'Related post image',
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  // For now, just render the example content. Later this will fetch from CMS based on slug
  const post = {
    slug: params.slug,
    title: 'Why Traditional BI Fails in Law Firms: The £100K Problem',
    subtitle: 'After witnessing dozens of failed BI implementations across enterprises, one pattern became crystal clear: law firms invest heavily in platforms like Power BI and Tableau, achieve single-digit adoption rates, and waste massive resources. Here\'s why it happens—and what needs to change.',
    category: 'Business Intelligence',
    date: 'December 1, 2024',
    readTime: '8 min read',
    imageAlt: 'FEATURED IMAGE\n\nVisual showing empty dashboard analytics with cobwebs, representing unused BI tools. Include overlay text "£100K+ wasted on dashboards nobody opens"',
  }

  return (
    <>
      {/* Article Header */}
      <section className="relative mt-20 bg-slate-50 py-16 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex gap-2 mb-8 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Link href="/blog" className="text-indigo-600 hover:text-lime-500 transition-colors">
                Blog
              </Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-700">{post.category}</span>
            </div>

            <div className="flex gap-4 mb-8 flex-wrap">
              <span className="bg-lime-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {post.category}
              </span>
              <span className="text-slate-700 opacity-70 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                📅 {post.date}
              </span>
              <span className="text-slate-700 opacity-70 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                ⏱️ {post.readTime}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {post.title}
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {post.subtitle}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="relative bg-slate-50 py-8 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-dashed border-indigo-600 rounded-xl min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] flex items-center justify-center p-8 sm:p-12 text-center">
              <strong className="text-lg text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {post.imageAlt}
              </strong>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Article Body */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 max-w-4xl">
              <div
                className="prose prose-lg max-w-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <FadeIn delay={0.2}>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    I've spent the last decade implementing business intelligence systems across multiple industries. I was the person organizations hired to "finally get their data working for them." And I watched the same story play out again and again: massive investment, beautiful dashboards, single-digit adoption rates, and ultimately, abandoned projects.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    But nowhere was this pattern more pronounced—and more costly—than in law firms. Despite investing £100K+ in BI platforms, consulting fees, and internal resources, most mid-market law firms end up with dashboards that nobody opens and insights that nobody acts on.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    Let me explain why this keeps happening, and why it's not actually about the technology.
                  </p>

                  <h2
                    id="typical-pattern"
                    className="text-3xl font-bold text-slate-900 mb-6 mt-12"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    The Typical BI Implementation Pattern
                  </h2>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Here's how it usually goes:
                  </p>

                  <ol className="list-decimal list-inside space-y-4 mb-12 text-lg text-slate-700">
                    <li><strong>Month 1-2:</strong> Firm leadership decides they need "better data visibility" and purchases Power BI or Tableau licenses</li>
                    <li><strong>Month 3-6:</strong> Consultants are brought in to build dashboards and connect data sources</li>
                    <li><strong>Month 7-8:</strong> Big reveal presentation shows beautiful visualizations and sophisticated KPIs</li>
                    <li><strong>Month 9-12:</strong> Usage drops off dramatically as partners return to their spreadsheets</li>
                    <li><strong>Year 2:</strong> Dashboard maintenance becomes a burden, licenses go unused, project is quietly abandoned</li>
                  </ol>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    Sound familiar? This isn't just anecdotal—I've seen this exact pattern across dozens of implementations. And the cost isn't just the software licenses. It's the consulting fees (£35K+), the internal time building and maintaining dashboards (£25K+), the training programs nobody attends (£15K+), and the opportunity cost of decisions made without proper data.
                  </p>

                  <h2
                    id="fundamental-problems"
                    className="text-3xl font-bold text-slate-900 mb-6 mt-12"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    The Two Fundamental Problems
                  </h2>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    After years of watching these implementations fail, I've identified two core problems that traditional BI platforms can't solve:
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Problem 1: People Don't Go Look
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    No matter how good your dashboards are, busy partners aren't opening another application to check metrics. They're billing at £400/hour. They're in client meetings. They're in court. The dashboard lives in a different app, requires them to remember to check it, and competes with dozens of other priorities.
                  </p>

                  <blockquote className="bg-slate-50 border-l-4 border-lime-500 pl-8 py-6 my-8 italic text-lg text-slate-700">
                    "We built beautiful Power BI dashboards. Usage peaked at 15% of partners in month one, dropped to 5% by month three, and was effectively zero by month six. The dashboards were excellent. The problem was getting anyone to look at them."
                    <br />
                    <span className="not-italic font-semibold mt-2 block">— Practice Manager, 80-person UK firm</span>
                  </blockquote>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    This isn't a training problem. It's not a change management problem. It's a fundamental friction problem. Every time someone needs to:
                  </p>

                  <ul className="list-disc list-inside space-y-3 mb-12 text-lg text-slate-700">
                    <li>Stop what they're doing</li>
                    <li>Open a separate application</li>
                    <li>Remember their login credentials</li>
                    <li>Navigate to the right dashboard</li>
                    <li>Figure out what to look for</li>
                  </ul>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    ...you've introduced five opportunities for them to decide it's not worth the effort.
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Problem 2: People Don't Know What to Ask
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Even when partners do open dashboards, they often don't know which metrics matter or what questions to ask. Is 75% utilization good or bad? What's a healthy realization rate? How much unbilled time is normal before it becomes a problem?
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Traditional BI assumes users know:
                  </p>

                  <ul className="list-disc list-inside space-y-3 mb-12 text-lg text-slate-700">
                    <li>Which metrics to monitor</li>
                    <li>What "good" looks like for each metric</li>
                    <li>When to be concerned about trends</li>
                    <li>What actions to take when issues arise</li>
                  </ul>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    But most partners aren't data analysts. They're lawyers. They need the system to tell them "this needs attention" rather than presenting them with 47 different charts and hoping they spot the problem.
                  </p>

                  <div className="bg-lime-500 p-8 rounded-xl my-12">
                    <h4
                      className="text-xl font-bold text-slate-900 mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      The £100K Breakdown
                    </h4>
                    <div className="space-y-2 text-slate-800">
                      <p><strong>Software licenses:</strong> £12,000/year for mid-market firm</p>
                      <p><strong>Implementation consulting:</strong> £35,000 (one-time)</p>
                      <p><strong>Training & change management:</strong> £15,000</p>
                      <p><strong>Internal data team time:</strong> £25,000 building dashboards</p>
                      <p><strong>Ongoing maintenance:</strong> £18,000/year</p>
                      <p className="pt-2 border-t-2 border-slate-900/20"><strong>Total Year 1 Investment:</strong> £105,000</p>
                      <p><strong>Typical ROI:</strong> Effectively zero due to less than 5% sustained adoption</p>
                    </div>
                  </div>

                  <h2
                    id="law-firms"
                    className="text-3xl font-bold text-slate-900 mb-6 mt-12"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Why Law Firms Are Particularly Affected
                  </h2>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    These problems exist across industries, but law firms face unique challenges that make traditional BI especially problematic:
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    1. Time is Literally Money
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    When your partners bill at £300-600/hour, every minute spent navigating BI tools is expensive. The opportunity cost of checking dashboards regularly is prohibitively high—even when the insights would be valuable.
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    2. No Dedicated Data Teams
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Large enterprises have data analysts, BI developers, and dashboard designers. Mid-market law firms (20-200 staff) typically don't. This means either expensive consultants maintain dashboards indefinitely, or the burden falls on office managers who already have full-time jobs.
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    3. Complex, Specialized Metrics
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Legal-specific KPIs like realization rates, matter profitability, lock-up periods, and utilization calculations require deep domain knowledge. Generic BI platforms don't understand these metrics out of the box, requiring extensive customization.
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    4. Resistance to Change
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    Partners have been making decisions based on instinct, relationships, and experience for decades. Convincing them to check dashboards regularly requires overcoming significant inertia—especially when the value isn't immediately obvious.
                  </p>

                  <h2
                    id="solution"
                    className="text-3xl font-bold text-slate-900 mb-6 mt-12"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    The Real Solution: Intelligence, Not Dashboards
                  </h2>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The fundamental problem with traditional BI is the assumption that users will come to the data. The solution is to bring intelligence to the users—where they're already working.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    This means two things:
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Reactive Intelligence
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    When partners are actively working in Word, Excel, PowerPoint, or Outlook, intelligence should be available right there—not in a separate dashboard they need to remember to check. Ask a question in natural language, get an answer immediately, without switching context.
                  </p>

                  <h3
                    className="text-2xl font-bold text-slate-900 mb-4 mt-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Proactive Intelligence
                  </h3>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    Critical insights should surface automatically before they become problems. Don't wait for partners to check if there's unbilled time aging past 45 days—tell them proactively. Don't hope they notice a utilization drop—flag it before it impacts profitability.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    This eliminates both fundamental problems: People don't need to "go look" because intelligence comes to them, and they don't need to "know what to ask" because the system tells them what matters.
                  </p>

                  <h2
                    id="your-firm"
                    className="text-3xl font-bold text-slate-900 mb-6 mt-12"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    What This Means for Your Firm
                  </h2>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    If you're considering a traditional BI implementation, ask yourself:
                  </p>

                  <ul className="list-disc list-inside space-y-3 mb-12 text-lg text-slate-700">
                    <li>How will we ensure partners actually open dashboards regularly?</li>
                    <li>Who will maintain dashboards when consultants leave?</li>
                    <li>How will users know which metrics matter and when to act?</li>
                    <li>What's our plan when adoption drops after the initial launch?</li>
                  </ul>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    If you don't have strong answers to these questions, you're likely about to join the long list of failed BI implementations. The technology isn't the problem—the delivery model is.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The future of business intelligence in law firms isn't better dashboards. It's eliminating the need for dashboards entirely by embedding intelligence into daily workflow and proactively surfacing what matters.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    That's what we're building at Cognify. Not because we think we can build better dashboards than Power BI—we can't. But because we've learned that adoption is everything, and the only way to achieve adoption is to meet people where they already work.
                  </p>

                  <AuthorSection
                    name="Matt"
                    title="Founder & CEO, Cognify Legal"
                    bio="After more than a decade implementing BI systems across industries and watching them consistently fail to achieve adoption, Matt founded Cognify to solve the fundamental problem: people don't open dashboards. Previously an enterprise consultant specializing in digital transformation and business intelligence."
                    learnMoreHref="/about"
                    delay={0.3}
                  />
                </FadeIn>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={tableOfContents} delay={0.2} />
                <ShareButtons
                  url={`https://cognifylegal.com/blog/${post.slug}`}
                  title={post.title}
                  delay={0.3}
                />
                <FadeIn delay={0.4}>
                  <div className="bg-indigo-600 text-white p-8 rounded-xl text-center">
                    <h4
                      className="text-xl font-bold mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      See Cognify in Action
                    </h4>
                    <p className="text-white/90 mb-6 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Book a demo to see how we eliminate the adoption problem by embedding intelligence into Microsoft 365.
                    </p>
                    <Link
                      href="/book-demo"
                      className="inline-block bg-lime-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Book a Demo
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h3
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Related Articles
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <RelatedPostCard key={index} {...relatedPost} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
