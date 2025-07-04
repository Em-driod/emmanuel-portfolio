import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaCss3, FaHtml5, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Define Framer Motion Variants
const sectionTitleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay for children
      delayChildren: 0.2, // Delay before first child animates
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    title: "Car Rental & Sales",
    desc: "Luxury car rentals & sales website.",
    link: "https://emma-ride-xgiv.vercel.app/", // Actual link
    tech: "React, Node.js, MongoDB",
    image: "7.jpg",
  },
  {
    title: "Sneaker Store",
    desc: "E-commerce sneaker marketplace.",
    link: "https://sneakers-store2.vercel.app/", // Actual link
    tech: "React, Redux, Firebase",
    image: "10.png",
  },
  {
    title: "Portfolio",
    desc: "Professional developer portfolio.",
    link: "https://portfolio-three-kappa-38.vercel.app/", // Actual link
    tech: "Next.js, CSS Modules",
    image: "6.jpg",
  },
  {
    title: "Real Estate Hub", // Changed title to differentiate
    desc: "Property listing and management.",
    link: "https://emma-real-estate-z9j5.vercel.app/", // Actual link
    tech: "React, GraphQL, Apollo",
    image: "5.jpg",
  },
  {
    title: "Fashion Design",
    desc: "Trending with class site.",
    link: "#", // Placeholder if no live link
    tech: "React, TypeScript",
    image: "9.jpg",
  },
  {
    title: "Admin Dashboard", // Changed title to differentiate
    desc: "Analytics dashboard for e-commerce.",
    link: "https://eazystore.vercel.app/", // Actual link
    tech: "React, Chart.js, Firebase",
    image: "8.jpg",
  },
];

const Showcase = () => {
  const [message, setMessage] = useState("");
  const lime = "#a3e635"; // Define lime color

  const handleMessageSubmit = () => {
    // Current time is Friday, July 4, 2025 at 12:09:25 PM WAT. Location is Lekki, Lagos, Nigeria.
    // The phone number 2347016969298 is a Nigerian number.
    const url = `https://wa.me/2347016969298?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
        className="py-20 flex items-center justify-center bg-gradient-to-b from-black to-neutral-950 text-white"
      >
        <motion.h1
          variants={sectionTitleVariants}
          className="text-5xl font-bold text-center px-6 sm:px-8"
        >
          Welcome to My <span style={{ color: lime }}>Showcase</span>
        </motion.h1>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
        className="py-20 flex flex-col items-center justify-center bg-black text-white"
      >
        <motion.h2
          variants={sectionTitleVariants}
          className="text-4xl font-bold mb-12 text-center px-6 sm:px-8"
        >
          Featured <span style={{ color: lime }}>Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl px-6 sm:px-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-5 bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 cursor-pointer group"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
              <p className="text-gray-400 italic text-xs mb-4">Tech: {project.tech}</p>
              <motion.a // Use motion.a for framer motion props on anchor tags
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium rounded-full border"
                style={{ borderColor: lime, color: lime }}
                whileHover={{ backgroundColor: lime, color: 'black' }}
                whileTap={{ scale: 0.95 }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
      >
        <motion.h2
          variants={sectionTitleVariants}
          className="text-4xl font-bold mb-12 text-center px-6 sm:px-8"
        >
          My Core <span style={{ color: lime }}>Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-8 max-w-4xl mb-4 px-6 sm:px-8"
        >
          {[
            { Icon: FaReact, name: "React" },
            { Icon: FaJs, name: "JavaScript" },
            { Icon: FaCss3, name: "CSS3" },
            { Icon: FaHtml5, name: "HTML5" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="flex flex-col items-center p-4 rounded-lg bg-neutral-800 shadow-md"
            >
              <skill.Icon className="text-5xl sm:text-6xl" style={{ color: lime }} />
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-gray-300 text-center max-w-lg px-6 sm:px-8">
          I specialize in building responsive and engaging web applications using modern technologies.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 flex flex-col items-center justify-center bg-black text-white"
      >
        <motion.h2
          variants={sectionTitleVariants}
          className="text-4xl font-bold mb-12 text-center px-6 sm:px-8"
        >
          Get in <span style={{ color: lime }}>Touch</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="flex justify-center space-x-6 mt-4 mb-8"
        >
          {[
            { Icon: FaGithub, link: "https://github.com/your-github" }, // Replace with actual links
            { Icon: FaLinkedin, link: "https://linkedin.com/in/your-linkedin" }, // Replace with actual links
            { Icon: FaWhatsapp, link: "https://wa.me/2347016969298" },
            { Icon: FaXTwitter, link: "https://x.com/your-twitter" }, // Replace with actual links
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.2, color: lime, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="text-white hover:text-lime-400 transition-colors duration-300"
            >
              <social.Icon className="text-4xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Message Section */}
        <motion.div
          variants={itemVariants} // Animate the whole message form block
          className="mt-4 px-6 sm:px-8 w-full max-w-md"
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows="4"
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-lime-400 mb-4"
          ></textarea>
          <button
            onClick={handleMessageSubmit}
            className="w-full py-3 bg-lime-400 text-black font-medium rounded-md hover:bg-lime-500 transition duration-300"
          >
            Send Message
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Showcase;