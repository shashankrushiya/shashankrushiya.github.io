"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, TestTube, Cloud, Award, GraduationCap, Target } from "lucide-react";

const About = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const sectionY = useTransform(scrollY, [0, 1000], [0, -100]);
  const titleY = useTransform(scrollY, [0, 800], [0, -50]);
  const contentY = useTransform(scrollY, [0, 800], [0, 50]);

  const expertiseAreas = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "UI Automation",
      description: "Selenium WebDriver, Page Object Model, Cross-browser testing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "BDD Testing",
      description: "Behave framework, Gherkin syntax, Behavior-driven development",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud CI/CD",
      description: "AWS Lambda, Jenkins, GitHub Actions, Docker integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Test strategy, Performance testing, API testing with Postman",
      color: "from-orange-500 to-red-500"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Summary Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Dynamic Python Engineer & Automation Specialist
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate SDET with proven expertise in designing scalable automation frameworks and cloud-native solutions across banking, insurance, and retail domains. My journey has been driven by a relentless curiosity and commitment to excellence.
              </p>
              
              <p>
                I specialize in bridging development and QA by building robust, data-driven systems that reduce testing cycles, boost reliability, and deliver measurable business impact. My expertise spans AWS, Snowflake, and modern monitoring tools to drive innovation.
              </p>
              
              <p>
                With experience in fast-paced startup environments and established financial institutions, I've learned to adapt quickly while maintaining high standards for quality and efficiency.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="text-2xl font-bold text-blue-400">90%+</div>
                <div className="text-sm text-gray-400">Automation Coverage</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="text-2xl font-bold text-green-400">70%</div>
                <div className="text-sm text-gray-400">Reduced Cycle Time</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="text-2xl font-bold text-purple-400">30%</div>
                <div className="text-sm text-gray-400">Less Manual Effort</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="text-2xl font-bold text-orange-400">&lt;15min</div>
                <div className="text-sm text-gray-400">Feedback Time</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education & Goals */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-900/30 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-200">Master of Science (MS)</h5>
                  <p className="text-gray-400">Nagpur University</p>
                  <p className="text-sm text-gray-500">2018 – 2020</p>
                </div>
                
                <div className="border-l-2 border-green-500 pl-4">
                  <h5 className="font-semibold text-gray-200">Bachelor of Science (BS)</h5>
                  <p className="text-gray-400">Nagpur University</p>
                  <p className="text-sm text-gray-500">2015 – 2018</p>
                </div>
              </div>
            </motion.div>

            {/* Career Goals */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-900/30 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-green-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Career Goals</h4>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                To become a senior technical leader in test automation and cloud solutions, deliver measurable business impact through scalable frameworks, and build AI-powered tools for secure and efficient product delivery.
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-900/30 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Certifications</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Snowflake
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  PostgreSQL
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 