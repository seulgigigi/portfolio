// src/App.jsx
import { motion } from "framer-motion";
import Catalog from "./components/Catalog";
import './App.css';

export default function App() {
  return (
    
    <div className="portfolio-app bg-white text-black min-h-screen font-regular">
      {/* HEADER - Fixed at top */}
      <header className="fixed top-0 w-full p-4 md:p-6 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="flex space-x-4 md:space-x-6 text-sm uppercase tracking-widest">MY PORTFOLIO</h1>
          <nav className="flex space-x-4 md:space-x-6 text-sm uppercase tracking-widest">
            {["projects", "about", "contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer hover:opacity-70 transition-opacity"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 md:pt-40 md:pb-28 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-4"
          >
            Hi, I’m Alvin, a BSIT student.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-sm uppercase tracking-widest text-gray-600"
          >
            JavaScript, React, HTML, CSS, Java, Python, and C++
          </motion.p>
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-light text-center mb-12 md:mb-16"
          >
            Selected Projects
          </motion.h3>
          <Catalog />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-light mb-6"
          >
            About Me
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-gray-700"
          >
            I'm a passionate developer working on coding projects, always learning
            and building new things. My focus is on creating clean, efficient solutions
            with attention to detail and user experience.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 ">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-light mb-8"
          >
            Get in Touch
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center space-x-8 md:space-x-10"
          >
            <motion.a
              href="https://github.com/seulgigigi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm md:text-base uppercase tracking-wide pb-1 hover:opacity-70 transition-opacity"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/alvin-jan-undefined-751354374/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm md:text-base uppercase tracking-wide  pb-1 hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-6 text-xs uppercase text-center">
        <div className="max-w-6xl mx-auto">
          © {new Date().getFullYear()} Alvin Jan L. Calambro
        </div>
      </footer>
    </div>
  );
}