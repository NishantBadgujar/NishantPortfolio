import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="md:flex md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="mb-10 md:mb-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
                NB
              </div>
              <div>
                <span className="block text-base font-semibold text-white">Nishant Badgujar</span>
                <span className="block text-sm text-slate-400">Java • Frontend • Full-Stack</span>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full md:w-auto">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-400 transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-amber-400 transition-colors">Projects</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Follow</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/NishantBadgujar" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-800" />

        {/* Bottom row */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {year}{" "}
            <a href="#" className="hover:underline text-slate-200">
              NishantBadgujar
            </a>
            . All rights reserved.
          </p>

          <div className="flex items-center mt-4 sm:mt-0 space-x-5">
            <a
              href="https://github.com/NishantBadgujar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-amber-400 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49...z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-amber-400 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88...z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Discord"
              className="hover:text-amber-400 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21 5c-.2.4-.4.8-.6 1.2C18.9 8.3 17...z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
