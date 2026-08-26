import React from 'react';
import { Sparkles } from '@react-three/drei';

export const CyberAtmosphere: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#05080e']} />
      <fog attach="fog" args={['#05080e', 8, 38]} />

      {/* Cyberpunk Night City Street & Lab Lighting */}
      <ambientLight intensity={0.35} />

      {/* Primary Key Light: Neon Lime / Cyber Yellow */}
      <directionalLight position={[12, 18, 12]} intensity={3.2} color="#ccff00" />
      
      {/* Secondary Rim Light: Cyan Telemetry */}
      <directionalLight position={[-12, -10, -10]} intensity={2.0} color="#00f0ff" />
      
      {/* Core Underglow (Deep Magenta Accent) */}
      <pointLight position={[0, 0, 0]} intensity={4.0} color="#ff0055" distance={10} />
      <pointLight position={[0, 3, 0]} intensity={3.5} color="#ccff00" distance={8} />
      <pointLight position={[-3, -2, 3]} intensity={2.5} color="#00f0ff" distance={8} />

      {/* Data Sparkles & Floating Cyber Dust */}
      <Sparkles count={160} scale={[22, 14, 22]} size={2.5} speed={0.45} opacity={0.65} color="#ccff00" />
      <Sparkles count={120} scale={[24, 16, 24]} size={1.8} speed={0.35} opacity={0.5} color="#00f0ff" />
    </>
  );
};


