import React from 'react';
import {motion} from 'framer-motion';

const Features = () => {
    return (
        <section
            className="relative px-4 md:px-8 2xl:px-60 py-24 overflow-hidden mx-auto grid gap-8 grid-cols-12 place-items-center"
        >
            <div className="lg:col-span-6 relative col-span-12 px-8">
                <motion.div
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5}}
                    className="relative w-full mx-auto px-2"
                >
                    <div className="relative rounded-3xl w-[320px] md:w-[420px] h-[500px] md:h-[630px] overflow-hidden">
                        <img src='/women.webp'/>
                    </div>
                    <img src='/feature_logo.svg'
                         className='absolute -right-10 top-10 animate-extra-spin-slow'/>
                </motion.div>
            </div>
            <div className="lg:col-span-6 col-span-12 py-16 lg:py-0 w-full">
                <motion.h2
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="text-center lg:text-left text-4xl font-bold"
                >
                    We help you to grow <br/>
                    your career with care.
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className="my-8 max-w-md font-medium mx-auto lg:mx-0 text-center lg:text-left"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste
                    perspiciatis commodi
                </motion.p>
                <motion.p
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="my-8 max-w-md font-light mx-auto lg:mx-0 text-center lg:text-left"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                    quaerat ipsam mollitia iusto ad, voluptatum error eligendi!
                    Praesentium numquam nemo qui nesciunt soluta. Nam, omnis repudiandae
                    doloribus voluptatum vero ratione?
                </motion.p>
            </div>
        </section>
    );
};

export default Features;