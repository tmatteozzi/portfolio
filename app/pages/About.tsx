import { CardStack } from '../components/CardStack';

interface AboutProps {
  content: {
    items: {
      id: number;
      name: string;
      content: React.ReactNode;
    }[];
  };
}

export default function About({ content }: AboutProps) {
  const { items } = content;
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 md:py-32 bg-gray-900 min-h-[screen/2] md:px-0"
    >
      <h1 className="text-3xl md:text-5xl text-center font-medium text-white mb-16">
        About me
      </h1>
      <div className="w-full md:max-w-2xl lg:max-w-4xl">
        <CardStack offset={6} items={items} />
      </div>
    </section>
  );
}
