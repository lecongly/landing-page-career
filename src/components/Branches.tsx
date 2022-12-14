import React from 'react';
import {motion} from "framer-motion"

const Branches = () => {
    return (
        <section className="py-16 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto grid  gap-8 grid-cols-12 relative">
            <motion.h3
                initial={{opacity: 0, y: 5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: '-100px'}}
                transition={{duration: 0.5}}
                className="text-3xl col-span-12 text-center mb-4 font-bold"
            >
                Our Branches
            </motion.h3>
            <motion.p
                initial={{opacity: 0, y: 5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: '-100px'}}
                transition={{duration: 0.5, delay: 0.3}}
                className="opacity-70 text-center col-span-12 max-w-md mx-auto mb-8"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
                voluptas eum nulla quibusdam quod. Corporis.
            </motion.p>
            <motion.div
                initial={{opacity: 0, y: 5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: '-100px'}}
                transition={{duration: 0.5, delay: 0.5}}
                className="col-span-10 max-w-3xl mx-auto col-start-2 overflow-hidden bg-amber-400 rounded-xl text-neutral-700 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {Array.from(Array(6), (e, i) => (
                    <div key={i + '_branch'} className="">
                        <h4 className="mb-4 text-lg font-bold">Branch #{i + 1}</h4>
                        <p className="text-sm">1901 Thornridge Cir, Shiloh, Hawaii 81063, USA</p>
                    </div>
                ))}
            </motion.div>

            <motion.a
                whileHover={{opacity: 1, scale: 1.2}}
                className='opacity-70 col-span-12 text-center font-medium'
                href='#'>
                See all 24 locations
                <motion.svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6 inline ml-2'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                </motion.svg>
            </motion.a>
        </section>
    );
};

export default Branches;