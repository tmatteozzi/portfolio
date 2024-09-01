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
import teamtasker from './assets/projects/teamtasker.png';
import weekly from './assets/projects/weekly.png';
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
      },
      {
        name: 'NextJS',
        img: NextJSIcon
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
  },
  {
    title: 'Weekly',
    link: 'https://google.com',
    thumbnail: weekly.src,
    technologies: [
      {
        name: 'React',
        img: ReactIcon
      },
      {
        name: 'JavaScript',
        img: JavascriptIcon
      },
      {
        name: 'NextJS',
        img: NextJSIcon
      }
    ]
  },
  {
    title: 'Team Tasker',
    link: 'https://google.com',
    thumbnail: teamtasker.src,
    technologies: [
      {
        name: 'React',
        img: ReactIcon
      },
      {
        name: 'JavaScript',
        img: JavascriptIcon
      },
      {
        name: 'NextJS',
        img: NextJSIcon
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
