import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../../data/portfolio";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { sectionIds } from "../../data/portfolio";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group font-display text-xl font-bold tracking-tight text-zinc-50 light:text-zinc-900"
        >
          {personalInfo.name}
          <span className="text-cyan-400 transition-colors group-hover:text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeId === link.id
                    ? "text-cyan-400"
                    : "text-zinc-400 hover:text-zinc-100 light:text-zinc-600 light:hover:text-zinc-900"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-400/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Let&apos;s Talk
            </Button>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 lg:hidden light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass border-t border-white/5 lg:hidden light:border-zinc-200"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      activeId === link.id
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100 light:hover:bg-zinc-100 light:hover:text-zinc-900"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Let&apos;s Talk
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
