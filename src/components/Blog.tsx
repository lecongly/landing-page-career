import React from 'react';
import {motion} from 'framer-motion';

const Blog = () => {
    const blogs = [
        {
            image: '/blog_1.jpeg',
            title: 'Search Engine Optimization Basics',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ullam ea dolores.',
            type: 'Basic',
            time: 3.4
        },
        {
            image: '/blog_1.jpeg',
            title: 'Search Engine Optimization Basics',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ullam ea dolores.',
            type: 'Advance',
            time: 5.4
        },
        {
            image: '/blog_1.jpeg',
            title: 'Search Engine Optimization Basics',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ullam ea dolores.',
            type: 'Basic',
            time: 3.4
        },
    ]
    return (
        <section className="relative px-4 md:px-8 2xl:px-60 py-24 overflow-hidden mx-auto grid gap-8 grid-cols-12">
            <motion.h3
                initial={{opacity: 0, y: 5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: '-100px'}}
                transition={{duration: 0.5}}
                className="text-4xl font-bold col-span-12 text-center mb-8"
            >
                Featured Courses
            </motion.h3>
            {blogs.map((blog, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, y: 5}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{margin: '-100px'}}
                    transition={{duration: 0.5, delay: i * 0.2}}
                    className="col-span-12 md:col-span-6 lg:col-span-4 overflow-hidden w-full mx-auto rounded-lg bg-neutral-50"
                >
                    <picture>
                        <img className='w-full' src={blog.image} alt='seo'/>
                    </picture>
                    <div className="p-4">
                        <h4 className="text-base font-bold py-1">{blog.title}</h4>
                        <p className="opacity-70 text-sm">
                            {blog.desc}
                        </p>
                        <div className="flex items-center mt-8 opacity-70 gap-6">
                            <small className="flex items-center gap-2">
                                <img src='/user.svg' width={16} height={16} alt='lorem'/>
                                {blog.type}
                            </small>
                            <small className="flex items-center gap-2">
                                <img src='/time.svg' width={16} height={16} alt='lorem'/>
                                {blog.time}
                                Hours
                            </small>
                        </div>
                    </div>
                </motion.div>
            ))}
            <motion.a
                whileHover={{opacity: 1, scale: 1.2}}
                className='col-span-12 text-center font-medium opacity-70'
                href='#'>
                Discover 148 More Courses
                <svg
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
                </svg>
            </motion.a>
        </section>
    );
};

export default Blog;