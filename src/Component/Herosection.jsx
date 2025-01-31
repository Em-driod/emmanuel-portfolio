import React, { useEffect, useState, useRef } from "react";  
import gsap from "gsap";  

const backgrounds = [  
  {  
    image: "/2 (1).jpg",  
    title: "Hello, I'm Eseyin Emmanuel",  
    subtitle:  
      "A Web Developer!! proficient in JavaScript, Vite, ReactJS, CSS, and Tailwind CSS",  
  },  
  {  
    image: "/2 (2).jpg",  
    title: "Welcome to My Portfolio",  
    subtitle: "Explore my projects and experiences.",  
  },  
];  

const HeroSection = () => {  
  const [currentBackground, setCurrentBackground] = useState(0);  
  const bgRef = useRef(null);  
  const contentRef = useRef(null);  
  const buttonRef = useRef(null); // Define buttonRef  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);  
    }, 6000); // Change every 6 seconds  

    return () => clearInterval(interval);  
  }, []);  

  useEffect(() => {  
    // GSAP Background Animation  
    gsap.fromTo(  
      bgRef.current,  
      { opacity: 0 },  
      { opacity: 1, duration: 1.5, ease: "power2.out" }  
    );  

    // GSAP Text Animation  
    gsap.fromTo(  
      contentRef.current,  
      { y: 20, opacity: 0 },  
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }  
    );  
  }, [currentBackground]); // Trigger animations when currentBackground changes  

  return (  
    <div className="relative min-h-screen flex items-center  justify-center overflow-hidden">  
      {/* Background Images with Smooth Transition */}  
      <div  
        ref={bgRef}  
        className="absolute inset-0 bg-cover bg-center items-center transition-opacity duration-1000 ease-in-out"  
        style={{  
          backgroundImage: `url('${backgrounds[currentBackground].image}')`,  
        }}  
      >  
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>  
      </div>  

      {/* Hero Content */}  
      <div  
        ref={contentRef}  
        className="relative z-10 text-center px-6 sm:px-10 max-w-2xl"  
      >  
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">  
          {backgrounds[currentBackground].title}  
        </h1>  
        <p className="text-lg sm:text-xl text-gray-300 mt-4">  
          {backgrounds[currentBackground].subtitle}  
        </p>  

        {/* Action Buttons */}  
        <div  
  ref={buttonRef}  
  className="flex flex-col sm:flex-row mt-6 justify-center items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-6"  
>  
  <button  
    className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 sm:py-3 sm:px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"  
    onClick={() => window.scrollTo(0, window.innerHeight)}  
  >  
    View My Work  
  </button>  
  <button  
    className="w-full sm:w-auto border-2 border-white text-white py-3 px-6 sm:py-3 sm:px-8 rounded-full text-lg hover:bg-white hover:text-blue-700 transition"  
    onClick={() => (window.location = '/contact')}  
  >  
    Get In Touch  
  </button>  
</div>  
      </div>  
    </div>  
  );  
};  

export default HeroSection;