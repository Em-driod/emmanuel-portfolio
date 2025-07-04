import React from "react";
import { motion } from "framer-motion";

const images = ["1.png", "4.png", "3.png"];

// Define Framer Motion variants for the entrance animation of each image
const imageVariants = {
  hidden: (i) => ({
    opacity: 0,
    // Start from left for even index, right for odd index
    x: i % 2 === 0 ? -100 : 100, 
    // Start slightly rotated
    rotateY: 45,
    scale: 0.8,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 1.2, // Slightly shorter duration for snappier entrance
      ease: "easeOut",
    },
  },
};

const Screen = () => {
  const lime = "#a3e635"; // Define lime color for potential use if needed

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10">
      <h2 className="text-4xl font-bold mb-12 text-white">
        Phone Screens of the <span style={{ color: lime }}>Website</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={imageVariants} // Apply the defined variants
            initial="hidden"
            whileInView="visible" // Animate when the element comes into view
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of element is in view, only once
            custom={index} // Pass index as custom prop to variants for conditional animations
            whileHover={{
              scale: 1.05, // Slightly less aggressive scale on hover
              rotateZ: 2, // Subtle rotation on hover
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            className="overflow-hidden rounded-lg shadow-lg" // Removed perspective-1000 from here as it's applied by the transform itself
          >
            <img
              src={`/${img}`}
              alt={`Website Screen ${index + 1}`}
              className="w-full h-[500px] object-cover" // Removed transform-style-preserve-3d as it's handled by Framer Motion's transforms
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Screen;