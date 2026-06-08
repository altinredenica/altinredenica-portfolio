import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="border-y border-white/6 bg-[#0a0a0c] py-28 md:py-36 light:border-zinc-200 light:bg-zinc-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="04"
          label="Experience"
          title="Professional journey"
          description="A track record of delivering high-impact frontend solutions for ambitious teams and products."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-14"
              >
                <div className="absolute left-0 top-8 hidden h-[10px] w-[10px] rounded-full border-2 border-cyan-400 bg-[#0a0a0c] md:block light:bg-zinc-50" />

                <div className="card-spotlight rounded-2xl border border-white/6 bg-white/2 p-8 transition-all duration-300 hover:border-cyan-400/15 light:border-zinc-200 light:bg-white light:hover:border-cyan-500/25">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-zinc-50 light:text-zinc-900">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base font-medium text-cyan-400">
                        {item.company}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                    </div>
                    <span className="rounded-full border border-white/8 bg-white/4 px-4 py-1.5 font-mono text-xs text-zinc-400 light:border-zinc-200 light:bg-zinc-100">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-zinc-400 light:text-zinc-600">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm text-zinc-500 light:text-zinc-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs font-medium text-violet-300 light:border-violet-300 light:bg-violet-50 light:text-violet-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
