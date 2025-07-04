import React, { useState } from "react";
import { FaReact, FaJs, FaCss3, FaHtml5, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const projects = [
  {
    title: "Car Rental & Sales",
    desc: "Luxury car rentals & sales website.",
    link: "https://emma-ride-xgiv.vercel.app/",
    tech: "React, Node.js, MongoDB",
    image: "7.jpg",
  },
  {
    title: "Sneaker Store",
    desc: "E-commerce sneaker marketplace.",
    link: "https://sneakers-store2.vercel.app/",
    tech: "React, Redux, Firebase",
    image: "10.png",
  },
  {
    title: "Portfolio",
    desc: "Professional developer portfolio.",
    link: "https://portfolio-three-kappa-38.vercel.app/",
    tech: "Next.js, CSS Modules",
    image: "6.jpg",
  },
  {
    title: "Real Estate Hub",
    desc: "Property listing and management.",
    link: "https://emma-real-estate-z9j5.vercel.app/",
    tech: "React, GraphQL, Apollo",
    image: "5.jpg",
  },
  {
    title: "Fashion Design",
    desc: "Trending with class site.",
    link: "#",
    tech: "React, TypeScript",
    image: "9.jpg",
  },
  {
    title: "Admin Dashboard",
    desc: "Analytics dashboard for e-commerce.",
    link: "https://eazystore.vercel.app/",
    tech: "React, Chart.js, Firebase",
    image: "8.jpg",
  },
];

const Showcase = () => {
  const [message, setMessage] = useState("");
  const lime = "#a3e635"; // Define lime color

  const handleMessageSubmit = () => {
    const url = `https://wa.me/2347016969298?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <section className="py-20 flex items-center justify-center bg-gradient-to-b from-black to-neutral-950 text-white">
        <h1 className="text-5xl font-bold text-center px-6 sm:px-8">
          Welcome to My <span style={{ color: lime }}>Showcase</span>
        </h1>
      </section>

      {/* Projects Section */}
      <section className="py-20 flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-12 text-center px-6 sm:px-8">
          Featured <span style={{ color: lime }}>Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl px-6 sm:px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-5 bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 cursor-pointer group transition-transform duration-200 hover:scale-105"
            >
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
              <p className="text-gray-400 italic text-xs mb-4">Tech: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium rounded-full border"
                style={{ borderColor: lime, color: lime }}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center px-6 sm:px-8">
          My Core <span style={{ color: lime }}>Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mb-4 px-6 sm:px-8">
          {[
            { Icon: FaReact, name: "React" },
            { Icon: FaJs, name: "JavaScript" },
            { Icon: FaCss3, name: "CSS3" },
            { Icon: FaHtml5, name: "HTML5" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-neutral-800 shadow-md transition-transform duration-200 hover:scale-110"
            >
              <skill.Icon className="text-5xl sm:text-6xl" style={{ color: lime }} />
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-300 text-center max-w-lg px-6 sm:px-8">
          I specialize in building responsive and engaging web applications using modern technologies.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-12 text-center px-6 sm:px-8">
          Get in <span style={{ color: lime }}>Touch</span>
        </h2>

        <div className="flex justify-center space-x-6 mt-4 mb-8">
          {[
            { Icon: FaGithub, link: "https://github.com/your-github" },
            { Icon: FaLinkedin, link: "https://linkedin.com/in/your-linkedin" },
            { Icon: FaWhatsapp, link: "https://wa.me/2347016969298" },
            { Icon: FaXTwitter, link: "https://x.com/your-twitter" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-400 transition-colors duration-300 text-4xl"
              style={{ display: "inline-block" }}
            >
              <social.Icon />
            </a>
          ))}
        </div>

        {/* Message Section */}
        <div className="mt-4 px-6 sm:px-8 w-full max-w-md">
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
        </div>
      </section>
    </div>
  );
};

export default Showcase;