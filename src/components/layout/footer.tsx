import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/shashankrushiya", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/rushiyashashank", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:shashankrushiya@gmail.com", 
      label: "Email" 
    }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight text-white">
              Shashank Singh
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Python Engineer & Automation Specialist specializing in scalable automation frameworks and cloud-native solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800 text-gray-300 hover:bg-white hover:text-black transition-all duration-500"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>
              © {currentYear} Shashank Singh. All rights reserved.
            </p>
            <p className="mt-2">
              Built with Next.js, React, and TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 