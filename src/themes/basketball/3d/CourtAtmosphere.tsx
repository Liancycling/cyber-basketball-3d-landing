import React from 'react';
import { Sparkles } from '@react-three/drei';

export const CourtAtmosphere: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#06070a']} />
      <fog attach="fog" args={['#06070a', 10, 42]} />

      {/* Stadium Arena Floodlights & Spotlights */}
      <ambientLight intensity={0.45} />
      
      {/* Overhead Arena Spotlights */}
      <directionalLight position={[0, 20, 0]} intensity={3.0} color="#ffffff" />
      <directionalLight position={[-15, 12, 10]} intensity={2.2} color="#f97316" /> {/* Orange Rim Light */}
      <directionalLight position={[15, 12, -10]} intensity={1.8} color="#38bdf8" /> {/* Cyan Contrast Light */}
      
      {/* Hoop Highlight Spotlight */}
      <pointLight position={[0, 4.5, -8]} intensity={4.5} color="#f97316" distance={12} />
      <pointLight position={[0, 1.2, 0]} intensity={2.0} color="#ffedd5" distance={8} />

      {/* Floating Arena Dust Particles & Heat Sparks */}
      <Sparkles count={150} scale={[25, 12, 25]} size={2.2} speed={0.5} opacity={0.6} color="#fb923c" />
      <Sparkles count={80} scale={[20, 8, 20]} size={1.8} speed={0.3} opacity={0.4} color="#ffffff" />
    </>
  );
};


