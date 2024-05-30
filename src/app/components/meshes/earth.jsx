import React from 'react'
import { useGLTF } from '@react-three/drei'

export function EarthObject(props) {
  const { nodes, materials } = useGLTF('./meshes/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.MASH1_ReproMesh.geometry}
        material={materials.lambert2}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
    </group>
  )
}

useGLTF.preload('./meshes/earth.glb')