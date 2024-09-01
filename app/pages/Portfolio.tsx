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
    <section
      id="portfolio"
      className="min-h-screen py-16 text-center bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 leading-relaxed lg:leading-snug mb-12 sm:mb-16 mx-auto">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {content.map((project, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-2xl overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <Link href={project.link}>
                <div className="p-3">
                  <div className="border border-gray-500 m-3.5 rounded-xl overflow-hidden">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-6 pb-6 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-50">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap items-center text-sm text-gray-300">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="mr-2 sm:mr-3 flex items-center mb-1 sm:mb-2"
                    >
                      <tech.img className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                      <span>{tech.name}</span>
                    </li>
                  ))}
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
