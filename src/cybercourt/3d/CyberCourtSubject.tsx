import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import img1Url from '../../assets/images/img1.webp';
import img2Url from '../../assets/images/img2.webp';
import img3Url from '../../assets/images/img3.webp';

// Cyber Floating Holographic Photo Card in Arena
const CourtPhotoCard3D: React.FC<{
  textureUrl: string;
  position: [number, number, number];
  rotation: [number, number, number];
  borderColor: string;
}> = ({ textureUrl, position, rotation, borderColor }) => {
  const texture = useTexture(textureUrl);
  const cardRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (cardRef.current) {
      cardRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <group ref={cardRef}>
          {/* Cyber Card Glass Backing */}
          <mesh>
            <boxGeometry args={[2.3, 2.7, 0.08]} />
            <meshPhysicalMaterial
              color="#070a12"
              transmission={0.82}
              opacity={0.92}
              transparent
              roughness={0.15}
              metalness={0.85}
            />
          </mesh>

          {/* Real Photo Mesh Layer */}
          <mesh position={[0, 0.1, 0.05]}>
            <planeGeometry args={[2.0, 2.0]} />
            <meshStandardMaterial map={texture} roughness={0.2} metalness={0.1} toneMapped={false} />
          </mesh>

          {/* Neon HUD Cyber Border */}
          <mesh position={[0, 0.1, 0.052]}>
            <planeGeometry args={[2.02, 2.02]} />
            <meshBasicMaterial color={borderColor} wireframe />
          </mesh>

          {/* Bottom Telemetry Plate */}
          <mesh position={[0, -1.05, 0.05]}>
            <planeGeometry args={[2.0, 0.26]} />
            <meshStandardMaterial color="#04060a" roughness={0.5} />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export const CyberCourtSubject: React.FC = () => {
  const ballRef = useRef<THREE.Group>(null);
  const coreRings = useRef<THREE.Group>(null);
  const hoopLight = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Cyber Ball Levitation & Spin
    if (ballRef.current) {
      ballRef.current.rotation.y += delta * 0.8;
      ballRef.current.rotation.x += delta * 0.4;
      ballRef.current.position.y = 1.6 + Math.sin(state.clock.elapsedTime * 2.2) * 0.25;
    }
    if (coreRings.current) {
      coreRings.current.rotation.z += delta * 0.4;
      coreRings.current.rotation.x += delta * 0.2;
    }
    if (hoopLight.current) {
      hoopLight.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Cyberpunk Dark Parquet Court Floor with Neon Key Lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[26, 32]} />
        <meshStandardMaterial
          color="#060911"
          roughness={0.15}
          metalness={0.8}
        />
      </mesh>

      {/* Cyber Grid Sub-floor */}
      <gridHelper args={[34, 34, '#ccff00', '#00f0ff']} position={[0, -0.02, 0]} />

      {/* Court Neon Markings (Center Circle & 3-Point Arcs) */}
      <group position={[0, 0.01, 0]}>
        {/* Center Cyber Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.8, 2.9, 64]} />
          <meshBasicMaterial color="#ccff00" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5, 0.55, 32]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* Half Court Line */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[22, 0.08]} />
          <meshBasicMaterial color="#ccff00" />
        </mesh>

        {/* Cyber Three-point Arc */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -6]}>
          <ringGeometry args={[6.2, 6.28, 64, 1, 0, Math.PI]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* Free Throw Key Box */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -7]}>
          <planeGeometry args={[4.8, 6.5]} />
          <meshBasicMaterial color="#ff0055" wireframe opacity={0.35} transparent />
        </mesh>
      </group>

      {/* 2. Cyber Basketball Hoop & Holographic Backboard */}
      <group position={[0, 0, -10.5]}>
        {/* Post Stand (Cyber Matte Black) */}
        <mesh position={[0, 2.5, -1.2]}>
          <cylinderGeometry args={[0.15, 0.2, 5.0, 16]} />
          <meshStandardMaterial color="#0b0f19" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 4.6, -0.6]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 1.8, 16]} />
          <meshStandardMaterial color="#0b0f19" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Cyber Holographic Glass Backboard */}
        <mesh position={[0, 4.2, 0]}>
          <boxGeometry args={[3.8, 2.4, 0.1]} />
          <meshPhysicalMaterial
            color="#0b1120"
            transmission={0.9}
            opacity={0.95}
            transparent
            roughness={0.1}
            metalness={0.7}
          />
        </mesh>

        {/* Backboard Neon Framing */}
        <mesh position={[0, 4.2, 0.06]}>
          <planeGeometry args={[3.7, 2.3]} />
          <meshBasicMaterial color="#ccff00" wireframe />
        </mesh>
        <mesh position={[0, 3.8, 0.06]}>
          <planeGeometry args={[1.2, 0.9]} />
          <meshBasicMaterial color="#00f0ff" wireframe />
        </mesh>

        {/* Titanium Glowing Rim */}
        <mesh position={[0, 3.6, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.04, 16, 32]} />
          <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={2.5} />
        </mesh>

        {/* Cyber Wireframe Net */}
        <mesh position={[0, 3.1, 0.65]}>
          <cylinderGeometry args={[0.52, 0.32, 0.9, 16, 6, true]} />
          <meshBasicMaterial color="#00f0ff" wireframe opacity={0.65} transparent />
        </mesh>
      </group>

      {/* 3. Levitating Cyber Energy Basketball (Center Court Focus) */}
      <group ref={ballRef} position={[0, 1.6, 0]}>
        {/* Basketball Core Sphere */}
        <mesh>
          <sphereGeometry args={[0.9, 48, 48]} />
          <meshStandardMaterial
            color="#080c14"
            roughness={0.2}
            metalness={0.9}
            emissive="#ccff00"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Cyber Neon Seam Rings */}
        <mesh>
          <torusGeometry args={[0.91, 0.02, 16, 64]} />
          <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={2.0} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.91, 0.02, 16, 64]} />
          <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={2.0} />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[0.91, 0.02, 16, 64]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.5} />
        </mesh>

        {/* Core Orbiting HUD Rings */}
        <group ref={coreRings}>
          <mesh>
            <torusGeometry args={[1.3, 0.015, 16, 64]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} />
          </mesh>
        </group>
      </group>

      {/* 4. The 3 Real Images in Cyber Basketball Arena Orbit */}
      <CourtPhotoCard3D
        textureUrl={img1Url}
        position={[3.8, 1.8, 1.5]}
        rotation={[0, -Math.PI / 3, 0]}
        borderColor="#ccff00"
      />

      <CourtPhotoCard3D
        textureUrl={img2Url}
        position={[-3.8, 2.0, 1.5]}
        rotation={[0, Math.PI / 3, 0]}
        borderColor="#00f0ff"
      />

      <CourtPhotoCard3D
        textureUrl={img3Url}
        position={[0, 2.6, -4.5]}
        rotation={[0, 0, 0]}
        borderColor="#ff0055"
      />
    </group>
  );
};


