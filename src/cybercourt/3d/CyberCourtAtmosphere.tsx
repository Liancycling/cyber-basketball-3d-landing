import React from 'react';
import { Sparkles } from '@react-three/drei';

export const CyberCourtAtmosphere: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#04060a']} />
      <fog attach="fog" args={['#04060a', 8, 42]} />

      {/* Cyberpunk Stadium Floodlights */}
      <ambientLight intensity={0.4} />

      {/* Neon Lime Overhead Arena Floodlight */}
      <directionalLight position={[0, 25, 0]} intensity={3.5} color="#ccff00" />
      
      {/* Cyber Cyan Court Rim Light */}
      <directionalLight position={[-16, 14, 12]} intensity={2.4} color="#00f0ff" />
      
      {/* Deep Magenta Underglow Accent */}
      <directionalLight position={[16, 12, -12]} intensity={2.0} color="#ff0055" />

      {/* Hoop Cyber Spotlights */}
      <pointLight position={[0, 4.2, -10.5]} intensity={5.0} color="#ccff00" distance={14} />
      <pointLight position={[0, 1.5, 0]} intensity={3.0} color="#00f0ff" distance={10} />

      {/* Floating Arena Sparks & Cyber Neon Dust */}
      <Sparkles count={160} scale={[26, 14, 28]} size={2.5} speed={0.5} opacity={0.65} color="#ccff00" />
      <Sparkles count={120} scale={[24, 12, 24]} size={2.0} speed={0.4} opacity={0.5} color="#00f0ff" />
      <Sparkles count={60} scale={[20, 10, 20]} size={1.6} speed={0.3} opacity={0.4} color="#ff0055" />
    </>
  );
};


