"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { StatueObject } from "../../meshes/statue";
import { Suspense, useRef } from "react";
import { Vector3 } from "three";

const Statue = () => {
  const ControlLight = () => {
    const light = useRef();
    let vec = new Vector3();
    const viewport = useThree((state) => state.viewport);
    useFrame((state) => {
      light.current.target.position.lerp(
        vec.set(
          (state.pointer.x * viewport.width) / 2,
          (state.pointer.y * viewport.height) / 2,
          0
        ),
        0.1
      );
      light.current.target.updateMatrixWorld();
    });

    return (
      <SpotLight
        angle={0.45}
        attenuation={0}
        penumbra={5}
        ref={light}
        castShadow
        intensity={1.6}
        distance={10}
        shadow-bias={-0.01}
        position={[0, 0, 3]}
      />
    );
  };

  return (
    <>
      <Canvas shadows="basic">
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          minDistance={1}
          maxDistance={5}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <pointLight position={[1, -1, -2]} intensity={1} />
        <pointLight position={[0, 1, 1]} intensity={0.05} />
        <ControlLight />
        <StatueObject />
        <SoftShadows samples={3} />
      </Canvas>
    </>
  );
};

export default Statue;
