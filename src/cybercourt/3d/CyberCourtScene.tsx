import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CyberCourtAtmosphere } from './CyberCourtAtmosphere';
import { CyberCourtSubject } from './CyberCourtSubject';
import { CyberCourtCameraRig } from './CyberCourtCameraRig';
import { Effects } from '../../components/3d/Effects';

export const CyberCourtScene: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2.5, 9.0], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <CyberCourtAtmosphere />
          <CyberCourtSubject />
          <CyberCourtCameraRig />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
};


