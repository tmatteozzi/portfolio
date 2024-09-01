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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-transparent px-2 py-1.5 transition-transform duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="ml-4 flex items-center space-x-4">
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-gray-50" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-50" />
              )}
            </motion.div>
          </button>
          <div className="hidden md:flex items-center space-x-4">
            {navBarItems.map((item) => (
              <ScrollLink
                className="text-sm font-medium text-gray-50 hover:text-indigo-300 py-4 px-2 cursor-pointer"
                key={item.name}
                to={item.link}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </div>
        <button
          onClick={downloadPdf}
          className="relative p-[3px] mr-8 text-gray-50"
        >
          Resume
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delayChildren: 0.1 }}
            className="md:hidden flex flex-col items-center mt-4"
          >
            {navBarItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1
                }}
                className="mb-4"
              >
                <ScrollLink
                  className="text-sm font-semibold text-gray-50 hover:text-indigo-300 py-2 px-4 cursor-pointer"
                  to={item.link}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
