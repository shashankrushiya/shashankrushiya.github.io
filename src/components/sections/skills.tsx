"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, 
  TestTube, 
  Cloud, 
  Database, 
  GitBranch, 
  Server, 
  Zap, 
  Globe, 
  Chrome
} from "lucide-react";

const Skills = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const sectionY = useTransform(scrollY, [0, 1200], [0, -50]);
  const titleY = useTransform(scrollY, [0, 1000], [0, -30]);

  const skills = [
    {
      category: "Automation & Testing",
      skills: [
        { name: "Python Automation", icon: Code2, level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Selenium", icon: Chrome, level: 90, color: "from-green-500 to-emerald-500" },
        { name: "BDD (Behavior-Driven Development)", icon: TestTube, level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Pytest", icon: TestTube, level: 90, color: "from-yellow-500 to-orange-500" },
        { name: "API Testing & Automation", icon: Server, level: 88, color: "from-indigo-500 to-blue-500" },
        { name: "SQL Automation", icon: Database, level: 85, color: "from-teal-500 to-cyan-500" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (Lambda, CodePipeline, S3, CloudWatch)", icon: Cloud, level: 80, color: "from-orange-500 to-red-500" },
        { name: "Snowflake", icon: Database, level: 75, color: "from-blue-500 to-indigo-500" },
        { name: "PostgreSQL", icon: Database, level: 85, color: "from-blue-600 to-purple-600" },
        { name: "Elasticsearch", icon: Server, level: 70, color: "from-green-600 to-blue-600" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "JIRA, Jenkins, Bitbucket, Confluence", icon: GitBranch, level: 90, color: "from-gray-500 to-blue-500" },
        { name: "Git", icon: GitBranch, level: 85, color: "from-orange-600 to-red-600" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise in automation frameworks, cloud solutions, and modern development tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-200 border-b border-gray-800 pb-2">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  >
                    {/* Floating icon */}
                    <motion.div
                      className={`absolute -top-3 -right-3 p-3 rounded-full bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: skillIndex * 0.2,
                      }}
                    >
                      <skill.icon size={20} />
                    </motion.div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </h4>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-white font-medium">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: skillIndex * 0.3,
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: skillIndex * 0.2,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Leadership & Collaboration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">Mentorship</div>
              <p className="text-gray-300 text-sm">
                Mentored junior engineers on BDD, POM, and cloud-native testing strategies
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">Collaboration</div>
              <p className="text-gray-300 text-sm">
                Actively collaborated with product, DevOps, and QA teams to align automation coverage
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">Data-Driven</div>
              <p className="text-gray-300 text-sm">
                Promoted data-driven decisions by integrating real-time dashboards into processes
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 