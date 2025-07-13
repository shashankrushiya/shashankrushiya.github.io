"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Vaaree",
      role: "SDET",
      duration: "December 2024 – Present (8 months)",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Thrived in a fast-paced startup environment, leveraging advanced automation to improve testing efficiency and maintain product quality.",
        "Focused on bridging development and QA to deliver seamless user experiences."
      ]
    },
    {
      company: "Digital Lending - IDFC",
      role: "Software Engineer in Test",
      duration: "July 2023 – August 2024 (1 year 2 months)",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Built an automation framework for loan processing that reduced testing time by 20%.",
        "Enhanced API reliability by 15%, lowering production errors.",
        "Automated test scripts with Python and SQL, cutting manual testing by 30%.",
        "Used JIRA to improve delivery timelines by 25% through efficient issue tracking.",
        "Integrated ELK Stack for real-time log monitoring, reducing downtime by 15%.",
        "Improved code consistency and team knowledge-sharing by 25% through Jenkins, Bitbucket, and Confluence integration."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in test automation and quality assurance across diverse domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Building size={24} className="text-white" />
                </motion.div>

                {/* Experience content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-gray-900/30 rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-200 mb-4">
                      Key Achievements & Responsibilities:
                    </h5>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-300 leading-relaxed"
                        >
                          <motion.div
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: highlightIndex * 0.2,
                            }}
                          />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-400" size={24} />
            <h3 className="text-2xl font-semibold text-white">
              Career Impact Summary
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">20%</div>
              <p className="text-gray-300 text-sm">Reduced Testing Time</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">15%</div>
              <p className="text-gray-300 text-sm">Enhanced API Reliability</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
              <p className="text-gray-300 text-sm">Reduced Manual Testing</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2">25%</div>
              <p className="text-gray-300 text-sm">Improved Delivery Time</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 