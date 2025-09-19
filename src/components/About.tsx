import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Career Snapshot 
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-10 glow">
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg md:text-xl">
              I build dynamic web applications with Node.js, Express, and MongoDB.  
              Automation and smart backend solutions are my playground, with a dash of React magic.  
              Python helps me streamline tasks and handle data efficiently.  
              I merge logic and creativity to craft seamless, interactive digital experiences.
              </p>

             <p className="text-base sm:text-lg md:text-xl">
                Always curious, I enjoy exploring new technologies and pushing the boundaries of what’s possible.  
  I aim to create software that not only works flawlessly but also delivers meaningful value to users.
              </p>

            </motion.div>
            
            <motion.div
              className="mt-8 pt-6 border-t border-cyan-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-400">Real Projects Built</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">1+</div>
                  <div className="text-sm text-gray-400">Years Coding Passion</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">12+</div>
                  <div className="text-sm text-gray-400">Technologies & Tools</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">💡</div>
                  <div className="text-sm text-gray-400">Ideas into Code</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;