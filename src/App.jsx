import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";
import PageLoader from "./components/ui/PageLoader";
import { personalInfo } from "./data/portfolio";

export default function App() {
  return (
    <div className="noise-overlay min-h-screen bg-[#0c0c0e] light:bg-[#fafafa]">
      <Helmet>
        <html lang="en" />
        <title>{personalInfo.name} — Expert Frontend Developer</title>
        <meta
          name="description"
          content={`${personalInfo.name} is an expert Frontend Developer specializing in React, TypeScript, and high-performance web applications. ${personalInfo.intro}`}
        />
        <meta
          name="keywords"
          content="Frontend Developer, React Developer, TypeScript, JavaScript, Web Developer, UI Engineer, Portfolio, Altin"
        />
        <meta name="author" content={personalInfo.name} />
        <meta property="og:title" content={`${personalInfo.name} — Expert Frontend Developer`} />
        <meta property="og:description" content={personalInfo.headline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} — Expert Frontend Developer`} />
        <meta name="twitter:description" content={personalInfo.headline} />
        <link rel="canonical" href="https://altin.dev" />
      </Helmet>

      <PageLoader />
      <ScrollProgress />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
