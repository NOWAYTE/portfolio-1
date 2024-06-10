"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; // Import useRouter
import { useInView } from 'react-intersection-observer';
import AnimatedLetters from './AnimatedLetters';

type Props = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav: React.FC<Props> = ({ setIsMenuOpen }) => {
    const router = useRouter()
    const pathname = usePathname()
    
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    const strArray = 'Hi\:\)'.split('');

    return (
        <AnimatePresence>
            <motion.div
                className='fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white z-50 p-5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    className='text-white text-xl top-4 right-0 p-8 flex absolute'
                    style={{ fontSize: '3.0rem' }}
                    onClick={() => setIsMenuOpen(false)}
                >
                    &times;
                </button>
                <nav className='h-screen flex flex-col space-y-10 items-center justify-center relative'>
                    <motion.h2
                        ref={ref}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                        transition={{ duration: 0.8, type: 'spring', damping: 5, stiffness: 150 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        className='absolute top-[240px] left-1/4 transform -translate-x-1/2 text-lg'
                    >
                        <AnimatedLetters letterClass='letter' strArray={strArray} idx={15} />
                    </motion.h2>
                    <div
                        className={`${pathname === '/' ? 'underline' : ''} text-3xl font-bold font-coolvetica hover:text-[#F7AB0A] `}
                    >
                        <Link onClick={() => setIsMenuOpen(false)} href='#Hero'>
                            Home
                        </Link>
                    </div>
                    <div
                        className={`text-3xl font-bold font-coolvetica hover:text-[#F7AB0A] ${pathname === '/' ? 'underline' : ''}`}
                    >
                        <Link onClick={() => setIsMenuOpen(false)} href='#About'>
                            About
                        </Link>
                    </div>

                    <div
                        className={`text-3xl font-bold font-coolvetica hover:text-[#F7AB0A] ${pathname === '/' ? 'underline' : ''}`}
                    >
                        <Link onClick={() => setIsMenuOpen(false)} href='#Skills'>
                            Skills
                        </Link>
                    </div>
                    <div
                        className={`text-3xl font-bold font-coolvetica hover:text-[#F7AB0A] ${usePathname() === '/' ? 'underline' : ''}`}
                    >
                        <Link onClick={() => setIsMenuOpen(false)} href='#Contact'>
                            Contact
                        </Link>
                    </div>
                    
                </nav>
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileNav;
