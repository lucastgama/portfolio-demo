import React from 'react';
import { Sphere } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export function SunObject() {
  const texture = useLoader(THREE.TextureLoader, './teste.jpg');

  return (
    <Sphere scale={3} position={[0, 3, 0]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}
