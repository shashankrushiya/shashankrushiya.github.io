"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ClientOnly from "@/components/ui/client-only";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const progressWidth = useTransform(
    scrollY, 
    [0, 1000], 
    ["0%", "100%"]
  );
  
  // Create separate transform variables for background and backdrop
  const backgroundColor = useTransform(
    backgroundOpacity,
    [0, 1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );
  
  const backdropFilter = useTransform(
    backgroundOpacity,
    [0, 1],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  if (!mounted) return null;

  return (
    <ClientOnly>
      <>
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-gray-300 to-white z-50"
          style={{ width: progressWidth }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.header 
          className="fixed top-0 w-full z-40"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            backgroundColor,
            backdropFilter
          }}
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link 
                  href="/"
                  className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="Home"
                >
                  Shashank
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div 
                className="hidden md:flex items-center gap-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm font-medium tracking-wide"
                      aria-label={item.label}
                    >
                      {item.label}
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleToggleMenu}
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 text-lg"
                        onClick={handleToggleMenu}
                        aria-label={item.label}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </nav>
        </motion.header>
      </>
    </ClientOnly>
  );
}; 