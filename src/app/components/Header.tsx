import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../../../pages/api/typings';
import MobileNav from './MobileNav';
import { CiMenuFries } from "react-icons/ci";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on mount
    window.addEventListener('resize', handleResize); // Add event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center md:pl-10 sm:p-5'>
      {!isMobile && (
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
          {socials.map((social) => (
            <SocialIcon 
              key={social._id} 
              url={social.url} 
              fgColor='gray' 
              bgColor='transparent' 
            />
          ))}
        </motion.div>
      )}

      <Link href="#Contact">
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
          className='flex flex-row items-center text-gray-400 cursor-pointer md:pr-10 sm:pr-10'
        >
          <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
          </p>
        </motion.div>
      </Link>

      {isMobile && (
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className='text-gray-400 cursor-pointer md:pr-10 sm:pr-10 p-6 hover:text-[#F7AB0A]'
          style={{ fontSize: '2.0rem' }}
        >
          {isMenuOpen ? <CiMenuFries /> : <CiMenuFries />} {/* Use menu or close icon based on menu state */}
        </button>
      )}

      {isMobile && isMenuOpen && <MobileNav setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
}
