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
      className="flex flex-col items-center py-32 bg-gray-900 min-h-screen max-h-screen"
    >
      <h1 className="text-5xl text-center font-medium text-white ">About me</h1>
      <div className="flex flex-col items-center justify-center w-full mt-16 mb-32">
        <CardStack offset={6} items={items} />
      </div>
    </section>
  );
}
