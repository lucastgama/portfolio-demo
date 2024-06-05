"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  SoftShadows,
  Sphere,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { StatueObject } from "../../meshes/statue";

const MouseTracker = ({ setMousePosition }) => {
  useFrame((state) => {
    const x = state.pointer.x;
    const y = state.pointer.y;
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
        <SpotLight
          angle={0.9}
          attenuation={0}
          intensity={10}
          distance={30}
          position={[mousePosition.x, mousePosition.y, 3]}
          target={sphereRef.current}
        />
        <StatueObject />
        <Plane receiveShadow args={[20, 20]} position={[0, 0, -1]}>
          <meshStandardMaterial color="hotpink" />
        </Plane>
        <Sphere ref={sphereRef} args={[0.5]} position={[mousePosition.x * 4.5, mousePosition.y * 4.5, 0]} />
        <SoftShadows samples={2} />
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
