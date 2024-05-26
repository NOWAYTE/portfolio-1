import React from 'react'
import Spline from '@splinetool/react-spline';


type Props = {}

function Model({}: Props) {
  return (
    <Spline className='relative object-cover mx-auto' scene="https://prod.spline.design/m7zhuAlIUmGXGNKf/scene.splinecode" />
  )
}

export default Model