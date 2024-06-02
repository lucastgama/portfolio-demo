"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { StatueObject } from "../../meshes/statue";
import { useRef, FC } from "react";
import { Vector3, SpotLight as ThreeSpotLight } from "three";

const ControlLight: FC = () => {
  const light = useRef<ThreeSpotLight>(null);
  const vec = new Vector3();
  const { viewport } = useThree();

  useFrame((state) => {
    if (light.current) {
      light.current.target.position.lerp(
        vec.set(
          (state.pointer.x * viewport.width) / 2,
          (state.pointer.y * viewport.height) / 2,
          0
        ),
        0.1
      );
      light.current.target.updateMatrixWorld();
    }
  });

  return (
    <SpotLight
      angle={0.45}
      attenuation={0}
      penumbra={5}
      ref={light}
      intensity={1.6}
      distance={10}
      position={[0, 0, 3]}
    />
  );
};

const Statue: FC = () => {
  return (
    <Canvas>
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
      <SoftShadows samples={1} />
    </Canvas>
  );
};

export default Statue;
