import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export const MainSubject: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const filmFrames = useMemo(() => {
    const frames = [];
    const count = 28;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 4;
      const y = (i - count / 2) * 0.35;
      const radius = 2.6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      frames.push({
        pos: [x, y, z] as [number, number, number],
        rot: [0, -angle + Math.PI / 2, 0.1 * Math.sin(angle)] as [number, number, number],
        id: i,
      });
    }
    return frames;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.2;
      ringRef1.current.rotation.y += delta * 0.25;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.3;
      ringRef2.current.rotation.z += delta * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Floating Core Hologram */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#6d28d9"
            emissiveIntensity={0.9}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Viewfinder Gimbal Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.9, 0.025, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.7} roughness={0.2} metalness={0.8} />
      </mesh>

      <mesh ref={ringRef2}>
        <torusGeometry args={[3.3, 0.02, 16, 100]} />
        <meshStandardMaterial color="#f43f5e" emissive="#e11d48" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
      </mesh>

      {/* 3D Film DNA Spiral */}
      {filmFrames.map((f) => (
        <group key={f.id} position={f.pos} rotation={f.rot}>
          <mesh>
            <boxGeometry args={[0.7, 0.45, 0.02]} />
            <meshStandardMaterial color="#18181b" roughness={0.4} metalness={0.8} />
          </mesh>
          <mesh position={[0, 0, 0.015]}>
            <planeGeometry args={[0.52, 0.32]} />
            <meshStandardMaterial
              color={f.id % 2 === 0 ? '#38bdf8' : '#ec4899'}
              emissive={f.id % 2 === 0 ? '#0284c7' : '#be185d'}
              emissiveIntensity={0.8}
              roughness={0.2}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh position={[-0.28, 0, 0.016]}>
            <boxGeometry args={[0.04, 0.08, 0.01]} />
            <meshBasicMaterial color="#050508" />
          </mesh>
          <mesh position={[0.28, 0, 0.016]}>
            <boxGeometry args={[0.04, 0.08, 0.01]} />
            <meshBasicMaterial color="#050508" />
          </mesh>
        </group>
      ))}
    </group>
  );
};


