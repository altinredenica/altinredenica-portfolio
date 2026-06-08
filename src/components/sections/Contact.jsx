import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { personalInfo } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio contact from ${formState.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: personalInfo.linkedinDisplay,
      href: personalInfo.linkedin,
    },
    // {
    //   icon: GithubIcon,
    //   label: "GitHub",
    //   value: "github.com/altin",
    //   href: personalInfo.github,
    // },
    {
      icon: MapPin,
      label: "Availability",
      value: personalInfo.location,
      href: null,
    },
  ];

  const inputClasses = (field) =>
    `w-full rounded-xl border bg-white/3 px-5 py-4 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-600 light:bg-zinc-50 light:text-zinc-900 light:placeholder:text-zinc-400 ${
      focused === field
        ? "border-cyan-400/50 ring-2 ring-cyan-400/15"
        : "border-white/8 hover:border-white/15 light:border-zinc-200 light:hover:border-zinc-300"
    }`;

  return (
    <AnimatedSection
      id="contact"
      className="border-t border-white/6 bg-[#0a0a0c] py-28 md:py-36 light:border-zinc-200 light:bg-zinc-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's build something exceptional"
          description="Open to freelance projects, full-time opportunities, and collaborations. Drop me a message."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-4 lg:col-span-2">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/6 bg-white/2 p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 light:border-zinc-200 light:bg-white light:hover:border-cyan-500/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-[#0c0c0e]">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-cyan-300 light:text-zinc-700 light:group-hover:text-cyan-600">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/2 p-5 light:border-zinc-200 light:bg-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-zinc-300 light:text-zinc-700">
                        {link.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/6 bg-[#131316] p-8 md:p-10 lg:col-span-3 light:border-zinc-200 light:bg-white"
            aria-label="Contact form"
          >
            <div className="mb-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-400 light:text-zinc-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete="name"
                  placeholder=""
                  className={inputClasses("name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400 light:text-zinc-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete="email"
                  placeholder=""
                  className={inputClasses("email")}
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400 light:text-zinc-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                rows={6}
                placeholder=""
                className={`${inputClasses("message")} resize-none`}
              />
            </div>

            {error && (
              <div
                className="mb-4 rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 text-sm text-red-400"
                role="alert"
              >
                {error}{" "}
                <a href={`mailto:${personalInfo.email}`} className="underline hover:text-red-300">
                  {personalInfo.email}
                </a>
              </div>
            )}

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-5 py-4 text-sm text-emerald-400"
                role="status"
              >
                <CheckCircle size={18} />
                Thank you! Your message has been sent. I&apos;ll get back to you soon.
              </motion.div>
            ) : (
              <Button
                type="submit"
                variant="primary"
                icon={Send}
                className="w-full sm:w-auto"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            )}
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
