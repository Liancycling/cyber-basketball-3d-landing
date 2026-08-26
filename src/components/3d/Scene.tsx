import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Atmosphere } from './Atmosphere';
import { MainSubject } from './MainSubject';
import { CameraRig } from './CameraRig';
import { Effects } from './Effects';

export const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2, 8.5], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Atmosphere />
          <MainSubject />
          <CameraRig />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
};


