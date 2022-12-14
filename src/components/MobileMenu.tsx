import React from 'react';
import {motion} from 'framer-motion';
import Button from './core/Button';

interface Props {
    isOpen: boolean
}

const variants = {
    open: {
        opacity: 1,
        display: 'block',
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
    closed: {
        opacity: 0,
        display: 'none',

        transition: {
            when: 'afterChildren',
            staggerChildren: 0.1,
        },
    },
};

const variantsForUl = {
    open: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.01,
        },
    },
    closed: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.01,
        },
    },
};

const item = {
    open: {opacity: 1, x: 0},
    closed: {opacity: 0, x: -100},
};

const button = {
    open: {scale: 1, opacity: 1},
    closed: {scale: 0, opacity: 0},
};

const MobileMenu = ({isOpen}: Props) => {
    return (
        <motion.div
            initial={{display: 'none'}}
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            id='mobile-menu'
            className=" bg-neutral-50 text-neutral-700 p-2 mt-4 rounded-lg shadow-lg z-50">
            <motion.ul variants={variantsForUl} className="w-full py-2">
                <motion.li variants={item}
                           className="hover:bg-neutral-400 focus:bg-neutral-400 hover:text-neutral-50 focus:text-neutral-50 p-2 rounded bg-neutral-800 text-neutral-50">
                    <a href='#' className="font-medium hover:text-neutral-900">Demos</a>
                </motion.li>
                <motion.li variants={item}
                           className="hover:bg-neutral-400 focus:bg-neutral-400 hover:text-neutral-50 focus:text-neutral-50 p-2 rounded">
                    <a href='#' className="font-medium hover:text-neutral-900">About</a>
                </motion.li>
                <motion.li variants={item}
                           className="hover:bg-neutral-400 focus:bg-neutral-400 hover:text-neutral-50 focus:text-neutral-50 p-2 rounded">
                    <a href='#' className="font-medium hover:text-neutral-900">Blog</a>
                </motion.li>
                <motion.li variants={item}
                           className="hover:bg-neutral-400 focus:bg-neutral-400 hover:text-neutral-50 focus:text-neutral-50 p-2 rounded">
                    <a href='#' className="font-medium hover:text-neutral-900">Pages</a>
                </motion.li>
                <motion.li variants={item}
                           className="hover:bg-neutral-400 focus:bg-neutral-400 hover:text-neutral-50 focus:text-neutral-50 p-2 rounded">
                    <a href='#' className="font-medium hover:text-neutral-900">Contact</a>
                </motion.li>
            </motion.ul>
            <motion.div variants={button}>
                <Button text="Get started now" className="w-full"/>
            </motion.div>
        </motion.div>
    );
};

export default MobileMenu;