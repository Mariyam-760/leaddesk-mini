import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, LogOut, Zap, X } from "lucide-react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "leads", label: "Leads", icon: Users },
];

export default function Sidebar({
  activeView,
  onNavigate,
  mobileOpen,
  onCloseMobile,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login", { replace: true });
  };

  const content = (
    <>
      <div className="flex items-center gap-2 px-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink">
          <Zap size={16} strokeWidth={2.5} />
        </span>
        <span className="font-display text-base font-semibold text-white">
          LeadDesk Mini
        </span>
      </div>

      <nav className="mt-10 flex flex-1 flex-col gap-1">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => {
              onNavigate(key);
              onCloseMobile?.();
            }}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              activeView === key
                ? "bg-white/10 text-white"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon size={17} />
            {label}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
      >
        <LogOut size={17} />
        Logout
      </button>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col bg-ink px-4 py-6 lg:flex">
        {content}
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={onCloseMobile}
          />

          <aside className="absolute left-0 top-0 flex h-full w-64 flex-col bg-ink px-4 py-6">
            <button
              onClick={onCloseMobile}
              className="absolute right-4 top-6 text-white/60 hover:text-white"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>

            {content}
          </aside>
        </div>
      )}
    </>
  );
}