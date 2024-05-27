import Image from 'next/image';
import { CardStack, Highlight } from '../components/ui/card-stack';

export default function About() {
    const items = [
        {
            id: 0,
            name: 'Why I code',
            content: (
                <p>
                    I started learning to code in 2020, and since then,{' '}
                    <Highlight>I&apos;ve been hooked!</Highlight> The process of
                    building things with code is amazing.
                </p>
            )
        },

        {
            id: 1,
            name: 'Always learning',
            content: (
                <p>
                    The world of code keeps evolving. I love taking online
                    courses, attending workshops, and{' '}
                    <Highlight>
                        staying updated with the latest tech.{' '}
                    </Highlight>
                </p>
            )
        },
        {
            id: 2,
            name: 'What makes me tick',
            content: (
                <p>
                    I bring{' '}
                    <Highlight>
                        passion, dedication, and a problem-solving superpower
                    </Highlight>{' '}
                    to my code. I love a good challenge and aim to create
                    top-notch solutions every time.
                </p>
            )
        },
        {
            id: 3,
            name: 'My goals',
            content: (
                <p>
                    Before leaping into entrepreneurship, I aim to explore
                    diverse roles across various workplaces to{' '}
                    <Highlight>
                        enhance my skills and gather rich experiences.{' '}
                    </Highlight>
                </p>
            )
        }
    ];

    return (
        <section
            id="about"
            className="flex flex-col items-center pt-8 pb-16 py-4 bg-gray-50 dark:bg-gray-950"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mb-16 text-center lg:text-left">
                About me
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-20">
                <div className="mt-4">
                    <CardStack offset={6} items={items} />
                </div>
                <div className="relative">
                    <Image
                        src="/assets/me.jpg"
                        alt="Tomás Matteozzi"
                        height={250}
                        width={250}
                        className="border-4 rounded-full transition-transform duration-800 hover:scale-105 hover:border-4 border-indigo-300 dark:border-indigo-500 dark:hover:border-purple-500 hover:border-purple-300 shadow-xl hover:shadow-black/[0.15] shadow-black/[0.1]"
                    />
                </div>
            </div>
        </section>
    );
}
