export function ProfitConstraintReadout() {
  const rows = [
    { key: 'Offers', value: 0.76, bind: false },
    { key: 'Demand', value: 0.4, bind: true },
    { key: 'Delivery', value: 0.65, bind: false },
  ] as const

  return (
    <aside
      className="readout-card relative p-6"
      aria-label="Example Profit Constraint Score readout"
    >
      <div className="flex items-center justify-between border-b border-line-dark pb-4 text-[#d9d9dd]">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.08em]">
          Profit Constraint Score
        </span>
        <span className="rounded border border-dashed border-white/25 px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-mist">
          Example readout
        </span>
      </div>

      <div className="grid gap-4 py-5">
        {rows.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[4.75rem_1fr_2rem] items-center gap-3.5 text-[15px]"
          >
            <span className={row.bind ? 'text-accent' : 'text-[#d9d9dd]'}>
              {row.key}
            </span>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <span
                className={`block h-full rounded-full ${row.bind ? 'bg-accent' : 'bg-[#e9e9ec]'}`}
                style={{ width: `${row.value * 100}%` }}
              />
            </div>
            <span
              className={`text-right text-[13px] ${row.bind ? 'text-accent' : 'text-[#d9d9dd]'}`}
            >
              {Math.round(row.value * 100)}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-[10px] border border-accent/30 bg-accent/8 px-4 py-4">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent">
          Binding constraint
        </p>
        <p className="mt-2 text-[15px] leading-snug text-[#d9d9dd]">
          <strong className="text-paper">Demand</strong> is capping margin before
          Offers or Delivery can compound. Fix pipeline quality and volume before
          you add delivery capacity.
        </p>
      </div>

      <div className="mt-4 flex justify-between font-mono text-[10.5px] uppercase tracking-[0.06em] text-mist">
        <span>3 minutes</span>
        <span>Instant result</span>
        <span>Free</span>
      </div>
    </aside>
  )
}
