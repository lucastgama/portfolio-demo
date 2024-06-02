"use client";

import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PersonObject } from "../../meshes/person";

const Person = () => {
  return (
    <>
      <Canvas shadows="basic">
        <OrbitControls
          makeDefault
          minAzimuthAngle={4}
          maxAzimuthAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0.8}
          maxPolarAngle={1.5}
          target={[0, 1, 0]}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={25} />
        <fog attach="fog" args={["#0b0b0b", 10, 15]} />
        <Suspense fallback={null}>
          <PersonObject />
          <ContactShadows resolution={128} frames={Infinity} position={[0, -0.5, 0]} scale={5} blur={1} opacity={0.5} far={10} />
        </Suspense>
        <Environment resolution={206}>
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 0]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />
        </Environment>
      </Canvas>
    </>
  );
};

export default Person;
