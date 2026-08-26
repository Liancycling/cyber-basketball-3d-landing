import React from 'react';
import { Sparkles } from '@react-three/drei';

export const Atmosphere: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#050508']} />
      <fog attach="fog" args={['#050508', 8, 30]} />

      {/* Cinematic Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 10]} intensity={2.5} color="#e0e7ff" />
      <directionalLight position={[-10, -10, -10]} intensity={1.2} color="#818cf8" />
      <pointLight position={[0, 0, 0]} intensity={3} color="#c084fc" distance={10} />
      <pointLight position={[3, -2, 2]} intensity={2} color="#06b6d4" distance={8} />

      {/* Floating Dust / Energy Particles */}
      <Sparkles count={120} scale={18} size={2.5} speed={0.4} opacity={0.6} color="#a855f7" />
      <Sparkles count={100} scale={22} size={1.8} speed={0.3} opacity={0.5} color="#38bdf8" />
    </>
  );
};

