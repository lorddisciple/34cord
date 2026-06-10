import React, { useState } from 'react';
import { Download, Sparkles, Hash, Github, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onOpenDownload: () => void;
}

const navItems = [
  { label: 'Home', href: '#' }
];

export default function Header({ onOpenDownload }: HeaderProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Ident */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white font-sans text-black text-sm font-black shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            34
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-space font-medium tracking-tight text-white uppercase flex items-center gap-1.5">
              34cord
            </span>
            <span className="text-[9px] text-white/45 font-mono">by @fuckreverse</span>
          </div>
        </div>

        {/* Navigation Items Removed */}

        {/* CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Active stats badge removed */}

          <button
            onClick={onOpenDownload}
            className="px-5 py-2 border border-white/20 hover:border-white rounded-full text-[10px] font-bold uppercase tracking-widest bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-sm"
          >
            Get 34cord
          </button>
        </div>

      </div>
    </header>
  );
}
