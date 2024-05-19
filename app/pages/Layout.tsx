'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../components/ui/hero-highlight';

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
        <div className="flex flex-col items-center">
            <HeroHighlight>
                <motion.h1
                    {...motionConfig}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-4"
                >
                    Hi! I am{' '}
                    <Highlight className="text-black dark:text-white">
                        Tomás Agustín Matteozzi
                    </Highlight>
                    !
                </motion.h1>
                <motion.p
                    {...motionConfig}
                    className="text-l px-4 md:text-l lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-4"
                >
                    A passionate software developer committed to creating
                    efficient and innovative solutions. Constantly learning and
                    evolving, I bring a diverse set of skills to each project,
                    enabling me to deliver high-quality, scalable applications.
                </motion.p>
                <motion.div
                    {...motionConfig}
                    className="flex justify-center mt-4"
                >
                    <motion.button
                        {...buttonMotionConfig}
                        className="p-[3px] relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-lg" />
                        <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black font-semibold hover:bg-transparent dark:text-white dark:bg-black dark:hover:text-black">
                            CV
                        </div>
                    </motion.button>
                </motion.div>
            </HeroHighlight>
        </div>
    );
}
