import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiGraphql,
  SiTailwindcss,
} from 'react-icons/si';
import { SiPostman, SiVercel, SiRender } from 'react-icons/si';
import { FaClock } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
const skills: Skill[] = [
  // Backend & Automation
  { name: "Python (OOP, DSA, Automation)", level: 85, icon: <FaPython />, color: "#3776AB" },
  { name: "Node.js", level: 90, icon: <FaNode />, color: "#339933" },
  { name: "Express.js", level: 88, icon: <FaNode />, color: "#000000" },
  { name: "MongoDB", level: 85, icon: <SiMongodb />, color: "#47A248" },
  { name: "JWT Authentication", level: 80, icon: <FaGitAlt />, color: "#F05032" },
  { name: "REST APIs", level: 85, icon: <SiGraphql />, color: "#E10098" },
  { name: "Cron Jobs", level: 78, icon: <FaClock />, color: "#FFA500" },
  { name: "Gemini API", level: 70, icon: <FaNode />, color: "#339933" },
  { name: "TTS & STT", level: 72, icon: <FaPython />, color: "#3776AB" },

  // Frontend
  { name: "React.js", level: 88, icon: <FaReact />, color: "#61DAFB" },
  { name: "TypeScript", level: 70, icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", level: 80, icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript (ES6+)", level: 85, icon: <FaJsSquare />, color: "#F7DF1E" },

  // Tools / Deployment
  { name: "Git & GitHub", level: 90, icon: <FaGitAlt />, color: "#F05032" },
  { name: "Postman", level: 80, icon: <SiPostman />, color: "#FF6C37" },
  { name: "Vercel", level: 78, icon: <SiVercel />, color: "#000000" },
  { name: "Render", level: 75, icon: <SiRender />, color: "#00C7B7" },
];


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Tech Arsenal & Backend Mastery
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Crafting intelligent solutions with backend mastery, automation magic, and full-stack finesse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="text-3xl"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    style={{
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">FE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">
              React, TypeScript, TailwindCSS, HTML5, CSS3
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">BE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Backend & Database</h3>
            <p className="text-gray-400 text-sm">
              Node.js, Python (OOP, DSA, Automation), REST APIs, Cron Jobs, MongoDB
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">DEP</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Deployment & Version Control</h3>
            <p className="text-gray-400 text-sm">
              Git, GitHub, Vercel, Render
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;