import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900/95 to-slate-900/85 text-slate-100 flex items-center">
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: Info Section */}
          <div className="rounded-2xl shadow-2xl ring-1 ring-white/10 bg-slate-800/60 p-8 backdrop-blur-md">
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">
              Get in Touch
            </h1>
            <p className="mt-2 text-lg text-slate-300">
              Fill in the form to start a conversation with me.
            </p>

            <div className="mt-8 space-y-6 text-slate-300">
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-slate-700/50">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span>Bhadgaon, Jalgaon, Maharashtra, 425001</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-slate-700/50">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11.05 11.05 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
                  </svg>
                </div>
                <span>+91 9049503312</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-slate-700/50">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span>nishantvijayb@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form className="rounded-2xl shadow-2xl ring-1 ring-white/10 bg-slate-800/60 p-8 backdrop-blur-md">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 px-4 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-4 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-4 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full py-3 px-4 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-amber-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full md:w-40 bg-amber-500 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-amber-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
