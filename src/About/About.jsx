import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const skills = [
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 78 },
    { name: "MySQL", level: 90 },
    { name: "Hibernate", level: 80 },
    { name: "JavaScript", level: 82 },
    { name: "Reactjs", level: 80 },
    { name: "Python", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "CodeIgniter (PHP)", level: 65 },
    { name: "Git/GitHub", level: 85 },
  ];

  const projects = [
    {
      title: "Market Price Predictor",
      desc: "ML-backed price predictions and trend visualizations to help farmers decide optimal sell times.",
    },
    {
      title: "Bombay Tribe (E‑commerce)",
      desc: "Full-stack e-commerce platform with user, affiliator and admin modules.",
    },
  ];

  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          {/* PROFILE COLUMN */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Profile Image Card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-800/60 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900">
                <img
                  src="/Nishant.png"
                  alt="Nishant Badgujar"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  width={480}
                  height={480}
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight">Nishant Badgujar</h3>
                <p className="text-sm text-slate-400">Java • Frontend • Full-Stack</p>

                {/* Buttons */}
                <div className="mt-5 flex justify-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-slate-900 font-medium shadow hover:bg-amber-400 transition-colors"
                  >
                    Contact
                  </Link>

                  <a
                    href="/Nishant_Badgujar_Resum.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-amber-300 hover:text-amber-300 transition"
                  >
                    Resume
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
                  {[
                    { value: "25+", label: "Projects" },
                    { value: "Intern", label: "Manasvi Tech" },
                    { value: "B.Tech", label: "CSE" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-md bg-slate-800/40 p-3 text-center hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="text-xl font-bold text-amber-300">{stat.value}</div>
                      <div className="text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-5 text-slate-300">
                <a
                  href="https://github.com/NishantBadgujar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-amber-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
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
                  className="hover:text-amber-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
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
          </aside>


          {/* CONTENT COLUMN */}
          <div className="lg:col-span-2 prose prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-extrabold">About — <span className="text-amber-300">Nishant Badgujar</span></h1>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I am a Computer Science student and a passionate web developer focusing on building maintainable and user-friendly applications.
              My core strengths are backend development with <strong className="text-amber-300">Java</strong> and <strong className="text-amber-300">Spring Boot</strong>, and building interactive frontends using <strong className="text-amber-300">React</strong>.
            </p>

            <section className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg p-4 bg-slate-800/40 border border-slate-800/30">
                <h3 className="text-lg font-semibold">Experience</h3>
                <p className="mt-2 text-sm text-slate-300">
                  <span className="text-amber-300">Software Developer Intern</span> — Manasvi Tech Solutions Pvt Ltd.  
                  <span className="block text-xs text-slate-400">Jan 2025 - Jun 2025</span>
                </p>

                <ul className="mt-3 text-sm space-y-2 text-slate-300">
                  <li>Designed RESTful APIs and integrated them with React frontends.</li>
                  <li>Worked on database schema design and query optimization (MySQL).</li>
                  <li>Implemented authentication and session management in live projects.</li>
                  <li>Built 5+ live projects using MVC architecture (CodeIgniter & Spring Boot).</li>
                  <li>Gained hands-on experience in scalable web applications and performance tuning.</li>
                </ul>
              </div>



              <div className="rounded-lg p-4 bg-slate-800/40 border border-slate-800/30">
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="mt-2 text-sm text-slate-300">B.Tech — Computer Science and Engineering</p>
                <p className="mt-2 text-sm text-slate-300">Course highlights: Data Structures, Algorithms, Databases, Web Development.</p>
              </div>
            </section>

            {/* Skills */}
            <section className="mt-8">
              <h3 className="text-lg font-semibold">Skills</h3>
              <div className="mt-4 grid gap-3">
                {skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-4">
                    <div className="w-28 text-sm text-slate-300">{s.name}</div>
                    <div className="flex-1 bg-slate-800/30 rounded-full h-3 overflow-hidden">
                      <div className="h-3 rounded-full bg-amber-400" style={{ width: `${s.level}%` }} />
                    </div>
                    <div className="w-12 text-right text-xs text-slate-400">{s.level}%</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            {/* <section className="mt-8">
              <h3 className="text-lg font-semibold">Selected Projects</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                  <article key={p.title} className="rounded-lg border border-slate-800/30 p-4 bg-slate-800/30 hover:scale-[1.01] transition-transform">
                    <h4 className="font-semibold text-slate-100">{p.title}</h4>
                    <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <Link to="/projects" className="text-sm text-amber-300 hover:underline">View details</Link>
                      <span className="text-xs text-slate-400">•</span>
                      <a href="#" className="text-xs text-slate-400">Live (demo)</a>
                    </div>
                  </article>
                ))}
              </div>
            </section> */}

            {/* Testimonial */}
            <section className="mt-8">
              <div className="rounded-lg p-4 bg-gradient-to-r from-slate-800/60 to-slate-900/60">
                <p className="text-slate-200 italic">“I focus on clear code, fast feedback loops, and building interfaces that people enjoy using.”</p>
                <p className="mt-2 text-sm text-slate-400">— Nishant</p>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-slate-900 font-medium shadow hover:opacity-95">
                Get in touch
              </Link>

              <a href="/Nishant_Badgujar_Resum.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-amber-300">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="w-full h-24 bg-gradient-to-b from-transparent to-slate-900/95" aria-hidden />
    </main>
  );
}
