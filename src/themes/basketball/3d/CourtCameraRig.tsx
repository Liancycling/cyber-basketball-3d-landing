import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const CourtCameraRig: React.FC = () => {
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

  const targetCamPos = useRef(new THREE.Vector3(0, 3.5, 9.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 1.8, 0));

  useFrame(() => {
    const p = progressRef.current.val;
    const mx = mouseRef.current.x * 0.4;
    const my = mouseRef.current.y * 0.4;

    if (p <= 0.3) {
      // Act 1: Arena Tip-off View (Center court hero shot)
      const t = p / 0.3;
      targetCamPos.current.set(
        0 + mx,
        3.5 - t * 1.5 + my,
        9.5 - t * 3.5
      );
      targetLookAt.current.set(0, 2.0, 0);
    } else if (p <= 0.7) {
      // Act 2 & 3: Fastbreak Orbit & Low-angle Rim Dunk Perspective
      const t = (p - 0.3) / 0.4;
      const angle = t * Math.PI * 1.4;
      targetCamPos.current.set(
        Math.sin(angle) * 5.2 + mx,
        1.2 + Math.sin(t * Math.PI) * 2.2 + my,
        Math.cos(angle) * 5.2 - t * 5.0
      );
      // Look toward the basketball and hoop
      targetLookAt.current.set(0, 2.2 + t * 1.0, -t * 6.0);
    } else {
      // Act 4: Skyhook Ascension & Victory Spotlight (CTA)
      const t = (p - 0.7) / 0.3;
      targetCamPos.current.set(
        0 + mx,
        0.8 + t * 4.5 + my,
        -2.0 + t * 6.0
      );
      targetLookAt.current.set(0, 2.5 - t * 0.5, -4.0);
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


