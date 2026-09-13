import { useState } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden -ml-2 p-2 text-slate-700"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H22" stroke="currentColor" strokeWidth="2" />
            <path d="M0 8H22" stroke="currentColor" strokeWidth="2" />
            <path d="M0 15H22" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
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
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-gradient-brand text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
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
