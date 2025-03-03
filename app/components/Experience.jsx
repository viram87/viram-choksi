import React from "react";
import { motion as Motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Motadata",
      duration: "07/2024 – Present",
      location: "Ahmedabad, India",
      points: [
        "Adapted to VueJs, mastered the framework, and evaluated code structure",
        "Enhanced product features through continuous improvements",
        "Coordinated with cross-functional teams for streamlined development",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Associate Software Engineer",
      company: "MindInventory",
      duration: "08/2022 – 07/2024",
      location: "Ahmedabad, India",
      points: [
        "Engineered socket-based web applications with 100% customer engagement",
        "Optimized web application performance and resolved client issues",
        "Earned client accolades for exceptional web applications",
        "Contributed 50K+ lines of code via Git",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Junior Software Engineer Trainee",
      company: "MSP Concepts",
      duration: "05/2022 – 08/2022",
      location: "Ahmedabad, India",
      points: [
        "Acquired foundational knowledge of front-end technologies",
        "Built core skills in front-end best practices",
      ],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div name="experience" className="min-h-screen py-20 relative">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1000px] mx-auto p-4"
      >
        <h2 className="text-4xl font-bold inline-block mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line - Hidden on mobile */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 to-transparent hidden md:block"></div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Timeline Dot and Date - Responsive Layout */}
                <div className="flex items-center md:block">
                  <div
                    className={`relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${exp.color} p-1 flex-shrink-0`}
                  >
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                      <span className="text-lg md:text-2xl font-bold">
                        { index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#1E293B] rounded-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {exp.title}
                  </h3>
                  <div
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${exp.color} text-base md:text-lg mb-2 md:mb-4`}
                  >
                    {exp.company}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">
                    {exp.duration} | {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm md:text-base"
                      >
                        <span className="text-purple-500">▹</span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </div>
  );
};

export default Experience;
