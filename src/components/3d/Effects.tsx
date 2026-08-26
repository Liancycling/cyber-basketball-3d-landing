import React from 'react';
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';

export const Effects: React.FC = () => {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        luminanceThreshold={0.25}
        luminanceSmoothing={0.8}
        height={300}
        intensity={1.1}
      />
      <Noise opacity={0.035} />
      <Vignette eskil={false} offset={0.15} darkness={0.8} />
      <ChromaticAberration
        offset={new Vector2(0.0015, 0.0015)}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  );
};


