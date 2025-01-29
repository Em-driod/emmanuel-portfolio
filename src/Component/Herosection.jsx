import React, { useEffect, useState } from "react";  
import { motion } from "framer-motion";  

const backgrounds = [  
  {  
    image: '/2 (1).jpg',  
    title: "Hello, I'm Eseyin Emmanuel",  
    subtitle: "A passionate Web Developer proficient in JavaScript, Vite, ReactJS, CSS, and Tailwind CSS",  
    titleAnimation: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }},  
    subtitleAnimation: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 }},  
    buttonAnimation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }},  
  },  
  {  
    image: '/2 (2).jpg',  
    title: "Welcome to My Portfolio",  
    subtitle: "Explore my projects and experiences.",  
    titleAnimation: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }},  
    subtitleAnimation: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }},  
    buttonAnimation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }},  
  }  
];  

const Herosection = () => {  
  const [currentBackground, setCurrentBackground] = useState(0);  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);  
    }, 8000); // Change background every 8 seconds  
    return () => clearInterval(interval);  
  }, []);  

  return (  
    <div className="relative h-screen overflow-hidden">  
      {backgrounds.map((bg, index) => (  
        <motion.div  
          key={index}  
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${currentBackground === index ? 'opacity-100' : 'opacity-0'}`}  
          style={{ backgroundImage: `url('${bg.image}')` }}  
        >  
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>  
          
          {/* Hero Content */}  
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 space-y-6">  
            <motion.h1  
              className="text-5xl font-extrabold text-white"  
              initial={bg.titleAnimation.initial}  
              animate={currentBackground === index ? bg.titleAnimation.animate : {}}  
              transition={{ duration: 1 }}  
            >  
              {bg.title}  
            </motion.h1>  
            <motion.p  
              className="text-xl font-semibold text-white"  
              initial={bg.subtitleAnimation.initial}  
              animate={currentBackground === index ? bg.subtitleAnimation.animate : {}}  
              transition={{ duration: 1, delay: 0.3 }}  
            >  
              {bg.subtitle}  
            </motion.p>  

            {/* Action Buttons */}  
            <motion.div  
              className="space-x-6"  
              initial={bg.buttonAnimation.initial}  
              animate={currentBackground === index ? bg.buttonAnimation.animate : {}}  
              transition={{ duration: 1, delay: 0.5 }}  
            >  
              <button  
                className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"  
                onClick={() => window.scrollTo(0, window.innerHeight)}  
              >  
                View My Work  
              </button>  
              <button  
                className="border-2 border-white text-white py-3 px-6 rounded-full text-lg hover:bg-white hover:text-blue-700 transition"  
                onClick={() => window.location = '/contact'}  
              >  
                Get In Touch  
              </button>  
            </motion.div>  
          </div>  
        </motion.div>  
      ))}  
    </div>  
  );  
};  

export default Herosection;




