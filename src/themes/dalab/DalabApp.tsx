import React from 'react';
import { SmoothScroll } from '../../components/ui/SmoothScroll';
import { CyberScene } from './3d/CyberScene';
import { CyberNav } from './overlay/CyberNav';
import { CyberHero } from './overlay/CyberHero';
import { CyberChapters } from './overlay/CyberChapters';
import { CyberCTA } from './overlay/CyberCTA';

interface Props {
  currentTheme: string;
  onSelectTheme: (t: 'film' | 'basketball' | 'dalab') => void;
}

export const DalabApp: React.FC<Props> = ({ currentTheme, onSelectTheme }) => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#05080e] text-white selection:bg-[#ccff00] selection:text-black">
        {/* Background Fixed 3D Cyberpunk Canvas */}
        <CyberScene />

        {/* Foreground Cyberpunk HUD Overlays */}
        <CyberNav currentTheme={currentTheme} onSelectTheme={onSelectTheme} />

        <main className="relative w-full">
          <CyberHero />
          <CyberChapters />
          <CyberCTA />
        </main>
      </div>
    </SmoothScroll>
  );
};


