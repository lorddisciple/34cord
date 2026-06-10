import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Sliders, Cpu, Activity, Layout, EyeOff, CheckCircle, Flame, Lock
} from 'lucide-react';

export default function Features() {
  const highlights = [
    {
      icon: Cpu,
      title: "Optimized Performance Engine",
      description: "0ms client-side rendering latency. Bypasses standard framework rendering clamps and reduces memory usage dynamically by pruning heavy inactive animations and background caches.",
      color: "text-white"
    },
    {
      icon: ShieldCheck,
      title: "100% Secure & Private",
      description: "Enjoy complete local security. No remote servers, behavioral tracking, or dynamic metric reporting scripts. All of your custom layouts run strictly in local storage.",
      color: "text-white"
    },
    {
      icon: Sliders,
      title: "Live CSS Injection & Styling",
      description: "Edit layouts on the fly. Easily customize user colors, server sizes, custom fonts, and transparency rules. Export settings with a single click.",
      color: "text-white"
    },
    {
      icon: EyeOff,
      title: "Enhanced Client Privacy Toggles",
      description: "Choose to suppress typing indicators, status read-receipts, or server badge flashing. Navigate your workspaces with completely safe, quiet focus.",
      color: "text-white"
    },
    {
      icon: Layout,
      title: "Flexible Native Platforms",
      description: "Optimized layouts for Windows, macOS, and Linux servers. Runs perfectly synced, delivering high-refresh rate animations on high-frequency gaming displays.",
      color: "text-white"
    },
    {
      icon: Flame,
      title: "Local Avatar Simulations",
      description: "Play around with high-definition custom backgrounds, premium badge simulations, custom status structures, and animated decorations rendered on your side.",
      color: "text-white"
    }
  ];

  return (
    <section id="features" className="w-full relative py-16 border-t border-white/5">
      
      {/* Decorative Subtle Dark Glow */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* User Request Main Quote & Title with Sophisticated Dark Pairings */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 bg-white/5 border border-white/15 rounded text-[10px] uppercase tracking-[0.2em] text-white/50">
            Elite Client Customization
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white mt-4 leading-tight">
            All the features you need to spend your time on Discord. <br />
            <span className="italic font-serif text-white/70">Zero lag.</span>
          </h2>
          <p className="text-xs text-white/40 mt-4 leading-relaxed max-w-2xl mx-auto">
            34cord replaces bloated electron processes with hardware-vetted C++ layout processors and live typescript CSS hooks. Experience true real-time desktop navigation with an uncompromising commitment to speed and data secrecy.
          </p>
        </motion.div>

        {/* Feature Grid with staggered items scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#0a0a0a] border border-white/5 hover:border-white/20 p-6 rounded-2xl transition-all duration-300 group hover:shadow-[0_4px_35px_rgba(255,255,255,0.02)]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 mb-5 group-hover:border-white/30 transition-colors">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                
                <h3 className="text-base font-space font-medium text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-white/50 mt-2.5 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Secure Badge check mark */}
                <div className="flex items-center gap-1.5 mt-5 text-[9px] font-mono text-white/30 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>VETTED CLIENT MODULE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Dashboard (Stock vs 34cord) with Scroll slide animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mt-16 bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-6">
            <div>
              <h3 className="text-lg font-space font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-white/80" />
                Benchmark performance comparisons
              </h3>
              <p className="text-xs text-white/40 mt-1">Benchmarked on AMD Ryzen 9 &amp; Apple M3 Pro workstations</p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] bg-white/5 text-white/50 px-2.5 py-1 rounded border border-white/10 font-mono">Stock client: 60FPS Cap</span>
              <span className="text-[10px] bg-white/15 text-white px-2.5 py-1 rounded border border-white/20 font-mono">34cord: 240FPS unlocked</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stock column */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 font-mono flex items-center gap-1.5">
                ✕ Stock Discord Client
              </h4>
              <div className="space-y-2">
                {[
                  "Enforces heavy background CPU diagnostic reporting processes",
                  "Restricts screen rendering animations to flat 60Hz intervals",
                  "Creates massive local cache paths and bulky logs",
                  "Locks custom theme customization blocks behind paywalls"
                ].map((text, i) => (
                  <div key={i} className="flex gap-2 text-xs text-white/30">
                    <span className="text-white/45 shrink-0 font-bold">✕</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 34cord col */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                ★ 34cord Customized Client
              </h4>
              <div className="space-y-2">
                {[
                  "Zero background analytical logging callbacks and diagnostics",
                  "Integrates high-efficiency requestAnimationFrame rendering offsets",
                  "Local CSS parser injects customized themes on the fly",
                  "Lightweight client process with minimal local cache footprint"
                ].map((text, i) => (
                  <div key={i} className="flex gap-2 text-xs text-white/80 font-medium">
                    <span className="text-white shrink-0 font-bold">✓</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
