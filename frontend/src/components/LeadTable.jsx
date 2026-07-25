import { Eye, Trash2 } from "lucide-react";

const statusOptions = ["New", "Contacted", "Closed"];

const statusStyles = {
  New: "bg-signal-soft text-signal",
  Contacted: "bg-amber-soft text-amber",
  Closed: "bg-teal-soft text-teal",
};

export default function LeadTable({ leads, onStatusChange, onView, onDelete }) {
  if (leads.length === 0) {
    return (
      <div className="card flex flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-sm font-medium text-ink">No leads match your search</p>
        <p className="mt-1 text-sm text-ink-light">Try a different name or email.</p>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-canvas-sunken text-xs font-semibold uppercase tracking-wide text-ink-light">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Budget</th>
              <th className="px-5 py-3">Message</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Created</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-line last:border-0 hover:bg-canvas-sunken/60">
                <td className="whitespace-nowrap px-5 py-4 font-medium text-ink">{lead.name}</td>
                <td className="whitespace-nowrap px-5 py-4 text-ink-light">{lead.email}</td>
                <td className="whitespace-nowrap px-5 py-4 text-ink-light">{lead.budget}</td>
                <td className="max-w-[220px] truncate px-5 py-4 text-ink-light" title={lead.message}>
                  {lead.message}
                </td>
                <td className="px-5 py-4">
                  <select
                    value={lead.status}
                    onChange={(e) => onStatusChange(lead.id, e.target.value)}
                    className={`rounded-full border-0 py-1 pl-3 pr-7 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-signal-soft ${statusStyles[lead.status]}`}
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-ink-light">
                  {lead.createdAt}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onView(lead)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-light transition-colors hover:border-ink hover:text-ink"
                      aria-label={`View ${lead.name}`}
                    >
                      <Eye size={15} />
                    </button>
                    <button
                      onClick={() => onDelete(lead.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-light transition-colors hover:border-rose hover:text-rose"
                      aria-label={`Delete ${lead.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
