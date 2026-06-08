import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/portfolio";
import { GithubIcon } from "../ui/SocialIcons";
import { useSpotlight } from "../../hooks/useSpotlight";

function ProjectCard({ project, index }) {
  const handleSpotlight = useSpotlight();

  const openLiveDemo = () => {
    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleSpotlight}
      onClick={openLiveDemo}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLiveDemo();
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} live demo`}
      className={`card-spotlight group relative cursor-pointer overflow-hidden rounded-3xl border border-white/6 bg-[#131316] transition-all duration-500 hover:border-cyan-400/20 light:border-zinc-200 light:bg-white light:hover:border-cyan-500/30 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative bg-gradient-to-br ${project.gradient} p-8 md:p-10`}>
        <div className="flex items-start justify-between">
          <span className="font-mono text-5xl font-bold text-white/10 md:text-6xl">
            {project.number}
          </span>
          {project.featured && (
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Featured
            </span>
          )}
        </div>
        <motion.div
          className="absolute right-8 top-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          whileHover={{ rotate: 45 }}
        >
          <ArrowUpRight size={28} className="text-cyan-400" />
        </motion.div>
      </div>

      <div className="p-8 md:p-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-cyan-400/80">
          {project.subtitle}
        </p>
        <h3 className="font-display text-2xl font-bold text-zinc-50 light:text-zinc-900 md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 light:text-zinc-600">
          {project.description}
        </p>

        <ul className="mt-6 space-y-2">
          {project.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-3 text-sm text-zinc-500 light:text-zinc-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {achievement}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium text-zinc-400 light:border-zinc-200 light:bg-zinc-100 light:text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="mt-8 flex items-center gap-6 border-t border-white/6 pt-6 light:border-zinc-200"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            <ExternalLink size={16} />
            Live Demo
            <span className="block h-px w-0 bg-cyan-400 transition-all group-hover/link:w-4" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-300 light:hover:text-zinc-800"
            >
              <GithubIcon size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="Work"
          title="Featured projects"
          description="Production-level applications showcasing technical depth, design excellence, and measurable impact."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
