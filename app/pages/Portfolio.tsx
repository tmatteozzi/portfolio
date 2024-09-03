import Link from 'next/link';
import Image from 'next/image';
// THUMBNAILS
import gca from '@/public/projects/gca.png';
import ml from '@/public/projects/ml.png';
import teamtasker from '@/public/projects/teamtasker.png';
import weekly from '@/public/projects/weekly.png';
import mazzo from '@/public/projects/mazzo.png';
// ICONS
import JavascriptIcon from '@/public/icons/javascript.svg';
import TypescriptIcon from '@/public/icons/typescript.svg';
import ReactIcon from '@/public/icons/react.svg';
import NextJSIcon from '@/public/icons/nextjs.svg';
import AngularIcon from '@/public/icons/angular.svg';

export default function Portfolio() {
  const content = [
    {
      title: 'Mazzo Developments',
      link: 'https://google.com',
      thumbnail: mazzo.src,
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

  return (
    <section
      id="portfolio"
      className="min-h-screen py-16 text-center bg-gray-900 mx-8"
    >
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 leading-relaxed lg:leading-snug mb-12 sm:mb-16 mx-auto">
          Portfolio
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-6xl">
          {content.map((project, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-2xl overflow-hidden transition duration-300 hover:shadow-xl w-[100%] lg:w-[47.9%] lg:h-[420px]"
            >
              <Link href={project.link}>
                <div className="p-3">
                  <div className="border border-gray-300 m-2.5 sm:m-3.5 rounded-xl overflow-hidden">
                    <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-105 opacity-95"
                        priority
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
}
