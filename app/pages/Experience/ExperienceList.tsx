'use client';
import Experience, { ExperienceProps } from './Experience';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ExperienceList() {
  const experiences: ExperienceProps[] = [
    {
      companyName: 'Gecko',
      role: 'Developer and Tester Assistant',
      description:
        'Collaborated on the development and testing of web applications. Assisted in resolving technical issues and implementing new features.',
      duration: '2022 - Now'
    },
    {
      companyName: 'Instituto Lenguas Vivas Bariloche',
      role: 'Secretary & Appointment Setter',
      description:
        ' Performed administrative and customer service tasks. Provided support to teachers and students.',
      duration: '2021'
    },
    {
      companyName: 'Argentina Mining & Innqube',
      role: 'Event / Tech Support',
      description:
        'Provided technical assistance to event participants. Resolved computer and software related issues.',
      duration: '2020'
    }
  ];

  return (
    <section
      id="experience-list"
      className="bg-gray-900 min-h-screen py-16 text-center mx-8"
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-50 leading-relaxed lg:leading-snug mb-16 mx-auto">
        Experience
      </h1>
      <motion.div
        className="flex flex-col justify-center items-center gap-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full lg:w-[48%]"
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
