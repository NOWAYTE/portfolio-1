import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedLetters from './AnimatedLetters'

type Props = {}

function About({}: Props) {

  const [letterClass, setLetterClass] = useState('text-animate')
  const array = ['H', 'e', 'l', 'l', 'o', ' ', '<', 'F', 'r', 'i', 'e', 'n', 'd', '/', '>']
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <motion.h3
      initial={{
        x: 200,
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        x: 0,
      }}
       className='absolute top-40 uppercase tracking-[20px] text-gray-500 text-xl'>About</motion.h3>

      <motion.img
      initial={{
        x: -200,
        opacity: 0
      }}

      transition={{
        duration: 1.2,
      }}

      whileInView={{
        opacity: 1, x: 0
      }}
      viewport={{once: true}}
      src='./media/arcane.png'
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
      md:rounded-lg md-w-64 md-h-96 xl:w-[500px] xl-h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10 '>
      <AnimatedLetters letterClass={`${letterClass} font-semibold text-5xl`} strArray={array} idx={15} />
      <motion.p
      initial={{
        opacity: 0
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1
      }}
       className='text-base'>
      I'm Daniel a software engineer currently enrolled at ALX and computer engineer, I am driven by a profound passion for technology and innovation. My expertise in IoT (Internet of Things) reflects my commitment to staying at the forefront of technological advancements. I thrive on challenges, viewing them as opportunities for personal and professional growth. My ultimate goal is to leverage my skills and knowledge to make a positive impact on the world through technology. With a steadfast dedication to learning and a desire to change lives, I am excited about the opportunities that lie ahead in creating innovative solutions that shape the future
      </motion.p>
        {/* <h4 className='text-4xl font-semibold'>
          Hello <span className='underline decoration-[#FZAB0A]/50'>Friend</span>
        </h4> */}
      </div>
    </motion.div>
  )
}

export default About