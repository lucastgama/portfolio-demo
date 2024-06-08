"use client";

import {
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  SoftShadows,
  Sphere,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { StatueObject } from "../../meshes/statue";
import { PointLightHelper } from "three";

const MouseTracker = ({ setMousePosition }) => {
  const { viewport } = useThree();

  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 4.2;
    const y = (state.pointer.y * viewport.height) / 4.2;

    setMousePosition({ x, y });
  });
  return null;
};

function EmissiveRing() {
  const meshRef = useRef();
  const lightRef = useRef();

  useHelper(lightRef, PointLightHelper, 0.5);

  return (
    <>
      <mesh
        ref={meshRef}
        scale={2}
        position={[0, 0, 0]}
      >
        <ringGeometry args={[0.97, 1, 64, 1]} />
        <meshStandardMaterial color="white" roughness={0} emissive="white" emissiveIntensity={1} />
      </mesh>
      <pointLight ref={lightRef} position={[0, 0, 0]} color="white" intensity={0.1} distance={5} />
    </>
  );
}

const Statue = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const sphereRef = useRef();

  return (
    <Canvas shadows>
      <OrbitControls
        enableRotate={true}
        enableZoom={true}
        enablePan={true}
        minDistance={1}
        maxDistance={5}
        // mouseButtons={{
        //   LEFT: THREE.MOUSE.ROTATE,
        //   MIDDLE: THREE.MOUSE.DOLLY,
        //   RIGHT: null,
        // }}

      />
      <PerspectiveCamera makeDefault position={[0, 0, 10]}/>
      <pointLight position={[0, 0, 3]} intensity={0.5} />
      <pointLight position={[0, 1, 1]} intensity={0.05} />
      <pointLight position={[-1, 0, -1]} intensity={0.05} />
      <SpotLight
        angle={0.6}
        attenuation={0}
        intensity={1.8}
        distance={14}
        position={[mousePosition.x, mousePosition.y, 5]}
        target={sphereRef.current}
        penumbra={0.5}
      />
      <StatueObject />
      <EmissiveRing />
      <Plane receiveShadow args={[15, 15]} position={[0, 0, -0.2]}>
        <meshStandardMaterial color="#9d9d9d" />
      </Plane>
      <Sphere
        ref={sphereRef}
        args={[0.001]}
        position={[mousePosition.x, mousePosition.y, 0]}
      >
        <meshBasicMaterial transparent opacity={0.0} />
      </Sphere>
      <SoftShadows samples={3} />
      <MouseTracker setMousePosition={setMousePosition} />
    </Canvas>
  );
};

export default Statue;
