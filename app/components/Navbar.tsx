'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import downloadPdf from '../utils/downloadPdf';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = [
        {
            name: 'About',
            link: 'about'
        },
        {
            name: 'Portfolio',
            link: 'portfolio'
        },
        {
            name: 'Technologies',
            link: 'tech-stack'
        },
        {
            name: 'Contact',
            link: 'contact'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShowNavbar(false);
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
            className={`bg-gray-50 dark:bg-gray-950 shadow-sm px-2 py-1.5 border-b border-gray-200 dark:border-gray-800 fixed top-0 w-full z-50 transition-transform duration-300 ${
                showNavbar
                    ? 'transform translate-y-0'
                    : 'transform -translate-y-full'
            }`}
        >
            <div className="flex justify-between items-center">
                <div className="ml-4 flex items-center space-x-4">
                    <button
                        className="md:hidden block focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <FiX className="w-6 h-6 text-black dark:text-white" />
                            ) : (
                                <FiMenu className="w-6 h-6 text-black dark:text-white" />
                            )}
                        </motion.div>
                    </button>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <ScrollLink
                                className="py-4 px-2 font-semibold text-black dark:text-white hover:text-indigo-300 dark:hover:text-indigo-500 cursor-pointer"
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
                <button onClick={downloadPdf} className="p-[3px] relative mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-gray-950 dark:hover:text-black text-xs md:text-base">
                        Resume
                    </div>
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
                        {navItems.map((item, index) => (
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
                                    className="py-2 px-4 font-semibold text-black dark:text-white hover:text-indigo-300 dark:hover:text-indigo-500 cursor-pointer"
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
