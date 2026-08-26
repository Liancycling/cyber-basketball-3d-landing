import React from 'react';
import { Cpu, ShieldAlert, FileCode2, SlidersHorizontal, Terminal, Activity } from 'lucide-react';
import img1Url from '../../../assets/images/img1.webp';
import img2Url from '../../../assets/images/img2.webp';
import img3Url from '../../../assets/images/img3.webp';

export const CyberChapters: React.FC = () => {

  return (
    <div className="relative z-10 w-full font-mono">
      {/* Chapter 1: 3/4 Perspective Cap & Apparel Blueprint */}
      <section className="min-h-screen w-full flex items-center justify-start px-6 md:px-24 py-20">
        <div className="max-w-2xl backdrop-blur-2xl bg-[#0b0f19]/85 border border-[#ccff00]/40 p-8 md:p-10 rounded-none shadow-[0_0_50px_rgba(204,255,0,0.15)] relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[#ccff00] text-black text-[10px] font-black uppercase">
            SPEC // CAP_01
          </div>

          <div className="flex items-center gap-2 text-[#00f0ff] text-xs uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4 text-[#ccff00]" />
            <span>LAYER 01 // 3/4 CAP BLUEPRINT MATRIX</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">
            3/4 透視藍圖工藝 <br />
            <span className="text-[#ccff00]">8+1 向量動態繪製系統</span>
          </h2>

          <p className="text-zinc-300 leading-relaxed text-sm mb-6 font-sans font-light">
            遵循 DALAB 工程級藍圖規範：以 `#ccff00` 螢光黃勾勒帽體弧線，`#00f0ff` 青色呈現互動十字準心（Crosshair）與即時座標鎖定。
          </p>

          {/* Product Real Image + Blueprint Overlay Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="relative group overflow-hidden border border-[#ccff00]/40 bg-black/60 aspect-[4/3]">
              <img
                src={img1Url}
                alt="DALAB Pro Cap"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#ccff00] bg-black/80 px-2 py-0.5 border border-[#ccff00]/30">
                PRO-FIT SNAPBACK // 3/4 SPEC
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#00f0ff]/40 bg-black/60 aspect-[4/3]">
              <img
                src={img2Url}
                alt="Cyber Matrix Apparel"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#00f0ff] bg-black/80 px-2 py-0.5 border border-[#00f0ff]/30">
                CYBER HUD MATRIX // LAB_VER
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
            <div className="p-3 bg-black/60 border border-zinc-800 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#ccff00]" />
              <span>全昇華熱轉印色準</span>
            </div>
            <div className="p-3 bg-black/60 border border-zinc-800 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-[#00f0ff]" />
              <span>SVG 向量解析輸出</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: High Performance Fabric & Sublimation Jersey */}
      <section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-20">
        <div className="max-w-2xl backdrop-blur-2xl bg-[#0b0f19]/85 border border-[#00f0ff]/40 p-8 md:p-10 rounded-none shadow-[0_0_50px_rgba(0,240,255,0.15)] text-right relative">
          <div className="absolute top-0 left-0 px-3 py-1 bg-[#00f0ff] text-black text-[10px] font-black uppercase">
            SPEC // FABRIC_02
          </div>

          <div className="flex items-center justify-end gap-2 text-[#ccff00] text-xs uppercase tracking-widest mb-3">
            <Terminal className="w-4 h-4 text-[#00f0ff]" />
            <span>LAYER 02 // PRO SUBLIMATION LAB</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">
            競技排汗機能球衣 <br />
            <span className="text-[#00f0ff]">抗拉扯 × 高速散熱</span>
          </h2>

          <p className="text-zinc-300 leading-relaxed text-sm mb-6 font-sans font-light">
            專為高強度賽事與聯賽設計。義大利無毒墨水直噴技術，色彩飽和不褪色，滿足 50 件起訂、14 天極速交期之代工承諾。
          </p>

          {/* Product Real Image + Jersey Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="relative group overflow-hidden border border-[#00f0ff]/40 bg-black/60 aspect-[4/3] text-left">
              <img
                src={img3Url}
                alt="Sublimation Jersey"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#00f0ff] bg-black/80 px-2 py-0.5 border border-[#00f0ff]/30">
                PRO JERSEY // ITALY INK
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#ccff00]/40 bg-black/60 aspect-[4/3] text-left">
              <img
                src={img1Url}
                alt="Sportswear Craft"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#ccff00] bg-black/80 px-2 py-0.5 border border-[#ccff00]/30">
                TEAM TOWEL & CANVAS // MIT
              </div>
            </div>
          </div>



          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300 text-left">
            <div className="p-3 bg-black/60 border border-zinc-800 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#00f0ff]" />
              <span>義大利昇華環保墨</span>
            </div>
            <div className="p-3 bg-black/60 border border-zinc-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#ccff00]" />
              <span>四面彈力排汗網眼</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};


