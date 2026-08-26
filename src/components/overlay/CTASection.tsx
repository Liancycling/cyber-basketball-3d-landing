import React from 'react';
import { ArrowRight, Film, Code2, Sparkles } from 'lucide-react';


export const CTASection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10 py-24">
      <div className="max-w-3xl backdrop-blur-2xl bg-black/60 border border-purple-500/30 p-10 md:p-16 rounded-[2.5rem] shadow-[0_0_80px_rgba(168,85,247,0.2)]">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-cyan-400 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center">
            <Film className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          BUILD YOUR NEXT <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            CINEMATIC EXPERIENCE
          </span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8 font-light">
          加入早期預覽計畫，讓 AI 導演與 Three.js 空間敘事為您的產品注入全新靈魂。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="請輸入您的 Email..."
            className="w-full px-5 py-3.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] whitespace-nowrap cursor-pointer">
            <span>立即預約</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <span>© 2026 FILM DNA. CRAFTED WITH THREE.JS & GSAP</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> WebGL 2.0
            </span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Code2 className="w-4 h-4" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};


