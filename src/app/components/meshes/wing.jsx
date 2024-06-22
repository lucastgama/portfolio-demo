import React from "react";
import { useGLTF } from "@react-three/drei";

export function VenusObject(props) {
  const { nodes, materials } = useGLTF("./meshes/venus.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0.386]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("./meshes/venus.glb");
