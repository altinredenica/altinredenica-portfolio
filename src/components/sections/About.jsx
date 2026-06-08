import { motion } from "framer-motion";
import {
  Accessibility,
  Code2,
  Gauge,
  Layers,
} from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { about, philosophy } from "../../data/portfolio";

const iconMap = {
  architecture: Code2,
  performance: Gauge,
  accessibility: Accessibility,
  experience: Layers,
};

export default function About() {
  return (
    <AnimatedSection id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="01"
          label="About"
          title={about.title}
          description={about.description}
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-lg leading-relaxed text-zinc-400 light:text-zinc-600"
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: about.paragraphs.length * 0.1 }}
              className="border-l-2 border-cyan-400/50 pl-6 italic text-zinc-300 light:text-zinc-700"
            >
              &ldquo;{about.quote}&rdquo;
            </motion.blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {philosophy.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-spotlight group rounded-2xl border border-white/6 bg-white/2 p-6 transition-all duration-300 hover:border-cyan-400/20 light:border-zinc-200 light:bg-white light:hover:border-cyan-500/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-[#0c0c0e]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-zinc-100 light:text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 light:text-zinc-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
