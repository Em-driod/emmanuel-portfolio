import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
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
          <Link to="/" className="hover:text-blue-500">Eseyin Emmanuel</Link>
        </motion.div>

        {/* Hide Navbar Links on Phone Screens */}
        <motion.div
          className="hidden md:flex space-x-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link to="/services" className="text-lg hover:text-blue-500 transition duration-300">Services</Link>
          <Link to="/blog" className="text-lg hover:text-blue-500 transition duration-300">Blog</Link>
          <Link to="/contact" className="text-lg hover:text-blue-500 transition duration-300">Contact</Link>
        </motion.div>

        {/* Social Media Icons (Always Visible) */}
        <div className="flex space-x-5">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/2347016969298"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-green-400 text-2xl hover:text-green-500 transition duration-300"
            animate={{ boxShadow: ["0px 0px 0px rgba(34,197,94,0.5)", "0px 0px 10px rgba(34,197,94,0.8)", "0px 0px 0px rgba(34,197,94,0.5)"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaWhatsapp />
          </motion.a>

          {/* X (Twitter) */}
          <motion.a
            href="https://x.com/sheenleen2"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-blue-400 text-2xl hover:text-blue-500 transition duration-300"
            animate={{ boxShadow: ["0px 0px 0px rgba(59,130,246,0.5)", "0px 0px 10px rgba(59,130,246,0.8)", "0px 0px 0px rgba(59,130,246,0.5)"] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          >
            <FaXTwitter />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-blue-600 text-2xl hover:text-blue-700 transition duration-300"
            animate={{ boxShadow: ["0px 0px 0px rgba(10,102,194,0.5)", "0px 0px 10px rgba(10,102,194,0.8)", "0px 0px 0px rgba(10,102,194,0.5)"] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


