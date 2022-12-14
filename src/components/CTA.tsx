import React from 'react';
import {motion} from 'framer-motion';
import Button from './core/Button';

const CTA = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{margin: '-50px'}}
            transition={{duration: 0.5}}
            className="relative px-4 md:px-8 2xl:px-60 py-24 lg:flex items-center justify-between text-neutral-50 bg-cyan-600"
        >
            <div className="mb-8">
                <h3 className="text-4xl font-bold text-center lg:text-left mb-8 w-full">Join one of our free
                    courses now</h3>
                <p className="opacity-70 text-center lg:text-left max-w-md mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero a magni
                    suscipit.
                </p>
            </div>
            <Button text="Get Started now" className="w-full lg:w-max"/>
        </motion.section>
    );
};

export default CTA;