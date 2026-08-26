import React from 'react';
import { Cpu, ShieldAlert, FileCode2, SlidersHorizontal, Terminal, Activity } from 'lucide-react';
import img1Url from '../../assets/images/img1.webp';
import img2Url from '../../assets/images/img2.webp';
import img3Url from '../../assets/images/img3.webp';

export const CyberCourtChapters: React.FC = () => {
  return (
    <div id="gear" className="relative z-10 w-full font-mono">
      {/* Chapter 1: Cyber Dunk Pro Armor & Cap Matrix */}
      <section className="min-h-screen w-full flex items-center justify-start px-6 md:px-24 py-20">
        <div className="max-w-2xl backdrop-blur-2xl bg-[#060911]/90 border border-[#ccff00]/40 p-8 md:p-10 rounded-none shadow-[0_0_60px_rgba(204,255,0,0.15)] relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[#ccff00] text-black text-[10px] font-black uppercase">
            SPEC // GEAR_01
          </div>

          <div className="flex items-center gap-2 text-[#00f0ff] text-xs uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4 text-[#ccff00]" />
            <span>LAYER 01 // KINETIC PRO APPAREL MATRIX</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">
            次世代戰術球衣 <br />
            <span className="text-[#ccff00]">四向彈力 × 賽博抗阻結構</span>
          </h2>

          <p className="text-zinc-300 leading-relaxed text-sm mb-6 font-sans font-light">
            專為高對抗性街頭聯賽與職業賽事打造。採用極輕量散熱網眼與義大利無毒熱昇華直噴墨水，維持 100% 透氣度與最高色域飽和。
          </p>

          {/* Product Real Image + Cyber Hologram Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="relative group overflow-hidden border border-[#ccff00]/40 bg-black/60 aspect-[4/3]">
              <img
                src={img1Url}
                alt="Cyber Team Apparel"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#ccff00] bg-black/80 px-2 py-0.5 border border-[#ccff00]/30">
                PRO-FIT GEAR // 3D MATRIX
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#00f0ff]/40 bg-black/60 aspect-[4/3]">
              <img
                src={img2Url}
                alt="Cyber Matrix Cap"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#00f0ff] bg-black/80 px-2 py-0.5 border border-[#00f0ff]/30">
                3/4 TECH CAP // LASER SCAN
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
            <div className="p-3 bg-black/60 border border-zinc-800 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#ccff00]" />
              <span>全昇華色牢度 99.4%</span>
            </div>
            <div className="p-3 bg-black/60 border border-zinc-800 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-[#00f0ff]" />
              <span>向量藍圖直出剪裁</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Court Arena Rim & Team Custom Package */}
      <section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-20">
        <div className="max-w-2xl backdrop-blur-2xl bg-[#060911]/90 border border-[#00f0ff]/40 p-8 md:p-10 rounded-none shadow-[0_0_60px_rgba(0,240,255,0.15)] text-right relative">
          <div className="absolute top-0 left-0 px-3 py-1 bg-[#00f0ff] text-black text-[10px] font-black uppercase">
            SPEC // COURT_02
          </div>

          <div className="flex items-center justify-end gap-2 text-[#ccff00] text-xs uppercase tracking-widest mb-3">
            <Terminal className="w-4 h-4 text-[#00f0ff]" />
            <span>LAYER 02 // 2077 ARENA CUSTOM LAB</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight uppercase">
            鈦合金籃圈與聯賽周邊 <br />
            <span className="text-[#00f0ff]">50 件起訂 × 14 天交付</span>
          </h2>

          <p className="text-zinc-300 leading-relaxed text-sm mb-6 font-sans font-light">
            從球隊熱身服、應援毛巾到戰術背包。提供專屬 3D 渲染圖預覽與台灣專業工廠直營代工。
          </p>

          {/* Product Real Image + Jersey Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="relative group overflow-hidden border border-[#00f0ff]/40 bg-black/60 aspect-[4/3] text-left">
              <img
                src={img3Url}
                alt="Cyber Team Jersey"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#00f0ff] bg-black/80 px-2 py-0.5 border border-[#00f0ff]/30">
                PRO JERSEY // TITANIUM LEVEL
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


