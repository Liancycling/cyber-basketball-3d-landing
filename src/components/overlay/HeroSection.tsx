import React from 'react';
import { ArrowDown, Play, Clapperboard } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm mb-6 animate-pulse">
        <Clapperboard className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-xs uppercase tracking-widest text-purple-300 font-mono">
          Interactive AI Cinema Engine
        </span>
      </div>

      <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white max-w-5xl leading-tight">
        DIRECTOR DECISIONS <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          BEYOND PROMPTS
        </span>
      </h1>

      <p className="mt-6 text-base md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
        將電影導演決策、構圖、光影與鏡頭語法結構化。不只是生成畫面，而是打造具備生命力的互動電影宇宙。
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer">
          <Play className="w-4 h-4 fill-current" />
          體驗互動視界
        </button>
        <button className="px-8 py-4 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm text-zinc-300 font-semibold text-sm rounded-full hover:bg-zinc-800/60 hover:text-white transition-all duration-300 cursor-pointer">
          探索 Project DNA
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll to Explore</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};


