import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-6 py-12">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
        🚀 Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 group block"
            whileHover={{ scale: 1.07, rotateY: 5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover brightness-90 group-hover:brightness-110 transition duration-300"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <h3 className="text-2xl font-bold text-white tracking-wider">
                {project.title}
              </h3>
              <motion.div
                className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                View Website 🚀
              </motion.div>
            </div>

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-blue-500 transition-all duration-500 shadow-[0_0_15px_5px_rgba(59,130,246,0.8)] opacity-0 group-hover:opacity-100"></div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default WebImage;


