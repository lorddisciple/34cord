import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Terminal, Cpu, Globe, UserCheck, MessageSquare, Anchor } from 'lucide-react';

export default function CreatorCard() {
  return (
    <div id="creator" className="w-full relative py-12">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-at-c from-white/[0.01] via-transparent to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="inline-block px-3 py-1 mb-3 bg-white/5 border border-white/15 rounded text-[10px] uppercase tracking-[0.2em] text-white/50">
          Core Engineering Team
        </span>
        <h2 className="text-2xl font-space font-medium text-white tracking-tight mt-1">
          Developed &amp; Maintained by 34
        </h2>
        <p className="text-xs text-white/40 mt-2 font-sans">
          An elite open-source developer striving to bring absolute custom themes, high rates, and ultimate local privacy controls to your everyday communication suite.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        className="max-w-xl mx-auto"
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.01)]"
        >
          {/* Accent lighting strip */}
          <div className="absolute top-0 inset-x-0 h-1 bg-white/15" />
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Visual Profile Avatar */}
            <div className="relative group shrink-0 mx-auto md:mx-0">
              <img 
                src="https://cdn.discordapp.com/avatars/308659291957493761/c71e78fbf64dc040f69779f9c8076fbe.webp?size=80"
                alt="34"
                className="w-20 h-20 rounded-2xl object-cover shadow-[0_0_20px_rgba(255,255,255,0.05)] font-mono text-[10px] text-zinc-500 text-center flex items-center justify-center border border-white/10"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 bg-white rounded-full border-2 border-black items-center justify-center text-[8px] font-bold text-black shadow-md">
                ✓
              </span>
            </div>

            {/* Profile Info fields */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div>
                  <h3 className="text-lg font-space font-bold text-white leading-normal flex items-center gap-1.5 justify-center md:justify-start">
                    34
                    <span className="text-[10px] bg-white/5 text-white/80 font-mono font-medium border border-white/10 px-2 py-0.5 rounded">Creator</span>
                  </h3>
                  <p className="text-xs text-white/50 font-mono tracking-tight mt-0.5 flex items-center gap-1 justification-center md:justify-start">
                    @fuckreverse
                  </p>
                </div>

                <div className="flex justify-center gap-1.5 font-mono">
                  <span className="text-[9px] bg-white/5 text-white/60 border border-white/10 px-2.5 py-0.5 rounded-full font-semibold">
                    v1.4.2-stable
                  </span>
                  <span className="text-[9px] bg-white/5 text-white/60 border border-white/10 px-2.5 py-0.5 rounded-full font-semibold">
                    Full Safe
                  </span>
                </div>
              </div>

              {/* Bio and Statement */}
              <div className="my-4 text-xs text-white/50 leading-relaxed text-center md:text-left font-sans">
                "We built 34cord out of frustration with resource bloat and locked ecosystem features. All user components are served locally with custom theme injection layers to respect your system resources (CPU and RAM) and visual aesthetics. We also integrate a rich package of highly useful plugins packed with powerful native design functionalities."
              </div>

              {/* Engineering Specs row */}
              <div className="grid grid-cols-3 gap-2 text-center md:text-left font-mono text-[9px] pt-1">
                <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                  <span className="text-white/30 block text-[8px]">LANGUAGES</span>
                  <span className="text-white/80 font-bold block mt-0.5 whitespace-pre-line leading-snug">TypeScript, JavaScript, CSS, HTML</span>
                </div>
                <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                  <span className="text-white/30 block text-[8px]">PLATFORMS</span>
                  <span className="text-white/80 font-bold block mt-0.5">Win</span>
                </div>
                <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                  <span className="text-white/30 block text-[8px]">DEVELOPMENT</span>
                  <span className="text-white font-bold block mt-0.5">Fully Active</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
