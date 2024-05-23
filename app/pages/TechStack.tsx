import React from 'react';
import ts from '../assets/icons/ts.png';
import Image from 'next/image';

export default function TechStack() {
    const techStackItems = [
        {
            name: 'Typescript',
            img: ts // Reemplaza '(imglink)' con el URL real de la imagen
        },
        {
            name: 'Typescript',
            img: ts // Reemplaza '(imglink)' con el URL real de la imagen
        },
        {
            name: 'Typescript',
            img: ts // Reemplaza '(imglink)' con el URL real de la imagen
        },
        {
            name: 'Typescript',
            img: ts // Reemplaza '(imglink)' con el URL real de la imagen
        },
        {
            name: 'Typescript',
            img: ts // Reemplaza '(imglink)' con el URL real de la imagen
        }
    ];

    return (
        <section id="tech-stack" className="pt-8 pb-16 py-4 bg-gray-50">
            <h1 className="justify-center text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mb-16 text-center lg:text-left">
                Tech Stack
            </h1>
            <div>
                <div>
                    {techStackItems.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={48}
                                height={48}
                            />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
