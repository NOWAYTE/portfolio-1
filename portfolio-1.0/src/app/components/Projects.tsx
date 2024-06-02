import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <Link href="#Projects">
        <motion.div
        initial={{
            x: 200,
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{
            x: 0,
          }}
         className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
            snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-1000 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, index) =>
                <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img
                initial={{
                    y: -300,
                    opacity: 0
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                 className='rounded-full' src='./icons/UIUX.jpg' alt=''/>
    
                <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            AirBnB Clone
                        </span>
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                        I have developed a clone of AirBnB, designed to replicate the core functionalities of the popular vacation rental platform. 
                        This project includes features such as user authentication, property listings, search and filtering options, booking management, and user reviews. 
                        Through this project, I have demonstrated my skills in front-end and back-end development, database management, and user experience design, 
                        creating a seamless and intuitive platform for both hosts and guests.
                    </p>
                </div>
                </div>
                )}
            </div>
            <div className='w-full absolute top-[30%] bg-[#61553a] left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div>
        </Link>
    )
}

export default Projects
