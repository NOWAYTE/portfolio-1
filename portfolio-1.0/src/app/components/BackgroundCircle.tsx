"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='border border-[#222831] h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] absolute rounded-full mt-36 sm:mt-52 animate-ping'></div>

      <div className='border border-[#222831] h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] absolute rounded-full mt-36 sm:mt-52'></div>

      <div className='border border-[#222831] h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] absolute rounded-full mt-36 sm:mt-52'></div>

      <div className='border border-[#F7AB0A] h-[400px] w-[400px] sm:h-[700px] sm:w-[700px] absolute opacity-20 rounded-full mt-36 sm:mt-52'></div>

      <div className='border border-[#27272a] h-[450px] w-[450px] sm:h-[800px] sm:w-[800px] absolute rounded-full mt-36 sm:mt-52 animate-pulse'></div>
    </motion.div>
    
  )
}

export default BackgroundCircle
