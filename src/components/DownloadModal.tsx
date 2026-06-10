import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Download, Monitor
} from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadCount: number;
  onIncrementDownload: () => void;
}

export default function DownloadModal({ isOpen, onClose, downloadCount, onIncrementDownload }: DownloadModalProps) {
  const handleDownloadClick = () => {
    onIncrementDownload();
    
    // Create an invisible link to trigger the download
    const link = document.createElement('a');
    link.href = '/downloads/34cord-Installer.exe';
    link.download = '34cord-Installer.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-md bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 shadow-[0_0_50px_rgba(255,255,255,0.03)] overflow-hidden z-10"
          >
            {/* Ambient Silver glow in modal */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-zinc-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

            {/* Header section */}
            <div className="flex flex-col items-center text-center mb-6 relative">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3">
                <Download className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-space font-medium text-white tracking-wider uppercase">
                Install 34cord
              </h3>
              {/* Tagline removed */}
              <button 
                onClick={onClose}
                className="absolute top-0 right-0 p-1 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Manual builds list */}
            <div className="space-y-5">
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="p-6 rounded-xl bg-gradient-to-b from-zinc-900/50 to-zinc-950/90 border border-white/5 hover:border-white/15 duration-300 transition-all flex flex-col items-center text-center gap-5 group"
              >
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-white tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                      34cord-Installer.exe
                    </span>
                  </div>
                  <p className="text-[11px] text-white/40 font-mono tracking-wider">
                    Windows Desktop Release
                  </p>
                </div>

                {/* Aesthetic specs checklist removed */}
                
                {/* Download execution trigger */}
                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={handleDownloadClick}
                  className="w-full px-4 py-3 rounded-lg text-xs font-bold bg-white text-zinc-950 font-space hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(255,255,255,0.06)] cursor-pointer text-center"
                >
                  <Download className="w-4 h-4 text-zinc-950" />
                  Download Standalone Installer
                </motion.button>

                {/* Secure Counter of total verified downloads with stylish font and animations */}
                <div className="flex flex-col items-center gap-1 font-mono tracking-widest select-none text-[9px] text-white/40 mt-1">
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse shrink-0" />
                    <span className="uppercase font-medium text-white/40">VERIFIED DOWNLOADS:</span>
                    <motion.span 
                      key={downloadCount}
                      initial={{ scale: 0.85, opacity: 0.4, color: '#ffffff' }}
                      animate={{ scale: 1, opacity: 1, color: '#ffffff' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                      className="font-bold font-mono text-white"
                    >
                      {downloadCount.toLocaleString()}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
