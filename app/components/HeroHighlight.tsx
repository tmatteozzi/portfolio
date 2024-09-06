'use client';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';
import React from 'react';

export default function HeroHighlight({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%'
      }}
      animate={{
        backgroundSize: '100% 100%'
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline'
      }}
      className={cn(
        `relative inline-block pb-1 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-800`,
        className
      )}
    >
      {children}
    </motion.span>
  );
}
