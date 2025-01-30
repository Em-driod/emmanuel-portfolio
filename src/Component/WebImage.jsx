import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Luxury Car Rentals",
    image: "/path-to-your-image1.jpg",
    link: "https://emma-ride-xgiv.vercel.app/",
  },
  {
    id: 2,
    title: "Sneaker Store",
    image: "/path-to-your-image2.jpg",
    link: "https://sneakers-store2.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate Hub",
    image: "/path-to-your-image3.jpg",
    link: "https://yourwebsite3.com",
  },
  {
    id: 4,
    title: "Modern Portfolio",
    image: "/path-to-your-image4.jpg",
    link: "https://yourwebsite4.com",
  },
  {
    id: 5,
    title: "E-commerce Dashboard",
    image: "/path-to-your-image5.jpg",
    link: "https://yourwebsite5.com",
  },
];

const WebImage = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, scale: 0.85, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-r from-[#3b4f7e] via-[#2c3a58] to-[#1b2d45] px-4 sm:px-6 lg:px-12 py-12"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
        🚀 Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl overflow-hidden shadow-lg sm:shadow-2xl border border-gray-700 group block transition-all duration-300"
            whileHover={{ scale: 1.07, rotateY: 3 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
              <motion.div
                className="mt-4 px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                View Website 🚀
              </motion.div>
            </div>

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 border-2 sm:border-4 border-transparent rounded-xl group-hover:border-blue-500 transition-all duration-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.8)] opacity-0 group-hover:opacity-100"></div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default WebImage;





