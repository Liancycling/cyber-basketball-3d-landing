import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export const BasketballCourt: React.FC = () => {
  const ballRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const pulseRingRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ballRef.current) {
      ballRef.current.rotation.y += delta * 0.8;
      ballRef.current.rotation.x += delta * 0.4;
    }
    if (pulseRingRef.current) {
      pulseRingRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Wood Parquet Court Floor */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[18, 0.1, 28]} />
        <meshStandardMaterial
          color="#1e1510"
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>

      {/* Court Lines (Court Markings) */}
      <group position={[0, 0.01, 0]}>
        {/* Center Court Circle */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.4, 2.48, 64]} />
          <meshBasicMaterial color="#f97316" />
        </mesh>
        {/* Center Court Logo Plate */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <circleGeometry args={[1.5, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Half Court Line */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[17.6, 0.08]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        {/* 3-Point Arc Line */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -6]}>
          <ringGeometry args={[5.8, 5.88, 64, 1, 0, Math.PI]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        {/* Key Paint Area */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -9]}>
          <planeGeometry args={[4.2, 5.8]} />
          <meshStandardMaterial color="#c2410c" roughness={0.4} opacity={0.3} transparent />
        </mesh>
      </group>

      {/* 2. Pro Glass Backboard & Titanium Hoop */}
      <group position={[0, 3.2, -11]}>
        {/* Support Post */}
        <mesh position={[0, -1.6, -1.2]}>
          <cylinderGeometry args={[0.15, 0.18, 4, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.1, -0.6]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1.8, 16]} />
          <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Clear Glass Backboard */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[3.6, 2.2, 0.08]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            transparent
            roughness={0.1}
            ior={1.5}
            thickness={0.5}
          />
        </mesh>
        {/* Backboard Inner Target Box */}
        <mesh position={[0, 0.4, 0.045]}>
          <planeGeometry args={[1.2, 0.9]} />
          <meshBasicMaterial color="#f97316" wireframe />
        </mesh>

        {/* Hoop Rim (Glowing Neon Orange) */}
        <group ref={ringRef} position={[0, 0, 0.7]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.6, 0.04, 16, 48]} />
            <meshStandardMaterial color="#ff5722" emissive="#ff3d00" emissiveIntensity={1.2} roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Net (Stylized Cyber Mesh Net) */}
          <mesh position={[0, -0.45, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.58, 0.35, 0.9, 16, 4, true]} />
            <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.65} />
          </mesh>
        </group>
      </group>

      {/* 3. The Core Levitating "Energy Basketball" */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <group position={[0, 2.0, 0]}>
          {/* Glowing Holographic Halo */}
          <mesh ref={pulseRingRef} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.6, 0.02, 16, 64]} />
            <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1.5} />
          </mesh>

          {/* The Basketball */}
          <mesh ref={ballRef}>
            <sphereGeometry args={[0.9, 32, 32]} />
            <meshStandardMaterial
              color="#ea580c"
              roughness={0.35}
              metalness={0.4}
              emissive="#7c2d12"
              emissiveIntensity={0.25}
            />
          </mesh>

          {/* Neon Ribs on Basketball */}
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[0.905, 0.015, 16, 64]} />
            <meshBasicMaterial color="#09090b" />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.905, 0.015, 16, 64]} />
            <meshBasicMaterial color="#09090b" />
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.905, 0.015, 16, 64]} />
            <meshBasicMaterial color="#09090b" />
          </mesh>
        </group>
      </Float>
    </group>
  );
};


