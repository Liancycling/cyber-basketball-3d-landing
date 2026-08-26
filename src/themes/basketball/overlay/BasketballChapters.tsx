import React from 'react';
import { Target, Activity, Gauge, Flame, Sparkles, ShieldCheck } from 'lucide-react';

export const BasketballChapters: React.FC = () => {
  return (
    <div className="relative z-10 w-full">
      {/* Chapter 1: The Energy Ball Mechanics */}
      <section className="min-h-screen w-full flex items-center justify-start px-6 md:px-24 py-20">
        <div className="max-w-xl backdrop-blur-xl bg-black/60 border border-orange-500/30 p-8 md:p-10 rounded-3xl shadow-[0_0_60px_rgba(234,88,12,0.15)]">
          <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Target className="w-4 h-4" />
            <span>Phase 01 // Air-Grip Surface Matrix</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">
            微奈米防滑皮革 <br />
            <span className="text-orange-400">99.4% 乾濕抓握控制率</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 font-light">
            結合 3D 浮雕導汗槽與低風阻表面。即使在高強度運球與急停跳投中，也能給予指尖最極致的回饋手感。
          </p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-orange-950/60 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-orange-400" />
              <span>+18% 旋轉回正穩定</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-orange-950/60 flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              <span>零重力氣壓反彈</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Titanium Rim & Impact Absorption */}
      <section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-20">
        <div className="max-w-xl backdrop-blur-xl bg-black/60 border border-orange-500/30 p-8 md:p-10 rounded-3xl shadow-[0_0_60px_rgba(234,88,12,0.15)] text-right">
          <div className="flex items-center justify-end gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Phase 02 // Pro Glass & Titanium Hoop</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">
            高強度灌籃緩衝 <br />
            <span className="text-amber-400">可承受 350KG 瞬間衝擊</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 font-light">
            鏡頭穿梭至禁區籃框視角。航空級鋼化防爆玻璃籃板結合雙彈簧壓力回彈鉸鏈，重現專業職業聯賽的震撼扣籃體驗。
          </p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-orange-950/60 flex items-center justify-end gap-2">
              <span>雙彈簧避震回彈</span>
              <Flame className="w-4 h-4 text-orange-500" />
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-orange-950/60 flex items-center justify-end gap-2">
              <span>NBA級防爆高透玻璃</span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


