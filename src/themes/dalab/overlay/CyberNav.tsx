import React from 'react';
import { Cpu, Terminal, Layers, RefreshCw, Activity } from 'lucide-react';

interface Props {
  currentTheme: string;
  onSelectTheme: (t: 'film' | 'basketball' | 'dalab') => void;
}

export const CyberNav: React.FC<Props> = ({ onSelectTheme }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl bg-[#05080e]/70 border-b border-[#ccff00]/20">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-9 h-9 border border-[#ccff00] bg-[#0b0f19] p-1 flex items-center justify-center relative shadow-[0_0_15px_rgba(204,255,0,0.3)]">
          <svg className="w-full h-full text-[#ccff00]" viewBox="0 0 100 100" fill="none">
            <path d="M 45 13 Q 50 10 55 13 L 80 27 Q 85 30 85 35 L 85 65 Q 85 70 80 73 L 55 87 Q 50 90 45 87 L 20 73 Q 15 70 15 65 L 15 35 Q 15 30 20 27 Z" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>
            <ellipse cx="50" cy="42" rx="10.5" ry="18" stroke="currentColor" stroke-width="6" fill="none" transform="rotate(0 50 50)"/>
            <ellipse cx="50" cy="42" rx="10.5" ry="18" stroke="currentColor" stroke-width="6" fill="none" transform="rotate(120 50 50)"/>
            <ellipse cx="50" cy="42" rx="10.5" ry="18" stroke="currentColor" stroke-width="6" fill="none" transform="rotate(240 50 50)"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00f0ff]"></div>
        </div>

        <div className="text-left">
          <span className="text-lg font-black tracking-tighter uppercase text-[#ccff00] font-mono">
            DALAB // 2077
          </span>
          <span className="block text-[9px] text-[#00f0ff] tracking-widest uppercase font-mono">
            DV PRO-MAKER LABS
          </span>
        </div>
      </div>

      {/* Cyber Telemetry Links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400">
        <a href="#hero" className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#ccff00]" /> 01. SYS_CORE
        </a>
        <a href="#blueprint" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#00f0ff]" /> 02. BLUEPRINTS
        </a>
        <a href="#lab" className="hover:text-pink-400 transition-colors flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-pink-400" /> 03. SPEC_TELEMETRY
        </a>
      </nav>

      {/* Action Controls & Theme Toggle */}
      <div className="flex items-center gap-3">
        <div className="relative group">
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono text-zinc-300 rounded-none border border-zinc-700 bg-black/80 hover:border-[#ccff00] hover:text-[#ccff00] transition-all cursor-pointer">
            <RefreshCw className="w-3 h-3 text-[#ccff00] animate-spin-slow" />
            <span>切換風格空間</span>
          </button>
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col bg-[#0b0f19] border border-[#ccff00]/40 p-1.5 min-w-[170px] shadow-[0_0_20px_rgba(0,0,0,0.8)] z-50">
            <button onClick={() => onSelectTheme('dalab')} className="text-left px-3 py-1.5 text-xs font-mono text-[#ccff00] hover:bg-[#ccff00]/10 flex items-center justify-between">
              <span>DALAB 2077</span>
              <Activity className="w-3 h-3" />
            </button>
            <button onClick={() => onSelectTheme('basketball')} className="text-left px-3 py-1.5 text-xs font-mono text-orange-400 hover:bg-orange-500/10">
              AERO DUNK 籃球
            </button>
            <button onClick={() => onSelectTheme('film')} className="text-left px-3 py-1.5 text-xs font-mono text-purple-400 hover:bg-purple-500/10">
              FILM DNA 電影
            </button>
          </div>
        </div>

        <button className="px-5 py-2 text-xs font-black text-black uppercase font-mono tracking-wider bg-[#ccff00] hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.8)] transition-all duration-300 skew-x-[-12deg] cursor-pointer">
          <span className="inline-block skew-x-[12deg]">客製化報價</span>
        </button>
      </div>
    </header>
  );
};


