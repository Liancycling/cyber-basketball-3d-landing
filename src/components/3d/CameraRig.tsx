import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const CameraRig: React.FC = () => {
  const { camera } = useThree();
  const progressRef = useRef({ val: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        progressRef.current.val = self.progress;
      },
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trigger.kill();
    };
  }, []);

  const targetCamPos = useRef(new THREE.Vector3(0, 2, 8.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const p = progressRef.current.val;
    const mx = mouseRef.current.x * 0.35;
    const my = mouseRef.current.y * 0.35;

    if (p <= 0.3) {
      // Scene 1: Hero Wide Orbit & Dolly In
      const t = p / 0.3;
      targetCamPos.current.set(
        0 + mx,
        2 - t * 1.4 + my,
        8.5 - t * 2.2
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p <= 0.7) {
      // Scene 2 & 3: Close inspection orbit around core
      const t = (p - 0.3) / 0.4;
      const angle = t * Math.PI * 1.5;
      targetCamPos.current.set(
        Math.sin(angle) * 4.5 + mx,
        0.6 + Math.sin(t * Math.PI) * 1.4 + my,
        Math.cos(angle) * 4.5
      );
      targetLookAt.current.set(0, Math.sin(t * Math.PI) * 0.4, 0);
    } else {
      // Scene 4: Cinematic Ascension & Final Call-to-action
      const t = (p - 0.7) / 0.3;
      targetCamPos.current.set(
        0 + mx,
        -1.0 + t * 4.5 + my,
        4.5 + t * 3.5
      );
      targetLookAt.current.set(0, t * 0.8, 0);
    }

    camera.position.lerp(targetCamPos.current, 0.06);

    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    const targetDirection = targetLookAt.current.clone().sub(camera.position).normalize();

    camera.lookAt(
      camera.position.clone().add(
        currentLookAt.lerp(targetDirection, 0.06)
      )
    );
  });

  return null;
};


