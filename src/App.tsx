import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Download, ArrowRight, ShieldCheck, Sparkles, Cpu, Code, MessageSquare, Zap, Layers
} from 'lucide-react';
import Header from './components/Header';
import Features from './components/Features';
import PrivacyCustomization from './components/PrivacyCustomization';
import CreatorCard from './components/CreatorCard';
import DownloadModal from './components/DownloadModal';
import Footer from './components/Footer';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);

  const [downloadCount, setDownloadCount] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('34cord_download_clicks_total_v2');
      if (stored) {
        const value = parseInt(stored, 10);
        if (!isNaN(value)) return value;
      }
    } catch (e) {}
    return 0; // Starts at exactly 0 as requested
  });

  const handleDownloadClick = () => {
    const nextCount = downloadCount + 1;
    setDownloadCount(nextCount);
    try {
      localStorage.setItem('34cord_download_clicks_total_v2', nextCount.toString());
    } catch (e) {}
    setDownloadModalOpen(true);
  };

  // Scroll to extreme top when the client is initialized
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll helper
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#e0e0e0] font-sans antialiased overflow-x-hidden selection:bg-white/20 selection:text-white">
      
      {/* Dynamic Background Premium Subtle Soft Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-[-25%] left-[5%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px]" />
        <div className="absolute top-[-15%] right-[10%] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Header element */}
      <Header onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            
            {/* Creator badge mention */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-[0.2em] text-white/50"
            >
              Created by <span className="text-white font-semibold">@fuckreverse</span>
            </motion.div>

            {/* Hero Main Heading with Serif pairings */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light leading-[1.1] text-white tracking-tight"
            >
              All the features you need to <br className="hidden md:inline" />
              <span className="italic font-serif text-white/80">elevate</span> your time on Discord.
            </motion.h1>

            {/* Hero Subtitle requested by user explicitly */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-sans"
            >
              Experience the next generation of communication. 34cord is a precision-engineered custom client designed for performance, ultimate personalization, and uncompromised security.
            </motion.p>

            {/* CTA action cluster */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-6 pt-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <div className="w-full sm:w-auto flex flex-col items-center">
                  <button
                    onClick={handleDownloadClick}
                    className="w-full sm:w-auto bg-white text-black px-10 py-4.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d1d1d1] transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.985] text-center"
                  >
                    Download Client
                  </button>
                  
                  {/* Real-time reactive elegant counter right below DOWNLOAD CLIENT */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-3 flex items-center justify-center gap-2 font-mono text-[10px] text-white/40 tracking-wider select-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse shrink-0" />
                    <span className="uppercase font-medium tracking-widest">DOWNLOADS:</span>
                    <motion.span 
                      key={downloadCount}
                      initial={{ scale: 0.85, opacity: 0.4 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                      className="font-bold text-white text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                    >
                      {downloadCount.toLocaleString()}
                    </motion.span>
                  </motion.div>
                </div>

                <a
                  href="#features"
                  onClick={scrollToFeatures}
                  className="w-full sm:w-auto px-10 py-4.5 border border-white/20 hover:border-white rounded-full text-xs font-bold uppercase tracking-widest bg-transparent text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer self-start sm:self-center"
                >
                  Explore Features
                  <ArrowRight className="w-3.5 h-3.5 text-white/60" />
                </a>
              </div>
            </motion.div>

          </div>
        </section>

        {/* FEATURES GRID & TELEMETRY BENCHMARK COMPARISON */}
        <Features />

        {/* DATA CONFIDENTIALITY & PERSONALIZATION PROTOCOL */}
        <PrivacyCustomization />

        {/* CORE ENG TEAM & @FUCKREVERSE CARD SHOWCASE */}
        <CreatorCard />

      </main>

      {/* FOOTER SITE SECTION */}
      <Footer />

      {/* DOWNLOAD MANAGER POPUP MODAL */}
      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
        downloadCount={downloadCount}
        onIncrementDownload={() => {
          const next = downloadCount + 1;
          setDownloadCount(next);
          try {
            localStorage.setItem('34cord_download_clicks_total_v2', next.toString());
          } catch (e) {}
        }}
      />

    </div>
  );
}
