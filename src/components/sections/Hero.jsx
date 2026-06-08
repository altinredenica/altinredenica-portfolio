import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import Button from "../ui/Button";
import Marquee from "../ui/Marquee";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const techStack = [
  "HTML",
  "CSS",
  "SASS",
  "Tailwind CSS",
  "JavaScript",
  "React.js",
  "WordPress",
  "WooCommerce",
  "Webydo",
  "Salesforce",
  "WHMCS",
  "GitHub",
  "Figma",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-20"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={item}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300 light:text-cyan-600">
                {personalInfo.tagline}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-zinc-50 light:text-zinc-900"
            >
              Expert{" "}
              <span className="text-gradient">Frontend</span>
              <br />
              Developer
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 light:text-zinc-600 md:text-xl"
            >
              {personalInfo.headline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" variant="primary" icon={ArrowRight}>
                View Featured Work
              </Button>
              <Button
                href={personalInfo.resumeUrl}
                variant="secondary"
                icon={Download}
                download={personalInfo.resumeFileName}
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-14 grid grid-cols-3 gap-6 border-t border-white/6 pt-10 light:border-zinc-200"
            >
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-zinc-50 light:text-zinc-900 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl border border-white/8 bg-[#131316] p-1 light:border-zinc-200 light:bg-white">
              <div className="rounded-xl border border-white/5 bg-[#0c0c0e] p-6 light:border-zinc-100 light:bg-zinc-50">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-zinc-600">portfolio.tsx</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-zinc-500">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-zinc-400">name</span>
                    <span className="text-zinc-500">:</span>{" "}
                    <span className="text-emerald-400">&quot;{personalInfo.name}&quot;</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-zinc-400">role</span>
                    <span className="text-zinc-500">:</span>{" "}
                    <span className="text-emerald-400">&quot;Frontend Developer&quot;</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-zinc-400">skills</span>
                    <span className="text-zinc-500">: [</span>
                    {"\n"}
                    {"    "}
                    <span className="text-emerald-400">&quot;React&quot;</span>
                    <span className="text-zinc-500">,</span>{" "}
                    <span className="text-emerald-400">&quot;TypeScript&quot;</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-emerald-400">&quot;Performance&quot;</span>
                    <span className="text-zinc-500">,</span>{" "}
                    <span className="text-emerald-400">&quot;Accessibility&quot;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-zinc-500">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-violet-400">build</span>
                    <span className="text-zinc-500">()</span>{" "}
                    <span className="text-zinc-500">{"=>"}</span>{" "}
                    <span className="text-emerald-400">&quot;exceptional UI&quot;</span>
                    {"\n"}
                    <span className="text-zinc-500">{"}"}</span>
                    <span className="text-zinc-500">;</span>
                  </code>
                </pre>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-mono text-xs text-cyan-300">Lighthouse 98</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-mono text-xs text-violet-300">WCAG AA</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <Marquee items={techStack} speed={25} />
        </motion.div>
      </div>
    </section>
  );
}
