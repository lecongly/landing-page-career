import React from 'react';
import {motion} from 'framer-motion';

const Benefits = () => {
    const chooses = [
        {
            icon: '/compass.svg',
            title: 'Get all courses from a single platform.'
        },
        {
            icon: '/chat.svg',
            title: 'Communicate with your mentors on time.'
        },
        {
            icon: '/users.svg',
            title: 'Collaborate on real projects to learn things.'
        },
        {
            icon: '/pie.svg',
            title: ' Get regular updates with proper tutorials.'
        },
    ]
    return (
        <section
            className="relative px-4 md:px-8 2xl:px-60 py-24 overflow-hidden mx-auto grid gap-8 grid-cols-12">
            <motion.h2
                initial={{opacity: 0, y: 5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: '-100px'}}
                transition={{duration: 0.5}}
                className="col-span-12 text-center mb-8 text-4xl font-bold"
            >
                Why should you choose us?
            </motion.h2>
            {chooses.map((choose, index) => (
                    <motion.div
                        className="col-span-12 md:col-span-6 xl:col-span-3 max-w-sm w-full mx-auto flex flex-col md:flex-row items-center"
                        initial={{opacity: 0, y: 5}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{margin: '-100px'}}
                        transition={{duration: 0.5, delay: index * 0.1}}>
                        <img src={choose.icon} alt="icon" className="w-12 h-12"/>
                        <p className="md:ml-4 text-center md:text-left mt-4 md:mt-0">
                            {choose.title}
                        </p>
                    </motion.div>
                )
            )}
        </section>
    );
};

export default Benefits;