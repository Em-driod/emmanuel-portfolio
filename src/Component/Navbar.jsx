import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const splashRef = useRef(null);

  // Water Splash Effect
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        const rect = e.target.getBoundingClientRect();
        gsap.fromTo(
          splashRef.current,
          { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, scale: 0, opacity: 1 },
          { scale: 1.5, opacity: 0, duration: 0.6, ease: "power2.out" }
        );
      });
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-900/50 shadow-lg">
      <nav className="flex items-center justify-between px-4 md:px-12 py-4 max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <motion.div
          className="text-3xl font-extrabold text-white tracking-wide select-none"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/" className="hover:text-blue-500 transition duration-300">
            <motion.span className="text-blue-400" whileHover={{ scale: 1.1, rotate: -5 }}>
              Eseyin
            </motion.span>{" "}
            Emmanuel
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex space-x-8 text-white text-lg font-semibold relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {["Home", "Projects", "About", "Contact"].map((item, index) => {
            const linkPath = item === "Home" ? "/" : item === "Projects" ? "/Project" : `/${item.toLowerCase()}`;

            return (
              <motion.div key={index} className="relative">
                <Link
                  to={linkPath}
                  className={`nav-link relative z-10 ${
                    location.pathname === linkPath ? "text-blue-400" : "hover:text-blue-400"
                  } transition duration-300`}
                >
                  {item}
                </Link>
              </motion.div> b 
            );
          })}
        </motion.div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex space-x-5">
          {[
            { icon: <FaWhatsapp />, color: "text-green-400", link: "https://wa.me/2347016969298" },
            { icon: <FaXTwitter />, color: "text-blue-400", link: "https://x.com/sheenleen2" },
            { icon: <FaLinkedin />, color: "text-blue-600", link: "https://linkedin.com/in/your-linkedin-profile" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-2xl hover:${social.color} transition duration-300`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <FaBars />
        </motion.button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6 }}
          >
            {/* Cancel Button Inside the Menu */}
            <motion.button
              className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <FaTimes />
            </motion.button>

            {/* Menu Links */}
            {["Home", "Projects", "About", "Contact"].map((item, index) => {
              const linkPath = item === "Home" ? "/" : item === "Projects" ? "/Project" : `/${item.toLowerCase()}`;

              return (
                <motion.div key={index}>
                  <Link to={linkPath} className="nav-link" onClick={() => setMenuOpen(false)}>
                    {item}
                  </Link>
                </motion.div>
              );
            })}

            {/* Social Links (Mobile) */}
            <div className="flex space-x-5 mt-8">
              {[
                { icon: <FaWhatsapp />, color: "text-green-400", link: "https://wa.me/2347016969298" },
                { icon: <FaXTwitter />, color: "text-blue-400", link: "https://x.com/sheenleen2" },
                { icon: <FaLinkedin />, color: "text-blue-600", link: "https://linkedin.com/in/your-linkedin-profile" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-3xl hover:${social.color} transition duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Water Splash Effect (GSAP) */}
      <div ref={splashRef} className="fixed w-16 h-16 bg-blue-400 rounded-full opacity-0 pointer-events-none" style={{ filter: "blur(8px)" }} />
    </header>
  );
};

export default Navbar;
