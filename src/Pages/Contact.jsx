import React, { useEffect, useState } from "react";  
import { motion } from "framer-motion";  
import { gsap } from "gsap";  
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons  

const Contact = () => {  
  // State to handle form data  
  const [formData, setFormData] = useState({  
    fullName: '',  
    email: '',  
    message: '',  
  });  

  // Function to animate elements on mount  
  useEffect(() => {  
    gsap.fromTo(".animate", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });  
  }, []);  

  // Handle form submission  
  const handleSubmit = (e) => {  
    e.preventDefault();  

    // WhatsApp message link  
    const whatsappMessage = `Hi!%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;  
    window.open(`https://wa.me/07016969298?text=${whatsappMessage}`, "_blank");  

    // Reset form after sending  
    setFormData({ fullName: '', email: '', message: '' });  
  };  

  return (  
    <div className="bg-gray-100 top-10">  
      {/* Hero Section */}  
      <motion.div  
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-10 animate"  
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
        <h4 className="text-2xl font-bold text-gray-800">Follow Me</h4>  
        <div className="flex justify-center space-x-6 mt-4">  
          <a href="https://wa.me/07016969298" className="text-blue-700 hover:text-blue-800" aria-label="WhatsApp">  
            <FaWhatsapp size={30} />  
          </a>  
          <a href="https://twitter.com/yourTwitterHandle" className="text-blue-500 hover:text-blue-600" aria-label="X (Twitter)">  
            <FaTwitter size={30} />  
          </a>  
          <a href="https://www.linkedin.com/in/yourLinkedInProfile" className="text-blue-700 hover:text-blue-800" aria-label="LinkedIn">  
            <FaLinkedin size={30} />  
          </a>  
        </div>  
      </div>  

      {/* Contact Form */}  
      <div className="bg-white py-16">  
        <div className="max-w-7xl mx-auto px-4">  
          <h2 className="text-3xl font-bold text-center text-gray-800 animate">Drop Me a Message</h2>  
          <motion.form  
            className="mt-8 space-y-8"  
            onSubmit={handleSubmit}  
          >  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              <div>  
                <label className="block text-sm font-medium text-gray-700">Full Name</label>  
                <input  
                  type="text"  
                  value={formData.fullName}  
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}  
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-3"  
                  placeholder="Enter your name"  
                  required  
                />  
              </div>  
              <div>  
                <label className="block text-sm font-medium text-gray-700">Email Address</label>  
                <input  
                  type="email"  
                  value={formData.email}  
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}  
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-3"  
                  placeholder="Enter your email"  
                  required  
                />  
              </div>  
            </div>  
            <div>  
              <label className="block text-sm font-medium text-gray-700">Message</label>  
              <textarea  
                rows="4"  
                value={formData.message}  
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}  
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-3"  
                placeholder="Write your message here"  
                required  
              ></textarea>  
            </div>  
            <button  
              type="submit"  
              className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-800"  
            >  
              Send Message  
            </button>  
          </motion.form>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Contact; 
