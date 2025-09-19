import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
const projects: Project[] = [
  {
    title: "Nexus AI Voice Assistant",
    description: "An AI-powered voice assistant with WhatsApp reminders, document Q&A, text-to-speech, and voice input. Built with Node.js, MongoDB, and Gemini API for intelligent automation and efficiency.",
    technologies: ["Node.js", "Express","React", "Gemini API", "Twilio", "Cron Jobs", "TTS"],
    liveUrl: "https://nexus-ai-assistant-nine.vercel.app/",
    githubUrl: "https://github.com/arunsamy4444/Nexus-AI-assistant"
  },
  {
    title: "Task Forge",
    description: "Task management app with user/admin login. Users can easily add/delete tasks and get daily automated email reminders with GitHub integration. Admin has full control over all tasks.",
    technologies: ["Python","React", "Node.js", "MongoDB", "Express","JWT"],
    liveUrl: "https://task-forge-three.vercel.app/",
    githubUrl: "https://github.com/arunsamy4444/Task_Forge"
  },
  {
    title: "EU Translator App",
    description: "A multilingual translator app with voice-to-text and text-to-voice support. Includes login/authentication, admin dashboard, and real-time translations between multiple European languages.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "STT", "TTS", "JWT"],
    liveUrl: "https://eu-translator.vercel.app/",
    githubUrl: "https://github.com/arunsamy4444/EU-Translator"
  }
];


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Spotlight
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A glimpse into my digital playground — where code meets creativity and ideas turn into interactive experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-6">
              {project.description}
            </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between z-10 relative">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={18} />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.a>
                
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={18} />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            </div>


            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm"></div>
            </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/arunsamy4444/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;