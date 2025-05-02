"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path, true);
  const meshRef = useRef(null);

  return <primitive object={scene} ref={meshRef} />;
}

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1>Plett</h1>

      <div className="aspect-square border border-red-400">
        <Canvas camera={{ position: [0, 0, 100] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />

          <Model path="/plett.glb" />

          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
