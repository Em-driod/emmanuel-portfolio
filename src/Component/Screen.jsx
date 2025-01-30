import React from "react";
import { motion } from "framer-motion";

const images = ["1.png", "4.png", "3.png"];

const Screen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-10">
      <h2 className="text-4xl font-bold mb-8">Creative Image Entrance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,           // Start with invisible images
              x: index % 2 === 0 ? -200 : 200,  // Slide from left or right
              y: index % 3 === 0 ? 200 : -200,  // Slide from top or bottom
              scale: 0.8,           // Start slightly smaller
              rotateX: 45,          // Start with slight rotation
              rotateY: 45,
              rotateZ: 45,
            }}
            animate={{
              opacity: 1,           // Fade in
              x: 0,                 // Move to the center
              y: 0,
              scale: 1,             // Return to original size
              rotateX: 0,           // Remove rotation
              rotateY: 0,
              rotateZ: 0,
            }}
            transition={{
              duration: 2,         // Duration of the entrance
              ease: "easeOut",     // Easing for smoothness
            }}
            whileHover={{
              scale: 1.1,          // Slightly scale up on hover
              rotateZ: 5,          // Rotate slightly on hover
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,       // Smooth bounce effect
              },
            }}
            className="overflow-hidden rounded-lg shadow-lg perspective-1000"
          >
            <img
              src={`/${img}`}
              alt={`Image ${index + 1}`}
              className="w-full h-[500px] object-cover transition-all duration-500 transform-style-preserve-3d"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Screen;


