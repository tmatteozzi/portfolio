'use client';
import SectionContainer from '@/app/components/SectionContainer';
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
    <SectionContainer id="experience-list">
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-16 ">
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
              className="w-full lg:w-[60%]"
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
      </div>
    </SectionContainer>
  );
}
