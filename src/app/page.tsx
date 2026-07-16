'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Shield, Activity, Network, Layers, Flame, Layers3, PlaySquare, Workflow, Globe, MessageSquareCode, Radio, Command, ShieldAlert, Sliders, Download, Building2, X, TerminalSquare } from 'lucide-react';

export default function Home() {
  const [terminalLog, setTerminalLog] = useState('SYS_INIT // BOOTSTRAP PROTOCOL SUCCESSFULLY INITIATED');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [aiResponseText, setAiResponseText] = useState('WAITING FOR INTENT LINK...');
  const [activeTab, setActiveTab] = useState('json');
  
  // Form input matrix states
  const [operatorName, setOperatorName] = useState('');
  const [routingLink, setRoutingLink] = useState('');
  const [optimizationParams, setOptimizationParams] = useState('');
  
  // Custom states for premium features
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [welcomeAlert, setWelcomeAlert] = useState(false);
  const [computeNodes, setComputeNodes] = useState(82);
  const [securityLogs, setSecurityLogs] = useState<string[]>([]);
  
  // Custom Neon Blueprint Modal State
  const [showBlueprintModal, setShowBlueprintModal] = useState(false);
  const [modalStage, setModalStage] = useState('idle');

  // Simulation parameter arrays
  const [visoraLogs, setVisoraLogs] = useState({ state: 'RENDERING_STREAMS', token: '0xVF82', fps: '60 FPS' });
  const [sanolMetrics, setSanolMetrics] = useState({ load: '0.42ms', clusters: '82/84 Active' });

  // Play audio frequency + voice synthesis greeting
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
    if (mode === 'json') setAiResponseText('FETCHING: {"status": 200, "node": "CLUSTER_A", "latency": "0.12ms", "integrity": "VERIFIED"}');
    if (mode === 'logs') setAiResponseText('LOG: INGESTION COMPLETE // RE-ROUTING PIPELINE TO PRIMARY MATRIX.');
    if (mode === 'ping') setAiResponseText('PING: 8.8.8.8 -> 4ms // CORE_GATEWAY: ONLINE // STABLE_MAPPED');
  };

  const handleDownloadProtocol = () => {
    setShowBlueprintModal(true);
    setModalStage('decrypting');
    setTimeout(() => {
      setModalStage('failed_lock');
    }, 2000);
  };

  // LINKED TO YOUR LIVE BACKEND RENDER ENDPOINT
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('ENCRYPTING INJECTION SCHEMATICS...');
    
    try {
      // Pinging the deployed FastAPI endpoint
      const response = await fetch('https://vantrix-ai-backen.onrender.com/api/v1/automation/handshake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: operatorName,
          email: routingLink,
          parameters: optimizationParams
        })
      });

      if (!response.ok) {
        throw new Error('SYS_NET_ERROR: Mainframe verification timeout');
      }

      const data = await response.json();
      
      setSubmitStatus('ESTABLISHING P2P ENCRYPTED HANDSHAKE...');
      setTimeout(() => {
        setSubmitStatus('HANDSHAKE SECURED. REDIRECTING ENGINES...');
        setTimeout(() => {
          // Triggering the automated backend WhatsApp payload url
          window.location.href = data.redirect_url;
          setIsSubmitting(false);
        }, 800);
      }, 800);

    } catch (error) {
      console.error(error);
      setSubmitStatus('BYPASSING NETWORK LOCK... DIRECT ROUTE ON');
      
      // Fallback route if backend spins down or takes time due to free tier sleep
      setTimeout(() => {
        const baseMessage = `[VANTRIX_OS // BYPASS_CONNECT]\n\nOperator Name: ${operatorName}\nRouting Link: ${routingLink}\nParameters: ${optimizationParams}`;
        window.location.href = `https://wa.me/917377811705?text=${encodeURIComponent(baseMessage)}`;
        setIsSubmitting(false);
      }, 1200);
    }
  };

  return (
    <div 
      onClick={triggerVoiceWelcome}
      className="min-h-screen bg-[#020617] text-slate-100 font-mono selection:bg-emerald-500 selection:text-slate-950 scroll-smooth relative overflow-hidden"
    >
      
      {/* Structural Tech Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-40" />
      
      {/* Voice Welcome Notification Overlay */}
      {welcomeAlert && (
        <div className="fixed top-24 right-6 bg-emerald-950/90 border border-emerald-400 p-4 rounded-xl z-50 text-xs text-emerald-400 font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-bounce uppercase tracking-widest">
          &gt; SECURITY_ACCESS: OPERATOR SESSION LINKED SUCCESSFULLY
        </div>
      )}

      {/* SCI-FI CUSTOM DYNAMIC MODAL */}
      {showBlueprintModal && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#020617] border border-slate-800 rounded-2xl w-full max-w-md p-6 relative space-y-4 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <button onClick={() => setShowBlueprintModal(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-2 border-b border-slate-900 pb-3 text-cyan-400">
              <TerminalSquare className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Vantrix Core Decryption</span>
            </div>

            {modalStage === 'decrypting' ? (
              <div className="py-6 flex flex-col items-center justify-center space-y-3">
                <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest animate-pulse">Running Token Auth Handshakes...</div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-rose-950/20 border border-rose-500/20 p-4 rounded-xl flex gap-3 text-rose-400 text-xs">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-bold uppercase tracking-wide">Download Layer Lock</div>
                    <p className="text-[11px] leading-relaxed opacity-80 font-sans">
                      Architecture blueprint initialization failed. Structural security keys must be fully validated via configuration data injection protocol first. Submit blueprint parameter inputs below.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowBlueprintModal(false)}
                  className="w-full bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-slate-950 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Close Operational Intercept
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Corporate Header */}
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

      {/* Stream ticker */}
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

      {/* CORE CAPABILITIES */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4">
            <h3 className="text-base font-bold uppercase text-slate-200">High-Scale Webinar Platforms</h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">Real-time multi-tenant stream broadcasting engines with dynamic interactive chat architectures and low latency relay layers.</p>
          </div>
          <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4">
            <h3 className="text-base font-bold uppercase text-slate-200">Next-Gen Mobile & SaaS Apps</h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">Premium custom responsive applications engineered for iOS and Android, deploying high-end data interfaces securely.</p>
          </div>
          <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4">
            <h3 className="text-base font-bold uppercase text-slate-200">100% Workflow Automation</h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">Automated webhook arrays, database sync loops, payment ledgers, and intelligent custom bots executing complex workloads.</p>
          </div>
        </div>
      </section>

      {/* COMPUTATIONAL LOG GRID */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative border-t border-slate-900/60">
        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
          <span className="text-xs font-bold text-slate-200 border-b border-slate-900 pb-1 block">VISORA_ENGINE</span>
          <div className="bg-slate-900/50 rounded-lg p-3 text-[10px] text-slate-400 space-y-1">
            <div>&gt; STATE: <span className="text-emerald-400">{visoraLogs.state}</span></div>
            <div>&gt; TOKEN: <span className="text-cyan-400">{visoraLogs.token}</span></div>
            <div>&gt; COMPUTATION: <span className="text-slate-200">{visoraLogs.fps}</span></div>
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
          <span className="text-xs font-bold text-slate-200 border-b border-slate-900 pb-1 block">SANOL_MATRIX</span>
          <div className="bg-slate-900/50 rounded-lg p-3 text-[10px] text-slate-400 space-y-1">
            <div>&gt; LATENCY: <span className="text-cyan-400">{sanolMetrics.load}</span></div>
            <div>&gt; INSTANCES: <span className="text-slate-200">{sanolMetrics.clusters}</span></div>
            <div>&gt; INTEGRATION: <span className="text-emerald-400">Razorpay_Secure</span></div>
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
          <span className="text-xs font-bold text-slate-200 border-b border-slate-900 pb-1 block">KIRAN_NEURAL</span>
          <div className="bg-slate-900/50 rounded-lg p-3 text-[10px] text-slate-400 space-y-1">
            <div>&gt; TRACKED: <span className="text-slate-200">1,402 API tools</span></div>
            <div>&gt; INDICES: <span className="text-emerald-400">84 Active Pages</span></div>
            <div>&gt; SEARCH_CON: <span className="text-cyan-400">INDEXED_OK</span></div>
          </div>
        </div>
      </section>

      {/* SLIDERS & PANELS */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-900/60 z-10 relative">
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Compute Budget Calculator</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>ALLOCATED PIPELINE NODES</span>
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
              <h3 className="text-sm font-bold uppercase tracking-wider">Live Security Firewall Matrix</h3>
            </div>
            <span className="text-[9px] font-black bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded uppercase animate-pulse">DEFENSE_ON</span>
          </div>
          <div className="space-y-2 min-h-[120px] flex flex-col justify-end">
            {securityLogs.map((log, i) => (
              <div key={i} className="text-[10px] font-mono text-slate-400 border-l border-slate-800 pl-2 truncate">
                <span className="text-rose-500/80 font-bold">&gt;&gt;</span> {log}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEADQUARTERS GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">COMMAND_BASE_LOCATIONS</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Vantrix AI Neural Laboratory HQ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300 group">
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="BASE_01" className="w-full h-full object-cover opacity-35 filter hue-rotate-[60deg] contrast-125 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 font-mono text-[9px] bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                <Building2 className="w-3 h-3 text-emerald-400" /> BASE_01 // OPERATIONS_ROOM
              </div>
            </div>
            <div className="p-4 bg-slate-950 text-xs font-bold text-slate-300 uppercase">Main Server Orchestration Labs</div>
          </div>

          <div className="bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300 group">
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80" alt="BASE_02" className="w-full h-full object-cover opacity-35 filter hue-rotate-[180deg] contrast-125 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 font-mono text-[9px] bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                <Building2 className="w-3 h-3 text-cyan-400" /> BASE_02 // STATIONS
              </div>
            </div>
            <div className="p-4 bg-slate-950 text-xs font-bold text-slate-300 uppercase">Cognitive Deep-Tech Core Systems</div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS INTERACT BUTTONS */}
      <section className="py-12 px-6 max-w-4xl mx-auto space-y-6 z-10 relative">
        <div className="flex gap-2 justify-center">
          {['json', 'logs', 'ping'].map((tab) => (
            <button
              key={tab}
              onClick={() => processAiDiagnosis(tab)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
                activeTab === tab 
                  ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400' 
                  : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              Get_{tab}_Map
            </button>
          ))}
        </div>
        <div className="bg-slate-950 border border-slate-900 p-4 rounded-xl text-center text-xs tracking-wide text-slate-400 min-h-[50px] flex items-center justify-center">
          {aiResponseText}
        </div>
      </section>

      {/* DYNAMIC FORM WITH BACKEND HANDSHAKE */}
      <section id="consultation" className="py-20 px-6 max-w-3xl mx-auto space-y-10 z-10 relative border-t border-slate-900/60">
        <div className="text-center space-y-2">
          <div className="text-[10px] font-bold text-cyan-400 tracking-[0.4em] uppercase">Configuration_Initializer</div>
          <h2 className="text-3xl font-black uppercase">Initiate Blueprint</h2>
        </div>

        <div className="bg-slate-950 border border-slate-900 p-3 rounded-2xl flex items-center justify-between max-w-md mx-auto">
          <span className="text-[10px] tracking-wider text-slate-400 uppercase pl-3">Vantrix_Infrastructure_Docs.pdf</span>
          <button 
            onClick={handleDownloadProtocol}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-inner"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" /> Download
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="bg-slate-950/60 border border-slate-900 p-8 rounded-3xl space-y-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Operator Signature Name</label>
            <input 
              type="text" required placeholder="e.g. MANTU PATRA" 
              value={operatorName} onChange={(e) => setOperatorName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3.5 text-xs text-slate-200 focus:outline-none tracking-wide transition-all font-mono"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Secure Routing Link (Email)</label>
            <input 
              type="email" required placeholder="operator@domain.com" 
              value={routingLink} onChange={(e) => setRoutingLink(e.target.value)}
              className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3.5 text-xs text-slate-200 focus:outline-none tracking-wide transition-all font-mono"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Core Optimization Parameters</label>
            <textarea 
              required rows={4} placeholder="Describe exact automation application requirements needing allocation..." 
              value={optimizationParams} onChange={(e) => setOptimizationParams(e.target.value)}
              className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/30 rounded-xl px-4 py-3.5 text-xs text-slate-200 focus:outline-none tracking-wide transition-all resize-none font-mono"
            />
          </div>

          <button 
            type="submit" disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] disabled:opacity-50"
          >
            {isSubmitting ? submitStatus : 'Inject Requirements Protocol →'}
          </button>
        </form>
      </section>

      {/* Footer structural baseline */}
      <footer className="py-12 border-t border-slate-900 text-center text-[9px] text-slate-600 tracking-widest uppercase relative z-10 bg-[#020617]">
        <div>Instance_Logs: Secure // Sector: India // Global</div>
        <div className="mt-2 text-slate-700 font-sans tracking-normal font-medium">© 2026 Vantrix AI. Operational Terminal Replica Matrix.</div>
      </footer>

    </div>
  );
}
