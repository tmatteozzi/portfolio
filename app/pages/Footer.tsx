import { ReactNode } from 'react';

interface FooterProps {
  content: {
    name: string;
    role: string;
    socialLinks: { url: string; icon: ReactNode }[];
  };
}

export default function Footer({ content }: FooterProps) {
  const { name, role, socialLinks } = content;

  return (
    <footer className="bg-gray-950 text-center py-6">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-white">© {name}</h2>
        <p className="text-sm font-semibold text-neutral-400 mt-2">{role}</p>
        <div className="flex justify-center space-x-6 mt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
