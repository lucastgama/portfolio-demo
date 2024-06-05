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
    <>
      <Canvas shadows>
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          minDistance={1}
          maxDistance={5}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <pointLight position={[1, -1, -2]} intensity={1} />
        <pointLight position={[0, 1, 1]} intensity={0.05} />
        <pointLight position={[-1, 0, -1]} intensity={0.05} />

        <SpotLight
          angle={0.8}
          attenuation={0}
          intensity={1.6}
          distance={10}
          position={[mousePosition.x, mousePosition.y, 3]}
          target={sphereRef.current}
          penumbra={1}
        />
        <StatueObject />
        <Plane receiveShadow args={[15, 15]} position={[0, 0, -0.5]}>
          <meshStandardMaterial color="#9d9d9d" />
        </Plane>
        <Sphere
          ref={sphereRef}
          args={[0.001]}
          position={[mousePosition.x, mousePosition.y, 0]}
        />
        <SoftShadows samples={1} />
        <MouseTracker setMousePosition={setMousePosition} />
      </Canvas>
      <div style={{ position: "absolute", top: 10, left: 10, color: "white" }}>
        Mouse Position: X: {mousePosition.x.toFixed(2)}, Y:{" "}
        {mousePosition.y.toFixed(2)}
      </div>
    </>
  );
};

export default Statue;
