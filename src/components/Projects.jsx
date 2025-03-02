import React from 'react';
import { motion as Motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "CRM System",
      description: "A comprehensive CRM system with a Recruitment Module featuring job creation, candidate profiles, and interview scheduling.",
      tech: ["React.js", "Tailwind", "Headless UI", "React Query"],
      points: [
        "Spearheaded the development of a CRM system with a Recruitment Module",
        "Developed features for job creation and candidate profiles",
        "Refined user experience with an intuitive UI"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with authentication and secure messaging features.",
      tech: ["React.js", "Tailwind", "Firebase"],
      points: [
        "Designed and Developed using React.js and Firebase Firestore",
        "Implemented secure authentication and real-time chat functionality"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Find Your PG",
      description: "A role-based platform for PG accommodation management and search.",
      tech: ["React.js", "Tailwind", "Firebase"],
      points: [
        "Created a role-based platform using React.js and Firebase",
        "Enabled admins to manage PG listings through intuitive interface"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div name='projects' className='min-h-screen py-20'>
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='max-w-[1000px] mx-auto p-4'
      >
        <h2 className='text-4xl font-bold inline-block mb-8'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
            Projects
          </span>
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='relative group'
            >
              {/* Background Gradient */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
              
              {/* Content */}
              <div className='relative bg-[#1E293B] rounded-lg p-6 h-full'>
                <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
                
                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 text-sm bg-[#0F172A] rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Points */}
                <ul className='space-y-2 mb-4'>
                  {project.points.map((point, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='text-purple-500 mt-1'>▹</span>
                      <span className='text-sm text-gray-400'>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </div>
  );
};

export default Projects; 