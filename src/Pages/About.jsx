import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const About = () => {
  const sections = useRef([]);
  const indicator = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section, index) => {
      gsap.to(indicator.current, {
        y: index * 40,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white px-8 md:px-20 py-20">
      {/* Side Punch Indicator */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="relative flex flex-col space-y-6">
          {["Introduction", "Skills", "Experience", "Vision"].map((item, index) => (
            <div key={index} className="relative text-gray-500 text-sm transition duration-300">
              {item}
            </div>
          ))}
          <div
            ref={indicator}
            className="absolute left-0 w-2 h-6 bg-blue-400 rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Introduction */}
        <motion.div
          className="section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          ref={(el) => (sections.current[0] = el)}
        >
          <h2 className="text-4xl font-bold text-blue-400">Who Am I?</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            My name is Eseyin Emmanuel, a passionate and innovative WEB DEVELOPER with expertise in **JavaScript, ReactJS, Tailwind CSS, and Vite**. With a keen eye for detail and a strong grasp of modern web technologies, I specialize in **creating highly responsive, visually captivating, and performance-optimized web experiences**.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          ref={(el) => (sections.current[1] = el)}
        >
          <h2 className="text-4xl font-bold text-blue-400">Technical Skills</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I excel in **frontend development**, ensuring seamless user interactions and intuitive UI/UX designs. My skill set includes:
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-400 text-lg">
            <li>⚡ JavaScript (ES6+)</li>
            <li>⚡ ReactJS & Vite</li>
            <li>⚡ Tailwind CSS & Framer Motion</li>
            <li>⚡ GSAP for animations</li>
            <li>⚡ Contentful CMS Integration</li>
            <li>⚡ API Handling & State Management</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          ref={(el) => (sections.current[2] = el)}
        >
          <h2 className="text-4xl font-bold text-blue-400">Experience & Projects</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Over the years, I have worked on multiple **high-impact projects**, delivering clean, efficient, and scalable solutions. Some of my **notable projects** include:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="text-gray-400">✔ **UrbanTorque** – A car rental and sales website with a seamless user experience.</li>
            <li className="text-gray-400">✔ **E-Commerce Sneaker Store** – A fully responsive sneaker sales platform with advanced UI animations.</li>
            <li className="text-gray-400">✔ **Portfolio Website** – A dynamic portfolio that showcases my projects and capabilities.</li>
          </ul>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          ref={(el) => (sections.current[3] = el)}
        >
          <h2 className="text-4xl font-bold text-blue-400">Vision & Goals</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            My VISION is to become a globally recognized web development expert, pushing the boundaries of creativity and innovation. I aim to **build high-performing applications** that not only meet client needs but also redefine user experience standards.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
