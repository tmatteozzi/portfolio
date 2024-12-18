import React from 'react';
// ICONS
import HtmlIcon from '@/public/icons/html.svg';
import JavaIcon from '@/public/icons/java.svg';
import JavascriptIcon from '@/public/icons/javascript.svg';
import TypescriptIcon from '@/public/icons/typescript.svg';
import PythonIcon from '@/public/icons/python.svg';
import CssIcon from '@/public/icons/css.svg';
import ReactIcon from '@/public/icons/react.svg';
import MySQLIcon from '@/public/icons/mysql.svg';
import TailwindIcon from '@/public/icons/tailwind.svg';
import NextJSIcon from '@/public/icons/nextjs.svg';
import ViteIcon from '@/public/icons/vite.svg';
import LinuxIcon from '@/public/icons/linux.svg';
import AngularIcon from '@/public/icons/angular.svg';
import ExpoIcon from '@/public/icons/expo.svg';

import SectionContainer from '../components/SectionContainer';

export default function TechStack() {
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
      name: 'Expo Go',
      img: ExpoIcon
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
  const sortedTechStack = [...techStack].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <SectionContainer
      id="tech-stack"
      className="bg-gradient-to-b from-gray-900 to-indigo-950"
    >
      <div className="w-full lg:w-[80%] flex flex-col items-center mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
          Tech Stack
        </h1>
        <div className="flex sm:flex-row items-center justify-center flex-wrap gap-8 w-[80%]">
          {sortedTechStack.map((item, index) => (
            <div
              key={index}
              className="w-40 h-36 sm:w-44 sm:h-40 rounded-3xl p-4 shadow-xl border border-gray-300 flex justify-center items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center p-4">
                <item.img width={80} height={80} />
                <p className="mt-4 text-sm font-semibold text-white text-center">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
