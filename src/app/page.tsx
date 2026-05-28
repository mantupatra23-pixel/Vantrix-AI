'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Shield, Activity, Network, Layers, Flame, Layers3, PlaySquare, Workflow, Globe, Building2, MessageSquareCode, Radio, Command } from 'lucide-react';

export default function Home() {
  const [terminalLog, setTerminalLog] = useState('SYS_INIT // BOOTSTRAP PROTOCOL SUCCESSFULLY INITIATED');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [aiResponseText, setAiResponseText] = useState('WAITING FOR INTENT LINK...');
  const [activeTab, setActiveTab] = useState('json');
  
  // High-fidelity active server matrix metrics states
  const [visoraLogs, setVisoraLogs] = useState({ state: 'RENDERING_STREAMS', token: '0xVF82', fps: '60 FPS' });
  const [sanolMetrics, setSanolMetrics] = useState({ load: '0.42ms', clusters: '82/84 Active', queues: 'NOMINAL' });
  const [kiranStats, setKiranStats] = useState({ scraped: '1,402 tools', indexed: '84 pages', console: 'SUCCESS_200' });

  // Play synthetic laser synth node audio on screen click/touch
  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // High-pitch cyber frequency
      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime); // Soft background volume
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      setTimeout(() => oscillator.stop(), 80);
    } catch (e) {
      // Audio context browser safe bypass
    }
  };

  useEffect(() => {
    const logs = [
      'CORE_NET: Connected to multi-tenant edge node arrays...',
      'VISORA_CORE: Script parsed. Executing text-to-speech synthetic neural layer...',
      'SANOL_MATRIX: Re-routing database nodes for hyper-local latency balancing...',
      'KIRAN_NEURAL: Scanning search engine indexing matrix via Google API console...',
      'METRIC_LOG: Ingestion bandwidth optimized at 942 MB/s clusters.',
      'SYS_SECURITY: Firewall threat vectors verified. 0 anomalies detected.'
    ];
    let index = 0;
    
    const interval = setInterval(() => {
      setTerminalLog(logs[index]);
      index = (index + 1) % logs.length;

      setVisoraLogs({
        state: Math.random() > 0.4 ? 'PROCESSING_VOICE_MATRIX' : 'INJECTING_SUBTITLES',
        token: `0x${Math.floor(Math.random() * 4000 + 4000).toString(16).toUpperCase()}`,
        fps: `${Math.floor(Math.random() * 5 + 58)} FPS`
      });

      setSanolMetrics({
        load: `${(Math.random() * 0.2 + 0.15).toFixed(2)}ms`,
        clusters: Math.random() > 0.5 ? '84/84 Nodes Live' : '82/84 Discovered',
        queues: Math.random() > 0.3 ? 'NOMINAL' : 'COMPUTE_LIMIT_STRETCH'
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Handle live test parameters inside console tabs
  const processAiDiagnosis = (mode: string) => {
    playBeep();
    setActiveTab(mode);
    if (mode === 'json') setAiResponseText('FETCHING: {"status": 200, "node": "CLUSTER_A", "latency": "0.12ms", "secure_hash": "a8f93qd"}');
    if (mode === 'logs') setAiResponseText('LOG: INGESTION COMPLETE // RE-ROUTING PIPELINE TO PRIMARY MATRIX.');
    if (mode === 'ping') setAiResponseText('PING: 8.8.8.8 -> 4ms // CORE_GATEWAY: SECTOR_IN_ONLINE // STABLE');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playBeep();
    setIsSubmitting(true);
    setSubmitStatus('ENCRYPTING INJECTION SCHEMATICS...');
    
    setTimeout(() => {
      setSubmitStatus('ESTABLISHING P2P ENCRYPTED HANDSHAKE...');
      setTimeout(() => {
        setSubmitStatus('HANDSHAKE SECURED. REDIRECTING ENGINES TO OPERATOR...');
        window.location.href = "https://wa.me/919178065739?text=SYS_HANDSHAKE%3A%20AI%20Console%20Blueprint%20Validated.%20Initialize%20Enterprise%20AI%20Deployment%20Sequence.";
      }, 1000);
    }, 1000);
  };

  return (
    <div 
      onClick={playBeep}
      className="min-h-screen bg-[#020617] text-slate-100 font-mono selection:bg-emerald-500 selection:text-slate-950 scroll-smooth relative overflow-hidden"
    >
      
      {/* Structural Tech Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-40" />
      
      {/* Plasma Light Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[65vw] h-[65vw] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[50%] right-[-15%] w-[60vw] h-[60vw] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Cybermorphic Navbar */}
      <header className="border-b border-emerald-500/10 sticky top-0 bg-[#020617]/80 backdrop-blur-xl z-50 shadow-2xl shadow-black/90">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-slate-950 border border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400 animate-ping"></div>
            </div>
            <div className="text-xl font-black tracking-widest bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase">
              Vantrix_OS
            </div>
          </div>

          <a 
            href="#consultation" 
            className="border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.05)]"
          >
            Connect_Agent_
          </a>
        </div>
      </header>

      {/* Real-time Ticker Data Streams */}
      <div className="w-full bg-emerald-950/10 border-b border-emerald-500/5 py-3 px-6 z-10 relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-[10px] tracking-widest text-emerald-400/80 font-bold">
          <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-slate-600 uppercase font-black">STREAMS://</span>
          <span className="uppercase tracking-normal font-medium text-slate-300 transition-all duration-300">{terminalLog}</span>
        </div>
      </div>

      {/* Hero Console Section */}
      <section className="relative pt-28 pb-20 px-6 z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-bold tracking-widest text-slate-400 uppercase shadow-inner">
          <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> 
          AI Processing Matrix Online
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.05] uppercase">
          Autonomous AI & <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.15)] font-sans">
            Code Architectures
          </span>
        </h1>
        
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Engineering complex cloud automation matrices, multi-tenant software infrastructures, and distributed artificial networks built for extreme computing scale.
        </p>

        <div className="pt-4">
          <a 
            href="#consultation" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-emerald-500/20 text-slate-950 font-black bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.15)] transition-all duration-300 text-xs tracking-widest uppercase"
          >
            Access Mainframes <Layers3 className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </section>

      {/* CORE LOGS COMPUTATIONAL DEPLOYMENT GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">ACTIVE_SYSTEMS_MONITOR</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Active Computational Nodes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Machine 01: Visora AI Engine */}
          <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-6 hover:border-emerald-500/30 shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="flex items-center justify-between border-b border-slate-900/60 pb-3">
              <div className="flex items-center gap-2">
                <PlaySquare className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">VISORA_AI</span>
              </div>
              <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">ACTIVE_GEN</span>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-4 space-y-2 border border-slate-900/80 font-mono text-[10px] text-slate-400">
              <div>&gt; ENGINE_STATE: <span className="text-slate-200 font-bold">{visoraLogs.state}</span></div>
              <div>&gt; NEURAL_TOKEN: <span className="text-cyan-400">{visoraLogs.token}</span></div>
              <div>&gt; VOICE_SYNTH: <span className="text-emerald-400 font-bold">11Labs_API_OK</span></div>
              <div>&gt; COMPUTE_LOAD: <span className="text-slate-300">{visoraLogs.fps}</span></div>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-bold uppercase text-slate-200 tracking-wide">Automated Video Production Engine</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                Industrial script-to-video matrix mapping pipelines. Automatically generates cinematic layouts, multi-lingual audio synchs, and targets metadata integration instantly for streaming channels.
              </p>
            </div>
          </div>

          {/* Machine 02: Sanol Matrix Core */}
          <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-6 hover:border-cyan-500/30 shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            <div className="flex items-center justify-between border-b border-slate-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">SANOL_MATRIX</span>
              </div>
              <span className="text-[9px] font-black text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">CLUSTER_SYNC</span>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-4 space-y-2 border border-slate-900/80 font-mono text-[10px] text-slate-400">
              <div>&gt; DB_LATENCY: <span className="text-cyan-400 font-bold">{sanolMetrics.load}</span></div>
              <div>&gt; MAP_INDEXER: <span className="text-slate-200">{sanolMetrics.clusters}</span></div>
              <div>&gt; MICRO_BILLING: <span className="text-emerald-400 font-bold">Razorpay_Secure</span></div>
              <div>&gt; ALLOC_QUEUE: <span className="text-slate-300 font-bold">{sanolMetrics.queues}</span></div>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-bold uppercase text-slate-200 tracking-wide">Multi-Tenant Hyper-Local Infrastructure</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                High-concurrency database architecture engineered with live marketplace synchronization. Features dynamic algorithmic slot allocation rules, instant ledger distribution matrices, and geo-fenced system load triggers.
              </p>
            </div>
          </div>

          {/* Machine 03: Kiran Neural Agent */}
          <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-6 hover:border-emerald-500/30 shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="flex items-center justify-between border-b border-slate-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">KIRAN_NEURAL</span>
              </div>
              <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">SEO_AUTONOMOUS</span>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-4 space-y-2 border border-slate-900/80 font-mono text-[10px] text-slate-400">
              <div>&gt; DISCOVERED_SET: <span className="text-slate-200">{kiranStats.scraped}</span></div>
              <div>&gt; SITEMAP_LIVE: <span className="text-emerald-400 font-bold">{kiranStats.indexed}</span></div>
              <div>&gt; GOOGLE_CONSOLE: <span className="text-cyan-400 font-bold">{kiranStats.console}</span></div>
              <div>&gt; CRON_AUTOMATION: <span className="text-slate-400">INTERVAL_24H_OK</span></div>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-bold uppercase text-slate-200 tracking-wide">Cognitive Autonomous SEO Framework</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                Autonomous web crawling spider matrices built to parse software specifications across web parameters. Automatically indexes structural components, maps metadata nodes, and fires live sitemaps definitions to top search search instances.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* DYNAMIC INTERACTIVE AI DIAGNOSTIC PANEL */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 z-10 relative border-t border-slate-900/60">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">INTERACTIVE_MAIN_CONSOLE</div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Vantrix Live API Diagnosis Router</h2>
        </div>

        <div className="bg-slate-950 border-2 border-slate-900 rounded-2xl p-6 space-y-4 shadow-2xl">
          <div className="flex gap-2 border-b border-slate-900 pb-4 overflow-x-auto">
            <button 
              onClick={() => processAiDiagnosis('json')}
              className={`px-4 py-2 text-xs font-bold rounded-xl border uppercase tracking-wider transition-all ${activeTab === 'json' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-slate-900 text-slate-500 hover:text-slate-300'}`}
            >
              Get_JSON_Map
            </button>
            <button 
              onClick={() => processAiDiagnosis('logs')}
              className={`px-4 py-2 text-xs font-bold rounded-xl border uppercase tracking-wider transition-all ${activeTab === 'logs' ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'border-slate-900 text-slate-500 hover:text-slate-300'}`}
            >
              Stream_Logs
            </button>
            <button 
              onClick={() => processAiDiagnosis('ping')}
              className={`px-4 py-2 text-xs font-bold rounded-xl border uppercase tracking-wider transition-all ${activeTab === 'ping' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-slate-900 text-slate-500 hover:text-slate-300'}`}
            >
              Ping_Gateway
            </button>
          </div>

          <div className="bg-slate-900/60 border border-slate-900 p-5 rounded-xl font-mono text-xs text-slate-300 min-h-[70px] flex items-center gap-3 relative overflow-hidden">
            <Command className="w-5 h-5 text-emerald-400 animate-pulse flex-shrink-0" />
            <div className="tracking-wide leading-relaxed uppercase">{aiResponseText}</div>
            <div className="absolute right-3 top-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* TELEMETRY VISUALS ROOM LAB GRAPHICS */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative border-t border-slate-900/40">
        <div className="bg-slate-950/60 border border-slate-900 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300 group">
          <div className="relative h-60 w-full overflow-hidden border-b border-slate-900">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Vantrix HQ Server Lab" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-700 filter hue-rotate-[60deg] contrast-125" />
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="text-[9px] font-bold bg-slate-950/90 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">HQ_CENTRAL // LAB_A</span>
            </div>
          </div>
          <div className="p-6"><h4 className="text-base font-bold uppercase tracking-wide text-slate-200">Autonomous Server Laboratory Network</h4></div>
        </div>

        <div className="bg-slate-950/60 border border-slate-900 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300 group">
          <div className="relative h-60 w-full overflow-hidden border-b border-slate-900">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" alt="Data Streams" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-700 filter hue-rotate-[110deg]" />
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="text-[9px] font-bold bg-slate-950/90 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">TELEMETRY://GRID_B</span>
            </div>
          </div>
          <div className="p-6"><h4 className="text-base font-bold uppercase tracking-wide text-slate-200">Distributed Cloud Datastore Instances</h4></div>
        </div>
      </section>

      {/* CORPORATE REVIEWS GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">DECRYPTED_NODE_FEEDBACK</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Enterprise Endorsements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950/40 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all duration-300">
            <MessageSquareCode className="w-5 h-5 text-cyan-400" />
            <p className="text-slate-400 text-xs leading-relaxed font-sans italic">"Vantrix AI integrated our custom cloud workflow mechanics flawlessly. The autonomous core execution setups completely minimized our database bottlenecks within 48 hours."</p>
            <div className="border-t border-slate-900/80 pt-3 flex justify-between items-center text-[10px]"><span className="font-bold text-slate-200 uppercase">Marcus Vance</span><span className="text-slate-600">CTO, NexaCorp Global</span></div>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all duration-300">
            <MessageSquareCode className="w-5 h-5 text-emerald-400" />
            <p className="text-slate-400 text-xs leading-relaxed font-sans italic">"The automated scripts deployed for our video microservices handle rendering pipelines at extreme speed. Truly professional architecture. Highly recommended."</p>
            <div className="border-t border-slate-900/80 pt-3 flex justify-between items-center text-[10px]"><span className="font-bold text-slate-200 uppercase">Elena Rostova</span><span className="text-slate-600">Director, StrataMedia Inc</span></div>
          </div>
          <div className="bg-slate-950/40 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all duration-300">
            <MessageSquareCode className="w-5 h-5 text-cyan-400" />
            <p className="text-slate-400 text-xs leading-relaxed font-sans italic">"Their multi-tenant SaaS ledger system completely revamped our invoicing structures. Zero performance latency across millions of synchronized data clusters."</p>
            <div className="border-t border-slate-900/80 pt-3 flex justify-between items-center text-[10px]"><span className="font-bold text-slate-200 uppercase">David K.</span><span className="text-slate-600">Operations, ApexVentures</span></div>
          </div>
        </div>
      </section>

      {/* Cyber Blueprint Action Form Section */}
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
            <div>INSTANCE_LOGS: SECURE</div>
            <div>SECTOR: INDIA // GLOBAL</div>
          </div>
          <div className="tracking-widest text-slate-700 text-[9px] uppercase pt-1">&copy; 2026 VANTRIX AI. OPERATIONAL TERMINAL REPLICA MATRIX.</div>
        </div>
      </section>

    </div>
  );
}
