import React from 'react';
import { Sliders, Camera, Eye, Zap, Layers, Sparkles } from 'lucide-react';

export const StoryChapters: React.FC = () => {
  return (
    <div className="relative z-10 w-full">
      {/* Chapter 1: The Camera Director */}
      <section className="min-h-screen w-full flex items-center justify-start px-6 md:px-24 py-20">
        <div className="max-w-xl backdrop-blur-xl bg-black/50 border border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Camera className="w-4 h-4" />
            <span>Chapter 01 // Camera Orchestration</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            鏡頭運鏡軌跡 <br />
            <span className="text-cyan-400">連續空間的敘事美學</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 font-light">
            打破傳統網頁「卡片切片」的呆板感。將整個 Landing Page 塑造成由滾動驅動的 3D 運鏡系統，推軌（Dolly）、環繞（Orbit）、俯仰（Tilt）精準呈現。
          </p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Spline Dolly Zoom</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>Adaptive Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Lighting & Atmosphere */}
      <section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-20">
        <div className="max-w-xl backdrop-blur-xl bg-black/50 border border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] text-right">
          <div className="flex items-center justify-end gap-2 text-pink-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Chapter 02 // Post-Processing & Light</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            電影級光影調度 <br />
            <span className="text-pink-400">Bloom & Film Grain 質感</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 font-light">
            頂級 3D 體驗不在於「萬物皆立體」，而在於精確的光影對比（Chiaroscuro）、膠片顆粒與微弱色散（Chromatic Aberration），喚醒觀眾在電影院的視覺記憶。
          </p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-end gap-2">
              <span>Volumetric Glow</span>
              <Zap className="w-3.5 h-3.5 text-pink-400" />
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-end gap-2">
              <span>Cinematic Vignette</span>
              <Layers className="w-3.5 h-3.5 text-purple-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


