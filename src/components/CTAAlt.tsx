import React from 'react';
import {motion} from "framer-motion"
import Button from './core/Button';

const CtaAlt = () => {
    return (
        <section className="py-16 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto grid gap-8 grid-cols-12 relative
        bg-neutral-900 divide-y lg:divide-y-0 lg:divide-x divide-white">
            <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 py-8 lg:px-24 text-neutral-50">
                <motion.img
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5}}
                    className='w-20 h-20 mx-auto lg:mx-0'
                    src='/user_white.svg'
                    alt='user'
                />
                <motion.h3
                    className="my-8 text-center lg:text-left text-3xl font-bold"
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5, delay: 0.3}}>
                    Join as a mentor, teach people <br/>& help them grow
                </motion.h3>
                <motion.p
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='opacity-70 max-w-lg mx-auto lg:mx-0 text-center lg:text-left mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    quam dolor soluta minima id sed fugiat magni ut, sint officiis
                    explicabo velit similique ex eos numquam illo recusandae optio quos.
                </motion.p>
                <motion.div
                    className='lg:w-max'
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5, delay: 0.7}}>

                    <Button text="Get Started now" className="bg-cyan-500 text-neutral-50 w-full lg:w-max"/>

                </motion.div>
            </div>
            <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 py-8 lg:px-24 text-neutral-50">
                <motion.img
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5}}
                    className='w-20 h-20 mx-auto lg:mx-0'
                    src='/mail.svg'
                    alt='user'
                />
                <motion.h3
                    className="my-8 text-center lg:text-left text-3xl font-bold"
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5, delay: 0.3}}>
                    Still have more questions? <br/>
                    Contact us now.
                </motion.h3>
                <motion.p
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='opacity-70 max-w-lg mx-auto lg:mx-0 text-center lg:text-left mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    quam dolor soluta minima id sed fugiat magni ut, sint officiis
                    explicabo velit similique ex eos numquam illo recusandae optio quos.
                </motion.p>
                <motion.div
                    className='lg:w-max'
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-50px'}}
                    transition={{duration: 0.5, delay: 0.7}}>
                    <Button text="Contact Us Now" className="bg-amber-500 text-neutral-900 w-full lg:w-max"/>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaAlt;