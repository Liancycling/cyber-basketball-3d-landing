import React from 'react';
import { ArrowDown, Flame, Zap } from 'lucide-react';

export const BasketballHero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/40 bg-orange-950/30 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)] animate-pulse">
        <Flame className="w-3.5 h-3.5 text-orange-400" />
        <span className="text-xs uppercase tracking-widest text-orange-300 font-mono font-bold">
          GRAVITY-DEFYING BASKETBALL LABS
        </span>
      </div>

      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white max-w-5xl leading-none uppercase">
        DEFIANCE IN <br />
        <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-red-500 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(234,88,12,0.3)]">
          EVERY INCH
        </span>
      </h1>

      <p className="mt-6 text-base md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
        專為頂級賽場與街頭實戰打造的極限反重力科技。透過 3D 空間運鏡，探索革命性能量籃球與鈦合金籃框力學。
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-[0_0_35px_rgba(249,115,22,0.5)] cursor-pointer">
          <Zap className="w-4 h-4 fill-current" />
          體驗球場運鏡
        </button>
        <button className="px-8 py-4 border border-zinc-700 bg-zinc-900/60 backdrop-blur-md text-zinc-200 font-bold text-sm uppercase tracking-wider rounded-full hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer">
          裝備實驗室數據
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-mono text-orange-400/80">Scroll into the paint</span>
        <ArrowDown className="w-4 h-4 text-orange-400" />
      </div>
    </section>
  );
};


