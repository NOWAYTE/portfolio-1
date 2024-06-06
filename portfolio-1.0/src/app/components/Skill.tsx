import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skill as tp } from '../../../pages/api/typings';
import { urlForImage } from '../../../sanity/lib/image';

type Props = {
  skill: tp;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  useEffect(() => {
    console.log('Skill:', skill);
  }, [skill]);

  const imageUrl = urlForImage(skill?.image?.asset?._ref);
  console.log('Image URL:', imageUrl); // Log the image URL to debug

  if (!skill) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className='group relative flex cursor-pointer'>
      {imageUrl ? (
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={imageUrl}
          className='rounded-full border-gray-500 object-cover
          w-24 h-24 xl:w-32 md:w-28 md:h-28 xl:h-32 filter group-hover:grayscale transition
          duration-300 ease-in-out'
        />
      ) : (
        <div>No image available</div> // Display fallback if image URL is not available
      )}
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
         group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
