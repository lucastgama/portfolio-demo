import React, { Suspense, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DaviObject } from "../../meshes/davi";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Davi = () => {
  const [texture, setTexture] = useState(null);

  return (
    <Canvas shadows="basic">
      <OrbitControls
        makeDefault
        enableRotate={true}
        enableZoom={false}
        enablePan={false}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <fog attach="fog" args={["#060606", 10, 15]} />
      <Suspense fallback={null}>
        <pointLight
          color={"#0084ff"}
          intensity={3}
          distance={10}
          position={[2, 0, 0.4]}
        />
        <pointLight
          color={"#ffffff"}
          intensity={2}
          distance={8}
          position={[-2, 0, 0.2]}
        />
        <pointLight intensity={0.3} distance={8} position={[0, 3, 0]} />
        <DaviObject position={[0, 0, 0]} scale={0.1} texture={texture} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.3}
            intensity={0}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default Davi;
