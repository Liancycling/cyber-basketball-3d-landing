import React from 'react';
import { Flame, ShieldAlert, Cpu, Terminal } from 'lucide-react';

export const CyberCourtNav: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-black/60 border-b border-[#ccff00]/30 font-mono">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-9 h-9 bg-black border border-[#ccff00] p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.5)]">
          <Flame className="w-5 h-5 text-[#ccff00] group-hover:scale-110 transition-transform" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-base font-black tracking-widest uppercase text-white">
              CYBER DUNK <span className="text-[#ccff00]">2077</span>
            </span>
            <span className="px-1.5 py-0.5 bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 text-[9px] font-mono font-bold">
              ARENA_v2.0
            </span>
          </div>
          <span className="block text-[10px] text-zinc-400 tracking-tighter uppercase">
            NEXT-GEN KINETIC HOOP SUITE
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-zinc-300">
        <a href="#court" className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#ccff00]" /> 01. COURT ARENA
        </a>
        <a href="#gear" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-[#00f0ff]" /> 02. PRO SPEC GEAR
        </a>
        <a href="#quote" className="hover:text-[#ff0055] transition-colors flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#ff0055]" /> 03. INSTANT QUOTE
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <button className="px-5 py-2 text-xs font-black text-black uppercase tracking-wider rounded-none bg-[#ccff00] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.5)] cursor-pointer skew-x-[-10deg]">
          <span className="skew-x-[10deg]">PRE-ORDER GEAR</span>
        </button>
      </div>
    </header>
  );
};


