'use client';
import React from 'react';
import Experience from './Experience';
import { ExperienceProps } from './Experience';
import { motion } from 'framer-motion';

interface ExperienceListProps {
    experiences: ExperienceProps[];
}

const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
    return (
        <section
            id="experience-list"
            className="min-h-screen py-16 bg-gradient-to-r from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black text-center"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mb-8 mx-auto">
                Experience
            </h1>
            <motion.div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto ${
                    experiences.length % 2 === 1 ? 'md:place-items-center' : ''
                }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex items-stretch h-full mx-8 sm:mx-0`}
                    >
                        <Experience
                            companyName={experience.companyName}
                            role={experience.role}
                            description={experience.description}
                            duration={experience.duration}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
