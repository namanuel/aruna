/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useLoader } from '@react-three/fiber'

function Model ({ url }, props) {
  const mesh = useRef()
  const geom = useLoader(STLLoader, url)

  return (
    <mesh
      ref={mesh}
      position={[-120, -110, 0]}
      {...props}
    >
      <primitive object={geom} attach='geometry' />
      <meshStandardMaterial color='grey' />
    </mesh>
  )
}

export default Model