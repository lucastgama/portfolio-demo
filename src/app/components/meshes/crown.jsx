import React from 'react'
import { useGLTF } from '@react-three/drei'
import { PointLight, MeshStandardMaterial } from 'three'

export function CrownObject(props) {
  const { nodes } = useGLTF('./meshes/crown.glb')
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        rotation={[0, 0, 0.137]}
        scale={13.685}
      >
        <meshStandardMaterial
          attach="material"
          color="#ff0000"  // Cor do neon
          emissive="#ff0000"  // Cor da emissão
          emissiveIntensity={1}  // Intensidade do brilho
          transparent={true}
          opacity={0.8}  // Transparência
          roughness={0.7}  // Reduz a aspereza para um efeito mais brilhante
          metalness={0.9}  // Aumenta a metalicidade para um efeito mais brilhante
        />
      </mesh>
      <pointLight
        color="#ff0000"  // Cor da luz
        intensity={0.2}  // Intensidade da luz
        distance={50}  // Distância que a luz alcança
        decay={2}  // Decaimento da luz
        position={[0, 0, 0]}  // Posição da luz
      />
    </group>
  )
}

useGLTF.preload('./meshes/crown.glb')
