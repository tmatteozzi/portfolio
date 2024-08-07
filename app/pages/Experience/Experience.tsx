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
            className="bg-gray-900 border-gray-800 p-6 shadow-lg border rounded-xl"
            whileHover="hover"
            variants={experienceVariants}
        >
            <div>
                <h4 className="text-sm font-light text-gray-400 mb-2">
                    {companyName}
                </h4>
                <h3 className="text-md font-bold text-white mb-2">{role}</h3>
                <p className="text-sm font-medium text-gray-400 mb-4 overflow-hidden">
                    {description}
                </p>
            </div>
            <p className="text-sm text-gray-300">
                <strong>Duration:</strong> {duration}
            </p>
        </motion.div>
    );
}
