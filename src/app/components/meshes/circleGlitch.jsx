import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Glitch,
  Bloom,
  Noise,
} from "@react-three/postprocessing";

const CircleGlitch = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3;
  });

  return (
    <>
      <mesh ref={meshRef} scale={2} position={[0, 0, 0]}>
        <ringGeometry args={[0.98, 1, 64, 1]} />
        <meshStandardMaterial
          color="white"
          roughness={0}
          emissive="white"
          emissiveIntensity={2}
        />
      </mesh>
      <EffectComposer>
        <Glitch active={true} delay={[1, 1]} />
        <Bloom
          luminanceThreshold={0.999}
          luminanceSmoothing={0.05}
          height={150}
        />
        <Noise opacity={0.01} />
      </EffectComposer>
    </>
  );
};

export default CircleGlitch;
