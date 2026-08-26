import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CourtAtmosphere } from './CourtAtmosphere';
import { BasketballCourt } from './BasketballCourt';
import { CourtCameraRig } from './CourtCameraRig';
import { Effects } from '../../../components/3d/Effects';

export const CourtScene: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 3.5, 9.5], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <CourtAtmosphere />
          <BasketballCourt />
          <CourtCameraRig />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
};


