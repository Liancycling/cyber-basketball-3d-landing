import React from 'react';
import { ArrowDown, Zap, Crosshair, Terminal } from 'lucide-react';

export const CyberHero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10">
      {/* Laser Scanning Bar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent shadow-[0_0_15px_#ccff00] animate-pulse"></div>

      {/* Top HUD Telemetry Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#ccff00]/40 bg-[#0b0f19]/80 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(204,255,0,0.15)] font-mono text-[11px] text-[#ccff00]">
        <Crosshair className="w-3.5 h-3.5 text-[#00f0ff] animate-spin" />
        <span className="tracking-widest uppercase">PRO-MAKER PROTOCOL // V2.077</span>
        <span className="text-[#00f0ff] ml-2">SYS_ONLINE</span>
      </div>

      {/* Heavy Cyberpunk Title */}
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white max-w-6xl leading-none uppercase font-mono">
        POWERING EVERY <br />
        <span className="bg-gradient-to-r from-[#ccff00] via-[#00f0ff] to-pink-500 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(204,255,0,0.35)]">
          CUSTOM PRODUCT
        </span>
      </h1>

      <p className="mt-6 text-sm md:text-lg text-zinc-300 max-w-2xl font-mono leading-relaxed">
        DA VILLAGE (DV) 旗下客製化實驗室 DALAB。傳承競技團隊運動文化，提供全昇華排汗球衣、3/4 藍圖工藝帽與周邊代工。
      </p>

      {/* HUD Telemetry Stats */}
      <div className="mt-8 flex items-center justify-center gap-6 md:gap-12 font-mono text-xs text-zinc-400">
        <div className="border-l-2 border-[#ccff00] pl-3 text-left">
          <div className="text-white font-bold text-base md:text-lg">50 PCS</div>
          <div className="text-[10px] text-[#ccff00]">MINIMUM ORDER</div>
        </div>
        <div className="border-l-2 border-[#00f0ff] pl-3 text-left">
          <div className="text-white font-bold text-base md:text-lg">14 DAYS</div>
          <div className="text-[10px] text-[#00f0ff]">RAPID DELIVERY</div>
        </div>
        <div className="border-l-2 border-pink-500 pl-3 text-left">
          <div className="text-white font-bold text-base md:text-lg">100% MIT</div>
          <div className="text-[10px] text-pink-400">PRO GRADE SPEC</div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono">
        <button className="flex items-center gap-2 px-8 py-4 bg-[#ccff00] text-black font-black text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(204,255,0,0.8)] transition-all duration-300 skew-x-[-12deg] cursor-pointer">
          <span className="flex items-center gap-2 skew-x-[12deg]">
            <Zap className="w-4 h-4 fill-current text-black" />
            啟動 3D 藍圖矩陣
          </span>
        </button>
        <button className="px-8 py-4 border border-[#00f0ff]/50 bg-[#0b0f19]/80 backdrop-blur-md text-[#00f0ff] font-bold text-sm uppercase tracking-wider hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all duration-300 skew-x-[-12deg] cursor-pointer">
          <span className="flex items-center gap-2 skew-x-[12deg]">
            <Terminal className="w-4 h-4" />
            材質工藝檔案庫
          </span>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 font-mono text-[10px] text-zinc-500 animate-bounce">
        <span className="tracking-widest uppercase text-[#ccff00]">SCROLL TO DEPLOY BLUEPRINTS</span>
        <ArrowDown className="w-4 h-4 text-[#ccff00]" />
      </div>
    </section>
  );
};


