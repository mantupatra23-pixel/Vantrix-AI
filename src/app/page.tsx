'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Shield, Activity, Network, Layers, Flame, RefreshCw, TerminalSquare } from 'lucide-react';

export default function Home() {
  const [terminalLog, setTerminalLog] = useState('SYS_INIT // SYSTEM PARAMETERS NOMINAL');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [sysMetrics, setSysMetrics] = useState({ cpu: '45.2%', net: '912 kb/s', mem: '3.4 GB', requests: '14,204' });

  // Core background loop for system metrics simulation
  useEffect(() => {
    const logs = [
      'CORE_NET: Synced to global node mesh network...',
      'SECURE_TUNNEL: Advanced encryption layer loaded (AES-256)...',
      'HYPER_CONCURRENCY: Dynamic microservice balancing running...',
      'AI_AGENT: Auto-generation matrices allocating GPU instances...',
      'NODE_METRIC: Pipeline operational latency < 8ms nominal.',
      'IMG_AUTO_LOADER: Streaming synchronized neural visual pipelines...'
    ];
    let index = 0;
    const interval = setInterval(() => {
      setTerminalLog(logs[index]);
      index = (index + 1) % logs.length;
      
      setSysMetrics({
        cpu: `${(Math.random() * 25 + 45).toFixed(1)}%`,
        net: `${Math.floor(Math.random() * 300 + 700)} kb/s`,
        mem: `${(Math.random() * 0.4 + 3.2).toFixed(1)} GB`,
        requests: Math.floor(Math.random() * 100 + 14204).toLocaleString()
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('SYS_PACKING: ENCRYPTING DATA STREAMS...');
    
    setTimeout(() => {
      setSubmitStatus('ROUTING PROTOCOL: BROADCASTING VIA GATEWAY...');
      setTimeout(() => {
        setSubmitStatus('SUCCESS: DEPLOYMENT METADATA REPLICATED!');
        window.location.href = "https://wa.me/919178065739?text=SYSTEM_TRIGGER%3A%20Vantrix%20AI%20Console%20Payload%20Submitted.%20Initialize%20Strategy%20Protocol.";
      }, 1000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-mono selection:bg-emerald-500 selection:text-slate-950 scroll-smooth relative overflow-hidden">
      
      {/* Cyber Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-40" />
      
      {/* Sci-Fi Ambient Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-20%] w-[55vw] h-[55vw] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Top Glassmorphic Navigation Menu */}
      <header className="border-b border-emerald-500/10 sticky top-0 bg-[#020617]/80 backdrop-blur-xl z-50 shadow-2xl shadow-black/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 rounded bg-slate-950 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400 animate-ping"></div>
            </div>
            <div className="text-xl font-black tracking-widest bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase">
              Vantrix_OS
            </div>
          </div>
          
          {/* Live Infrastructure System Status Bar */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] text-slate-500 border-l border-slate-900 pl-6">
            <div className="flex items-center gap-1"><Cpu className="w-3 h-3 text-emerald-500" /> CPU: <span className="text-slate-300">{sysMetrics.cpu}</span></div>
            <div>NET: <span className="text-cyan-400 font-bold">{sysMetrics.net}</span></div>
            <div>REQ/HR: <span className="text-emerald-400 font-bold">{sysMetrics.requests}</span></div>
          </div>

          <a 
            href="#consultation" 
            className="border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.05)]"
          >
            Launch_Agent_
          </a>
        </div>
      </header>

      {/* Active System Ticker Log Matrix Banner */}
      <div className="w-full bg-emerald-950/10 border-b border-emerald-500/5 py-3 px-6 z-10 relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-[10px] tracking-widest text-emerald-400/80 font-bold">
          <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-slate-600 uppercase font-black">STREAMS://</span>
          <span className="uppercase tracking-normal font-medium text-slate-300">{terminalLog}</span>
        </div>
      </div>

      {/* Hero Console Layout */}
      <section className="relative pt-28 pb-20 px-6 z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-bold tracking-widest text-slate-400 uppercase shadow-inner">
          <Activity className="w-3 h-3 text-emerald-400 animate-spin [animation-duration:5s]" /> 
          Matrix Environment Operational
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.05] uppercase">
          Autonomous AI & <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.15)] font-sans">
            Code Architectures
          </span>
        </h1>
        
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          We assemble industrial autonomous execution pipelines, deep multi-tenant infrastructure frameworks, and integrated cognitive backend nodes engineered for absolute compute scaling.
        </p>

        <div className="pt-4">
          <a 
            href="#consultation" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-emerald-500/20 text-slate-950 font-black bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.15)] transition-all duration-300 text-xs tracking-widest uppercase"
          >
            Initialize Setup Protocol <Layers className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </section>

      {/* FULL AUTOMATIC AI IMAGES & NODE OPERATIONAL LOGS COMPONENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">VISUAL_PIPELINES</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Active Core Clusters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Automatic Image Block 01 */}
          <div className="bg-slate-950/60 border border-slate-900 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300 group">
            <div className="relative h-64 w-full overflow-hidden border-b border-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              {/* Automated Unsplash High Tech Dynamic Query Source */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="AI Core Engine" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 filter hue-rotate-[45deg]"
              />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-bold bg-slate-950/90 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">RENDER://NODE_0842</span>
              </div>
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-xl font-bold tracking-wide text-slate-100 font-mono">AI Behavioral Predictive Layer</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Real-time synchronization platform collecting system activity parameters, displaying behavioral cluster topologies with sub-second stream analytics rendering.
              </p>
            </div>
          </div>

          {/* Automatic Image Block 02 */}
          <div className="bg-slate-950/60 border border-slate-900 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300 group">
            <div className="relative h-64 w-full overflow-hidden border-b border-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              {/* Automated Cyber Network Cloud Infrastructure Image */}
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Infrastructure Grid" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 filter hue-rotate-[110deg]"
              />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-bold bg-slate-950/90 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">CLUSTER://NODE_0911</span>
              </div>
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-xl font-bold tracking-wide text-slate-100 font-mono">Multi-Tenant CRM Grid Architecture</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Isolated workspace systems running micro-commission calculations, modular dynamic server instances allocations, and real-time ledger generation protocols.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* System Specialization Grid Modules */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12 z-10 relative border-t border-slate-900/40">
        <div className="text-center space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-500">PROCESSING_CAPABILITIES</div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">System Core Specializations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all duration-300">
            <Cpu className="w-7 h-7 text-emerald-400" />
            <h4 className="text-base font-bold uppercase text-slate-200">Custom Software</h4>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">High-throughput custom CRMs, intelligent data-driven ERP structures, rapid dashboard layouts, and ultra-secure backend matrices.</p>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all duration-300">
            <Network className="w-7 h-7 text-cyan-400" />
            <h4 className="text-base font-bold uppercase text-slate-200">AI Automation</h4>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">Self-correcting data pipelines, conversational autonomous agents, workflow triggers, and custom behavior processing stacks.</p>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all duration-300">
            <Layers className="w-7 h-7 text-emerald-400" />
            <h4 className="text-base font-bold uppercase text-slate-200">SaaS Engines</h4>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">Multi-tenant isolated container clusters, automated subscription webhooks, sub-second billing layers, and cloud infrastructure logic.</p>
          </div>
        </div>
      </section>

      {/* Cyber Blueprint Action Form */}
      <section id="consultation" className="py-24 px-6 max-w-xl mx-auto space-y-10 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">CONFIGURATION_INITIALIZER</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Initiate Blueprint</h2>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-6 bg-slate-950/80 border border-slate-900 p-8 rounded-2xl shadow-2xl shadow-black/50 focus-within:border-emerald-500/20 transition-all relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-md rounded-2xl z-20 flex flex-col items-center justify-center p-6 space-y-4 border border-emerald-500/20">
              <Flame className="w-8 h-8 text-emerald-400 animate-bounce" />
              <div className="text-xs font-bold text-emerald-400 tracking-widest text-center animate-pulse">{submitStatus}</div>
            </div>
          )}
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Operator Signature Name</label>
            <input type="text" placeholder="e.g. MANTU PATRA" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-900 transition-all placeholder:text-slate-700" required />
          </div>
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Secure Routing Link (Email)</label>
            <input type="email" placeholder="operator@domain.com" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-900 transition-all placeholder:text-slate-700" required />
          </div>
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Core Optimization Parameters</label>
            <textarea rows={4} placeholder="Describe exact automation flowcharts or application requirements needing allocation..." className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-900 transition-all placeholder:text-slate-700 resize-none font-sans" required></textarea>
          </div>
          <button type="submit" className="w-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-black py-4 rounded-xl transition-all duration-300 text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            Inject Requirements Protocol &rarr;
          </button>
        </form>
        
        {/* Terminal Infrastructure Footer */}
        <div className="pt-8 text-center space-y-3 border-t border-slate-900 text-[10px] text-slate-600 font-mono">
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-1.5"><Shield className="w-3 h-3 text-slate-600" /> INSTANCE_LOGS: SECURE</div>
            <div>SECTOR: INDIA // GLOBAL</div>
          </div>
          <div className="tracking-widest text-slate-700 text-[9px] uppercase pt-2">&copy; 2026 VANTRIX AI. OPERATIONAL TERMINAL REPLICA MATRIX.</div>
        </div>
      </section>

    </div>
  );
}
