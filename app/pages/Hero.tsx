'use client';

import { motion } from 'framer-motion';
import downloadPdf from '../utils/downloadPdf';
import { Highlight } from '../components/ui/highlight';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const motionConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: [20, -5, 0] },
  transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
};

const buttonMotionConfig = {
  whileTap: { scale: 0.9 }
};

const socialLinks = [
  { url: 'https://github.com/tmatteozzi', icon: <FaGithub size={24} /> },
  {
    url: 'https://www.linkedin.com/in/tmatteozzi',
    icon: <FaLinkedin size={24} />
  }
];

export default function Hero() {
  return (
    <section
      id="layout"
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 md:px-8 relative bg-gradient-to-b from-indigo-950 via-gray-900 to-gray-900"
    >
      <div className="flex flex-col items-center text-white relative z-10 w-full max-w-4xl pt-16">
        <motion.div
          {...motionConfig}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full leading-tight sm:leading-relaxed mb-4 sm:mb-6 font-medium tracking-tighter">
            Hi! I am <br className="md:hidden flex flex-col" />
            <Highlight className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap overflow-hidden">
              Tomás Agustín Matteozzi
            </Highlight>
          </h1>
          <p className="max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
            A passionate software developer committed to creating efficient and
            innovative solutions. Constantly learning and evolving, I bring a
            diverse set of skills to each project, enabling me to deliver
            high-quality, scalable applications.
          </p>
          <div className="flex flex-col items-center">
            <motion.button
              onClick={downloadPdf}
              {...buttonMotionConfig}
              className="relative mb-4 sm:mb-6 p-[0.2vw]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-lg" />
              <div className="px-4 sm:px-6 py-2 rounded-[6px] relative group transition duration-300 font-medium hover:bg-transparent bg-gray-900 hover:text-black text-xs sm:text-sm">
                Download Resume
              </div>
            </motion.button>
            <div className="flex space-x-4 sm:space-x-6 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
