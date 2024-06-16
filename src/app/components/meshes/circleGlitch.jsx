import {
  EffectComposer,
  Bloom,
  Noise,
} from "@react-three/postprocessing";

const CircleGlitch = () => {
  return (
    <>
      <mesh scale={2} position={[0, 0, 0]}>
        <ringGeometry args={[0.97, 1, 64, 1]} />
        <meshStandardMaterial
          color="white"
          roughness={0}
          emissive="white"
          emissiveIntensity={2}
        />
      </mesh>
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.8}
          luminanceSmoothing={16}
          height={120}
        />
        <Noise opacity={0.01} />
      </EffectComposer>
    </>
  );
};

export default CircleGlitch;
