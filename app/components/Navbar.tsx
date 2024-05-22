import React from 'react';
import Link from 'next/link';

export default function Navbar() {
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
            name: 'Skills',
            link: '#skills'
        },
        {
            name: 'Experience',
            link: '#experience'
        }
    ];

    return (
        <nav className="flex justify-between items-center bg-gray-50 shadow-sm px-2 py-1.5 border-b border-gray-200">
            <div className="ml-4 flex items-center space-x-4">
                {navItems.map((item) => (
                    <Link
                        className="py-4 px-2 font-semibold text-black hover:text-indigo-300"
                        key={item.name}
                        href={item.link}
                        passHref
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-lg" />
                <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-black dark:hover:text-black">
                    Resume
                </div>
            </button>
        </nav>
    );
}
