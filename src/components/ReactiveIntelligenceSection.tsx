import { Container } from './Container'
import { FadeIn } from './FadeIn'

const apps = [
  {
    icon: '📄',
    title: 'In Word',
    description: "Drafting a client proposal? Ask Cognify to insert matter status, billing history, or team utilization directly into your document. No copy-paste, no manual formatting.",
    screenshot: {
      title: 'WORD INTEGRATION',
      description: 'Screenshot: Microsoft Word document with Cognify sidebar showing. User typing in document, Co-Pilot panel on right showing "Insert billing history for Client ABC" with formatted table ready to insert. Demonstrates seamless document creation workflow.',
    },
  },
  {
    icon: '📊',
    title: 'In Excel',
    description: "Building a financial model? Request revenue projections, matter profitability, or client concentration data that populates automatically with current figures.",
    screenshot: {
      title: 'EXCEL INTEGRATION',
      description: 'Screenshot: Excel spreadsheet being populated by Cognify. Shows natural language query "Show me revenue by practice area, last 6 months" resulting in automatically generated table with data and formatting. Demonstrates data analysis power.',
    },
  },
  {
    icon: '📊',
    title: 'In PowerPoint',
    description: "Preparing a board presentation? Pull in real-time KPIs, practice area performance, or pipeline analysis. Your slides stay current with live data.",
    screenshot: {
      title: 'POWERPOINT INTEGRATION',
      description: 'Screenshot: PowerPoint presentation with Cognify creating a slide. Shows command "Create practice area performance slide" generating professional slide with charts and KPIs. Perfect for board presentations.',
    },
  },
  {
    icon: '✉️',
    title: 'In Outlook',
    description: "Emailing a client? See contextual intelligence about outstanding invoices, matter status, or relationship health without leaving your inbox. Smart context, zero effort.",
    screenshot: {
      title: 'OUTLOOK INTEGRATION',
      description: 'Screenshot: Outlook email composition with Cognify contextual sidebar. Email to "Client ABC" triggers sidebar showing outstanding invoices, matter status, relationship health. Demonstrates contextual intelligence.',
    },
  },
]

export function ReactiveIntelligenceSection() {
  return (
    <section id="solution" className="relative bg-slate-50 py-24 px-6 lg:px-12">
      <Container className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <div
            className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Reactive Intelligence
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Answers Where You Work
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Cognify embeds into Microsoft 365 through Co-Pilot integration. When you need data, it's immediately available—in Word, Excel, PowerPoint, Outlook, and Teams. No context switching. No separate apps.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 min-h-[250px] flex items-center justify-center border-b-4 border-indigo-600">
                  <div className="bg-white/50 border-2 border-dashed border-indigo-600 rounded-lg p-8 text-center w-full min-h-[200px] flex flex-col justify-center items-center">
                    <strong className="block text-lg text-slate-900 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {app.screenshot.title}
                    </strong>
                    <small className="block text-sm text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {app.screenshot.description}
                    </small>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3
                    className="text-2xl font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {app.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {app.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

