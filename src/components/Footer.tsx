import React from 'react';
import {motion} from "framer-motion"

const Footer = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{margin: '-100px'}}
            transition={{duration: 0.5}}
            className="py-8 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto grid gap-8 grid-cols-12 relative">
            <div className="col-span-12 mx-auto w-full flex flex-col justify-center items-center text-sm">
                <span
                    className="text-center flex justify-center items-center gap-x-1">
                    No Rights Reserved
                </span>
                <a
                    className="text-violet-600 font-medium tracking-wider"
                    href="https://www.linkedin.com/in/lecongly/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @lecongly
                </a>
                <span
                    className="tracking-wider">
                    • ©{new Date().getFullYear()} •
                </span>
            </div>
        </motion.section>
    );
};

export default Footer;