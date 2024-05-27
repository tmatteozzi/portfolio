import { HeroParallax } from '../components/ui/hero-parallax';

export default function Portfolio() {
    const products = [
        {
            id: 1,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: '/assets/projects/ml.png'
        },
        {
            id: 2,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: '/assets/projects/gca.png'
        },
        {
            id: 3,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: '/assets/projects/ml.png'
        },
        {
            id: 4,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: '/assets/projects/gca.png'
        },
        {
            id: 5,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: '/assets/projects/ml.png'
        },
        {
            id: 6,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: '/assets/projects/gca.png'
        },
        {
            id: 7,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: '/assets/projects/gca.png'
        },
        {
            id: 8,
            title: 'Matteozzi Lavilla',
            link: 'https://google.com',
            thumbnail: '/assets/projects/ml.png'
        },
        {
            id: 9,
            title: 'Mazzo GCA',
            link: 'https://google.com',
            thumbnail: '/assets/projects/gca.png'
        }
    ];
    // USAR HERO PARALLAX
    return (
        <section id="portfolio" className="bg-white dark:bg-black">
            <HeroParallax products={products} />
        </section>
    );
}
