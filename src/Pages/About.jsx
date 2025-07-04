import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
// REMOVED GSAP IMPORT
// import gsap from "gsap";

const About = () => {
  // REMOVED GSAP REFS
  // const sections = useRef([]);
  // const indicator = useRef(null);

  // State to track which section is currently active for the indicator
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // Refs for each section to use with useInView
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const visionRef = useRef(null);

  // useInView hooks for each section (amount: 0.5 means when 50% of the element is visible)
  const isIntroInView = useInView(introRef, { amount: 0.5, once: false });
  const isSkillsInView = useInView(skillsRef, { amount: 0.5, once: false });
  const isExperienceInView = useInView(experienceRef, { amount: 0.5, once: false });
  const isVisionInView = useInView(visionRef, { amount: 0.5, once: false });

  // Update activeSectionIndex based on which section is in view
  useEffect(() => {
    if (isIntroInView) {
      setActiveSectionIndex(0);
    } else if (isSkillsInView) {
      setActiveSectionIndex(1);
    } else if (isExperienceInView) {
      setActiveSectionIndex(2);
    } else if (isVisionInView) {
      setActiveSectionIndex(3);
    }
  }, [isIntroInView, isSkillsInView, isExperienceInView, isVisionInView]);

  // Define the lime color for consistent use
  const limeColor = "#a3e635";

  // Framer Motion variants for section entrance animation
  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative min-h-screen bg-black text-white px-8 md:px-20 py-20"> {/* Changed background to black */}
      {/* Side Punch Indicator */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden md:block z-10"> {/* Added z-10 */}
        <div className="relative flex flex-col space-y-6">
          {/* Static labels for the indicator */}
          {["Introduction", "Skills", "Experience", "Vision"].map((item, index) => (
            <div key={index} className="relative text-gray-500 text-sm transition duration-300">
              {item}
            </div>
          ))}
          {/* Animated indicator */}
          <motion.div
            className="absolute left-0 w-2 h-6 rounded-full"
            style={{ backgroundColor: limeColor }} // Applied lime color
            // Animate Y position based on active section index
            animate={{ y: activeSectionIndex * 40 }}
            // Smooth spring animation for the indicator's movement
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Introduction Section */}
        <motion.div
          className="section" // Added for consistent styling if needed
          ref={introRef} // Assign ref for useInView
          variants={sectionVariants}
          initial="hidden"
          // Animate into view when 50% visible, animate out when less than 50% visible
          animate={isIntroInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold" style={{ color: limeColor }}>Who Am I?</h2> {/* Applied lime color */}
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            My name is Eseyin Emmanuel, a passionate and innovative WEB DEVELOPER with expertise in **JavaScript, ReactJS, Tailwind CSS, and Vite**. With a keen eye for detail and a strong grasp of modern web technologies, I specialize in **creating highly responsive, visually captivating, and performance-optimized web experiences**.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="section"
          ref={skillsRef} // Assign ref for useInView
          variants={sectionVariants}
          initial="hidden"
          animate={isSkillsInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold" style={{ color: limeColor }}>Technical Skills</h2> {/* Applied lime color */}
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I excel in "Frontend Development**, ensuring seamless user interactions and intuitive UI/UX designs. My skill set includes:
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-400 text-lg">
            <li>⚡ JavaScript (ES6+)</li>
            <li>⚡ ReactJS & Vite</li>
            <li>⚡ Typescript</li>
            <li>⚡ Tailwind CSS & Framer Motion</li>
            <li>⚡ GSAP for animations</li> {/* Note: GSAP is listed as a skill but removed from component code */}
            <li>⚡ Contentful CMS Integration</li>
            <li>⚡ API Handling & State Management</li>
            <li>⚡ Backend </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="section"
          ref={experienceRef} // Assign ref for useInView
          variants={sectionVariants}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold" style={{ color: limeColor }}>Experience & Projects</h2> {/* Applied lime color */}
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Over the years, I have worked on multiple "HIGH IMPACT PROJECTS", delivering clean, efficient, and scalable solutions. Some of my **notable projects** include:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="text-gray-400">✔ **EmmaRide** – A car rental and sales website with a seamless user experience.</li>
            <li className="text-gray-400">✔ **E-Commerce Sneaker Store** – A fully responsive sneaker sales platform with advanced UI animations.</li>
            <li className="text-gray-400">✔ **Portfolio Website** – A dynamic portfolio that showcases my projects and capabilities.</li>
            <li className="text-gray-400">✔ **Jomiloju Fashion** – A dynamic portfolio that showcases my projects and capabilities.</li>
            <li className="text-gray-400">✔ **Eazy** – A dynamic portfolio that showcases my projects and capabilities.</li>
          </ul>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="section"
          ref={visionRef} // Assign ref for useInView
          variants={sectionVariants}
          initial="hidden"
          animate={isVisionInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold" style={{ color: limeColor }}>Vision & Goals</h2> {/* Applied lime color */}
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            My VISION is to become a globally recognized web development expert, pushing the boundaries of creativity and innovation. I aim to **build high-performing applications** that not only meet client needs but also redefine user experience standards.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;