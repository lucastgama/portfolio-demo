import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface StatueProps {
  props?: any;
}

export function StatueObject({ props }: StatueProps) {
  const { nodes, materials } = useGLTF("./meshes/grace.glb");
  const meshRef = useRef<THREE.Group>(null);

  return (
    <group
      {...props}
      dispose={null}
      ref={meshRef}
      castShadow
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["the-three-graces-1-r"].geometry}
        material={nodes["the-three-graces-1-r"].material}
        position={[0, 0, 0.5]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload("./meshes/grace.glb");
