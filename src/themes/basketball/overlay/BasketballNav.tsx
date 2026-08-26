import React from 'react';
import { Flame, Trophy, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

interface Props {
  currentTheme?: string;
  onSelectTheme: (t: 'film' | 'basketball' | 'dalab') => void;
}

export const BasketballNav: React.FC<Props> = ({ onSelectTheme }) => {




  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-black/40 border-b border-orange-950/40">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <Flame className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div className="text-left">
          <span className="text-sm font-black tracking-widest uppercase bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
            AERO DUNK 3D
          </span>
          <span className="block text-[10px] text-zinc-500 tracking-tighter uppercase font-mono">
            Pro Performance Labs
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-zinc-400 font-mono">
        <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-orange-400" /> 01. Grav-X Core
        </a>
        <a href="#tech" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Trophy className="w-3 h-3 text-amber-400" /> 02. Court Specs
        </a>
        <a href="#lab" className="hover:text-white transition-colors flex items-center gap-1.5">
          <ShieldAlert className="w-3 h-3 text-cyan-400" /> 03. Speed Index
        </a>
      </nav>

      <div className="flex items-center gap-3">
        {/* Theme Switcher Button */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono text-zinc-300 rounded-full border border-zinc-700/70 bg-zinc-900/80 hover:bg-zinc-800 transition-all cursor-pointer">
            <RefreshCw className="w-3 h-3 text-orange-400 animate-spin-slow" />
            <span>切換風格空間</span>
          </button>
          <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col bg-zinc-950 border border-orange-500/40 p-1.5 min-w-[170px] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] z-50">
            <button onClick={() => onSelectTheme('dalab')} className="text-left px-3 py-1.5 text-xs font-mono text-[#ccff00] hover:bg-[#ccff00]/10 rounded-lg">
              DALAB 2077
            </button>
            <button onClick={() => onSelectTheme('basketball')} className="text-left px-3 py-1.5 text-xs font-mono text-orange-400 hover:bg-orange-500/10 rounded-lg flex items-center justify-between">
              <span>AERO DUNK 籃球</span>
              <span>●</span>
            </button>
            <button onClick={() => onSelectTheme('film')} className="text-left px-3 py-1.5 text-xs font-mono text-purple-400 hover:bg-purple-500/10 rounded-lg">
              FILM DNA 電影
            </button>
          </div>
        </div>

        <button className="px-4 py-2 text-xs font-bold text-black uppercase tracking-wider rounded-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer">
          Pre-Order
        </button>
      </div>

    </header>
  );
};


