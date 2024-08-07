import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Noise,
  Glitch,
} from "@react-three/postprocessing";

const useRotation = (ref) => {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });
};

const CircleGlitch = () => {
  const meshRef = useRef();

  useRotation(meshRef);

  return (
    <>
      <mesh ref={meshRef} scale={2} position={[0, 0, 0.5]}>
        <ringGeometry args={[0.99, 1, 64, 1]} />
        <meshStandardMaterial
          color="white"
          roughness={0}
          emissive="white"
          emissiveIntensity={2}
        />
      </mesh>
      <EffectComposer>
        <Bloom luminanceThreshold={0.8} luminanceSmoothing={16} height={120} />
        <Noise opacity={0.01} />
        <Glitch delay={[2, 0]} duration={[0.1, 0.2]} strength={[0.05, 0.07]} />
      </EffectComposer>
    </>
  );
};

export default CircleGlitch;
