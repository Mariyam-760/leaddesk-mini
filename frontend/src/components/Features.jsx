import { Inbox, ListChecks, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Smart Lead Capture",
    description:
      "One clean form collects every inbound lead with the context your team needs to follow up fast.",
  },
  {
    icon: ListChecks,
    title: "Lead Management",
    description:
      "Track every lead's status from new to closed, and see exactly where each conversation stands.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Dashboard",
    description:
      "A private admin view keeps your pipeline visible to your team only, not to the public web.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="max-w-xl">
        <span className="eyebrow">Why teams switch</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need, nothing you don't
        </h2>
        <p className="mt-3 text-ink-light">
          LeadDesk Mini stays out of your way so you can focus on closing, not configuring.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card p-6 transition-shadow hover:shadow-pop">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-soft text-signal">
              <Icon size={20} strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
