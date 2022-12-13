import React, {useState} from 'react';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="z-50 left-0 right-0 text-neutral-50 absolute top-0 w-full">
            <div className="mx-auto container p-4 grid grid-cols-2 lg:flex lg:justify-between items-center">
                <nav className="flex gap-8 items-center">
                    <Logo/>
                    <ul className="gap-8 hidden lg:flex">
                        <li>
                            <a href='#'>All courses</a>
                        </li>
                        <li>
                            <a href='#'>Student Portal</a>
                        </li>
                        <li>
                            <a href='#'>Support</a>
                        </li>
                        <li>
                            <a href='#'>Contact us</a>
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:block">
                    <button className="btn">Get Started now</button>
                </div>
                <div className="lg:hidden">
                    <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                </div>
                <div className="lg:hidden col-span-2">
                    <MobileMenu isOpen={isMenuOpen}/>
                </div>
            </div>
        </header>
    );
};

export default Header;