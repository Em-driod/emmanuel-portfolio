import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp,FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full opacity-90 z-50 bg-gray-800">
      <nav className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-2xl font-extrabold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:text-blue-500">
            Eseyin Emmanuel
          </Link>
        </motion.div>

        {/* Navbar Links */}
        <motion.div
          className="hidden md:flex space-x-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link to="/services" className="text-lg hover:text-blue-500 transition duration-300">
            Services
          </Link>
          <Link to="/blog" className="text-lg hover:text-blue-500 transition duration-300">
            Blog
          </Link>
          <Link to="/contact" className="text-lg hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </motion.div>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2347016969298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-2xl hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/sheenleen2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:text-blue-500 transition duration-300"
          >
           <FaXTwitter />
          </a>

          {/* LinkedIn (Placeholder) */}
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div
            className="w-8 h-0.5 bg-white my-1"
            animate={{ rotate: menuOpen ? 45 : 0, translateY: menuOpen ? 6 : 0 }}
          />
          <motion.div className="w-8 h-0.5 bg-white my-1" animate={{ opacity: menuOpen ? 0 : 1 }} />
          <motion.div
            className="w-8 h-0.5 bg-white my-1"
            animate={{ rotate: menuOpen ? -45 : 0, translateY: menuOpen ? -6 : 0 }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-lg"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/blog" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/shop" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/contact" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            {/* Social Media Links in Mobile Menu */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://wa.me/2347016969298"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-3xl hover:text-green-600"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://x.com/sheenleen2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-3xl hover:text-blue-500"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-3xl hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
