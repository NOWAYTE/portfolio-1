import React, { useRef, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Model from './Model'
import { OrbitControls } from '@react-three/drei'
import { OrbitControls as OrbitControlsType } from 'three-stdlib'

type Props = {}

function Scene({}: Props) {
  return (
    <Canvas>
      <ambientLight intensity={0.0} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <Model scale={[0.5, 0.5, 0.5]} />
      <Controls />
    </Canvas>
  )
}

function Controls() {
  const controlsRef = useRef<OrbitControlsType | null>(null)
  const { camera } = useThree()

  useEffect(() => {
    if (controlsRef.current) {
      // Set initial camera position
      camera.position.set(4, 2, 2)
      // Set initial camera target
      controlsRef.current.target.set(0, 0, 0)

      controlsRef.current.autoRotate = true;
      // Set auto-rotate speed (optional)
      controlsRef.current.autoRotateSpeed 
      controlsRef.current.update()
    }
  }, [camera])

  return (
    <OrbitControls 
      ref={controlsRef}
      enablePan={true} 
      enableZoom={true} 
      enableRotate={true} 
      maxPolarAngle={Math.PI / 2} 
      minPolarAngle={0} 
    />
  )
}

export default Scene
