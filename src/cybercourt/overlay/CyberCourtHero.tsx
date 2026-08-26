import React from 'react';
import { ArrowDown, Zap, ShieldCheck, Activity, Trophy } from 'lucide-react';

export const CyberCourtHero: React.FC = () => {
  return (
    <section id="court" className="min-h-screen w-full flex flex-col justify-between p-6 md:p-12 relative z-10 select-none font-mono">
      {/* Top Telemetry / Status Indicator */}
      <div className="pt-24 flex items-center justify-between text-xs text-[#00f0ff] uppercase tracking-widest border-b border-[#00f0ff]/20 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
          <span>CYBER COURT MATRIX // PROTOCOL_ONLINE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-zinc-400">
          <span>FLOOR: CARBON TITANIUM</span>
          <span className="text-[#ccff00]">HOOP: 3.05M GLOW RIM</span>
          <span>FPS: 120.0</span>
        </div>
      </div>

      {/* Main Center Banner */}
      <div className="max-w-3xl my-auto py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-[#ccff00] text-[#ccff00] text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
          <Zap className="w-3.5 h-3.5" /> 2077 NIGHT CITY HOOP LEAGUE
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
          KINETIC <br />
          <span className="bg-gradient-to-r from-[#ccff00] via-[#00f0ff] to-pink-500 bg-clip-text text-transparent">
            CYBER DUNK
          </span>
        </h1>

        <p className="text-zinc-300 text-sm md:text-base max-w-xl leading-relaxed font-sans font-light mb-8">
          結合賽博朋克 2077 霓虹美學與頂級職業籃球場館。在全息浮空照片矩陣與鈦合金籃框之間，體驗次世代運動裝備與 3D 空間互動。
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-lg border-t border-zinc-800 pt-6">
          <div>
            <span className="text-2xl md:text-3xl font-black text-[#ccff00]">50+</span>
            <span className="block text-[11px] text-zinc-500 uppercase">PRO TEAM GEAR</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-black text-[#00f0ff]">14</span>
            <span className="block text-[11px] text-zinc-500 uppercase">DAY FAST DISPATCH</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-black text-white">100%</span>
            <span className="block text-[11px] text-zinc-500 uppercase">TAIWAN PRO MAKER</span>
          </div>
        </div>
      </div>

      {/* Bottom Action Prompts */}
      <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-900 pt-6 pb-2">
        <div className="flex items-center gap-2 text-[#ccff00]">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span>SCROLL TO ENTER 3D ARENA & PHOTO MATRIX</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#00f0ff]" /> ZERO-WEAR</span>
          <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-[#ccff00]" /> KINETIC LAB</span>
          <span className="flex items-center gap-1"><Trophy className="w-3 h-3 text-amber-400" /> PRO CHAMPION</span>
        </div>
      </div>
    </section>
  );
};


