import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import img1Url from '../../../assets/images/img1.webp';
import img2Url from '../../../assets/images/img2.webp';
import img3Url from '../../../assets/images/img3.webp';

// 3D Floating Holographic Photo Card Component
const PhotoCard3D: React.FC<{
  textureUrl: string;
  position: [number, number, number];
  rotation: [number, number, number];
  borderColor: string;
}> = ({ textureUrl, position, rotation, borderColor }) => {
  const texture = useTexture(textureUrl);
  const cardRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (cardRef.current) {
      cardRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <group ref={cardRef}>
          {/* Glass Card Backdrop */}
          <mesh>
            <boxGeometry args={[2.4, 2.8, 0.08]} />
            <meshPhysicalMaterial
              color="#0b0f19"
              transmission={0.8}
              opacity={0.92}
              transparent
              roughness={0.15}
              metalness={0.8}
            />
          </mesh>

          {/* Real Photo Mesh Layer */}
          <mesh position={[0, 0.1, 0.05]}>
            <planeGeometry args={[2.1, 2.1]} />
            <meshStandardMaterial
              map={texture}
              roughness={0.2}
              metalness={0.1}
              toneMapped={false}
            />
          </mesh>

          {/* Neon Holographic HUD Cyber Border */}
          <mesh position={[0, 0.1, 0.052]}>
            <planeGeometry args={[2.12, 2.12]} />
            <meshBasicMaterial color={borderColor} wireframe />
          </mesh>

          {/* Bottom Telemetry Label Bar */}
          <mesh position={[0, -1.1, 0.05]}>
            <planeGeometry args={[2.1, 0.28]} />
            <meshStandardMaterial color="#05080e" roughness={0.5} />
          </mesh>

          {/* Corner Crosshairs */}
          <mesh position={[-1.05, 1.25, 0.055]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color={borderColor} />
          </mesh>
          <mesh position={[1.05, 1.25, 0.055]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export const CyberSubject: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const hudRing1 = useRef<THREE.Mesh>(null);
  const hudRing2 = useRef<THREE.Mesh>(null);
  const hexCore = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
    if (hudRing1.current) {
      hudRing1.current.rotation.z += delta * 0.3;
      hudRing1.current.rotation.x += delta * 0.15;
    }
    if (hudRing2.current) {
      hudRing2.current.rotation.z -= delta * 0.4;
      hudRing2.current.rotation.y += delta * 0.2;
    }
    if (hexCore.current) {
      hexCore.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Cyber Holographic Grid Base */}
      <gridHelper
        args={[28, 28, '#ccff00', '#00f0ff']}
        position={[0, -2.8, 0]}
      />

      {/* 1. DALAB Central Core */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={hexCore} position={[0, 0, 0]}>
          <cylinderGeometry args={[1.0, 1.0, 0.35, 6]} />
          <meshStandardMaterial
            color="#0b0f19"
            emissive="#ccff00"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.2} />
        </mesh>
      </Float>

      {/* 2. Cyber HUD Gimbal Rings */}
      <mesh ref={hudRing1}>
        <torusGeometry args={[3.8, 0.02, 16, 80]} />
        <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={1.2} />
      </mesh>

      <mesh ref={hudRing2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[4.2, 0.015, 16, 80]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.0} />
      </mesh>

      {/* 3. The 3 Real Images Positioned as 3D Holographic Orbit Cards */}
      <PhotoCard3D
        textureUrl={img1Url}
        position={[3.8, 0.6, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        borderColor="#ccff00"
      />

      <PhotoCard3D
        textureUrl={img2Url}
        position={[-1.9, 0.8, 3.3]}
        rotation={[0, Math.PI / 6, 0]}
        borderColor="#00f0ff"
      />

      <PhotoCard3D
        textureUrl={img3Url}
        position={[-1.9, 0.4, -3.3]}
        rotation={[0, (5 * Math.PI) / 6, 0]}
        borderColor="#ff0055"
      />
    </group>
  );
};




