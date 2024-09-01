import Navbar from './pages/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio';
import TechStack from './pages/TechStack';
import ExperienceList from './pages/Experience/ExperienceList';

import { Highlight } from './components/Highlight';

// LAYOUT
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// ABOUT
import me from './assets/me.jpg';
// PORTFOLIO
import gca from './assets/projects/gca.png';
import ml from './assets/projects/ml.png';
// TECHSTACK
import HtmlIcon from './assets/icons/html.svg';
import JavaIcon from './assets/icons/java.svg';
import JavascriptIcon from './assets/icons/javascript.svg';
import TypescriptIcon from './assets/icons/typescript.svg';
import PythonIcon from './assets/icons/python.svg';
import CssIcon from './assets/icons/css.svg';
import ReactIcon from './assets/icons/react.svg';
import MySQLIcon from './assets/icons/mysql.svg';
import TailwindIcon from './assets/icons/tailwind.svg';
import NextJSIcon from './assets/icons/nextjs.svg';
import ViteIcon from './assets/icons/vite.svg';
import LinuxIcon from './assets/icons/linux.svg';
import AngularIcon from './assets/icons/angular.svg';

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
  image: me.src,
  items: [
    {
      id: 0,
      name: 'Why I code',
      content: (
        <p>
          I started learning to code in 2020, and since then,{' '}
          <Highlight>I&apos;ve been hooked!</Highlight> The process of building
          things with code is amazing.
        </p>
      )
    },

    {
      id: 1,
      name: 'Always learning',
      content: (
        <p>
          The world of code keeps evolving. I love taking online courses,
          attending workshops, and{' '}
          <Highlight>staying updated with the latest tech. </Highlight>
        </p>
      )
    },
    {
      id: 2,
      name: 'What makes me tick',
      content: (
        <p>
          I bring{' '}
          <Highlight>
            passion, dedication, and a problem-solving superpower
          </Highlight>{' '}
          to my code. I love a good challenge and aim to create top-notch
          solutions every time.
        </p>
      )
    },
    {
      id: 3,
      name: 'My goals',
      content: (
        <p>
          Before leaping into entrepreneurship, I aim to explore diverse roles
          across various workplaces to{' '}
          <Highlight>enhance my skills and gather rich experiences. </Highlight>
        </p>
      )
    }
  ]
};

const portfolioContent = [
  {
    title: 'Matteozzi Lavilla',
    link: 'https://google.com',
    thumbnail: ml.src,
    technologies: [
      {
        name: 'React',
        img: ReactIcon
      },
      {
        name: 'Typescript',
        img: TypescriptIcon
      }
    ]
  },
  {
    title: 'Mazzo GCA',
    link: 'https://google.com',
    thumbnail: gca.src,
    technologies: [
      {
        name: 'Angular',
        img: AngularIcon
      },
      {
        name: 'Typescript',
        img: TypescriptIcon
      }
    ]
  }
];

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

const techStack = [
  {
    name: 'Python',
    img: PythonIcon
  },
  {
    name: 'Java',
    img: JavaIcon
  },
  {
    name: 'Javascript',
    img: JavascriptIcon
  },
  {
    name: 'Typescript',
    img: TypescriptIcon
  },
  {
    name: 'React',
    img: ReactIcon
  },
  {
    name: 'NextJS',
    img: NextJSIcon
  },
  {
    name: 'Angular',
    img: AngularIcon
  },
  {
    name: 'Vite',
    img: ViteIcon
  },
  {
    name: 'HTML',
    img: HtmlIcon
  },
  {
    name: 'CSS',
    img: CssIcon
  },
  {
    name: 'MySQL',
    img: MySQLIcon
  },
  {
    name: 'Linux',
    img: LinuxIcon
  },
  {
    name: 'Tailwind',
    img: TailwindIcon
  }
];

const footerContent = {
  name: 'Tomás Agustín Matteozzi',
  role: 'Software Engineer',
  socialLinks: [
    { url: 'https://github.com/tmatteozzi', icon: <FaGithub size={25} /> },
    {
      url: 'https://www.linkedin.com/in/tomás-matteozzi-452b3728b',
      icon: <FaLinkedin size={25} />
    }
  ]
};

export default function Home() {
  return (
    <div>
      <Navbar navBarItems={navBarItems} />
      <Hero />
      <About content={about} />
      <Portfolio content={portfolioContent} />
      <ExperienceList experiences={experiences} />
      <TechStack techStack={techStack} />
      <Contact />
      <Footer content={footerContent} />
    </div>
  );
}
