'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [terminalLog, setTerminalLog] = useState('INITIALIZING NEURAL NETWORK...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Simulator for real-time AI node activities
  useEffect(() => {
    const logs = [
      'SYS_CORE: Synchronizing Neural Pipeline v0.91...',
      'MODEL_LOG: Allocating compute instances to global nodes...',
      'SECURE_ROUTE: CNAME mapping active on secure layer...',
      'PIPELINE: Sub-second latency parameters verified.',
      'AI_AGENT: Scanning client intent patterns... Ready.',
      'VANTRIX_CORE: Systems nominal. Port 3000 online.'
    ];
    let index = 0;
    const interval = setInterval(() => {
      setTerminalLog(logs[index]);
      index = (index + 1) % logs.length;
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('ENCRYPTING PAYLOAD...');
    
    setTimeout(() => {
      setSubmitStatus('ROUTING LEAD VIA SECURE API...');
      setTimeout(() => {
        setSubmitStatus('SUCCESS: OPERATIONAL LOG DEPLOYED!');
        // Redirecting directly to WhatsApp with automation trigger
        window.location.href = "https://wa.me/919178065739?text=Hi%20Vantrix%20AI,%20I%20just%20submitted%20my%20operational%20requirements%20on%20the%20console.%20Let's%20blueprint.";
      }, 1200);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 scroll-smooth relative overflow-hidden">
      
      {/* Dynamic Ambient AI Nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[10%] w-[45vw] h-[45vw] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Glassmorphic Navbar */}
      <header className="border-b border-emerald-500/10 sticky top-0 bg-slate-950/70 backdrop-blur-xl z-50 shadow-xl shadow-emerald-950/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-slate-950 border border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
            </div>
            <div className="text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              VANTRIX AI
            </div>
          </div>
          <a 
            href="#consultation" 
            className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-bold text-slate-950 transition duration-300 ease-out rounded-xl shadow-xl group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-emerald-300 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-sm font-black tracking-wide">Launch Agent</span>
          </a>
        </div>
      </header>

      {/* AI Terminal Status Ticker */}
      <div className="w-full bg-emerald-950/20 border-b border-emerald-500/10 py-2.5 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto flex items-center gap-3 text-[11px] font-mono tracking-widest text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
          <span className="text-slate-500 uppercase">LIVE_MONITOR:</span>
          <span className="animate-fade-in transition-all uppercase">{terminalLog}</span>
        </div>
      </div>

      {/* Cyber Hero Console */}
      <section className="relative pt-24 pb-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Production Pipeline Operational
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] font-mono">
            Autonomous AI & <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.25)]">
              {'> Code Architectures_'}
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We engineer complex multi-tenant SaaS environments, custom algorithmic workflows, and cognitive database engines to scale enterprise velocity.
          </p>
          <div className="pt-6">
            <a 
              href="#consultation" 
              className="px-8 py-4 rounded-xl border border-emerald-500/30 text-emerald-400 font-bold bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.05)] transition-all duration-300 text-base tracking-wide"
            >
              Initialize System Architecture &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Node Grid */}
      <section className="border-y border-slate-900 bg-slate-900/10 backdrop-blur-sm py-14 px-6 z-10 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono">
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">50+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Deployments Executed</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-black text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">30+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Active Data Clusters</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">5+ Yrs</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Full-Stack R&D</div>
          </div>
        </div>
      </section>

      {/* Cyber Systems Grid */}
      <section className="py-28 px-6 max-w-6xl mx-auto space-y-16 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight font-mono">System Core Specializations</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">Custom computational structures engineered for zero performance lag.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg group-hover:bg-emerald-500/20 transition-all">01</div>
            <div className="text-xl font-bold tracking-wide text-slate-100">Custom Software</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise custom CRMs, intelligent data-driven ERP structures, rapid administration visualization panels, and robust asynchronous backend frameworks.
            </p>
          </div>

          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-teal-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-center text-teal-400 font-mono font-bold text-lg group-hover:bg-teal-500/20 transition-all">02</div>
            <div className="text-xl font-bold tracking-wide text-slate-100">AI Automation</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Autonomous cognitive loop setups, predictive script layers, intelligent routing mechanics, and behavioral automation systems built for business optimization.
            </p>
          </div>

          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg group-hover:bg-emerald-500/20 transition-all">03</div>
            <div className="text-xl font-bold tracking-wide text-slate-100">SaaS Engines</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cloud-native server architectures, specialized micro-commission billing algorithms, distributed databases, and completely secure scaling ecosystems.
            </p>
          </div>

        </div>
      </section>

      {/* Node Deployments Portfolio */}
      <section className="py-28 px-6 max-w-6xl mx-auto space-y-16 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight font-mono">Active Node Invocations</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">Production logs of complex web architectures handling live data transactions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 p-8 space-y-4">
            <div className="flex items-center justify-between font-mono">
              <span className="text-[10px] font-black tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 uppercase shadow-[0_0_10px_rgba(52,211,153,0.1)]">Active Core</span>
              <span className="text-xs text-slate-600">NODE://0842</span>
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-slate-100 pt-1 font-mono">AI Behavioral Dashboard</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Synchronous structural telemetry panels parsing user flow patterns, multi-level event logs, and active analytical pipelines with sub-second data streaming.
            </p>
          </div>
          
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 p-8 space-y-4">
            <div className="flex items-center justify-between font-mono">
              <span className="text-[10px] font-black tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-md border border-teal-500/20 uppercase shadow-[0_0_10px_rgba(45,212,191,0.1)]">Active Matrix</span>
              <span className="text-xs text-slate-600">NODE://0911</span>
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-slate-100 pt-1 font-mono">Multi-Tenant CRM Gateway</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-concurrency infrastructure engineered for micro-commissions monitoring, dynamic host slot routing, server less resource management, and instant billing engines.
            </p>
          </div>

        </div>
      </section>

      {/* Interactive Operational Lead Form */}
      <section id="consultation" className="py-28 px-6 max-w-xl mx-auto space-y-10 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight font-mono">Initiate Blueprint Protocol</h2>
          <p className="text-slate-400 text-sm md:text-base">Submit system parameters below. The node will handle data formatting instantly.</p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-6 bg-slate-900/10 backdrop-blur-md p-8 rounded-2xl border border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] focus-within:border-emerald-500/20 transition-all">
          {isSubmitting && (
            <div className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono p-4 rounded-xl text-center tracking-widest font-bold animate-pulse uppercase">
              {submitStatus}
            </div>
          )}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 font-mono">Operator Token Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all placeholder:text-slate-700 font-medium font-mono" required />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 font-mono">Secure Return Route (Email)</label>
            <input type="email" placeholder="john@company.com" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all placeholder:text-slate-700 font-medium font-mono" required />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 font-mono">Functional Core Specifications</label>
            <textarea rows={4} placeholder="Detail your exact software blueprints or data bottleneck vectors..." className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all placeholder:text-slate-700 resize-none font-medium font-mono" required></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full relative inline-flex items-center justify-center p-4 px-6 py-3.5 overflow-hidden font-bold text-slate-950 transition duration-300 ease-out rounded-xl shadow-xl group disabled:opacity-50">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-teal-500"></span>
            <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out transform translate-x-full bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:translate-x-0"></span>
            <span className="relative text-sm font-black tracking-wider uppercase font-mono">Inject System Requirements &rarr;</span>
          </button>
        </form>
        
        {/* Terminal Infrastructure Footer */}
        <div className="pt-8 text-center space-y-3 border-t border-slate-900 text-xs text-slate-500 font-mono">
          <div className="flex justify-center gap-6 text-slate-600">
            <div>SYS_INSTANCE: LIVE</div>
            <div>LOCATION: IN // WORLDWIDE</div>
          </div>
          <div className="text-[10px] tracking-widest text-slate-700 uppercase pt-1">&copy; 2026 VANTRIX AI. HARDWARE SECURED ENGINE.</div>
        </div>
      </section>

    </div>
  );
}
