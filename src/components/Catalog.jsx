// src/components/Catalog.jsx
import { motion } from "framer-motion";

export default function Catalog() {
  const projects = [
    {
      title: "Pomi",
      description: "A Pomodoro timer website with a built in to-do list and lofi playlist",
      image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=TS-01",
      link: "https://seulgigigi.github.io/pomi/",
      category: "Website"
    },
    {
      title: "FiLaro",
      description: "A Filipino language learning app, gamified to cater to students",
      image: "https://seulgigigi.github.io/FiLaro/",
      link: "#",
      category: "Website"
    },
    {
      title: "Kyle's Silog Inventory System",
      description: "An inventory system prototype built in Excel using VBA",
      image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=HD-01",
      link: "#",
      category: "Inventory"
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