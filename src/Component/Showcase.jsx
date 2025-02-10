import React, { useState } from "react";  
import { motion } from "framer-motion";  
import { FaReact, FaJs, FaCss3, FaHtml5, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";  
import { FaXTwitter } from "react-icons/fa6";  

// Project data with additional content  
const projects = [  
  {  
    title: "Car Rental & Sales",  
    desc: "Luxury car rentals & sales website.",  
    link: "/cars",  
    tech: "React, Node.js, MongoDB",  
    image: "7.jpg", // Placeholder for project image  
  },  
  {  
    title: "Sneaker Store",  
    desc: "E-commerce sneaker marketplace.",  
    link: "/sneakers",  
    tech: "React, Redux, Firebase",  
    image: "10.png", // Placeholder for project image  
  },  
  {  
    title: "Portfolio",  
    desc: "Professional developer portfolio.",  
    link: "/portfolio",  
    tech: "Next.js, CSS Modules",  
    image: "6.jpg", // Placeholder for project image  
  },  
  {  
    title: "Real Estate",  
    desc: "Create and post your market",  
    link: "/real-estate",  
    tech: "React, GraphQL, Apollo",  
    image: "5.jpg", // Placeholder for project image  
  },  
  {
    title: "Fashion Design",
    desc: "Trending with class site",
    link: "",
    tech: "React,typescript..",
    image: "9.jpg",
  },
  {  
    title: "Real Estate",  
    desc: "Property listing and management.",  
    link: "/real-estate",  
    tech: "React, GraphQL, Apollo",  
    image: "8.jpg", // Placeholder for project image  
  },  
];  

const Showcase = () => {
  const [message, setMessage] = useState("");  

  const handleMessageSubmit = () => {
    const url = `https://wa.me/2347016969298?text=${encodeURIComponent(message)}`;  
    window.open(url, "_blank");  
  };

  return (  
    <div className="overflow-hidden">  
      {/* Header Section */}  
      <section className="min-h-60 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white mb-2">  
        <motion.h1  
          className="text-5xl font-bold text-center px-6 sm:px-8"  
          initial={{ opacity: 0, y: -50 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1 }}  
        >  
          Welcome to My Showcase  
        </motion.h1>  
      </section>  

      {/* Projects Section */}  
      <section className="min-h-60 flex flex-col items-center justify-center bg-gray-900 text-white mb-2">  
        <motion.h2  
          className="text-3xl font-bold mb-2 px-6 sm:px-8"  
          initial={{ opacity: 0, x: -100 }}  
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1 }}  
        >  
          Tools for the project  
        </motion.h2>  

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl px-6 sm:px-8">  
          {projects.map((project, index) => (  
            <motion.div  
              key={index}  
              className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"  
              whileHover={{ scale: 1.05 }}  
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.5, delay: index * 0.2 }}  
            >  
              <img src={project.image} alt={project.title} className="w-full h-32 sm:h-40 object-cover rounded-md mb-2" /> {/* Image */}  
              <h3 className="text-xl font-semibold">{project.title}</h3>  
              <p className="text-gray-300">{project.desc}</p>  
              <p className="text-gray-400 italic">{project.tech}</p> {/* Tech stack */}  
              <a href={project.link} className="text-blue-400 hover:underline block mt-2">  
                View Project →  
              </a>  
            </motion.div>  
          ))}  
        </div>  
      </section>  

      {/* Skills Section */}  
      <section className="min-h-60 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700 text-white mb-2">  
        <motion.h2  
          className="text-3xl font-bold mb-2 px-6 sm:px-8"  
          initial={{ opacity: 0, x: -10 }}  
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1 }}  
        >  
          My Skills  
        </motion.h2>  

        <div className="flex justify-center space-x-6 mb-2 px-6 sm:px-8"> {/* Adjusted space between icons */}  
          {[FaReact, FaJs, FaCss3, FaHtml5].map((Icon, index) => (  
            <motion.div key={index} whileHover={{ scale: 1.2 }}>  
              <Icon className="text-4xl sm:text-5xl text-blue-400 transition-transform duration-300" />  
            </motion.div>  
          ))}  
        </div>  
        <p className="text-gray-300 text-center max-w-lg px-6 sm:px-8">  
          I specialize in building responsive and engaging web applications using modern technologies.  
        </p>  
      </section>  

      {/* Contact Section */}  
      <section className="min-h-60 flex flex-col items-center justify-center bg-gray-900 text-white mb-2">  
        <motion.h2  
          className="text-3xl font-bold mb-3 px-6 sm:px-8"  
          initial={{ opacity: 0, y: -50 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1 }}  
        >  
          Get in Touch  
        </motion.h2>  
        <div className="flex justify-center space-x-4 mt-2">  
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">  
            <FaGithub className="text-4xl hover:text-gray-400 transition-colors duration-300" />  
          </a>  
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">  
            <FaLinkedin className="text-4xl hover:text-gray-400 transition-colors duration-300" />  
          </a>  
          <a href="https://wa.me/2347016969298">  
            <FaWhatsapp className="text-4xl hover:text-gray-400 transition-colors duration-300" />  
          </a>  
          <a href="https://x.com/sheenleen2">  
            <FaXTwitter className="text-4xl hover:text-gray-400 transition-colors duration-300" />  
          </a>  
        </div>  

        {/* Message Section */}  
        <div className="mt-4 px-6 sm:px-8 w-full max-w-md">  
          <textarea  
            value={message}  
            onChange={(e) => setMessage(e.target.value)}  
            placeholder="Write your message..."  
            rows="4"  
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"  
          ></textarea>  
          <button  
            onClick={handleMessageSubmit}  
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"  
          >  
            Send Message  
          </button>  
        </div>  
      </section>  
    </div>  
  );  
};  

export default Showcase;

