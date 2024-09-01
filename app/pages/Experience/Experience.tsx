'use client';
import React from 'react';
import { motion } from 'framer-motion';

export interface ExperienceProps {
  companyName: string;
  role: string;
  description: string;
  duration: string;
}

const experienceVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 }
  }
};

export default function Experience({
  companyName,
  role,
  description,
  duration
}: ExperienceProps) {
  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 to-indigo-950 border-gray-300 p-6 shadow-lg border rounded-2xl"
      whileHover="hover"
      variants={experienceVariants}
    >
      <div>
        <h4 className="text-xs sm:text-sm md:text-base font-light text-gray-400 mb-2">
          {companyName}
        </h4>
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-50 mb-2">
          {role}
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400 mb-4 overflow-hidden">
          {description}
        </p>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-300">
        <strong>Duration:</strong> {duration}
      </p>
    </motion.div>
  );
}
