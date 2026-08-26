import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CyberAtmosphere } from './CyberAtmosphere';
import { CyberSubject } from './CyberSubject';
import { CyberCameraRig } from './CyberCameraRig';
import { Effects } from '../../../components/3d/Effects';

export const CyberScene: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2.5, 9.0], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <CyberAtmosphere />
          <CyberSubject />
          <CyberCameraRig />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
};


