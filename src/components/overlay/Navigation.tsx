import React from 'react';
import { Sparkles, Film, Compass, Disc, RefreshCw } from 'lucide-react';

interface Props {
  currentTheme?: string;
  onSelectTheme?: (t: 'film' | 'basketball' | 'dalab') => void;
}

export const Navigation: React.FC<Props> = ({ onSelectTheme }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-black/30 border-b border-zinc-800/40">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <Film className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>
        <div className="text-left">
          <span className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Film DNA
          </span>
          <span className="block text-[10px] text-zinc-500 tracking-tighter uppercase font-mono">
            Interactive Production Suite
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-zinc-400">
        <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-purple-400" /> 01. Vision
        </a>
        <a href="#director" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Compass className="w-3 h-3 text-cyan-400" /> 02. Structure
        </a>
        <a href="#workflow" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Disc className="w-3 h-3 text-pink-400" /> 03. Engine
        </a>
      </nav>

      <div className="flex items-center gap-3">
        {onSelectTheme && (
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono text-zinc-300 rounded-full border border-zinc-700/70 bg-zinc-900/80 hover:bg-zinc-800 transition-all cursor-pointer">
              <RefreshCw className="w-3 h-3 text-purple-400 animate-spin-slow" />
              <span>切換風格空間</span>
            </button>
            <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col bg-zinc-950 border border-purple-500/40 p-1.5 min-w-[170px] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] z-50">
              <button onClick={() => onSelectTheme('dalab')} className="text-left px-3 py-1.5 text-xs font-mono text-[#ccff00] hover:bg-[#ccff00]/10 rounded-lg">
                DALAB 2077
              </button>
              <button onClick={() => onSelectTheme('basketball')} className="text-left px-3 py-1.5 text-xs font-mono text-orange-400 hover:bg-orange-500/10 rounded-lg">
                AERO DUNK 籃球
              </button>
              <button onClick={() => onSelectTheme('film')} className="text-left px-3 py-1.5 text-xs font-mono text-purple-400 hover:bg-purple-500/10 rounded-lg flex items-center justify-between">
                <span>FILM DNA 電影</span>
                <span>●</span>
              </button>
            </div>
          </div>
        )}

        <button className="px-4 py-2 text-xs font-medium text-zinc-200 uppercase tracking-wider rounded-full border border-zinc-700/60 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer">
          Access Beta
        </button>
      </div>
    </header>
  );
};




