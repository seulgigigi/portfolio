// src/App.jsx
import Catalog from "./components/Catalog";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* HEADER / NAVBAR */}
      <header className="flex justify-between items-center p-4 border-b border-black">
        <h1 className="text-xl tracking-tight">MY PORTFOLIO</h1>
        <nav className="space-x-4 text-sm uppercase">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          Minimal. Clean. Bold.
        </h2>
        <p className="mt-4 text-sm uppercase tracking-widest">
          Welcome to my work
        </p>
      </section>

      {/* PROJECT CATALOG */}
      <section id="projects" className="px-4 md:px-8 py-16 border-t border-black">
        <h2 className="text-2xl uppercase text-center mb-12">Projects</h2>
        <Catalog />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-4 md:px-8 py-16 border-t border-black text-center max-w-3xl mx-auto">
        <h2 className="text-2xl uppercase mb-6">About Me</h2>
        <p className="text-sm leading-relaxed">
          I am a developer passionate about creating clean, functional, and minimal
          applications. My work spans C++, JavaScript, and React projects. I enjoy
          turning ideas into simple and usable products.
        </p>
      </section>

      {/* CONTACT / SOCIAL LINKS */}
      <section id="contact" className="px-4 md:px-8 py-16 border-t border-black text-center">
        <h2 className="text-2xl uppercase mb-6">Get in Touch</h2>
        <p className="text-sm mb-8">Find me on:</p>
        <div className="flex justify-center gap-6 text-sm uppercase flex-wrap">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-xs uppercase text-center border-t border-black">
        © {new Date().getFullYear()} My Name — All Rights Reserved
      </footer>
    </div>
  );
}
