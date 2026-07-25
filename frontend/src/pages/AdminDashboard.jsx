import { useMemo, useState } from "react";
import { Users, Sparkles, Phone, CheckCircle2, X } from "lucide-react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import StatsCard from "../components/StatsCard.jsx";
import LeadTable from "../components/LeadTable.jsx";
import { dummyLeads } from "../data/dummyLeads.js";

export default function AdminDashboard() {
  const [leads, setLeads] = useState(dummyLeads);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === "New").length;
    const contacted = leads.filter((l) => l.status === "Contacted").length;
    const closed = leads.filter((l) => l.status === "Closed").length;
    return { total, newCount, contacted, closed };
  }, [leads]);

  const filteredLeads = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return leads;
    return leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(term) || lead.email.toLowerCase().includes(term)
    );
  }, [leads, searchTerm]);

  const handleStatusChange = (id, status) => {
    setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
  };

  const handleDelete = (id) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-canvas-sunken">
      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />

        <main className="flex-1 px-6 py-8 lg:px-10">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-ink">
              {activeView === "dashboard" ? "Dashboard" : "Leads"}
            </h1>
            <p className="mt-1 text-sm text-ink-light">
              Here's what's happening with your pipeline today.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatsCard label="Total Leads" value={stats.total} icon={Users} accent="ink" />
            <StatsCard label="New Leads" value={stats.newCount} icon={Sparkles} accent="signal" />
            <StatsCard label="Contacted" value={stats.contacted} icon={Phone} accent="amber" />
            <StatsCard label="Closed" value={stats.closed} icon={CheckCircle2} accent="teal" />
          </div>

          <div className="mt-8">
            <LeadTable
              leads={filteredLeads}
              onStatusChange={handleStatusChange}
              onView={setSelectedLead}
              onDelete={handleDelete}
            />
          </div>
        </main>
      </div>

      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setSelectedLead(null)} />
          <div className="card relative w-full max-w-md p-6">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-ink-light hover:bg-canvas-sunken hover:text-ink"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
              {selectedLead.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </span>

            <h2 className="mt-4 text-lg font-semibold text-ink">{selectedLead.name}</h2>
            <p className="text-sm text-ink-light">{selectedLead.email}</p>

            <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-light">Budget</dt>
                <dd className="font-medium text-ink">{selectedLead.budget}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-light">Status</dt>
                <dd className="font-medium text-ink">{selectedLead.status}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-light">Created</dt>
                <dd className="font-mono text-xs font-medium text-ink">{selectedLead.createdAt}</dd>
              </div>
              <div>
                <dt className="text-ink-light">Message</dt>
                <dd className="mt-1.5 leading-relaxed text-ink">{selectedLead.message}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
