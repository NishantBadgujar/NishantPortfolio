import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", type: "nav" },
    { to: "/about", label: "About", type: "nav" },
    { to: "/#projects", label: "Projects", type: "hash" }, // ✅ scroll
    { to: "/#skills", label: "Skills", type: "hash" }, // ✅ scroll
    { to: "/contact", label: "Contact", type: "nav" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold ring-1 ring-white/10">
                NB
              </div>
              <div className="hidden sm:block">
                <span className="block text-sm font-semibold text-white">
                  Nishant Badgujar
                </span>
                <span className="block text-xs text-slate-300">
                  Java • Frontend • Full-Stack
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  {item.type === "hash" ? (
                    <HashLink
                      smooth
                      to={item.to}
                      className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-amber-300"
                    >
                      {item.label}
                    </HashLink>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-400/40`
                      }
                    >
                      {({ isActive }) => (
                        <span
                          className={
                            isActive
                              ? "text-amber-400"
                              : "text-slate-200 hover:text-amber-300"
                          }
                        >
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 ml-4">
              <Link
                to="/Nishant_Badgujar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block px-4 py-2 rounded-md bg-amber-500 text-slate-900 text-sm font-medium shadow hover:opacity-95 icon-cursor-box"
                aria-label="Download Resume"
              >
                Resume
              </Link>

              {/* GitHub */}
              <a
                href="https://github.com/NishantBadgujar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-200 hover:text-amber-300"
                aria-label="GitHub"
              >
                {/* GitHub icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.676-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.696 1.028 1.586 1.028 2.676 0 3.842-2.338 4.687-4.566 4.934.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.578.688.48C19.14 20.164 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nishant-badgujar-8a3209254/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-200 hover:text-amber-300"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.27 2.29-2.6 4.72-2.6 5.05 0 6 3.33 6 7.66V24h-5v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.04-3 4.12V24h-5V8z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={` transform  transition  ${
            open ? "block" : "hidden"
          } lg:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) =>
              item.type === "hash" ? (
                <HashLink
                  key={item.to}
                  smooth
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-300"
                >
                  {item.label}
                </HashLink>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-amber-400"
                        : "text-slate-200 hover:text-amber-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            <div className="mt-2 border-t border-white/5 pt-3 flex items-center gap-3 px-3">
              <Link
                to="/Nishant_Badgujar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 rounded-md bg-amber-500 text-slate-900 text-sm font-medium"
              >
                Resume
              </Link>

              <a
                href="https://github.com/NishantBadgujar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-200 hover:text-amber-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-badgujar-8a3209254/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-200 hover:text-amber-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
