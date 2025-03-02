import React from 'react';
import { motion as Motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '2.8+', text: 'Years Experience' },
    { number: '50K+', text: 'Lines of Code' },
    { number: '10+', text: 'Projects Completed' },
    { number: '15+', text: 'Tech Stack Used' }
  ];

  const highlights = [
    "Software Engineer with expertise in modern web technologies",
    "Specialized in React.js, Vue.js, and frontend development",
    "B.E. in Computer Engineering from Gujarat Technological University",
    "Passionate about creating efficient and scalable applications"
  ];

  return (
    <div name='about' className='min-h-screen py-20'>
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='max-w-[1000px] mx-auto p-4'
      >
        <h2 className='text-4xl font-bold inline-block mb-8'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
            About Me
          </span>
        </h2>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Column - Bio */}
          <Motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='space-y-6'
          >
            <div className='relative group'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
              <div className='relative bg-[#1E293B] rounded-lg p-6'>
                <p className='text-gray-300 leading-relaxed mb-4'>
                  Hello! I'm Viram, a passionate software engineer based in Ahmedabad, India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  My journey in web development started back in college, and since then, I've had the privilege of working at various companies, from startups to established firms, which has given me a well-rounded experience in the field.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className='space-y-3'>
              {highlights.map((highlight, index) => (
                <Motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center gap-3'
                >
                  <span className='text-purple-500'>▹</span>
                  <span className='text-gray-400'>{highlight}</span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Right Column - Stats & Education */}
          <Motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='space-y-8'
          >
            {/* Stats Grid */}
            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat, index) => (
                <Motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group'
                >
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                  <div className='relative bg-[#1E293B] rounded-lg p-6 text-center'>
                    <h3 className='text-3xl font-bold text-purple-500 mb-2'>{stat.number}</h3>
                    <p className='text-gray-400 text-sm'>{stat.text}</p>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Education */}
            <Motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='relative group'
            >
              <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
              <div className='relative bg-[#1E293B] rounded-lg p-6'>
                <h3 className='text-xl font-bold text-purple-500 mb-4'>Education</h3>
                <div className='space-y-2'>
                  <p className='text-gray-300 font-semibold'>Gujarat Technological University</p>
                  <p className='text-gray-400'>Bachelor of Engineering</p>
                  <p className='text-gray-400'>Computer Engineering</p>
                  <p className='text-gray-400'>2019 - 2023</p>
                </div>
              </div>
            </Motion.div>

            {/* Call to Action */}
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-center'
            >
              <a
                href="#contact"
                className='inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity'
              >
                Let's Work Together
              </a>
            </Motion.div>
          </Motion.div>
        </div>
      </Motion.div>
    </div>
  );
};

export default About; 