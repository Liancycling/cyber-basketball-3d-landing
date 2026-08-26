import React from 'react';
import { SmoothScroll } from '../../components/ui/SmoothScroll';
import { CourtScene } from './3d/CourtScene';
import { BasketballNav } from './overlay/BasketballNav';
import { BasketballHero } from './overlay/BasketballHero';
import { BasketballChapters } from './overlay/BasketballChapters';
import { BasketballCTA } from './overlay/BasketballCTA';

interface Props {
  currentTheme: string;
  onSelectTheme: (t: 'film' | 'basketball' | 'dalab') => void;
}

export const BasketballApp: React.FC<Props> = ({ currentTheme, onSelectTheme }) => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#06070a] text-white selection:bg-orange-500 selection:text-black">
        {/* Background Fixed 3D Basketball Stadium Canvas */}
        <CourtScene />

        {/* Foreground Sports Brand Overlays */}
        <BasketballNav currentTheme={currentTheme} onSelectTheme={onSelectTheme} />

        <main className="relative w-full">
          <BasketballHero />
          <BasketballChapters />
          <BasketballCTA />
        </main>
      </div>
    </SmoothScroll>
  );
};



