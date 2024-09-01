'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import downloadPdf from '../utils/downloadPdf';

interface NavBarProps {
  navBarItems: {
    name: string;
    link: string;
  }[];
}

export default function Navbar({ navBarItems }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
        setIsOpen(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background text-white"
        initial={false}
        animate={showNavbar ? { y: 0 } : { y: '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-white hover:text-indigo-500" />
                ) : (
                  <FiMenu className="w-6 h-6 text-white hover:text-indigo-500" />
                )}
              </motion.div>
            </button>
            <div className="hidden md:flex items-center space-x-6">
              {navBarItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.link}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm font-medium  hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
            <a
              onClick={downloadPdf}
              className="px-4 py-2 text-sm font-medium hover:text-indigo-500 transition-colors cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-0 bottom-0 w-64 bg-background p-4 ml-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                {navBarItems.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.link}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 text-sm font-medium text-white hover:text-indigo-500 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
