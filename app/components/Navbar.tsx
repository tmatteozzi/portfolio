'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = [
        {
            name: 'About',
            link: '#about'
        },
        {
            name: 'Portfolio',
            link: '#portfolio'
        },
        {
            name: 'Technologies',
            link: '#tech-stack'
        },
        {
            name: 'Contact',
            link: '#contact'
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
            className={`bg-gray-50 shadow-sm px-2 py-1.5 border-b border-gray-200 fixed top-0 w-full z-50 transition-transform duration-300 ${
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
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                className="py-4 px-2 font-semibold text-black hover:text-indigo-300"
                                key={item.name}
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <button className="p-[3px] relative mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-lg" />
                    <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-black dark:hover:text-black">
                        Resume
                    </div>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            className="py-2 px-4 font-semibold text-black hover:text-indigo-300"
                            key={item.name}
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
