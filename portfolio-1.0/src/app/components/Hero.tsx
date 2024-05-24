"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import BackgroundCircle from './BackgroundCircle'
import Scene from './Scene'

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
          
          <Scene />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>
    </div>
  )
}

export default Hero