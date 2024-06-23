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
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }
};

export default function Experience({
    companyName,
    role,
    description,
    duration
}: ExperienceProps) {
    return (
        <motion.div
            className="p-6 shadow-lg border border-gray-300 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 transform transition-transform duration-300 w-full"
            whileHover="hover"
            variants={experienceVariants}
        >
            <h4 className="text-sm font-light text-neutral-700 dark:text-gray-400 mb-2">
                {companyName}
            </h4>
            <h3 className="text-md font-bold text-neutral-600 dark:text-white mb-2">
                {role}
            </h3>
            <p className="text-sm font-medium text-neutral-700 dark:text-gray-400 mb-4">
                {description}
            </p>
            <p className="text-sm text-neutral-700 dark:text-gray-300">
                <strong>Duration:</strong> {duration}
            </p>
        </motion.div>
    );
}
