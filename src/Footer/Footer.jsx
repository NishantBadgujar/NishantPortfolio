import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="md:flex md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold">
                NB
              </div>
              <div>
                <span className="block text-sm font-semibold">
                  Nishant Badgujar
                </span>
                <span className="block text-xs text-slate-400">
                  Java • Frontend • Full‑Stack
                </span>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-300 uppercase">
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/#home" className="text-slate-300 hover:text-amber-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-slate-300 hover:text-amber-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#projects"
                    className="text-slate-300 hover:text-amber-300"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-300 uppercase">
                Follow
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/NishantBadgujar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-amber-300"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nishant-badgujar-8a3209254/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-amber-300"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-300 uppercase">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-slate-300 hover:text-amber-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-300 hover:text-amber-300">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-amber-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-800" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {year}{" "}
            <a href="#" className="hover:underline text-slate-200">
              NishantBadgujar
            </a>
            . All rights reserved.
          </p>

          <div className="flex items-center mt-4 sm:mt-0 space-x-4">
            <a
              href="https://github.com/NishantBadgujar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-300 hover:text-amber-300"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.676-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.696 1.028 1.586 1.028 2.676 0 3.842-2.338 4.687-4.566 4.934.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.578.688.48C19.14 20.164 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/nishant-badgujar-8a3209254/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-[#0A66C2]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.27 2.29-2.6 4.72-2.6 5.05 0 6 3.33 6 7.66V24h-5v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.04-3 4.12V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
