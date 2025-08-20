// src/components/Catalog.jsx
import { motion } from "framer-motion";

export default function Catalog() {
  const projects = [
    {
      title: "TS-01",
      description: "Technical solution for modern architecture with a focus on sustainability and innovative design principles.",
      image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=TS-01",
      link: "#",
      category: "Technical Solutions"
    },
    {
      title: "TS-02",
      description: "Advanced engineering prototype showcasing cutting-edge technology and precision craftsmanship.",
      image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=TS-02",
      link: "#",
      category: "Technical Solutions"
    },
    {
      title: "HD-01",
      description: "High-density urban design concept that reimagines city living spaces for future populations.",
      image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=HD-01",
      link: "#",
      category: "Hardware Design"
    },
    {
      title: "SZ NX",
      description: "Next-generation spatial zoning system that optimizes space utilization in urban environments.",
      image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=SZ+NX",
      link: "#",
      category: "Urban Planning"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="space-y-20 md:space-y-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center gap-8 md:gap-12`}
        >
          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* TEXT CONTENT */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="text-xs uppercase tracking-widest text-gray-500">
              {project.category}
            </div>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {project.description}
            </p>
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-wide border border-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                View Project
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}