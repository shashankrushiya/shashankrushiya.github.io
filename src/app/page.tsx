import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components that use Framer Motion
const Hero = dynamic(() => import('@/components/sections/hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/about'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/projects'), { ssr: false });
const Experience = dynamic(() => import('@/components/sections/experience'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden no-scrollbar-shift">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
} 