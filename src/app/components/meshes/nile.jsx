import React from 'react'
import { useGLTF } from '@react-three/drei'

export function NileObject(props) {
  const { nodes, materials } = useGLTF('./meshes/nile.glb')
  return (
    <group {...props} dispose={null} scale={0.1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nile.geometry}
        material={materials['Material.001']}
        rotation={[3.141, 0, Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('./meshes/nile.glb')