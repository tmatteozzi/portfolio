import { HeroParallax } from '../components/ui/hero-parallax';
import ml from '../assets/projects/ml.png';
import gca from '../assets/projects/gca.png';

export default function Portfolio() {
    const products = [
        {
            id: 1,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: ml.src
        },
        {
            id: 2,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: gca.src
        },
        {
            id: 3,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: ml.src
        },
        {
            id: 4,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: gca.src
        },
        {
            id: 5,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: ml.src
        },
        {
            id: 6,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: gca.src
        },
        {
            id: 7,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: gca.src
        },
        {
            id: 8,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: ml.src
        },
        {
            id: 9,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: gca.src
        }
    ];

    return (
        <section id="portfolio" className="bg-white dark:bg-gray-950">
            <HeroParallax products={products} />
        </section>
    );
}
