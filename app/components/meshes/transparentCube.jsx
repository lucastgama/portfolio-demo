"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Reflector } from '@react-three/drei';
import * as THREE from 'three';

const GlassCube = () => {
  return (
    <mesh>
      {/* Geometria do cubo */}
      <boxGeometry args={[1, 1, 1]} />

      {/* Material de vidro */}
      <meshPhysicalMaterial
        color="skyblue"
        roughness={0}
        transmission={1} // Define a transparência
        thickness={0.5}  // Define a espessura do efeito de refração
        envMapIntensity={0.9} // Intensidade do mapa ambiental
        reflectivity={0.9} // Refletividade para simular a reflexão do vidro
        clearcoat={1} // Simula o revestimento superior do vidro
        clearcoatRoughness={0} // Define o quão liso é o revestimento
      />
    </mesh>
  );
};

const Teste = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense fallback={null}>
        {/* Adiciona o cubo de vidro */}
        <GlassCube />

        {/* Ambiente para reflexo/refratação */}
        <Environment preset="sunset" />

        {/* Reflexo no plano */}
        <Reflector resolution={512} args={[10, 10]} mirror={0.5} mixBlur={10} position={[0, -1, 0]}>
          {(Material, props) => <Material metalness={0.6} roughness={0.5} {...props} />}
        </Reflector>
      </Suspense>
    </Canvas>
  );
};

export default Teste;

