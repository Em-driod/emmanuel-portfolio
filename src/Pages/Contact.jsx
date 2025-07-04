import React, { useState } from "react";
import { motion } from "framer-motion";
// REMOVED GSAP IMPORT
// import { gsap } from "gsap";
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  // REMOVED GSAP useEffect
  // useEffect(() => {
  //   gsap.fromTo(".animate", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });
  // }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message link
    const whatsappMessage = `Hi!%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    // Using a more appropriate WhatsApp number format if needed for international use
    // For local Nigerian numbers, 07016969298 would be 2347016969298
    window.open(`https://wa.me/2347016969298?text=${whatsappMessage}`, "_blank");

    // Reset form after sending
    setFormData({ fullName: '', email: '', message: '' });
  };

  // Define lime color for consistency
  const limeColor = "#a3e635";

  // Framer Motion variants for staggered elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger delay for children elements
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16"> {/* Changed background to black, added top padding for navbar */}
      {/* Hero Section */}
      <motion.div
        className="bg-neutral-900 text-white py-16" // Changed background to neutral-900
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg">
            I’m always open to new opportunities, collaborations, and conversations! Feel free to reach out to discuss potential projects or ideas!
          </p>
        </div>
      </motion.div>

      {/* Social Media Links Section */}
      <div className="py-8 max-w-7xl mx-auto text-center">
        <h4 className="text-2xl font-bold text-white">Follow Me</h4> {/* Changed text color to white */}
        <div className="flex justify-center space-x-6 mt-4">
          <motion.a
            href="https://wa.me/2347016969298"
            className="text-green-400 hover:text-green-500 transition duration-300" // Kept green for WhatsApp, added hover
            aria-label="WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={30} />
          </motion.a>
          <motion.a
            href="https://twitter.com/sheenleen2" // Placeholder, if real Twitter needed, update this
            className="text-lime-400 hover:text-lime-500 transition duration-300" // Changed colors to lime
            aria-label="X (Twitter)"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/eseyin-emmanuel-217277259/" // Placeholder, if real LinkedIn needed, update this
            className="text-lime-400 hover:text-lime-500 transition duration-300" // Changed colors to lime
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-neutral-900 py-16 rounded-lg shadow-xl max-w-4xl mx-auto px-4"> {/* Changed background, added max-width, rounded, shadow */}
        <motion.h2
          className="text-3xl font-bold text-center"
          style={{ color: limeColor }} // Applied lime color
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Animate once when 50% in view
          transition={{ duration: 0.6 }}
        >
          Drop Me a Message
        </motion.h2>
        <motion.form
          className="mt-8 space-y-8"
          onSubmit={handleSubmit}
          initial="hidden" // Apply container variants for form elements
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of form is in view
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}> {/* Apply item variants */}
              <label className="block text-sm font-medium text-gray-300">Full Name</label> {/* Changed label color */}
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-1 block w-full border-neutral-700 rounded-lg shadow-sm p-3 bg-neutral-800 text-white placeholder-gray-400 focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50" // Changed border, added dark bg, text, placeholder, focus styles
                placeholder="Enter your name"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Apply item variants */}
              <label className="block text-sm font-medium text-gray-300">Email Address</label> {/* Changed label color */}
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full border-neutral-700 rounded-lg shadow-sm p-3 bg-neutral-800 text-white placeholder-gray-400 focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50" // Changed border, added dark bg, text, placeholder, focus styles
                placeholder="Enter your email"
                required
              />
            </motion.div>
          </div>
          <motion.div variants={itemVariants}> {/* Apply item variants */}
            <label className="block text-sm font-medium text-gray-300">Message</label> {/* Changed label color */}
            <textarea
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 block w-full border-neutral-700 rounded-lg shadow-sm p-3 bg-neutral-800 text-white placeholder-gray-400 focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50" // Changed border, added dark bg, text, placeholder, focus styles
              placeholder="Write your message here"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-lime-500 text-black py-3 px-6 rounded-lg shadow font-semibold" // Changed button color to lime, text to black
            whileHover={{ scale: 1.02, backgroundColor: '#84cc16' }} // Hover effect with slightly darker lime
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            variants={itemVariants} // Apply item variants
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;