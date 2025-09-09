import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      name: "Java",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      level: 78,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "MySQL",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "Hibernate",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
    },
    {
      name: "JavaScript",
      level: 82,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Reactjs",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Python",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "HTML/CSS",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CodeIgniter (PHP)",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Git/GitHub",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          {/* LEFT: Profile */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Circular profile with gradient ring to match Home */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-64 h-64 rounded-full p-1 bg-gradient-to-tr from-amber-500/20 to-rose-500/10">
                  <div
                    className="absolute inset-0 rounded-full shadow-inner"
                    style={{ boxShadow: "inset 0 6px 30px rgba(2,6,23,0.6)" }}
                  />
                  <img
                    src="/Nishant.png"
                    alt="Nishant Badgujar"
                    className="relative w-full h-full object-cover object-top rounded-full shadow-xl ring-4 ring-slate-800/60 transition-transform duration-500 hover:scale-105"
                    width={328}
                    height={328}
                  />

                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-800/75 px-3 py-1 rounded-full text-xs text-slate-200 ring-1 ring-white/5">
                    Java • Frontend • Full-Stack
                  </div>
                </div>
              </div>

              {/* Name & Actions */}
              <div className="text-center lg:text-left">
                <h2 className="mt-4 text-2xl font-extrabold">
                  Nishant Badgujar
                </h2>
                <p className="text-sm text-slate-400">
                  Computer Science • Web Developer
                </p>

                <div className="mt-5 flex justify-center lg:justify-start gap-3">
                  <Link
                    to="/contact"
                    className="icon-cursor-box inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-slate-900 font-medium shadow hover:bg-amber-400 transition-colors"
                  >
                    Contact
                  </Link>

                  <a
                    href="/Nishant_Badgujar_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-cursor-box inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-amber-300 hover:text-amber-300 transition"
                  >
                    Resume
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs lg:max-w-xs">
                  {[
                    { value: "30+", label: "Projects" },
                    { value: "Intern", label: "Manasvi Tech" },
                    { value: "B.Tech", label: "CSE" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-md bg-slate-800/40 p-3 text-center hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="text-xl font-bold text-amber-300">
                        {s.value}
                      </div>
                      <div className="text-slate-300">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="mt-6 flex justify-center lg:justify-start gap-4">
                  <a
                    href="https://github.com/NishantBadgujar"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-cursor-box p-2 rounded-md text-slate-300 hover:text-amber-300 transition-colors"
                    aria-label="GitHub"
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
                    className="icon-cursor-box p-2 rounded-md text-slate-300 hover:text-amber-300 transition-colors"
                    aria-label="LinkedIn"
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
            </div>
          </aside>

          {/* RIGHT: Content */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl p-6 bg-slate-800/40 border border-slate-800/30 shadow-lg">
              <h1 className="text-3xl sm:text-4xl font-extrabold">
                About — <span className="text-amber-300">Nishant Badgujar</span>
              </h1>
              <p className="mt-4 text-slate-300 leading-relaxed">
                I am a Computer Science student and a passionate web developer
                focusing on building maintainable and user-friendly
                applications. My core strengths are backend development with{" "}
                <strong className="text-amber-300">Java</strong> and{" "}
                <strong className="text-amber-300">Spring Boot</strong>, and
                building interactive frontends using{" "}
                <strong className="text-amber-300">React Js</strong>.
              </p>

              <section className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/30">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    <span className="text-amber-300">Software Developer</span> —
                    Manasvi Tech Solutions Pvt Ltd.
                    <span className="block text-xs text-slate-400">
                      <time dateTime="2025-01">Jan 2025</time> -{" "}
                      <time dateTime="2025-06">Jun 2025</time>
                    </span>
                  </p>

                  <ul className="mt-3 text-sm space-y-2 text-slate-300">
                    <li>
                      Designed RESTful APIs and integrated them with React
                      frontends.
                    </li>
                    <li>
                      Worked on database schema design and query optimization
                      (MySQL).
                    </li>
                    <li>
                      Implemented authentication and session management in live
                      projects.
                    </li>
                    <li>
                      Built 5+ live projects using MVC architecture (CodeIgniter
                      & Spring Boot).
                    </li>
                    <li>
                      Gained hands-on experience in scalable web applications
                      and performance tuning.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/30">
                  <h3 className="text-lg font-semibold">Education</h3>

                  <div className="mt-2 text-sm text-slate-300">
                    <p className="leading-snug">
                      <strong className="text-amber-300">
                        B.Tech., Computer Science &amp; Engineering
                      </strong>{" "}
                      — <span className="text-slate-400">2021–2025</span>
                    </p>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-2 text-xs bg-slate-800/40 px-2 py-1 rounded">
                        CGPA: <strong className="ml-1">7.57 / 10</strong>
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-slate-300">
                    <p className="font-medium">Course highlights</p>
                    <ul className="mt-1 ml-4 list-disc">
                      <li>Data Structures &amp; Algorithms</li>
                      <li>Databases</li>
                      <li>Computer Networks</li>
                      <li>Operating Systems</li>
                      <li>Web Development</li>
                    </ul>
                  </div>

                  <div className="mt-3 text-sm text-slate-300">
                    <p className="font-medium text-amber-300">HSC</p>
                    <p className="mt-1">
                      <strong>Junior College New English School</strong>,
                      Maharashtra State Board —{" "}
                      <span className="font-medium">2021</span>
                      <br />
                      Percentage: <strong>78.33%</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* Skills: show icons and progress bars similar to Home */}
              <section className="mt-8">
                <h3 className="text-lg font-semibold">Skills</h3>

                {/* ----- REPLACED SKILLS SECTION (with framer-motion) ----- */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((s, idx) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-800/20 border border-slate-800/20"
                    >
                      <div className="flex-shrink-0 rounded-lg p-2 backdrop-blur-md shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
                        <img src={s.icon} alt={s.name} className="w-8 h-8" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-slate-100">
                            {s.name}
                          </div>
                          <div className="text-xs font-semibold text-slate-300">
                            {s.level}%
                          </div>
                        </div>

                        <div className="mt-2 bg-slate-900/40 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full bg-amber-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* ----- END REPLACED SKILLS SECTION ----- */}
              </section>

              {/* Testimonial & CTA */}
              <section className="mt-8 grid gap-4 sm:grid-cols-2 items-start">
                <div className="rounded-lg p-4 bg-gradient-to-r from-slate-800/60 to-slate-900/60">
                  <p className="text-slate-200 italic">
                    “I focus on clear code, fast feedback loops, and building
                    interfaces that people enjoy using.”
                  </p>
                  <p className="mt-2 text-sm text-slate-400">— Nishant</p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="icon-cursor-box inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-slate-900 font-medium shadow hover:opacity-95"
                  >
                    Get in touch
                  </Link>

                  <a
                    href="/Nishant_Badgujar_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-cursor-box inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-amber-300"
                  >
                    Download Resume
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <div
        className="w-full h-24 bg-gradient-to-b from-transparent to-slate-900/95"
        aria-hidden
      />
    </main>
  );
}
