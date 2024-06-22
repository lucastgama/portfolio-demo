"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  SoftShadows,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import CircleGlitch from "../../meshes/circleGlitch";
import { StatueObject } from "../../meshes/statue";

const MouseTracker = ({ targetRef, setMousePosition }) => {
  const { viewport } = useThree();

  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 3.3;
    const y = (state.pointer.y * viewport.height) / 3.3;

    setMousePosition({ x, y });

    if (targetRef.current) {
      targetRef.current.position.set(x, y, 0);
    }
  });

  return null;
};

const Statue = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRef = useRef();

  return (
    <Canvas shadows>
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        minDistance={1}
        maxDistance={5}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <pointLight position={[0, -1, 1.5]} intensity={0.01} />
      <pointLight position={[0, 1, 1.2]} intensity={0.02} />
      <ambientLight intensity={0.01} />
      <SpotLight
        angle={0.4}
        attenuation={0}
        intensity={1.2}
        distance={10}
        position={[mousePosition.x, mousePosition.y, 5]}
        target={targetRef.current}
        penumbra={0.8}
      />
      <Plane receiveShadow args={[15, 15]} position={[0, 0, -0.2]}>
        <meshStandardMaterial color="#5d5d5d" />
      </Plane>
      <StatueObject />
      <CircleGlitch />
      <SoftShadows samples={1} />
      <MouseTracker setMousePosition={setMousePosition} targetRef={targetRef} />
      <object3D ref={targetRef} />
    </Canvas>
  );
};

export default Statue;
