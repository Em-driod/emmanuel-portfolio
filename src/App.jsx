import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for animation

import Navbar from './Component/Navbar';
import Project from './Pages/Project';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Showcase from './Component/Showcase';
import webImage from './Component/WebImage'; // Import WebImage if needed

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const limeColor = "#a3e635"; // Define your lime color for consistency

  useEffect(() => {
    // Simulate a loading delay for the entire application.
    // In a real app, you would replace this with actual data fetching,
    // authentication checks, or resource loading promises.
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust delay (in milliseconds) as needed for your content

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  // If isLoading is true, show the loading spinner
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-t-4 border-gray-700"
          style={{ borderTopColor: limeColor }} // The top border will be the rotating "spinner" part
          animate={{ rotate: 360 }} // Animate rotation
          transition={{
            loop: Infinity, // Loop the animation indefinitely
            ease: "linear", // Make the rotation speed consistent
            duration: 1 // One second per full rotation
          }}
        />
      </div>
    );
  }

  // Once loading is complete, render the main application content
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/Contact' element={<Contact />} />
          {/* Removed duplicate Route for /About */}
          <Route path='/About' element={<About />} /> 
          <Route path='/Project' element={<Project />} />
          <Route path='/Showcase' element={<Showcase />} />
          <Route path='/WebImage' element={<webImage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;