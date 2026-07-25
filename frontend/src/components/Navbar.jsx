import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900 tracking-tight"
        >
          LeadDesk Mini
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Features
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Get Started
        </a>

      </div>
    </header>
  );
}

export default Navbar;