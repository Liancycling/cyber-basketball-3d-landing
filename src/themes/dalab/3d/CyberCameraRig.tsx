import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const CyberCameraRig: React.FC = () => {
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

  const targetCamPos = useRef(new THREE.Vector3(0, 2.5, 9.0));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const p = progressRef.current.val;
    const mx = mouseRef.current.x * 0.45;
    const my = mouseRef.current.y * 0.45;

    if (p <= 0.28) {
      // Act 1: Night City Scanning Hero Shot
      const t = p / 0.28;
      targetCamPos.current.set(
        0 + mx,
        2.5 - t * 1.5 + my,
        9.0 - t * 3.0
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p <= 0.68) {
      // Act 2 & 3: Deep Blueprint Spec Matrix Orbit
      const t = (p - 0.28) / 0.4;
      const angle = t * Math.PI * 1.6;
      targetCamPos.current.set(
        Math.sin(angle) * 5.0 + mx,
        0.8 + Math.sin(t * Math.PI) * 2.0 + my,
        Math.cos(angle) * 5.0
      );
      targetLookAt.current.set(0, Math.sin(t * Math.PI) * 0.5, 0);
    } else {
      // Act 4: Production Line Ascension & Quote Matrix (CTA)
      const t = (p - 0.68) / 0.32;
      targetCamPos.current.set(
        0 + mx,
        -1.5 + t * 4.8 + my,
        4.5 + t * 4.0
      );
      targetLookAt.current.set(0, t * 1.0, 0);
    }

    camera.position.lerp(targetCamPos.current, 0.07);

    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    const targetDirection = targetLookAt.current.clone().sub(camera.position).normalize();

    camera.lookAt(
      camera.position.clone().add(
        currentLookAt.lerp(targetDirection, 0.07)
      )
    );
  });

  return null;
};


