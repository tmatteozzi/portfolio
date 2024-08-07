import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PortfolioProps {
    content: {
        title: string;
        link: string;
        thumbnail: string;
        technologies: {
            img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
            name: string;
        }[];
    }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
    return (
        <section id="portfolio" className="min-h-screen py-20 text-center">
            <div className="container mx-auto px-6">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed lg:leading-snug mb-16 mx-auto">
                    Portfolio
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {content.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-gray-800 shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl"
                        >
                            <Link href={project.link}>
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </Link>
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    {project.title}
                                </h3>
                                <ul className="flex flex-wrap items-center text-sm text-gray-300">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <li
                                                key={techIndex}
                                                className="mr-3 flex items-center mb-2"
                                            >
                                                <tech.img className="w-6 h-6 mr-2" />
                                                <span>{tech.name}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
