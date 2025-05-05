"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, MeshBasicMaterial } from "three";

export function MeshComponent({ path }: Readonly<{ path: string }>) {
  const { scene } = useGLTF(path, true);
  const meshRef = useRef<Mesh>(null);

  const colors = ["#FFFACD", "#A8D8C8", "#BDE0FE", "#F4CBC6", "#E6E6FA"];

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += -0.01;
    }
  });

  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      ((child as Mesh).material as MeshBasicMaterial).color.set(randomColor);
    }
  });

  return <primitive object={scene} ref={meshRef} />;
}

export function ModelRender() {
  return (
    <Canvas camera={{ position: [0, 0, 100] }} className="max-w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={Math.PI / 2} />

      <MeshComponent path="/plett.glb" />

      <OrbitControls />
    </Canvas>
  );
}
