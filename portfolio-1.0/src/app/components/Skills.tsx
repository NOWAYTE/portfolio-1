import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../../../pages/api/typings'
import Skill from './Skill'

type Props = {
  skills: SkillType[]
}

function Skills({ skills }: Props) { // Use the skills prop here
  return (
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
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen
      justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover Over A skill for current Proficiency</h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills?.slice(0, skills.length / 2).map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}

      </div>
    </motion.div>
  )
}

export default Skills
