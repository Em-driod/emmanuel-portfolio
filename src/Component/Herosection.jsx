import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["React Developer", "UI Engineer", "Frontend Architect", "JavaScript Specialist"];
  const lime = "#a3e635"; // Tailwind Lime-400

  // Rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Column */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
              }
            }
          }}
          className="space-y-6"
        >
          <motion.h1
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span style={{ color: lime }}>Eseyin Emmanuel</span>
          </motion.h1>

          {/* Rotating Role */}
          <motion.div
            className="h-20 overflow-hidden relative"
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-medium absolute"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
            className="text-lg md:text-xl text-gray-300 max-w-lg"
          >
            Crafting pixel-perfect, performant web experiences with modern
            <span style={{ color: lime }}> React</span>,
            <span style={{ color: lime }}> TypeScript</span>, and
            <span style={{ color: lime }}> Tailwind CSS</span>.
          </motion.p>

          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => navigate("/projects")}
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/webImage">
                View Projects
              </Link>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 border-2 border-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >

              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative bg-gray-900 rounded-xl p-6 shadow-2xl border border-gray-800 overflow-hidden">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-400 mb-2">// React Component Example</div>
              <div>
                <span className="text-purple-400">import</span> React{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'react'</span>;
              </div>
              <div>
                <span className="text-purple-400">import</span> {"{ motion }"}{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'framer-motion'</span>;
              </div>
              <br />
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">AnimatedCard</span> = () =&gt; &#123;
              </div>
              <div className="ml-4">
                <span className="text-purple-400">return</span> (
              </div>
              <div className="ml-8">{'<motion.div'}</div>
              <div className="ml-12">
                initial=&#123;<span className="text-yellow-300">opacity</span>: 0&#125;
              </div>
              <div className="ml-12">
                animate=&#123;<span className="text-yellow-300">opacity</span>: 1&#125;
              </div>
              <div className="ml-12">
                transition=&#123;<span className="text-yellow-300">duration</span>: 0.5&#125;
              </div>
              <div className="ml-8">{'>'}</div>
              <div className="ml-8">{'<p className="text-lime-400">Hello World!</p>'}</div>
              <div className="ml-8">{'</motion.div>'}</div>
              <div className="ml-4">);</div>
              <div>&#125;</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
