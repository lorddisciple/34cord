import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
          
          {/* Logo & description */}
          <div className="flex flex-col max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black text-[10px] font-black font-sans">
                34
              </div>
              <span className="text-sm font-space font-medium text-white tracking-widest">
                34CORD
              </span>
            </div>
            <p className="text-[11px] text-white/40 mt-2.5 leading-relaxed font-sans">
              Elegant Discord customization client with absolute visual customization and performance layout controls. Created by 34 (@fuckreverse).
            </p>
          </div>

        </div>

        {/* Legal Disclaimer & copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 text-[10px] text-white/30 font-sans">
          <div>
            <span>© 2026 34cord Custom Client Project. Designed under license by 34. All rights reserved.</span>
            <p className="mt-1 max-w-2xl leading-normal text-white/20">
              Disclaimer: 34cord is a third-party custom client extension created for custom styling, performance improvements, and local diagnostics. This tool is not affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. or any of its affiliates. Use in accordance with safety policies and personal discretion.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="font-mono text-[9px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded text-white/50">
              BUILD: V1.4.2_STABLE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
