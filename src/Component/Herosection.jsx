import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const backgrounds = [
  {
    image: '/2 (1).jpg',
    title: "Hello, I'm Eseyin Emmanuel",
    subtitle: "A passionate Web Developer proficient in JavaScript, Vite, ReactJS, CSS, and Tailwind CSS",
  },
  {
    image: '/2 (2).jpg',
    title: "Welcome to My Portfolio",
    subtitle: "Explore my projects and experiences.",
  }
];

const Herosection = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);

      // Explosive Animation
      gsap.fromTo(bgRef.current, 
        { scale: 1.2, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" }
      );

      gsap.fromTo(titleRef.current, 
        { scale: 0.8, opacity: 0, y: -50 }, 
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
      );

      gsap.fromTo(subtitleRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(buttonRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "bounce.out", delay: 0.4 }
      );

    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          ref={currentBackground === index ? bgRef : null}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${currentBackground === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${bg.image}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 space-y-6">
            <h1
              ref={currentBackground === index ? titleRef : null}
              className="text-5xl font-extrabold text-white"
            >
              {bg.title}
            </h1>
            <p
              ref={currentBackground === index ? subtitleRef : null}
              className="text-xl font-semibold text-white"
            >
              {bg.subtitle}
            </p>

            {/* Action Buttons */}
            <div ref={currentBackground === index ? buttonRef : null} className="space-x-6">
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Herosection;
