import React from "react";
import { motion } from "framer-motion";

// REMOVED GSAP IMPORTS AND REGISTRATION
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Luxury Car Rentals",
    category: "Web Development",
    image: "/7.jpg",
    link: "https://emma-ride-xgiv.vercel.app/",
    note: "A sleek and modern car rental platform for luxury vehicles.",
  },
  {
    id: 2,
    title: "Modern Portfolio",
    category: "Portfolio",
    image: "/6.jpg",
    link: "https://portfolio-three-kappa-38.vercel.app/", // Using a more appropriate link
    note: "A high-end developer portfolio showcasing my work and skills.",
  },
  {
    id: 3,
    title: "Real Estate Hub",
    category: "Web Development",
    image: "/5.jpg",
    link: "https://emma-real-estate-z9j5.vercel.app/", // Using a link from previous components
    note: "An elegant real estate listing website with interactive UI.",
  },
  {
    id: 4,
    title: "Fashion Website",
    category: "E-Commerce",
    image: "/9.jpg",
    link: "#", // Placeholder as no specific link provided previously
    note: "A stylish e-commerce store tailored for fashion brands.",
  },
  {
    id: 5,
    title: "E-commerce with Dashboard",
    category: "E-Commerce",
    image: "/8.jpg",
    link: "https://eazystore.vercel.app/", // Using a link from previous components
    note: "An online store with an integrated admin dashboard for management.",
  },
  {
    id: 6,
    title: "Sneakers Hub",
    category: "E-Commerce",
    image: "/10.png",
    link: "https://sneakers-store2.vercel.app/",
    note: "A trendy sneaker store built for sneaker enthusiasts.",
  },
];

// Framer Motion Variants for page and elements
const pageEntranceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Slightly shorter for snappier feel
      ease: [0.22, 1, 0.36, 1], // Custom ease for smoothness (like power4.out)
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each project card animation
      delayChildren: 0.3, // Delay before the first card starts animating
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 60 }, // Start smaller and lower
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7, // Duration for individual card animation
      ease: [0.17, 0.67, 0.83, 0.67], // Custom ease for smoothness (like power3.out)
    },
  },
};

const Project = () => {
  // REMOVED GSAP REFS
  // const containerRef = useRef(null);
  // const projectRefs = useRef([]);

  // REMOVED GSAP useEffect
  // useEffect(() => { ... }, []);

  const lime = "#a3e635"; // Define the lime color for consistency

  return (
    <motion.div
      initial="hidden" // Initial state for the entire page container
      animate="visible" // Animate the entire page container on mount
      variants={pageEntranceVariants}
      className="min-h-screen bg-black text-white py-16 px-6 sm:px-12" // Changed background to black
    >
      {/* Page Title */}
      <motion.h2
        variants={titleVariants} // Animate title with its defined variants
        className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide"
      >
        🚀 My <span style={{ color: lime }}>Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        variants={gridContainerVariants} // Apply container variants for staggered children
        initial="hidden" // Initial state for the grid
        whileInView="visible" // Trigger grid animation when it enters the viewport
        viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of grid is in view
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
      >
        {projects.map((project, index) => (
          // The entire interactive card is now a motion.a for better semantics and animation control
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardItemVariants} // Apply individual card item animation
            className="relative flex-col items-center rounded-xl overflow-hidden shadow-lg sm:shadow-2xl border border-neutral-800 group block transition-all duration-300 transform-gpu" // Changed border color, added transform-gpu for performance
            whileHover={{ scale: 1.07, rotateY: 3 }} // Existing hover animation
            transition={{ duration: 0.4, ease: "easeInOut" }} // Existing hover transition
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover brightness-90 group-hover:brightness-110 transition duration-300"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-wider text-center">
                {project.title}
              </h3>
              <motion.div // Using motion.div for the button within the overlay
                className="mt-4 px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-black bg-lime-400 rounded-lg shadow-lg hover:bg-lime-500 transition-all duration-300" // Applied lime colors
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                // Note: This motion.div is not a functional button, it's just a visual button.
                // The parent motion.a is the actual clickable link.
              >
                View Website 🚀
              </motion.div>
            </div>

            {/* Glowing Border Effect */}
            <div
              className="absolute inset-0 border-2 sm:border-4 border-transparent rounded-xl transition-all duration-500 group-hover:opacity-100"
              style={{
                borderColor: lime, // Use lime color for the border
                boxShadow: `0 0 10px 3px ${lime}80`, // Use lime with alpha for the shadow/glow
                opacity: 0, // Initially invisible
                // Tailwind's group-hover:opacity-100 will handle visibility on hover
              }}
            ></div>

            {/* Short Note Below the Card (outside the motion.a) */}
            {/* Note: The original structure had the note outside the <a>.
                This means the note won't participate in the card's click, but will animate with the card.
                If the note should be part of the clickable area, it needs to be inside motion.a
                For this refactor, keeping it outside as per original. */}
            <p className="mt-4 text-gray-300 text-sm sm:text-base text-center w-[90%]">
              {project.note}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;