"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Cloud, TestTube, Github, ExternalLink, Database, BarChart3, Zap } from "lucide-react";

const Projects = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const sectionY = useTransform(scrollY, [0, 1400], [0, -50]);
  const titleY = useTransform(scrollY, [0, 1200], [0, -30]);

  const projects = [
    {
      title: "Cloud-Native CI/CD Automation Pipeline",
      description: "Built scalable AWS Lambda & CodePipeline workflows triggering full automation suites on each pull request; cut manual release validation time by over 70%.",
      technologies: ["AWS Lambda", "CodePipeline", "Python", "Jenkins"],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      link: "#",
      github: "#"
    },
    {
      title: "Real-Time Quality Dashboard",
      description: "Integrated Jenkins job data with Google Sheets via n8n workflows to visualize pass/fail trends, flaky test alerts, and live test metrics accessible to product teams.",
      technologies: ["Jenkins", "Google Sheets", "n8n", "Data Visualization"],
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      link: "#",
      github: "#"
    },
    {
      title: "Loan Processing Automation Framework",
      description: "Developed a modular, POM-based framework automating end-to-end tests for banking workflows, reducing manual testing by 30% and boosting test accuracy.",
      technologies: ["Python", "Selenium", "POM", "BDD"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      link: "#",
      github: "#"
    },
    {
      title: "API Reliability Initiative",
      description: "Improved API reliability by 15% through proactive monitoring, automation, and root-cause analysis of production issues.",
      technologies: ["API Testing", "Monitoring", "ELK Stack", "PostgreSQL"],
      icon: Zap,
      color: "from-orange-500 to-red-500",
      link: "#",
      github: "#"
    }
  ];

  const handleViewCode = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  const handleViewDemo = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative automation solutions that deliver measurable business impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gray-900/30 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Icon */}
              <motion.div
                className={`absolute -top-4 -right-4 p-4 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                <project.icon size={24} />
              </motion.div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Project Impact Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
              <p className="text-gray-300 text-sm">Reduced Release Time</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
              <p className="text-gray-300 text-sm">Less Manual Testing</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">15%</div>
              <p className="text-gray-300 text-sm">Improved API Reliability</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2">25%</div>
              <p className="text-gray-300 text-sm">Faster Delivery</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 