import { ArrowRight, TrendingUp, Users, CircleDot } from "lucide-react";

const activityItems = [
  {
    title: "New lead received",
    time: "2 mins ago",
    color: "bg-blue-500",
  },
  {
    title: "Sales follow-up completed",
    time: "18 mins ago",
    color: "bg-amber-500",
  },
  {
    title: "Lead converted successfully",
    time: "1 hour ago",
    color: "bg-emerald-500",
  },
];

const statusStyles = {
  New: "bg-signal-soft text-signal",
  Contacted: "bg-amber-soft text-amber",
  Closed: "bg-teal-soft text-teal",
};

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <div>
          <span className="eyebrow">Built for small sales teams</span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Capture leads.
            <br />
            Manage them better.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-light">
            LeadDesk Mini gives your team one clean place to collect inbound leads,
            track their status, and follow up before someone else does.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#lead-form" className="btn-primary">
              Get Started
              <ArrowRight size={16} />
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 border-t border-line pt-6">
            <div>
              <p className="font-display text-2xl font-semibold text-ink">8k+</p>
              <p className="text-sm text-ink-light">Leads captured</p>
            </div>
            <div className="h-8 w-px bg-line" />
            <div>
              <p className="font-display text-2xl font-semibold text-ink">96%</p>
              <p className="text-sm text-ink-light">Response rate</p>
            </div>
          </div>
        </div>

        {/* Right: dashboard illustration made of cards + icons only */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-xl2 bg-signal-soft/60 blur-2xl" aria-hidden="true" />

          <div className="card p-5 shadow-pop sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-ink-light">Lead pipeline</p>
                <p className="font-display text-lg font-semibold text-ink">This week</p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal">
                <TrendingUp size={13} />
                +18%
              </span>
            </div>

            {/* mini stat tiles */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-line bg-canvas-sunken p-3">
                <Users size={15} className="text-ink-faint" />
                <p className="mt-2 font-display text-xl font-semibold text-ink">42</p>
                <p className="text-xs text-ink-light">Total</p>
              </div>
              <div className="rounded-xl border border-line bg-canvas-sunken p-3">
                <CircleDot size={15} className="text-signal" />
                <p className="mt-2 font-display text-xl font-semibold text-ink">12</p>
                <p className="text-xs text-ink-light">New</p>
              </div>
              <div className="rounded-xl border border-line bg-canvas-sunken p-3">
                <CircleDot size={15} className="text-teal" />
                <p className="mt-2 font-display text-xl font-semibold text-ink">9</p>
                <p className="text-xs text-ink-light">Closed</p>
              </div>
            </div>

            {/* simple bar chart made of divs */}
            <div className="mt-5 flex h-16 items-end gap-2">
              {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-signal/15"
                  style={{ height: `${h}%` }}
                >
                  <div
                    className="h-full w-full rounded-t-md bg-signal"
                    style={{ opacity: i === 5 ? 1 : 0 }}
                  />
                </div>
              ))}
            </div>

            {/* live feed list */}
            {/* Recent Activity */}

<div className="mt-5 border-t border-line pt-4">
  <p className="mb-3 text-sm font-semibold text-ink">
    Recent Activity
  </p>

  <div className="space-y-3">
    {activityItems.map((item) => (
      <div
        key={item.title}
        className="flex items-center gap-3 rounded-lg border border-line p-3"
      >
        <div className={`h-3 w-3 rounded-full ${item.color}`} />

        <div className="flex-1">
          <p className="text-sm font-medium text-ink">
            {item.title}
          </p>

          <p className="text-xs text-ink-light">
            {item.time}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
