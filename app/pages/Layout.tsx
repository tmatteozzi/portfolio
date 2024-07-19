'use client';
import { motion } from 'framer-motion';
import downloadPdf from '../utils/downloadPdf';
import { Highlight } from '../components/ui/highlight';
import { ReactNode } from 'react';

const motionConfig = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: [20, -5, 0]
    },
    transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
    }
};

const buttonMotionConfig = {
    whileHover: {
        scale: 1.1,
        transition: { duration: 0.3 }
    },
    whileTap: {
        scale: 0.9
    }
};

interface LayoutProps {
    content: {
        name: string;
        description: string;
        buttonText: string;
        socialLinks: { url: string; icon: ReactNode }[];
    };
}

export default function Layout({ content }: LayoutProps) {
    const { name, description, buttonText, socialLinks } = content;
    return (
        <section
            id="layout"
            className="flex flex-col items-center justify-center h-[calc(100vh-60px)] mt-[60px] relative"
        >
            <div className="flex flex-col justify-center items-center relative z-10 text-gray-100">
                <motion.div {...motionConfig} className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mb-4">
                        Hi! I am <br className="md:hidden" />
                        <Highlight className="inline">{name}</Highlight>!
                    </div>
                    <p className="text-l md:text-xl lg:text-xl font-bold max-w-4xl leading-relaxed lg:leading-snug mb-4 px-4">
                        {description}
                    </p>
                    <motion.div
                        {...motionConfig}
                        className="flex flex-col items-center"
                    >
                        <motion.button
                            onClick={downloadPdf}
                            {...buttonMotionConfig}
                            className="p-[3px] relative mb-4"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-2 rounded-[6px] relative group transition duration-200 font-semibold hover:bg-transparent bg-gray-950 hover:text-black">
                                {buttonText}
                            </div>
                        </motion.button>
                        <div className="flex space-x-4 mt-2">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-indigo-500 transition-colors duration-300"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
