import Image from 'next/image';
import { CardStack } from '../components/ui/card-stack';

interface AboutProps {
    content: {
        image: string;
        items: {
            id: number;
            name: string;
            content: React.ReactNode;
        }[];
    };
}

export default function About({ content }: AboutProps) {
    const { image, items } = content;
    return (
        <section
            id="about"
            className="flex flex-col items-center pt-8 pb-16 py-4 bg-gradient-to-r from-gray-900 via-gray-950 to-black"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug mb-16 text-center lg:text-left">
                About me
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-20">
                <div className="mt-4">
                    <CardStack offset={6} items={items} />
                </div>
                <div className="relative">
                    <Image
                        src={image}
                        alt="Tomás Matteozzi"
                        height={250}
                        width={250}
                        className="border-4 rounded-full transition-transform duration-800 hover:scale-105 hover:border-4 border-indigo-500 hover:border-purple-500 shadow-xl hover:shadow-black/[0.15] shadow-black/[0.1]"
                    />
                </div>
            </div>
        </section>
    );
}
