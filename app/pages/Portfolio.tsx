import { HeroParallax } from '../components/ui/hero-parallax';
import ml from '../assets/projects/ml.png';
import gca from '../assets/projects/gca.png';

export default function Portfolio() {
    const products = [
        {
            title: 'Matteozzi Lavilla',
            link: 'https://gomoonbeam.com',
            thumbnail: ml.src
        },
        {
            title: 'Mazzo GCA',
            link: 'https://gomoonbeam.com',
            thumbnail: gca.src
        },
        {
            title: 'Matteozzi Lavilla',
            link: 'https://gomoonbeam.com',
            thumbnail: ml.src
        },
        {
            title: 'Mazzo GCA',
            link: 'https://gomoonbeam.com',
            thumbnail: gca.src
        },
        {
            title: 'Matteozzi Lavilla',
            link: 'https://gomoonbeam.com',
            thumbnail: ml.src
        },
        {
            title: 'Mazzo GCA',
            link: 'https://gomoonbeam.com',
            thumbnail: gca.src
        },
        {
            title: 'Mazzo GCA',
            link: 'https://gomoonbeam.com',
            thumbnail: gca.src
        },
        {
            title: 'Matteozzi Lavilla',
            link: 'https://gomoonbeam.com',
            thumbnail: ml.src
        },
        {
            title: 'Mazzo GCA',
            link: 'https://gomoonbeam.com',
            thumbnail: gca.src
        }
    ];
    // USAR HERO PARALLAX
    return (
        <section id="portfolio">
            <HeroParallax products={products} />
        </section>
    );
}
