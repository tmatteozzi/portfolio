import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import TechStack from './pages/TechStack';
import ExperienceList from './pages/Experience/ExperienceList';

import { Highlight } from './components/Highlight';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

// SOCIAL LINKS
const socialLinks = [
  { url: 'https://github.com/tmatteozzi', icon: <FaGithub size={24} /> },
  {
    url: 'https://www.linkedin.com/in/tomás-matteozzi-452b3728b',
    icon: <FaLinkedin size={24} />
  }
];

const navBarItems = [
  {
    name: 'About',
    link: 'about'
  },
  {
    name: 'Portfolio',
    link: 'portfolio'
  },
  {
    name: 'Technologies',
    link: 'tech-stack'
  },
  {
    name: 'Contact',
    link: 'contact'
  }
];

const about = {
  items: [
    {
      id: 0,
      name: 'Why I code',
      content: (
        <p>
          I started learning to code in 2020, and since then,{' '}
          <Highlight>I&apos;ve been hooked!</Highlight> The thrill of
          transforming ideas into functional software and solving complex
          problems is incredibly fulfilling. The process of building, testing,
          and refining code keeps me constantly engaged and eager to tackle new
          challenges. Each project presents unique obstacles and learning
          opportunities, fueling my passion for coding and continuous
          improvement.
        </p>
      )
    },

    {
      id: 1,
      name: 'Always learning',
      content: (
        <p>
          The tech industry evolves rapidly, and I embrace the challenge of
          staying current. I regularly participate in online courses and attend
          workshops to deepen my knowledge and skills.{' '}
          <Highlight>Keeping up with the latest advancements</Highlight> not
          only helps me stay relevant but also enables me to incorporate new
          technologies and methodologies into my work, ensuring that I am always
          pushing the boundaries of what I can achieve.
        </p>
      )
    },
    {
      id: 2,
      name: 'What makes me tick',
      content: (
        <p>
          I am driven by a{' '}
          <Highlight>
            passion for coding, a commitment to excellence, and a knack for
            problem-solving
          </Highlight>
          . I thrive on tackling challenging projects and finding innovative
          solutions that push the limits of what is possible. This enthusiasm
          for problem-solving and continuous improvement is at the core of my
          approach to coding, motivating me to deliver high-quality results and
          make a meaningful impact with my work.
        </p>
      )
    },
    {
      id: 3,
      name: 'My goals',
      content: (
        <p>
          Before embarking on my entrepreneurial journey, I aim to gain a
          diverse range of experiences across different roles and environments.
          This will{' '}
          <Highlight>
            broaden my skill set and provide valuable insights
          </Highlight>{' '}
          that are crucial for future success. By immersing myself in various
          professional settings, I will enhance my abilities and build a robust
          foundation of knowledge that will support my aspirations and drive in
          the entrepreneurial world.
        </p>
      )
    }
  ]
};

const experiences = [
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

export default function Home() {
  return (
    <div>
      <Navbar navBarItems={navBarItems} />
      <Hero socialLinks={socialLinks} />
      <About content={about} />
      <Portfolio />
      <ExperienceList experiences={experiences} />
      <TechStack />
      <Contact />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
