import Divider from './components/Divider';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Layout />
            <Divider />
            <About />
            <Divider />
            <Portfolio />
            <Divider />
            <Skills />
            <Divider />
            <Contact />
        </div>
    );
}
