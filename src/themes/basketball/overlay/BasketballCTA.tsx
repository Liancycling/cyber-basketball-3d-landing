import React from 'react';
import { ArrowRight, Flame, Trophy, ShieldAlert } from 'lucide-react';

export const BasketballCTA: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10 py-24">
      <div className="max-w-3xl backdrop-blur-2xl bg-black/70 border border-orange-500/40 p-10 md:p-16 rounded-[2.5rem] shadow-[0_0_90px_rgba(234,88,12,0.25)]">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center">
            <Trophy className="w-8 h-8 text-orange-400" />
          </div>
        </div>

        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 uppercase">
          OWN THE COURT <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-red-500 bg-clip-text text-transparent">
            UNLEASH THE POWER
          </span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8 font-light">
          首批限量 500 組「反重力賽事限定款」預購開放中。搶先體驗職業球員指定之頂級裝備。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="輸入 Email 領取優先搶購碼..."
            className="w-full px-5 py-3.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
          />
          <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-extrabold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.5)] whitespace-nowrap cursor-pointer">
            <span>搶先鎖定</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <span>© 2026 AERO DUNK LABS. POWERED BY THREE.JS ENGINE</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-orange-400">
              <Flame className="w-3.5 h-3.5" /> PRO PERFORMANCE
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <ShieldAlert className="w-3.5 h-3.5" /> FIBA SPEC APPROVED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


