'use client';
import React from 'react';
import Experience, { ExperienceProps } from './Experience';
import { motion } from 'framer-motion';

interface ExperienceListProps {
  experiences: ExperienceProps[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <section
      id="experience-list"
      className="bg-gray-900 min-h-screen py-16 text-center"
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-50 leading-relaxed lg:leading-snug mb-16 mx-auto">
        Experience
      </h1>
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full mx-3.5 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
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
