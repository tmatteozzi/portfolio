import { FloatingNav } from './ui/floating-navbar';

export default function Navbar() {
    const navItems = [
        {
            name: 'About',
            link: '#about'
        }
    ];
    return (
        <div>
            <FloatingNav navItems={navItems} />
        </div>
    );
}
