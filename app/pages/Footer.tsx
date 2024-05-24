import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-center py-8">
            <div className="container mx-auto">
                <h2 className="text-l md:text-xl lg:text-2xl font-bold text-neutral-700">
                    © Tomás Agustín Matteozzi
                </h2>
                <p className="text-md md:text-lg lg:text-xl text-neutral-600">
                    Software Engineer
                </p>
                <div className="flex justify-center space-x-6 mt-2">
                    <a
                        href="https://github.com/tmatteozzi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-white hover:text-indigo-300 transition-colors duration-300"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tomás-matteozzi-452b3728b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-white hover:text-indigo-300 transition-colors duration-300"
                    >
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
