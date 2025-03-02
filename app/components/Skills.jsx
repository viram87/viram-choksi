import React, { memo } from "react";
import { motion as Motion } from "framer-motion";

const SkillCategory = memo(({ category, index }) => (
  <Motion.div
    key={index}
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    {/* Background Gradient */}
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
    ></div>

    {/* Content */}
    <div className="relative bg-[#1E293B] rounded-lg p-6 h-full">
      <h3
        className={`text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
      >
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <Motion.span
            key={skillIndex}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
            className="bg-[#0F172A] px-3 py-1.5 rounded-full text-sm border border-gray-700 hover:border-gray-500 transition-colors whitespace-nowrap"
          >
            {skill}
          </Motion.span>
        ))}
      </div>
    </div>
  </Motion.div>
));

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Web Technologies",
      skills: [
        "ReactJs",
        "NextJs",
        "VueJs",
        "Redux",
        "VueX",
        "Pinia",
        "Less",
        "Socket.IO",
        "Firebase",
        "GraphQL",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "CSS Frameworks",
      skills: ["Tailwind", "Bootstrap", "Material UI", "Ant Design"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Version Control & Tools",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "GitLab",
        "Microsoft Azure",
        "VS Code",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
      <div name="skills" className="min-h-screen py-20">
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-[1000px] mx-auto p-4"
        >
          <h2 className="text-4xl font-bold inline-block mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} category={category} index={index} />
            ))}
          </div>

          {/* Skill Meter Section */}
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8">Proficiency</h3>
            <div className="space-y-6">
              {[
                { name: "Frontend Development", level: 90 },
                { name: "JavaScript & TypeScript", level: 92 },
                { name: "React.js, Next.js & Vue.js", level: 85 },
                { name: "UI/UX Design & WCAG Compliance", level: 87 },
                {
                  name: "State Management (Redux, Vuex Pinia)",
                  level: 85,
                },
                { name: "Performance Optimization", level: 83 },
                { name: "Problem Solving & Debugging", level: 88 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#0F172A] rounded-full overflow-hidden">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r from-purple-500 to-pink-500`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
      </Motion.div>
    </div>
  );
};

export default Skills;
