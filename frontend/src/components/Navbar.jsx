import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#lead-form" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white">
            <Zap size={16} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            LeadDesk Mini
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-light transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/admin/login" className="text-sm font-medium text-ink-light hover:text-ink">
            Admin Login
          </Link>
          <a href="#lead-form" className="btn-primary">
            Get Started
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-canvas px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-light hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/admin/login"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-light hover:text-ink"
            >
              Admin Login
            </Link>
            <a href="#lead-form" onClick={() => setOpen(false)} className="btn-primary w-full">
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
