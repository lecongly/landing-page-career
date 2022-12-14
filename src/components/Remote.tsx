import React from 'react';
import {motion} from 'framer-motion';
import Button from './core/Button';

const Remote = () => {
    return (
        <section className="bg-[url('/remote.webp')] bg-cover bg-no-repeat bg-center bg-cyan-600
        relative py-40 px-4 md:px-8 2xl:px-60 text-neutral-50 ">
            <div className="lg:max-w-2xl">
                <motion.h3
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5}}
                    className="text-4xl font-bold text-center lg:text-left mb-8 w-full"
                >
                    Get virtual counseling
                </motion.h3>
                <motion.p
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5}}
                    className="opacity-70 text-center lg:text-left max-w-md mx-auto lg:mx-0  mb-8"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero a magni
                    suscipit.
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5}}>
                    <Button text="Get Started for Free" className="w-full lg:w-max"/>
                </motion.div>
            </div>
        </section>
    );
};

export default Remote;