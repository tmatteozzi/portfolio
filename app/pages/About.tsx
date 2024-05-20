import { CardStack, Highlight } from '../components/ui/card-stack';

export default function About() {
    const items = [
        {
            id: 0,
            name: 'Why I code',
            content: (
                <p>
                    Started coding in 2020 and I&apos;m hooked! Building things
                    with code is amazing. React is my jam for creating awesome
                    user interfaces.
                </p>
            )
        },
        {
            id: 1,
            name: 'Always learning',
            content: (
                <p>
                    The world of code keeps evolving. I love taking online
                    courses, attending workshops, and staying updated with the
                    latest tech.
                </p>
            )
        },
        {
            id: 2,
            name: 'My coding goals',
            content: (
                <p>
                    Becoming a coding rockstar is the dream! I want to build all
                    sorts of cool stuff, from web apps to mobile apps. Maybe
                    even help others learn to code someday.
                </p>
            )
        },
        {
            id: 3,
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
        }
    ];
    return (
        <section
            id="about"
            className="flex flex-col items-center pt-8 pb-16 my-4"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mb-16 text-center">
                About me
            </h1>
            <CardStack items={items} />
        </section>
    );
}
