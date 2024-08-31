'use client';
import { motion } from 'framer-motion';
import downloadPdf from '../utils/downloadPdf';
import { Highlight } from '../components/ui/highlight';
import { ReactNode } from 'react';
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
  whileTap: {
    scale: 0.9
  }
};

const socialLinks = [
  { url: 'https://github.com/tmatteozzi', icon: <FaGithub size={26} /> },
  {
    url: 'https://www.linkedin.com/in/tmatteozzi',
    icon: <FaLinkedin size={26} />
  }
];

export default function Hero() {
  return (
    <section
      id="layout"
      className="flex flex-col items-center justify-center h-screen pt-16 relative bg-gradient-to-b from-indigo-950 via-black to-black"
    >
      <div className="flex flex-col items-center text-gray-200 relative z-10">
        <motion.div
          {...motionConfig}
          className="flex flex-col items-center text-center"
        >
          <div className="text-5xl max-w-5xl leading-relaxed mb-6 font-medium">
            Hi! I am <br className="md:hidden" />
            <Highlight className="inline">Tomás Agustín Matteozzi</Highlight>!
          </div>
          <p className="max-w-3xl text-md leading-relaxed mb-8">
            A passionate software developer committed to creating efficient and
            innovative solutions. Constantly learning and evolving, I bring a
            diverse set of skills to each project, enabling me to deliver
            high-quality, scalable applications.
          </p>
          <div className="flex flex-col items-center">
            <motion.button
              onClick={downloadPdf}
              {...buttonMotionConfig}
              className="relative mb-6 p-[0.2vw]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 rounded-[6px] relative group transition duration-300 font-medium hover:bg-transparent bg-gray-950 hover:text-black">
                Download Resume
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
