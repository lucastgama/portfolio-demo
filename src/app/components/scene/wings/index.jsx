import { BlendFunction, Resizer, KernelSize } from "postprocessing";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { VenusObject } from "../../meshes/wing";
import CircleGlitch from "../../meshes/circleGlitch";
import {
  EffectComposer,
  Glitch,
  GodRays,
  ShockWave,
  WaterEffect,
} from "@react-three/postprocessing";

const Wings = () => {
  return (
    <Canvas shadows>
      <OrbitControls
        enableRotate={true}
        enableZoom={true}
        enablePan={true}
        minDistance={1}
        maxDistance={5}
      />
      <PerspectiveCamera fov={50} makeDefault position={[0, 0, 10]} />
      <pointLight position={[1, 0, 0.6]} intensity={0.02} />
      <pointLight position={[-1, 0, 0.6]} intensity={0.02} />
      <pointLight intensity={1} position={[0, 2, 0.5]} />
      <CircleGlitch />
      <VenusObject />
      <EffectComposer>
        <Glitch delay={1.6} strength={1.6} />
        <WaterEffect factor={0.5} />
      </EffectComposer>
    </Canvas>
  );
};

export default Wings;
