import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SKILLS = [
  {
    name: "Java",
    lvl: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    lvl: 78,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "REST APIs",
    lvl: 80,
    icon: "https://img.icons8.com/?size=100&id=55497&format=png&color=000000",
  },
  {
    name: "SQL",
    lvl: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MySQL",
    lvl: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Hibernate",
    lvl: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  },
  {
    name: "HTML/CSS",
    lvl: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "JavaScript",
    lvl: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Reactjs",
    lvl: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    lvl: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "CodeIgniter (PHP)",
    lvl: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Git/GitHub",
    lvl: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Bootstrap",
    lvl: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    lvl: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "DSA",
    lvl: 75,
    icon: "https://img.icons8.com/?size=100&id=duQHzHra9BbD&format=png&color=000000",
  },
];

const PROJECTS = [
  {
    title: "Bombay Tribe (E-commerce)",
    desc: "Full-stack e-commerce platform with user, affiliator and admin modules.",
    tech: ["CodeIgniter", "JS", "MySQL"],
    demo: "https://bombaytribe.com",
    repo: "#",
    img: "project1.png",
  },
  {
    title: "Market Price Predictor",
    desc: "ML-backed price predictions and trend visualizations to help farmers decide optimal sell times.",
    tech: ["Java", "Spring", "React"],
    demo: "#",
    repo: "#",
    img: "project2.png",
  },
  {
    title: "Inventory Management",
    desc: "Product inventory system with image uploads, modals and validations.",
    tech: ["PHP", "JS", "Bootstrap"],
    demo: "https://github.com/NishantBadgujar/cisetup",
    repo: "https://github.com/NishantBadgujar/cisetup",
    img: "project3.png",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="mt-12">
        <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/80 rounded-2xl my-16 overflow-hidden shadow-2xl">
          {/* Decorative subtle pattern */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              aria-hidden
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#0f172a" />
                  <stop offset="1" stopColor="#020617" />
                </linearGradient>
              </defs>
              <rect width="800" height="600" fill="url(#g)" />
              <g fillOpacity="0.06" fill="#fff">
                <circle cx="100" cy="80" r="120" />
                <circle cx="700" cy="520" r="160" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 sm:px-12 py-12 sm:py-16">
            {/* TEXT */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-wide text-slate-400">
                Hi, my name is
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Nishant Badgujar
              </h1>

              <p className="mt-4 text-slate-200 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg">
                I create modern, responsive web applications — clean UI,
                performant frontends and reliable backend integrations. I can
                help turn your idea into a production-ready website.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-3 rounded-md bg-amber-500 px-5 py-3 font-medium text-slate-900 shadow hover:shadow-lg focus:outline-none icon-cursor-box"
              >
                About
              </Link>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
                <span className="inline-block text-sm text-slate-400">
                  Available for:
                </span>
                <span className="inline-block rounded-full bg-slate-800/60 px-3 py-1 text-sm text-emerald-300">
                  Full-time
                </span>
                <span className="inline-block rounded-full bg-slate-800/60 px-3 py-1 text-sm text-amber-300">
                  Freelance
                </span>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-amber-500/20 to-rose-500/10">
                <div
                  className="absolute inset-0 rounded-full shadow-inner"
                  style={{ boxShadow: "inset 0 6px 30px rgba(2,6,23,0.6)" }}
                />
                <img
                  src="Nishant.png"
                  alt="Nishant Badgujar"
                  className="relative w-full h-full object-cover object-top rounded-full shadow-xl ring-4 ring-slate-800/60 transition-transform duration-500 hover:scale-105"
                  width={328}
                  height={328}
                />

                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-800/75 px-3 py-1 rounded-full text-xs text-slate-200 ring-1 ring-white/5">
                  Java • Frontend • Full-Stack
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROLE / TAGLINE */}
      <section className="mt-8 text-center">
        <h2 className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-rose-600/10 to-amber-600/10 text-slate-100 text-lg sm:text-xl font-medium">
          Java Developer • Frontend Developer • Backend Developer • Full Stack
          Developer
        </h2>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Skills
          </h2>
          <p className="text-sm text-slate-400">Technologies I use often</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="flex items-center cursor-pointer gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-800/30 hover:bg-slate-800/60 transition icon-cursor-box"
            >
              <div className="rounded-xl p-2 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-3 bg-gradient-to-br from-gray-800 to-gray-900 icon-cursor-box">
                {s.icon ? (
                  <img src={s.icon} alt={s.name} className="w-10 h-10 " />
                ) : (
                  s.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-slate-100">
                    {s.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {s.lvl}%
                  </div>
                </div>
                <div className="mt-2 bg-slate-900/40 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-2 rounded-full bg-amber-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.lvl}%` }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Selected Projects
          </h2>
          <p className="text-sm text-slate-400">
            3 featured projects — highlights only
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-slate-800/40 border border-slate-800/30 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
                <div className="absolute right-3 top-3 text-xs text-slate-200 bg-slate-800/50 px-2 py-1 rounded-md">
                  Featured
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.demo}
                    className="inline-block px-3 py-1 rounded-md bg-amber-500 text-slate-900 text-sm font-medium hover:bg-amber-400"
                  >
                    Demo
                  </a>
                  <a
                    href={p.repo}
                    className="inline-block px-3 py-1 rounded-md border border-slate-700 text-sm text-slate-200 hover:border-rose-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/NishantBadgujar"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-amber-500 text-slate-900 font-medium shadow hover:bg-amber-400"
          >
            View All Projects on GitHub
          </a>
        </div>
      </section>

      <div className="h-20" />

      {/* Floating CTA */}
      {/* <a
        href="/contact"
        className="fixed right-6 bottom-6 z-50 icon-cursor-box inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-slate-900 shadow-lg hover:scale-105 transition"
      >
        ✉ Contact
      </a> */}
    </main>
  );
}
