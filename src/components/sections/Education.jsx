import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="05"
          label="Education"
          title="Education & certifications"
          description="Academic foundation and continuous professional development in frontend engineering."
        />

        <div className="mx-auto grid max-w-4xl gap-6">
          {education.map((item, index) => {
            const Icon = item.type === "degree" ? GraduationCap : Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="group flex gap-6 rounded-2xl border border-white/6 bg-white/2 p-8 transition-all duration-300 hover:border-cyan-400/15 light:border-zinc-200 light:bg-white light:hover:border-cyan-500/25"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-[#0c0c0e]">
                  <Icon size={26} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-zinc-50 light:text-zinc-900">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-cyan-400">
                        {item.institution}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1 font-mono text-xs text-zinc-500 light:border-zinc-200 light:bg-zinc-100">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500 light:text-zinc-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
