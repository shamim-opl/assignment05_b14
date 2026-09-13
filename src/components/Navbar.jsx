import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden -ml-1 p-2 text-slate-700 shrink-0"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H22" stroke="currentColor" strokeWidth="2" />
            <path d="M0 8H22" stroke="currentColor" strokeWidth="2" />
            <path d="M0 15H22" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {/* Brand */}
        <a href="#" className="flex items-center gap-2 min-w-0">
          <Logo className="text-sm sm:text-xl" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={i === 0 ? "text-pink-600" : "hover:text-slate-900 transition-colors"}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="#"
            className="whitespace-nowrap text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Sign In
          </a>
          <a
            href="#"
            className="whitespace-nowrap bg-gradient-brand text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium text-slate-600 border-t border-slate-100">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={
                  "block py-2 " + (i === 0 ? "text-pink-600" : "hover:text-slate-900")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
