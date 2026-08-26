import React from 'react';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { CyberCourtScene } from './cybercourt/3d/CyberCourtScene';
import { CyberCourtNav } from './cybercourt/overlay/CyberCourtNav';
import { CyberCourtHero } from './cybercourt/overlay/CyberCourtHero';
import { CyberCourtChapters } from './cybercourt/overlay/CyberCourtChapters';
import { CyberCourtCTA } from './cybercourt/overlay/CyberCourtCTA';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#04060a] text-white selection:bg-[#ccff00] selection:text-black">
        {/* Background Fixed 3D Cyberpunk Basketball Arena Canvas */}
        <CyberCourtScene />

        {/* Foreground Futuristic HUD Overlays */}
        <CyberCourtNav />

        <main className="relative w-full">
          <CyberCourtHero />
          <CyberCourtChapters />
          <CyberCourtCTA />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default App;





