import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import { PageInfo } from '../../../pages/api/typings';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const [letterClass, setLetterClass] = useState('text-animate');
  const array = ['H', 'e', 'l', 'l', 'o', ' ', '<', 'F', 'r', 'i', 'e', 'n', 'd', '/', '>'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'
    >
      <motion.h3
        initial={{ x: 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        className='absolute top-[70px] uppercase tracking-[20px] text-gray-500 text-xl md:text-md xl:text-lg'
      >
        About
      </motion.h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={pageInfo.profilePic as unknown as string}
        className='-mb-10 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-48 md:h-72 xl:w-[430px] xl:h-[550px]'
      />
      <div className='space-y-6 sm:space-y-10 px-5 md:px-10 xl:space-y-6'>
        <AnimatedLetters
          letterClass={`${letterClass} font-semibold text-xl sm:text-2xl md:text-3xl xl:text-3xl`}
          strArray={array}
          idx={15}
        />
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          className='text-sm sm:text-base md:text-sm xl:text-sm'
        >
          {pageInfo.backgroundInformation}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default About;
