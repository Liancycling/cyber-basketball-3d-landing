import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useLenis } from 'lenis/react';

export const CyberCourtCameraRig: React.FC = () => {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 2.5, 9.0));
  const targetLook = useRef(new THREE.Vector3(0, 1.6, 0));

  useLenis(({ progress }: { progress: number }) => {

    // 0.0 - 0.25: Scene 1 - Cyber Tip-off Overhead scanning
    if (progress < 0.25) {
      const t = progress / 0.25;
      targetPos.current.set(
        THREE.MathUtils.lerp(0, 4.5, t),
        THREE.MathUtils.lerp(3.2, 2.0, t),
        THREE.MathUtils.lerp(9.0, 5.5, t)
      );
      targetLook.current.set(0, 1.6, 0);
    }
    // 0.25 - 0.50: Scene 2 - Close-up Orbit around levitating cyber ball & photo 1
    else if (progress < 0.5) {
      const t = (progress - 0.25) / 0.25;
      targetPos.current.set(
        THREE.MathUtils.lerp(4.5, -4.2, t),
        THREE.MathUtils.lerp(2.0, 2.4, t),
        THREE.MathUtils.lerp(5.5, 4.5, t)
      );
      targetLook.current.set(
        THREE.MathUtils.lerp(0, -1.5, t),
        1.8,
        THREE.MathUtils.lerp(0, 1.0, t)
      );
    }
    // 0.50 - 0.75: Scene 3 - Deep Drive towards Neon Rim & Backboard
    else if (progress < 0.75) {
      const t = (progress - 0.5) / 0.25;
      targetPos.current.set(
        THREE.MathUtils.lerp(-4.2, 0, t),
        THREE.MathUtils.lerp(2.4, 3.8, t),
        THREE.MathUtils.lerp(4.5, -6.5, t)
      );
      targetLook.current.set(0, 3.6, -10.5);
    }
    // 0.75 - 1.0: Scene 4 - Cyber Arena Grand Ascend
    else {
      const t = (progress - 0.75) / 0.25;
      targetPos.current.set(
        THREE.MathUtils.lerp(0, 0, t),
        THREE.MathUtils.lerp(3.8, 8.5, t),
        THREE.MathUtils.lerp(-6.5, 12.0, t)
      );
      targetLook.current.set(0, 2.0, -2.0);
    }
  });

  useFrame((_, delta) => {
    camera.position.lerp(targetPos.current, delta * 3.2);
    const currentLook = new THREE.Vector3();
    camera.getWorldDirection(currentLook);
    const targetDirection = new THREE.Vector3().subVectors(targetLook.current, camera.position).normalize();
    currentLook.lerp(targetDirection, delta * 3.2);
    camera.lookAt(camera.position.clone().add(currentLook));
  });

  return null;
};


