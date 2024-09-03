import { CardStack } from '../components/CardStack';
import { Highlight } from '../components/Highlight';

export default function About() {
  const items = [
    {
      id: 0,
      name: 'Why I code',
      content: (
        <p>
          I started learning to code in 2020, and since then,{' '}
          <Highlight>I&apos;ve been hooked!</Highlight> The thrill of
          transforming ideas into functional software and solving complex
          problems is incredibly fulfilling. The process of building, testing,
          and refining code keeps me constantly engaged and eager to tackle new
          challenges. Each project presents unique obstacles and learning
          opportunities, fueling my passion for coding and continuous
          improvement.
        </p>
      )
    },

    {
      id: 1,
      name: 'Always learning',
      content: (
        <p>
          The tech industry evolves rapidly, and I embrace the challenge of
          staying current. I regularly participate in online courses and attend
          workshops to deepen my knowledge and skills.{' '}
          <Highlight>Keeping up with the latest advancements</Highlight> not
          only helps me stay relevant but also enables me to incorporate new
          technologies and methodologies into my work, ensuring that I am always
          pushing the boundaries of what I can achieve.
        </p>
      )
    },
    {
      id: 2,
      name: 'What makes me tick',
      content: (
        <p>
          I am driven by a{' '}
          <Highlight>
            passion for coding, a commitment to excellence, and a knack for
            problem-solving
          </Highlight>
          . I thrive on tackling challenging projects and finding innovative
          solutions that push the limits of what is possible. This enthusiasm
          for problem-solving and continuous improvement is at the core of my
          approach to coding, motivating me to deliver high-quality results and
          make a meaningful impact with my work.
        </p>
      )
    },
    {
      id: 3,
      name: 'My goals',
      content: (
        <p>
          Before embarking on my entrepreneurial journey, I aim to gain a
          diverse range of experiences across different roles and environments.
          This will{' '}
          <Highlight>
            broaden my skill set and provide valuable insights
          </Highlight>{' '}
          that are crucial for future success. By immersing myself in various
          professional settings, I will enhance my abilities and build a robust
          foundation of knowledge that will support my aspirations and drive in
          the entrepreneurial world.
        </p>
      )
    }
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 md:py-32 bg-gray-900 min-h-[screen/2] mx-3.5 md:px-0"
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
