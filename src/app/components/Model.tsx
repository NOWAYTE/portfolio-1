import React from 'react';
import Spline from '@splinetool/react-spline';

type Props = {}

function Model({}: Props) {
  return (
    <Spline
      className='absolute inset-0 w-full h-full object-cover z-0'
        scene="https://prod.spline.design/CbG8rucGNpLvVBPU/scene.splinecode" 
      />
  )
}

export default Model;