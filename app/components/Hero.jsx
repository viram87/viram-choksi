import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      name="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 pointer-events-none">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="relative inline-flex items-center justify-center p-1 mb-8 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0F172A] rounded-md text-gray-300">
                Available for Work
              </span>
            </div>
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Viram Choksi
          </Motion.h1>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-8 text-gray-300"
          >
            Software Engineer
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Building exceptional digital experiences with modern web
            technologies. Specialized in React.js, Vue.js, and frontend
            development.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              smooth={true}
              duration={500}
              offset={-80}
              to="projects"
              className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              smooth={true}
              duration={500}
              offset={-80}
              to="contact"
              className="px-8 py-3 text-lg font-medium text-gray-300 border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </Motion.div>

          {/* Scroll Indicator */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
              <Motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-2 bg-gray-300 rounded-full"
              ></Motion.div>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
