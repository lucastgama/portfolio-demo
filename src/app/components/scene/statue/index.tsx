"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  SoftShadows,
  Sphere,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import CircleGlitch from "../../meshes/circleGlitch";
import { StatueObject } from "../../meshes/statue";

const MouseTracker = ({ setMousePosition }) => {
  const { viewport } = useThree();

  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 4.2;
    const y = (state.pointer.y * viewport.height) / 4.2;

    setMousePosition({ x, y });
  });
  return null;
};

const Statue = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const sphereRef = useRef();

  return (
    <Canvas shadows>
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        minDistance={1}
        maxDistance={5}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <pointLight position={[0, -1, 1.5]} intensity={0.01} />
      <pointLight position={[0, 1, 1.2]} intensity={0.02} />
      <SpotLight
        angle={0.4}
        attenuation={0}
        intensity={1.2}
        distance={8}
        position={[mousePosition.x, mousePosition.y, 5]}
        target={sphereRef.current}
        penumbra={0.8}
      />
      <StatueObject />
      <CircleGlitch />
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
