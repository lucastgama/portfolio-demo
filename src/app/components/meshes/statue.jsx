import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function StatueObject(props) {
  const { nodes, materials } = useGLTF("./meshes/grace.glb");
  const meshRef = useRef(null);

  return (
    <group
      {...props}
      dispose={null}
      ref={meshRef}
    >
      <mesh
        geometry={nodes["the-three-graces-1-r"].geometry}
        material={nodes["the-three-graces-1-r"].material}
        position={[0, 0, 0.5]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload("./meshes/grace.glb");
