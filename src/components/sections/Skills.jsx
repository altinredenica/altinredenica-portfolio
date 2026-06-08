import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { skills, skillCategories } from "../../data/portfolio";
import { useSpotlight } from "../../hooks/useSpotlight";

const categoryGradients = {
  core: "from-cyan-500/20 to-sky-500/5",
  styling: "from-fuchsia-500/20 to-pink-500/5",
  frameworks: "from-violet-500/20 to-purple-500/5",
  platforms: "from-amber-500/20 to-orange-500/5",
  tools: "from-emerald-500/20 to-teal-500/5",
};

export default function Skills() {
  const handleSpotlight = useSpotlight();
  const categories = Object.keys(skillCategories);

  return (
    <AnimatedSection
      id="skills"
      className="border-y border-white/6 bg-[#0a0a0c] py-28 md:py-36 light:border-zinc-200 light:bg-zinc-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="02"
          label="Skills"
          title="Technical expertise"
          description="A comprehensive toolkit for building modern, scalable, and high-performance frontend applications."
        />

        {categories.map((category) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {skillCategories[category]}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onMouseMove={handleSpotlight}
                    whileHover={{ y: -3 }}
                    className={`card-spotlight group relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br ${categoryGradients[category]} p-5 transition-all duration-300 hover:border-white/12 light:border-zinc-200 light:bg-white light:hover:border-zinc-300`}
                  >
                    <div className="relative z-10">
                      <h4 className="font-display text-base font-semibold text-zinc-100 light:text-zinc-900">
                        {skill.name}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 light:text-zinc-600">
                        {skill.description}
                      </p>
                    </div>
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/3 blur-2xl transition-opacity group-hover:opacity-100 light:bg-zinc-100" />
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
