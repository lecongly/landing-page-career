import React from 'react';

interface Props {
    isMenuOpen: boolean;
    setIsMenuOpen: (arg: boolean) => void;
}


const MobileMenuButton = ({isMenuOpen, setIsMenuOpen}: Props) => {
    return (
        <div
            className="h-9 w-9 cursor-pointer flex items-center justify-end ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <div
                className={`before:duration-300 after:duration-300 relative w-full h-1 ${
                    !isMenuOpen
                        ? 'before:content[]  before:absolute before:w-full before:h-0.5 before:bg-white before:-translate-y-1 after:content[] after:absolute after:right-0 after:w-10/12 after:bg-white after:h-0.5 after:translate-y-1'
                        : 'before:content[]  before:absolute before:w-full before:h-0.5 before:bg-white before:-rotate-45 after:content[] after:absolute after:w-full after:bg-white after:h-0.5 after:rotate-45'
                }`}
            />
        </div>
    );
};

export default MobileMenuButton;