import React from "react";
import { useGLTF } from "@react-three/drei";

export function DaviObject({ texture, ...props }) {
  const { nodes, materials } = useGLTF("./meshes/davi.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.davi.geometry}
        material={materials.statue}
        position={[2.271, -11.5, -2.482]}
        rotation={[0, 0.771, 0]}
        scale={0.17}
      >
        <meshStandardMaterial
          attach="material"
          color="#434343"
          roughness={0.4}
          metalness={1}
        />
      </mesh>
      <group
        position={[-2.541, 9.803, 1.307]}
        rotation={[0, 0.771, 0]}
        scale={0.17}
      >
        <mesh
          castShadow
          geometry={nodes.davi001_1.geometry}
          material={materials.statue}
        >
          <meshStandardMaterial
            attach="material"
            color="#434343"
            roughness={0.4}
            metalness={1}
          />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skull.geometry}
        material={materials.gold}
        position={[0, -3.061, 0]}
        rotation={[1.65, -0.021, 0.001]}
        scale={0.892}
      />
    </group>
  );
}

useGLTF.preload("./meshes/davi.glb");
