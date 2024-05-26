"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import BackgroundCircle from './BackgroundCircle'
import { Link } from 'react-router-dom';
import About from './About'

type Props = {}

function Hero({}: Props) {
    const [text, count ] = useTypewriter ({
        words: [
            "Hi, My name is Daniel",
            "<Are-you-my-monster/>",
            "<Is-this-the-face-of-my-only-friend/> "
        ],

        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden'>
          <BackgroundCircle />
          <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src='./media/spider-man.jpeg' alt='profile picture'/>
          <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-4 tracking-[15px] font-semibold'>
              Sofware engineer
            </h2>
            <h1 className='text-5xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='#F7AB0A'/>
              </h1>   
              <div className='pt-5'>
                <Link to='#About'>
                <button className='heroButton'>About</button>
                </Link>
                <Link to='#About' >
                <button className='heroButton'>Experience</button>
                </Link>
                <Link to='#About'>
                <button className='heroButton'>Skills</button>
                </Link>
                <Link to='#About'>
                <button className='heroButton'>Projects</button>
                </Link>
              </div>
          </div>
  
    </div>
  )
}

export default Hero