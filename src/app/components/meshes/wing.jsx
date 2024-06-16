import React from "react";
import { useGLTF } from "@react-three/drei";

export function VenusObject(props) {
  const { nodes, materials } = useGLTF("./meshes/venus.glb");
  return (
    <group {...props} dispose={null} scale={0.0010} position={[0,0,0]} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Venus.geometry}
        material={materials.Material}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.514}
      />
      <group
        position={[-44.686, 1146.076, -127.533]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={107.175}
      >
        <group rotation={[0, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube44.geometry}
            material={materials.Material}
            position={[0, 0, -1]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./meshes/venus.glb");
