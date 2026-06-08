import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:brightness-110",
  secondary:
    "border border-white/10 bg-white/5 text-zinc-100 hover:border-cyan-400/40 hover:bg-white/10 light:border-zinc-300 light:bg-white light:text-zinc-800 light:hover:border-cyan-500/40 light:hover:bg-zinc-50",
  ghost:
    "text-zinc-400 hover:text-cyan-400 light:text-zinc-600 light:hover:text-cyan-600",
};

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 20 },
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon: Icon,
  type = "button",
  external = false,
  download,
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        {...motionProps}
      >
        {children}
        {Icon && <Icon size={16} />}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...(disabled ? {} : motionProps)}
    >
      {children}
      {Icon && <Icon size={16} />}
    </motion.button>
  );
}
