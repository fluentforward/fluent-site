/**
 * Illustrative product UI inspired by the Profit Engine client scorecard.
 * Figures are fictional; not a live client readout.
 */
export function ProfitEngineScorecardVisual() {
  return (
    <aside
      className="relative overflow-hidden rounded-card border border-white/12 bg-[#070708] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] md:p-7"
      aria-label="Illustrative Profit Engine scorecard (sample figures)"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-mist">
            Profit Engine
          </p>
          <p className="mt-1 font-display text-lg font-semibold tracking-[-0.02em] text-paper">
            Sample firm scorecard
          </p>
        </div>
        <span className="rounded border border-dashed border-white/25 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-mist">
          Illustration only
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1.15fr_1fr] md:items-start">
        <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-mist">
            Profit movement
          </p>
          <p className="mt-3 text-[15px] leading-snug text-[#e6e6ea]">
            Proposals now reach clients in{' '}
            <strong className="text-paper">4.2 days</strong>, down from{' '}
            <span className="text-mist">9</span>. Partners have{' '}
            <strong className="text-paper">11 days a month</strong> back for billable work.
          </p>
          <p className="mt-3 text-[13px] text-mist">
            Binding lever tagged on the scorecard. Realtime Offers · Demand · Delivery.
          </p>
        </div>
        <dl className="grid gap-3 text-[13px]">
          {[
            { k: 'Offers', v: 'Average fee per new engagement', from: '48.2k', to: '49.0k', d: '+1.7%' },
            { k: 'Demand', v: 'Qualified opportunities / month', from: '14', to: '15', d: '+1' },
            {
              k: 'Delivery',
              v: 'Median proposal turnaround',
              from: '9.0d',
              to: '4.2d',
              d: '−53%',
              highlight: true,
            },
          ].map((row) => (
            <div
              key={row.k}
              className={`rounded-[10px] border px-3 py-2.5 ${
                row.highlight
                  ? 'border-accent/45 bg-accent/[0.07]'
                  : 'border-white/10 bg-black/20'
              }`}
            >
              <dt className="flex items-baseline justify-between gap-2">
                <span className={row.highlight ? 'text-accent' : 'text-[#d9d9dd]'}>{row.k}</span>
                {row.highlight ? (
                  <span className="rounded bg-accent/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-accent">
                    Binding
                  </span>
                ) : null}
              </dt>
              <dd className="mt-1 text-mist">{row.v}</dd>
              <dd className="mt-2 flex flex-wrap items-baseline gap-x-2 text-[12px] text-[#c8c8cd]">
                <span>
                  {row.from} to <strong className="text-paper">{row.to}</strong>
                </span>
                <span className={row.highlight ? 'text-accent' : 'text-mist'}>{row.d}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.06em] text-mist">
        AI agents and automation sit on the scored lever. Your firm owns the workflows.
      </p>
    </aside>
  )
}
