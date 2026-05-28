'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Shield, Activity, Network, Layers, Flame, Layers3, PlaySquare, Workflow, Globe, MessageSquareCode, Radio, Command, ShieldAlert, Sliders, Download, Building2, Smartphone, Video, RefreshCw } from 'lucide-react';

export default function Home() {
  const [terminalLog, setTerminalLog] = useState('SYS_INIT // BOOTSTRAP PROTOCOL SUCCESSFULLY INITIATED');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [aiResponseText, setAiResponseText] = useState('WAITING FOR INTENT LINK...');
  const [activeTab, setActiveTab] = useState('json');
  
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [welcomeAlert, setWelcomeAlert] = useState(false);
  const [computeNodes, setComputeNodes] = useState(82);
  const [securityLogs, setSecurityLogs] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);

  const [visoraLogs, setVisoraLogs] = useState({ state: 'RENDERING_STREAMS', token: '0xVF82', fps: '60 FPS' });
  const [sanolMetrics, setSanolMetrics] = useState({ load: '0.42ms', clusters: '82/84 Active' });

  const triggerVoiceWelcome = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      setTimeout(() => oscillator.stop(), 80);
    } catch (e) {}

    if (!hasWelcomed && typeof window !== 'undefined' && window.speechSynthesis) {
      setHasWelcomed(true);
      setWelcomeAlert(true);
      const speech = new SpeechSynthesisUtterance("Welcome operator, Vantrix OS is now fully initialized.");
      speech.rate = 1.0;
      speech.pitch = 0.8;
      speech.volume = 0.8;
      window.speechSynthesis.speak(speech);
      setTimeout(() => setWelcomeAlert(false), 5000);
    }
  };

  useEffect(() => {
    const logs = [
      'CORE_NET: Connected to multi-tenant edge node arrays...',
      'VISORA_CORE: Script parsed. Executing text-to-speech synthetic neural layer...',
      'SANOL_MATRIX: Re-routing database nodes for hyper-local latency balancing...',
      'METRIC_LOG: Ingestion bandwidth optimized at 942 MB/s clusters.',
      'SYS_SECURITY: Firewall threat vectors verified. 0 anomalies detected.'
    ];
    let index = 0;

    const secTemplates = [
      'SECURE_FIREWALL: Blocked 4 dynamic brute-force injection traces.',
      'GATEWAY_LOG: CNAME handshake validated safely via Cloudflare layer.',
      'THREAT_VECTOR: Isolated structural token mismatch from port 443.',
      'ENVELOPE_DATA: Distributed package metadata verified seamlessly.',
      'NODE_HEALTH: Storage pipelines operational at 99.98% concurrency.'
    ];
    
    const interval = setInterval(() => {
      setTerminalLog(logs[index]);
      index = (index + 1) % logs.length;

      setSecurityLogs(prev => [secTemplates[Math.floor(Math.random() * secTemplates.length)], ...prev.slice(0, 3)]);

      setVisoraLogs({
        state: Math.random() > 0.4 ? 'PROCESSING_VOICE_MATRIX' : 'INJECTING_SUBTITLES',
        token: `0x${Math.floor(Math.random() * 4000 + 4000).toString(16).toUpperCase()}`,
        fps: `${Math.floor(Math.random() * 5 + 58)} FPS`
      });

      setSanolMetrics({
        load: `${(Math.random() * 0.2 + 0.15).toFixed(2)}ms`,
        clusters: `${computeNodes}/100 Nodes Active`
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [computeNodes]);

  const processAiDiagnosis = (mode: string) => {
    setActiveTab(mode);
    if (mode === 'json') setAiResponseText('FETCHING: {"status": 200, "node": "CLUSTER_A", "latency": "0.12ms"}');
    if (mode === 'logs') setAiResponseText('LOG: INGESTION COMPLETE // RE-ROUTING PIPELINE TO PRIMARY MATRIX.');
    if (mode === 'ping') setAiResponseText('PING: 8.8.8.8 -> 4ms // CORE_GATEWAY: ONLINE // STABLE');
  };

  const handleDownloadProtocol = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('ARCHITECTURE BLUEPRINT: Download initialization failed. Secure network keys must be validated via blueprint configuration initialization first.');
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('ENCRYPTING INJECTION SCHEMATICS...');
    setTimeout(() => {
      setSubmitStatus('ESTABLISHING P2P ENCRYPTED HANDSHAKE...');
      setTimeout(() => {
        setSubmitStatus('HANDSHAKE SECURED. REDIRECTING ENGINES...');
        window.location.href = "https://wa.me/919178065739?text=SYS_HANDSHAKE%3A%20AI%20Console%20Blueprint%20Validated.%20Initialize%20Sequence.";
      }, 1000);
    }, 1000);
  };

  return (
    <div 
      onClick={triggerVoiceWelcome}
      className="min-h-screen bg-[#020617] text-slate-100 font-mono selection:bg-emerald-500 selection:text-slate-950 scroll-smooth relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-40" />
      
      {welcomeAlert && (
        <div className="fixed top-24 right-6 bg-emerald-950/90 border border-emerald-400 p-4 rounded-xl z-50 text-xs text-emerald-400 font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-bounce uppercase tracking-widest">
          &gt; SECURITY_ACCESS: OPERATOR SESSION LINKED SUCCESSFULLY
        </div>
      )}

      <header className="border-b border-emerald-500/10 sticky top-0 bg-[#020617]/80 backdrop-blur-xl z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-slate-950 border border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400 animate-ping"></div>
            </div>
            <div className="text-xl font-black tracking-widest bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase">
              Vantrix_OS
            </div>
          </div>
          <a href="#consultation" className="border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
            Connect_Agent_
          </a>
        </div>
      </header>

      <div className="w-full bg-emerald-950/10 border-b border-emerald-500/5 py-3 px-6 z-10 relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-[10px] tracking-widest text-emerald-400/80 font-bold">
          <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-slate-600 uppercase font-black">STREAMS://</span>
          <span className="uppercase tracking-normal font-medium text-slate-300">{terminalLog}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> AI Processing Matrix Online
        </div>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.05] uppercase">
          Autonomous AI & <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent font-sans">
            Code Architectures
          </span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Engineering complex cloud automation matrices, multi-tenant software infrastructures, and distributed artificial networks built for extreme computing scale.
        </p>
        <div className="pt-4">
          <a href="#consultation" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-emerald-500/20 text-slate-950 font-black bg-emerald-400 hover:bg-emerald-300 text-xs tracking-widest uppercase">
            Access Mainframes <Layers3 className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </section>

      {/* EXPLICIT CAPABILITIES ZONE: WHAT WE BUILD SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">CORE_PRODUCTION_MATRIX</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">What We Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Capability 1 */}
          <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold uppercase tracking-wide text-slate-200">High-Scale Webinar Platforms</h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              Real-time multi-tenant stream broadcasting engines with dynamic interactive chat architectures and ultra-low latency relay layers.
            </p>
          </div>

          {/* Capability 2 */}
          <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold uppercase tracking-wide text-slate-200">Next-Gen Mobile & SaaS Apps</h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              Premium custom responsive applications engineered for iOS and Android, deploying high-end data interfaces securely.
            </p>
          </div>

          {/* Capability 3 */}
          <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold uppercase tracking-wide text-slate-200">100% Workflow Automation</h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              Automated webhook arrays, database sync loops, payment ledgers, and intelligent custom bots executing complex workloads automatically.
            </p>
          </div>
        </div>
      </section>

      {/* COMPUTATIONAL TARGET DIAGNOSTIC BLOCKS */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative border-t border-slate-900/60">
        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-900 pb-2">
            <span className="text-xs font-bold text-slate-200">VISORA_ENGINE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3 text-[10px] text-slate-400 space-y-1">
            <div>&gt; LOG_STATE: <span className="text-emerald-400">{visoraLogs.state}</span></div>
            <div>&gt; INTENT_TOK: <span className="text-cyan-400">{visoraLogs.token}</span></div>
            <div>&gt; RATE: <span className="text-slate-200">{visoraLogs.fps}</span></div>
          </div>
          <p className="text-slate-400 text-[11px] font-sans">Industrial script-to-video matrix pipelines producing layout rendering frameworks safely.</p>
        </div>

        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-900 pb-2">
            <span className="text-xs font-bold text-slate-200">SANOL_MATRIX</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3 text-[10px] text-slate-400 space-y-1">
            <div>&gt; DB_LATENCY: <span className="text-cyan-400">{sanolMetrics.load}</span></div>
            <div>&gt; CONCURRENCY: <span className="text-slate-200">{sanolMetrics.clusters}</span></div>
            <div>&gt; ADDR: <span className="text-emerald-400">Razorpay_Secure_OK</span></div>
          </div>
          <p className="text-slate-400 text-[11px] font-sans">High-concurrency data structure logic mapping local ledger entries instantly.</p>
        </div>

        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-900 pb-2">
            <span className="text-xs font-bold text-slate-200">KIRAN_NEURAL</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3 text-[10px] text-slate-400 space-y-1">
            <div>&gt; TRACKED: <span className="text-slate-200">1,402 API systems</span></div>
            <div>&gt; DISCOVERED: <span className="text-emerald-400">84 Active sitemaps</span></div>
            <div>&gt; GOOGLE_CONSOLE: <span className="text-cyan-400">INDEXED_OK</span></div>
          </div>
          <p className="text-slate-400 text-[11px] font-sans">Cognitive web crawling crawlers syncing structural definitions automatically.</p>
        </div>
      </section>

      {/* COMPUTATIONAL SLIDERS & SECURITY PANELS */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-900/60 z-10 relative">
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Compute Budget Configuration Calculator</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>ALLOCATED NET PIPELINE NODES</span>
                <span className="text-emerald-400 font-bold">{computeNodes} Nodes</span>
              </div>
              <input 
                type="range" min="10" max="100" value={computeNodes} 
                onChange={(e) => setComputeNodes(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-900 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-900/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 uppercase font-bold">Estimated Monthly Ingestion Budget</span>
              <span className="text-xl font-black text-cyan-400 tracking-wide">${(computeNodes * 14.5).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 space-y-4 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-900 pb-3">
            <div className="flex items-center gap-2 text-rose-400">
              <ShieldAlert className="w-4 h-4" />
              <h3 className="text-sm font-bold uppercase tracking-wider">Live Security Threat Firewall Matrix</h3>
            </div>
            <span className="text-[9px] font-black bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded uppercase animate-pulse">DEFENSE_ON</span>
          </div>
          <div className="space-y-2 min-h-[120px] flex flex-col justify-end">
            {securityLogs.length === 0 ? (
              <div className="text-xs text-slate-600 font-mono italic">INGESTING TRAFFIC ENDPOINTS...</div>
            ) : (
              securityLogs.map((log, i) => (
                <div key={i} className="text-[10px] font-mono leading-relaxed text-slate-400 border-l border-slate-800 pl-2 truncate">
                  <span className="text-rose-500/80 font-bold">&gt;&gt;</span> {log}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* OFFICE NEURAL LABS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">COMMAND_BASE_LOCATIONS</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Vantrix AI Neural Laboratory HQ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300 group">
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Central Command Base" className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-all duration-700 filter hue-rotate-[60deg] contrast-125" />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 font-mono text-[9px] bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                <Building2 className="w-3 h-3 text-emerald-400" /> BASE_01 // OPERATIONS_ROOM
              </div>
            </div>
            <div className="p-5 border-t border-slate-900/40 bg-slate-950/50">
              <div className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wide">Main Server Orchestration Labs</div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300 group">
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Quantum Server Vault" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-all duration-700 filter hue-rotate-[140deg] saturate-150" />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 font-mono text-[9px] bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                <Cpu className="w-3 h-3 text-cyan-400" /> VAULT_04 // BARE_METAL_GRID
              </div>
            </div>
            <div className="p-5 border-t border-slate-900/40 bg-slate-950/50">
              <div className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wide">Dynamic Storage Clusters</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC ROUTER */}
      <section className="py-12 px-6 max-w-4xl mx-auto space-y-6 z-10 relative border-t border-slate-900/40">
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 space-y-4">
          <div className="flex gap-2 border-b border-slate-900 pb-3 overflow-x-auto">
            {['json', 'logs', 'ping'].map((t) => (
              <button key={t} onClick={() => processAiDiagnosis(t)} className={`px-4 py-1.5 text-xs font-bold rounded-xl border uppercase tracking-wider transition-all ${activeTab === t ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-slate-900 text-slate-500'}`}>
                {t === 'json' ? 'Get_JSON_Map' : t === 'logs' ? 'Stream_Logs' : 'Ping_Gateway'}
              </button>
            ))}
          </div>
          <div className="bg-slate-900/60 border border-slate-900 p-4 rounded-xl text-xs text-slate-300 min-h-[60px] flex items-center gap-3">
            <Command className="w-4 h-4 text-emerald-400" />
            <div className="uppercase tracking-wide">{aiResponseText}</div>
          </div>
        </div>
      </section>

      {/* LEAD CONVERSION FORM */}
      <section id="consultation" className="py-24 px-6 max-w-xl mx-auto space-y-8 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">CONFIGURATION_INITIALIZER</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Initiate Blueprint</h2>
        </div>

        <div className="bg-slate-950 border border-slate-900 p-4 rounded-2xl flex items-center justify-between shadow-xl">
          <div className="space-y-0.5">
            <div className="text-[10px] font-black text-slate-200 uppercase tracking-wider">VANTRIX_INFRASTRUCTURE_DOCS.PDF</div>
            <div className="text-[9px] text-slate-500 uppercase font-mono">Size: 4.8 MB // Security Verified</div>
          </div>
          <button type="button" onClick={handleDownloadProtocol} disabled={isDownloading} className="border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 p-2.5 rounded-xl transition-all font-bold text-xs uppercase flex items-center gap-2 disabled:opacity-50">
            <Download className="w-3.5 h-3.5" /> {isDownloading ? 'FETCHING...' : 'DOWNLOAD'}
          </button>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-6 bg-slate-950/80 border border-slate-900 p-8 rounded-2xl shadow-2xl relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-md rounded-2xl z-20 flex flex-col items-center justify-center p-6 space-y-4 border border-emerald-500/20">
              <Flame className="w-8 h-8 text-emerald-400 animate-bounce" />
              <div className="text-xs font-bold text-emerald-400 tracking-widest text-center animate-pulse">{submitStatus}</div>
            </div>
          )}
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Operator Signature Name</label>
            <input type="text" placeholder="e.g. MANTU PATRA" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/40" required />
          </div>
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Secure Routing Link (Email)</label>
            <input type="email" placeholder="operator@domain.com" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/40" required />
          </div>
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Core Optimization Parameters</label>
            <textarea rows={4} placeholder="Describe exact automation application requirements needing allocation..." className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/40 resize-none font-sans" required></textarea>
          </div>
          <button type="submit" className="w-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-black py-4 rounded-xl transition-all uppercase shadow-[0_0_30px_rgba(16,185,129,0.05)] text-xs tracking-widest">
            Inject Requirements Protocol &rarr;
          </button>
        </form>
        
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
