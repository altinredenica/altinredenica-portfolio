import { ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 light:border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-zinc-50 light:text-zinc-900">
              {personalInfo.name}
              <span className="text-cyan-400">.</span>
            </p>
            <p className="mt-1 text-sm text-zinc-500 light:text-zinc-500">
              Frontend Developer · Building exceptional web experiences
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 light:border-zinc-200 light:hover:border-cyan-500/40"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 light:border-zinc-200 light:hover:border-cyan-500/40"
            >
              <LinkedinIcon size={18} />
            </a>
            {/* <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 light:border-zinc-200 light:hover:border-cyan-500/40"
            >
              <GithubIcon size={18} />
            </a> */}
            <motion.a
              href="#home"
              aria-label="Back to top"
              whileHover={{ y: -2 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 text-zinc-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 light:border-zinc-200 light:hover:border-cyan-500/40"
            >
              <ArrowUp size={18} />
            </motion.a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 text-sm text-zinc-600 light:border-zinc-200 light:text-zinc-500 md:flex-row">
          <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-xs">
            Crafted with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
