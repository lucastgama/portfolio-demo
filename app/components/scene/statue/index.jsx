"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  SoftShadows,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import CircleGlitch from "../../meshes/circleGlitch";
import { StatueObject } from "../../meshes/statue";
import * as THREE from "three";

const MouseTracker = ({ targetRef, setMousePosition }) => {
  const { camera } = useThree();

  useFrame((state) => {
    const { pointer } = state;
    const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    setMousePosition({ x: pos.x, y: pos.y });

    if (targetRef.current) {
      targetRef.current.position.set(pos.x, pos.y, 0);
    }
  });

  return null;
};

export function Statue() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRef = useRef();

  return (
    <>
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
        <Suspense fallback={null}>
          <pointLight position={[0, -1, 1.5]} intensity={0.01} />
          <pointLight position={[0, 1, 1.2]} intensity={0.02} />
          <ambientLight intensity={0.01} />
          <SpotLight
            angle={0.4}
            attenuation={0}
            intensity={1.4}
            distance={10}
            position={[mousePosition.x, mousePosition.y, 5]}
            target={targetRef.current}
            penumbra={0.8}
          />
          <Plane receiveShadow args={[15, 15]} position={[0, 0, -0.2]}>
            <meshStandardMaterial color="#6a6a6a" />
          </Plane>
          <StatueObject />
          <CircleGlitch />
          <SoftShadows samples={1} />
          <MouseTracker
            setMousePosition={setMousePosition}
            targetRef={targetRef}
          />
          <object3D ref={targetRef} />
        </Suspense>
      </Canvas>
    </>
  );
}
