import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import { motion } from 'framer-motion';  

const Navbar = () => {  
  const [menuOpen, setMenuOpen] = useState(false);  

  return (  
    <header className="fixed top-0 left-0 w-full opacity-80 z-50 bg-gray-800">  
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
          
          <Link to="/services" className="text-lg hover:text-blue-500 transition duration-300">Services</Link>  
          <Link to="/blog" className="text-lg hover:text-blue-500 transition duration-300">Blog</Link>  
           
          <Link to="/contact" className="text-lg hover:text-blue-500 transition duration-300">Contact</Link>  
        </motion.div>  

        {/* Call Button */}  
        <div className="hidden md:block">  
          <Link to="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">  
            +234-7016969298
          </Link>  
        </div>  

        {/* Mobile Hamburger Menu */}  
        <div className="md:hidden flex items-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>  
          <motion.div className="w-8 h-0.5 bg-white my-1" animate={{ rotate: menuOpen ? 45 : 0, translateY: menuOpen ? 6 : 0 }} />  
          <motion.div className="w-8 h-0.5 bg-white my-1" animate={{ opacity: menuOpen ? 0 : 1 }} />  
          <motion.div className="w-8 h-0.5 bg-white my-1" animate={{ rotate: menuOpen ? -45 : 0, translateY: menuOpen ? -6 : 0 }} />  
        </div>  
      </nav>  

      {/* Mobile Menu */}  
      {menuOpen && (  
        <motion.div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>  
          <motion.div className="flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-lg" initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>  
            <Link to="/" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>  
            <Link to="/about" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>  
            <Link to="/services" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Services</Link>  
            <Link to="/blog" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Blog</Link>  
            <Link to="/shop" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Shop</Link>  
            <Link to="/faq" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>FAQ</Link>  
            <Link to="/contact" className="text-xl text-blue-700 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>  
          </motion.div>  
        </motion.div>  
      )}  
    </header>  
  );  
};  

export default Navbar;