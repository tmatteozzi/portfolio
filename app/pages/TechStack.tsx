import React from 'react';
import HtmlIcon from '../assets/icons/html.svg';
import JavaIcon from '../assets/icons/java.svg';
import JavascriptIcon from '../assets/icons/javascript.svg';
import TypescriptIcon from '../assets/icons/typescript.svg';
import PythonIcon from '../assets/icons/python.svg';
import CssIcon from '../assets/icons/css.svg';
import ReactIcon from '../assets/icons/react.svg';
import MySQLIcon from '../assets/icons/mysql.svg';
import BashIcon from '../assets/icons/bash.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import NextJSIcon from '../assets/icons/nextjs.svg';
import ViteIcon from '../assets/icons/vite.svg';
import LinuxIcon from '../assets/icons/linux.svg';

export default function TechStack() {
    const techStackItems = [
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
            name: 'Bash',
            img: BashIcon
        },
        {
            name: 'Tailwind',
            img: TailwindIcon
        }
    ];

    return (
        <section
            id="tech-stack"
            className="pt-8 pb-16 py-4 bg-gray-50 text-center"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mb-16 mx-auto">
                Tech Stack
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-8 max-w-6xl mx-auto">
                {techStackItems.map((item, index) => (
                    <div
                        key={index}
                        className="w-44 h-40 rounded-3xl p-4 shadow-xl border flex justify-center items-center transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex flex-col items-center p-4">
                            <item.img width={80} height={80} />
                            <p className="mt-4 text-sm font-semibold">
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
