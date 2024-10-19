import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import TechStack from './pages/TechStack';
import ExperienceList from './pages/Experience/ExperienceList';
// ICONS
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// SOCIAL LINKS
const socialLinks = [
  { url: 'https://github.com/tmatteozzi', icon: <FaGithub size={24} /> },
  {
    url: 'https://www.linkedin.com/in/tmatteozzi',
    icon: <FaLinkedin size={24} />
  }
];
// NAVBAR LINKS
const navbarLinks = [
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

export default function Home() {
  return (
    <div>
      <Navbar navbarLinks={navbarLinks} />
      <Hero socialLinks={socialLinks} />
      <About />
      <Portfolio />
      <ExperienceList />
      <TechStack />
      <Contact />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
