import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const sentences = [
  {
    title: "Hello, I'm Eseyin Emmanuel",
    subtitle: "A Passionate Web Developer specializing in JavaScript, Vite, ReactJS, CSS, and Tailwind CSS.",
  },
  {
    title: "Crafting Seamless Web Experiences",
    subtitle: "Building high-performance, visually stunning, and interactive websites that leave an impact.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSentence, setCurrentSentence] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const animateIn = () => {
      gsap.fromTo(
        titleRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      );
      gsap.fromTo(
        subtitleRef.current,
        { x: "-100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.3 }
      );
    };

    const animateOut = () => {
      gsap.to(titleRef.current, { opacity: 0, duration: 1, ease: "power3.inOut" });
      gsap.to(subtitleRef.current, { opacity: 0, duration: 1, ease: "power3.inOut" });
    };

    animateIn();

    // After 4 seconds, fade out text
    const fadeOutTimeout = setTimeout(() => {
      animateOut();
    }, 4000);

    // After 5 seconds, change sentence
    const changeSentenceTimeout = setTimeout(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeSentenceTimeout);
    };
  }, [currentSentence]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('12.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight"
        >
          {sentences[currentSentence].title}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-300 mt-4"
        >
          {sentences[currentSentence].subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-6 justify-center items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 sm:py-3 sm:px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/Project")}
          >
            View My Work
          </button>
          <button
            className="w-full sm:w-auto border-2 border-white text-white py-3 px-6 sm:py-3 sm:px-8 rounded-full text-lg hover:bg-white hover:text-blue-700 transition"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
