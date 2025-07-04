import React from "react";
import { motion } from "framer-motion";

// 1. Define Framer Motion Variants

// Variants for main text elements (title, subtitle) - Snappier duration, simpler ease
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Reduced duration for faster animation
      ease: "easeOut" // Standard easeOut for a snappier feel
    }
  }
};

// Variants for the container of project cards (for stagger effect) - Slight stagger, no delay
const projectGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Very slight stagger for a flowing entrance
      delayChildren: 0 // No initial delay for the first child
    }
  }
};

// Variants for individual project cards - Faster duration, standard ease
const projectCardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, // Reduced duration for faster card appearance
      ease: "easeOut" // Standard easeOut for snappier feel
    }
  }
};

// Variants for the "View All Projects" button - Reduced duration, no delay
const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Reduced duration
      ease: "easeOut",
      delay: 0.1 // Small delay to appear just after the projects grid
    }
  }
};


const projects = [
  {
    id: 1,
    title: "Luxury Car Rentals",
    image: "/7.jpg",
    link: "https://emma-ride-xgiv.vercel.app/",
    tech: ["React", "Tailwind", "Framer Motion"], // Changed GSAP to Framer Motion
    note: "Premium vehicle booking platform with 3D model viewer"
  },
  {
    id: 2,
    title: "Modern Portfolio",
    image: "/6.jpg",
    link: "https://sneakers-store2.vercel.app/",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    note: "Interactive developer portfolio with 3D elements"
  },
  {
    id: 3,
    title: "Real Estate Hub",
    image: "/5.jpg",
    link: "https://emma-real-estate-z9j5.vercel.app/",
    tech: ["TypeScript", "React Query", "Mapbox"],
    note: "Property listings with advanced search filters"
  },
  {
    id: 4,
    title: "Fashion E-commerce",
    image: "/9.jpg",
    link: "#",
    tech: ["React", "Redux", "Stripe"],
    note: "High-end fashion store with AR try-on"
  },
  {
    id: 5,
    title: "Admin Dashboard",
    image: "/8.jpg",
    link: "https://eazystore.vercel.app/",
    tech: ["React", "Chart.js", "Firebase"],
    note: "Analytics dashboard with real-time data"
  },
  {
    id: 6,
    title: "Sneakers Hub",
    image: "/10.png",
    link: "https://sneakers-store2.vercel.app/",
    tech: ["Next.js", "Context API", "CSS Modules"],
    note: "Sneaker marketplace with cart functionality"
  }
];

const WebImage = () => {
  const lime = "#a3e635"; // Tailwind's lime-400

  return (
    <div
      className="min-h-screen bg-black py-20 px-4 sm:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 sm:mb-20 overflow-hidden">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger earlier (50% in view)
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center"
          >
            Selected <span style={{ color: lime }}>Projects</span>
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger earlier, same as title
            // Removed specific delay on subtitle to make it appear immediately after title animation starts
            className="text-gray-300 text-center mt-4 max-w-2xl mx-auto text-lg"
          >
            Here's a collection of my recent work showcasing modern web development
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={projectGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger earlier (30% of grid container)
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants} // Each card uses the item variant
              className="group relative overflow-hidden rounded-xl bg-neutral-950 border border-gray-800"
              whileHover={{ y: -10 }} // Framer Motion for interactive hover
              transition={{ duration: 0.3 }} // Smooth transition for hover
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: lime, color: 'black' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-gray-300 text-sm">{project.note}</p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium px-4 py-2 rounded-full border"
                  style={{ borderColor: lime, color: lime }}
                  whileHover={{ backgroundColor: lime, color: 'black' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <motion.a
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }} // Trigger earlier (60% in view)
            href="#"
            className="px-8 py-3 rounded-full font-medium border-2"
            style={{ borderColor: lime, color: lime }}
            whileHover={{ backgroundColor: lime, color: 'black' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default WebImage;