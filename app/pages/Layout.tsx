'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

export default function Layout() {
    return (
        <section
            id="layout"
            className="flex flex-col items-center justify-center"
        >
            <HeroHighlight className="flex flex-col justify-center items-center">
                <motion.div {...motionConfig} className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mb-4">
                        Hi! I am <br className="md:hidden" />
                        <Highlight className="text-black dark:text-white inline">
                            Tomás Agustín Matteozzi
                        </Highlight>
                        !
                    </div>
                    <p className="text-l md:text-xl lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mb-4">
                        A passionate software developer committed to creating
                        efficient and innovative solutions. Constantly learning
                        and evolving, I bring a diverse set of skills to each
                        project, enabling me to deliver high-quality, scalable
                        applications.
                    </p>
                    <motion.div
                        {...motionConfig}
                        className="flex flex-col items-center"
                    >
                        <motion.button
                            {...buttonMotionConfig}
                            className="p-[3px] relative mb-4"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-lg" />
                            <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-black dark:hover:text-black">
                                Download Resume
                            </div>
                        </motion.button>
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="https://github.com/tmatteozzi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-white hover:text-indigo-300"
                            >
                                <FaGithub size={30} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tomás-matteozzi-452b3728b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-white hover:text-indigo-300"
                            >
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </HeroHighlight>
        </section>
    );
}
