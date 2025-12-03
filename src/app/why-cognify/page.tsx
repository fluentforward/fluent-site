import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Why Cognify',
  description: 'Why Cognify Legal is different from traditional BI solutions.',
}

export default function WhyCognify() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 pt-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
        {/* Background gradient orbs */}
        <div
          className="absolute top-0 right-0 -translate-y-[30%] translate-x-[-10%] w-[600px] h-[600px] rounded-full opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 translate-y-[20%] -translate-x-[5%] w-[500px] h-[500px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(132, 204, 22, 0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Why Cognify
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* You've Been Here Before Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
              You've Been Here Before
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Another Power BI project. Another six-figure investment. Another promise that "this time it'll be different."
              </p>
              <p className="text-xl leading-relaxed">
                Six months later, your dashboard sits unused. Your IT team is drowning in support tickets. Your partners still make decisions based on gut feeling because pulling the numbers takes too long.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-slate-900">
                The problem isn't your people. It's the approach.
              </p>
              <p className="text-xl leading-relaxed">
                Traditional BI forces your entire organisation to bend around the technology. You re-architect teams. You hire specialists. You train users who forget everything after the first session. And at the end of it all, asking a simple question still requires opening another tab, navigating another dashboard, and hoping the data refreshed overnight.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Intelligence Where You Already Work Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
              Intelligence Where You Already Work
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Cognify doesn't replace your practice management system. It doesn't demand new workflows. It meets your people where they already are: in Microsoft Teams.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-slate-900">
                Ask a question. Get an answer. In seconds, not hours.
              </p>
              <p className="text-xl leading-relaxed">
                No training required. No dashboard navigation. No waiting for IT to build another report.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-purple-600">
                Just intelligence—when you need it, where you need it.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* The Real Cost of Flying Blind Section - Lime Green */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12 overflow-hidden">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(101, 163, 13, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">
              The Real Cost of Flying Blind
            </h2>
            <p className="text-xl text-slate-950 mb-12 max-w-3xl font-medium">
              Every day without real-time visibility costs you:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <FadeIn delay={0.1}>
                <div className="bg-white/25 backdrop-blur-md p-8 rounded-2xl border border-white/40 transition-all hover:bg-white/35 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Lost Revenue</h3>
                  <ul className="space-y-3 text-slate-950">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Matters slip through billing gaps because no one spotted the pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>High-value clients go unrecognised until they've already left</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Fee earners miss utilisation targets because the feedback comes too late</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white/25 backdrop-blur-md p-8 rounded-2xl border border-white/40 transition-all hover:bg-white/35 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Operational Risk</h3>
                  <ul className="space-y-3 text-slate-950">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Cash flow issues emerge only after they've become critical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Matter profitability problems compound before anyone notices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Resource allocation decisions made with outdated information</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white/25 backdrop-blur-md p-8 rounded-2xl border border-white/40 transition-all hover:bg-white/35 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Wasted Time</h3>
                  <ul className="space-y-3 text-slate-950">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Partners spend hours in spreadsheets instead of with clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Finance teams manually compile reports that should be automatic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>Decisions delayed because getting the data takes too long</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <p className="text-xl font-semibold text-slate-900 max-w-3xl">
              The firms that win aren't the ones with the most data. They're the ones who can ask questions and act on answers—immediately.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Built From Battle Scars Section - Dark Charcoal */}
      <section className="relative bg-slate-800 py-24 px-6 lg:px-12 overflow-hidden">
        {/* Background gradient orb */}
        <div
          className="absolute top-0 right-0 -translate-y-[20%] translate-x-[-10%] w-[500px] h-[500px] rounded-full opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Built From Battle Scars
            </h2>
            <div className="prose prose-lg max-w-none text-slate-300 space-y-6">
              <p className="text-xl leading-relaxed">
                I spent over a decade implementing enterprise BI systems. I watched the same pattern repeat at firm after firm:
              </p>
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>£200K+ spent on Power BI infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Months restructuring teams around data governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Elaborate training programmes no one remembers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Adoption rates below 20%</span>
                </li>
              </ul>
              <p className="text-xl leading-relaxed font-semibold text-white">
                The firms that succeeded weren't the ones with the best dashboards. They were the ones who made intelligence effortless.
              </p>
              <p className="text-xl leading-relaxed">
                Cognify exists because I got tired of watching firms pour money into systems that create more work than insight. Your people shouldn't need a degree in data analytics to understand their own business.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* How Cognify Is Different Section */}
      <section className="relative bg-slate-50 py-24 px-6 lg:px-12">
        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-12 text-center">
              How Cognify Is Different
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Conversational, Not Visual</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ask questions in plain English. No query languages. No dashboard archaeology. If you can ask it, Cognify can answer it.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Proactive, Not Reactive</h3>
                  <p className="text-slate-600 leading-relaxed">
                    AI agents monitor your business continuously, surfacing risks and opportunities before they become problems. Matter profitability dropping? Client payment patterns changing? You'll know before it impacts cash flow.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Intelligence, Not Dashboards</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Stop training people to use dashboards. Start giving them answers. Cognify learns your firm's context—your practice areas, your KPIs, your specific way of working—and delivers insights that matter to you.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Embedded, Not Separate</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Lives in Teams, where your conversations already happen. No context switching. No separate logins. No "I'll check the dashboard later" that never happens.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} className="md:col-span-2">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Minutes to Deploy, Not Months</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Your practice management system already has the data. Cognify connects to it and starts answering questions in days, not quarters. No re-platforming. No restructuring. No ripping out existing systems.
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* De-Risk Your Business Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
              De-Risk Your Business
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl">
              Traditional BI is a gamble. Will people use it? Will it answer the right questions? Will it justify the cost?
            </p>
            <p className="text-xl font-semibold text-slate-900 mb-8">
              Cognify removes the risk:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-lime-500 font-bold text-xl mt-1">✓</span>
                <span className="text-slate-600 text-lg">Immediate ROI: Partners get insights from day one, not month six</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lime-500 font-bold text-xl mt-1">✓</span>
                <span className="text-slate-600 text-lg">Zero training overhead: If they can use Teams, they can use Cognify</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lime-500 font-bold text-xl mt-1">✓</span>
                <span className="text-slate-600 text-lg">Incremental expansion: Start with financial intelligence, add matter intelligence when ready</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lime-500 font-bold text-xl mt-1">✓</span>
                <span className="text-slate-600 text-lg">No vendor lock-in: Your data stays in your practice management system</span>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <span className="text-lime-500 font-bold text-xl mt-1">✓</span>
                <span className="text-slate-600 text-lg">Predictable cost: Transparent monthly pricing, not £150K upfront</span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* The Questions Section - Dark Charcoal */}
      <section className="relative bg-slate-800 py-24 px-6 lg:px-12 overflow-hidden">
        {/* Background gradient orb */}
        <div
          className="absolute bottom-0 left-0 translate-y-[20%] -translate-x-[10%] w-[500px] h-[500px] rounded-full opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              The Questions Your Partners Should Be Asking
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl">
              Right now, getting answers to these questions takes hours of manual work—if you can get them at all.
            </p>
            <p className="text-xl font-semibold text-lime-500 mb-8">
              With Cognify, they take seconds.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-3xl">
              <ul className="space-y-4 text-lg text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>"Which of my matters are tracking behind budget?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>"How does our cash position compare to last month?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>"Which clients haven't been billed in 60+ days?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>"What's my team's utilisation this quarter vs. target?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>"Show me WIP aging by fee earner."</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Stop Building CTA Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-500 py-24 px-6 lg:px-12 overflow-hidden">
        {/* Background gradient orbs */}
        <div
          className="absolute top-0 left-0 -translate-y-[30%] -translate-x-[10%] w-[600px] h-[600px] rounded-full opacity-150"
          style={{
            background: 'radial-gradient(circle, rgba(132, 204, 22, 0.15) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 translate-y-[30%] translate-x-[10%] w-[500px] h-[500px] rounded-full opacity-200"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Stop Building. Start Asking.
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
              The firms that thrive in the next decade won't be the ones with the most sophisticated BI infrastructure.
            </p>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed font-semibold">
              They'll be the ones whose partners can ask a question at 9am and make a decision by 9:05am.
            </p>
            <Link
              href="/schedule"
              className="inline-block bg-lime-500 text-slate-900 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:-translate-y-1 shadow-2xl shadow-lime-500/40 hover:shadow-lime-500/60"
            >
              Book a Demo
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Why Now Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
              Why Now?
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Your practice management system already captures everything. The data exists. The insights are there.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-slate-900">
                What's missing is the interface between a question and an answer.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-purple-600">
                Cognify is that interface.
              </p>
              <p className="text-xl leading-relaxed">
                Stop waiting for the "perfect BI strategy." Stop restructuring your organisation around dashboards.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-slate-900">
                Start asking questions. Start getting answers.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/schedule"
                className="inline-block bg-gradient-to-br from-lime-500 to-lime-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-lime-500/30 hover:shadow-2xl hover:shadow-lime-500/40"
              >
                Book a Demo
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}

