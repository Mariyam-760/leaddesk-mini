const accentStyles = {
  signal: "bg-signal-soft text-signal",
  teal: "bg-teal-soft text-teal",
  amber: "bg-amber-soft text-amber",
  ink: "bg-canvas-sunken text-ink",
};

export default function StatsCard({ label, value, icon: Icon, accent = "ink" }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-light">{label}</p>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentStyles[accent]}`}>
          <Icon size={16} />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl font-semibold text-ink">{value}</p>
    </div>
  );
}
