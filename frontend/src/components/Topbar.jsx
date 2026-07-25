import { Search, Menu } from "lucide-react";

export default function Topbar({ searchTerm, onSearchChange, onOpenMobileMenu }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-line bg-canvas-card px-6 py-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={17} />
        </button>

        <div className="relative hidden sm:block">
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search leads by name or email..."
            className="input-field w-64 pl-10 sm:w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:hidden">
        <div className="relative w-full">
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search leads..."
            className="input-field w-full pl-10"
          />
        </div>
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <div className="text-right">
          <p className="text-sm font-medium text-ink">Mariyam</p>
          <p className="text-xs text-ink-light">Admin</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal text-sm font-semibold text-white">
          M
        </span>
      </div>
    </header>
  );
}
