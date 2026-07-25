import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-white">
            <Zap size={14} strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-semibold">LeadDesk Mini</span>
        </a>
        <p className="text-sm text-ink-light">
          Built for Digital Heroes Training Task
        </p>
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} LeadDesk Mini
        </p>
      </div>
    </footer>
  );
}
