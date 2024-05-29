"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        <SocialIcon url='https://github.com/NOWAYTE'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url='https://www.linkedin.com/in/daniel-nganga'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url='https://twitter.com/Nowayte_SE'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url='https://www.instagram.com/nowayte_se/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <ScrollLink to="Contact" smooth={true} duration={1000}> {/* Use ScrollLink from react-scroll */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row items-center text-gray-400 cursor-pointer'
        >
          <SocialIcon className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
      </ScrollLink>
    </header>
  );
}
