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
import { seo } from "./data/portfolio";

export default function App() {
  return (
    <div className="noise-overlay min-h-screen bg-[#0c0c0e] light:bg-[#fafafa]">
      <Helmet>
        <html lang="en" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta property="og:site_name" content={seo.siteTitle} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <link rel="canonical" href={seo.siteUrl} />
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
