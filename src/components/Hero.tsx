import React from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-r from-cyan-700 to-cyan-500 overflow-hidden relative
        mx-auto grid gap-8 grid-cols-12
        ">
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className='w-[500px] h-[500px] md:w-[800px] md:h-[800px] 2xl:w-[1026px] 2xl:h-[1026px]
                absolute bottom-[-100px] lg:top-[280px] lg:right-[-100px] xl:right-0
                [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]
                '>
                <svg
                    viewBox='0 0 1026 1026'
                    fill='none'
                    aria-hidden='true'
                    className='absolute inset-0 h-full w-full animate-spin-slow'
                >
                    <path
                        d='M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z'
                        stroke='#D4D4D4'
                        strokeOpacity='0.7'></path>
                    <path
                        d='M513 1025C230.23 1025 1 795.77 1 513'
                        stroke='url(#:R65m:-gradient-1)'
                        strokeLinecap='round'></path>
                    <defs>
                        <linearGradient
                            id=':R65m:-gradient-1'
                            x1='1'
                            y1='513'
                            x2='1'
                            y2='1025'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#f8fafc'></stop>
                            <stop offset='1' stopColor='#f8fafc' stopOpacity='0'></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    viewBox='0 0 1026 1026'
                    fill='none'
                    aria-hidden='true'
                    className='absolute inset-0 h-full w-full animate-spin-slow'>
                    <path
                        d='M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z'
                        stroke='#D4D4D4'
                        strokeOpacity='0.7'></path>
                    <path
                        d='M913 513c0 220.914-179.086 400-400 400'
                        stroke='url(#:R65m:-gradient-2)'
                        strokeLinecap='round'></path>
                    <defs>
                        <linearGradient
                            id=':R65m:-gradient-2'
                            x1='913'
                            y1='513'
                            x2='913'
                            y2='913'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#f8fafc'></stop>
                            <stop offset='1' stopColor='#f8fafc' stopOpacity='0'></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            <div
                className="col-span-12 lg:col-span-6 place-self-center mb-8 mt-8 xl:mt-0 lg:mb-0 z-50 font-bold text-neutral-50">
                <motion.h1
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className="text-center lg:text-left text-5xl">
                    Grow a career fast <br/>
                    with LCL company
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="my-8 max-w-lg mx-auto lg:mx-0 font-normal text-center lg:text-left opacity-70">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste
                    perspiciatis commodi consequatur praesentium accusantium.
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.8}}
                    className="flex flex-col lg:flex-row items-center">
                    <motion.button
                        whileHover={{scale: 1.1, borderRadius: '50px'}}
                        transition={{duration: 0.2, ease: 'easeInOut'}}
                        className="w-full lg:w-max px-4 py-3 bg-neutral-50 hover:cursor-pointer text-cyan-600 font-bold rounded-lg lg:mr-8 mb-4 lg:mb-0"
                    >
                        Get started for free
                    </motion.button>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity: 0, scale: 1.3}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.3}}
                className="col-span-12 lg:col-span-6 relative z-50 place-self-end "
            >
                <picture>
                    <source srcSet='/hero_women.webp' type='image/webp'/>
                    <source srcSet='/hero_women.png' type='image/png'/>
                    <img className='z-50 w-full h-full' src='/hero_women.png' alt=''/>
                </picture>
            </motion.div>
        </section>
    );
};

export default Hero;