import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-3xl ${alignment}`}>
      {index && (
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400"
        >
          <span className="h-px w-8 bg-cyan-400/50" />
          {index}
          <span className="text-zinc-600 light:text-zinc-400">/ {label}</span>
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 light:text-zinc-900 md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 text-lg leading-relaxed text-zinc-400 light:text-zinc-600 ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
