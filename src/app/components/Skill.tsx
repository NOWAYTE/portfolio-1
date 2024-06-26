import React from 'react';
import { motion } from 'framer-motion';
import { Skill as ST } from '../../../pages/api/typings';

type Props = {
  skill: ST;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.imageUrl}
        className="rounded-full border-gray-500 object-cover
        w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 xl:w-23 xl:h-23
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
         group-hover:bg-white w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl sm:text-xl md:text-lg xl:text-xl font-bold text-black opacity-100">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
