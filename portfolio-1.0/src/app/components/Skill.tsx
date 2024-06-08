import React from 'react'
import { motion } from 'framer-motion'
import { Skill as ST } from '../../../pages/api/typings'

type Props = {
  skill: ST;
  directionLeft? : boolean;
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{x: directionLeft ?  -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={skill.imageUrl}
        className='rounded-full border-gray-500 object-cover
        w-24 h-24 xl:w-32  md:w-28 md:h-28 xl:h-32 filter group-hover:grayscale transition
        duration-300 ease-in-out'
         />
         <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
         group-hover:gb-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}</p>
            </div>
         </div>
    </div>
  )
}

export default Skill