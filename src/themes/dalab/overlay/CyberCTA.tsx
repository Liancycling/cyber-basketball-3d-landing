import React from 'react';
import { ArrowRight, Terminal, Zap, ShieldCheck } from 'lucide-react';

export const CyberCTA: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10 py-24 font-mono">
      <div className="max-w-3xl backdrop-blur-2xl bg-[#0b0f19]/90 border border-[#ccff00]/50 p-10 md:p-16 rounded-none shadow-[0_0_80px_rgba(204,255,0,0.2)] relative">
        <div className="absolute -top-3 left-6 px-3 py-1 bg-[#ccff00] text-black text-xs font-black uppercase">
          INIT_QUOTE_ENGINE // DALAB
        </div>

        <div className="w-16 h-16 mx-auto mb-6 border border-[#ccff00] bg-black p-2 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)]">
          <Terminal className="w-8 h-8 text-[#ccff00]" />
        </div>

        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 uppercase">
          START YOUR <br />
          <span className="bg-gradient-to-r from-[#ccff00] via-[#00f0ff] to-pink-500 bg-clip-text text-transparent">
            PRO-MAKER BATCH
          </span>
        </h2>

        <p className="text-zinc-300 text-sm md:text-base max-w-lg mx-auto mb-8 font-sans font-light">
          輸入您的需求與 Email，DALAB 團隊將於 24 小時內為您輸出 3D 藍圖模擬圖與專屬量產報價單。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="ENTER PROTOCOL EMAIL..."
            className="w-full px-5 py-3.5 bg-black/90 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-none"
          />
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#ccff00] hover:bg-white text-black font-black text-sm rounded-none flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.6)] whitespace-nowrap cursor-pointer skew-x-[-10deg]">
            <span className="skew-x-[10deg] flex items-center gap-1.5">
              <span>立即諮詢</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <span>© 2026 DA VILLAGE / DALAB PRO-MAKER. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#ccff00]">
              <Zap className="w-3.5 h-3.5" /> 14-DAY DISPATCH
            </span>
            <span className="flex items-center gap-1 text-[#00f0ff]">
              <ShieldCheck className="w-3.5 h-3.5" /> 50 PCS MOQ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


