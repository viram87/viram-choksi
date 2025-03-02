import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  const menuItems = [
    { title: 'Home', to: 'hero' },
    { title: 'About', to: 'about' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'Contact', to: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F172A]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex-shrink-0'
          >
            <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
              VC
            </h1>
          </Motion.div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {menuItems.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className='text-gray-300 hover:text-purple-500 cursor-pointer transition-colors relative group'
                >
                  {item.title}
                  <span className='absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300'></span>
                </Link>
              </Motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='md:hidden'
          >
            <button
              onClick={handleClick}
              className='text-gray-300 hover:text-purple-500 transition-colors'
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </Motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden'
          >
            <div className='px-4 pt-2 pb-4 bg-[#0F172A]/95 backdrop-blur-lg space-y-2'>
              {menuItems.map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    onClick={handleClick}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className='block py-3 text-gray-300 hover:text-purple-500 transition-colors text-center relative group'
                  >
                    <span className='relative z-10'>{item.title}</span>
                    <Motion.div
                      whileHover={{ scaleX: 1 }}
                      initial={{ scaleX: 0 }}
                      className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg transform origin-left'
                    />
                  </Link>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Background Gradient Line */}
      <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50'></div>
    </Motion.nav>
  );
};

export default Navbar; 