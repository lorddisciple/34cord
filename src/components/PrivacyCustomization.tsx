import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, Lock, Sliders, Check, Copy, HelpCircle, HardDrive, Terminal, FileJson, Key, Eye
} from 'lucide-react';

export default function PrivacyCustomization() {
  const [activeTab, setActiveTab] = useState<'policy' | 'customization'>('policy');
  const [copiedConfig, setCopiedConfig] = useState<boolean>(false);

  const sampleConfig = `{
  "clientName": "34cord",
  "theme": "monochrome",
  "skipAnalytics": true,
  "developerMode": true,
  "bypassUncappedHz": true,
  "discordTokenObfuscation": "local_aes256",
  "dnsCustomProxy": "none"
}`;

  const copyConfig = () => {
    navigator.clipboard.writeText(sampleConfig);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <section id="privacy" className="w-full relative py-16 border-t border-white/5 bg-[#050505]">
      
      {/* Visual background accents */}
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle navigation bar for policy parameters - Sophisticated Dark style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('policy')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'policy' 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Privacy Assurance
            </button>
            <button
              onClick={() => setActiveTab('customization')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'customization' 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Creative Freedom
            </button>
          </div>
        </motion.div>

        {/* Tab content area with scroll transitions */}
        {activeTab === 'policy' ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto animate-fade-in"
          >
            {/* Context information */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white/50 justify-center">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono tracking-[0.2em] font-bold uppercase">SECURITY BLUEPRINT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-sans font-light text-white tracking-tight leading-tight text-center">
                Your credentials and settings are fully local. <span className="italic font-serif text-white/80">Period.</span>
              </h2>
              
              <p className="text-xs text-white/50 leading-relaxed font-sans text-center">
                Most custom Discord clients rely on remote databases or active web servers to store configs, settings, and user associations. 34cord is engineered on a fully local paradigm. No external requests are issued to save or read your client customizer templates, keeping your client environment clean and secure.
              </p>

              {/* Security indicators list */}
              <div className="space-y-4 pt-2">
                {[
                  { title: "Local Cache Storage Strategy", desc: "No remote server database caching. All user selections and theme parameters are stored directly on your local storage area." },
                  { title: "Clean Sandbox Execution", desc: "Safely customize user styles. Your layouts and configurations are parsed safely in a client-side environment without external program execution privileges." },
                  { title: "Offline Custom Settings", desc: "Active settings reside in local memory state only. Safe, quiet, and completely decoupled from remote logging loops or dynamic behavioral servers." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 hover:bg-white/[0.02] p-3 rounded-xl transition-colors border border-transparent hover:border-white/5">
                    <div className="w-6 h-6 rounded-full bg-white/5 text-white/80 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold border border-white/10">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white font-sans">{item.title}</h4>
                      <p className="text-[11px] text-white/40 mt-1 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in"
          >
            {/* Customiser specifics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-white/50">
                <Sliders className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono tracking-[0.2em] font-bold uppercase">CREATIVE FREEDOM</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-sans font-light text-white tracking-tight leading-tight">
                No themes locked. Pure client-side <span className="italic font-serif text-white/80">override styles.</span>
              </h2>
              
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                Forget monthly tiers or official client customization locks. With 34cord, you have direct local access to the renderer node. Override standard colors, inject layout layouts, hook font sizes, and load custom sound boards with ease. 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <h4 className="text-xs font-semibold text-white font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Unlimited Custom CSS
                  </h4>
                  <p className="text-[11px] text-white/40 mt-2 leading-relaxed font-sans">
                    Instantly load stylesheets without process restarts. Tweak user-mentions, server-rails, and hover gradients smoothly.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <h4 className="text-xs font-semibold text-white font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Theme Importer
                  </h4>
                  <p className="text-[11px] text-white/40 mt-2 leading-relaxed font-sans">
                    Directly load standard client theme configuration files (`.json` format) or browse through communities with zero frictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Theme code generator mock */}
            <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl relative">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-white/65" />
                  <span className="text-[10px] font-mono text-white/50">34cord-config.json</span>
                </div>
                <button
                  onClick={copyConfig}
                  className="text-[9px] hover:text-white hover:bg-white/10 text-white/60 flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 cursor-pointer transition-colors"
                >
                  {copiedConfig ? <Check className="w-2.5 h-2.5 text-white" /> : <Copy className="w-2.5 h-2.5" />}
                  Copy Config
                </button>
              </div>

              <pre className="text-[10px] font-mono text-white/80 overflow-x-auto bg-[#030303] p-4 rounded-xl border border-white/5 leading-relaxed select-all">
                {sampleConfig}
              </pre>

              <p className="text-[9.5px] text-zinc-500 italic mt-3 text-center">
                This schema can be loaded locally under Settings &gt; Developer Options &gt; Configuration import.
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
