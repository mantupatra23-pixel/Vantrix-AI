import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 scroll-smooth relative overflow-hidden">
      
      {/* Dynamic AI Ambient Glow Elements (Nebula Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Futuristic Header / Glassmorphic Navbar */}
      <header className="border-b border-emerald-500/10 sticky top-0 bg-slate-950/70 backdrop-blur-xl z-50 shadow-xl shadow-emerald-950/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Core Orb Logo Element */}
            <div className="w-5 h-5 rounded-full bg-slate-950 border border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
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
            <span className="relative text-sm font-bold tracking-wide">Book Free Call</span>
          </a>
        </div>
      </header>

      {/* Cyber Hero Banner */}
      <section className="relative pt-28 pb-24 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-xs font-semibold tracking-wider text-emerald-400 uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Next-Gen Automation Architecture
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1]">
            Enterprise AI & <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.2)]">
              Custom Software
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We build state-of-the-art autonomous frameworks, deep LLM infrastructures, and robust SaaS applications to scale global engineering performance.
          </p>
          <div className="pt-6">
            <a 
              href="#consultation" 
              className="px-8 py-4 rounded-xl border border-emerald-500/30 text-emerald-400 font-bold bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.05)] transition-all duration-300 text-base tracking-wide"
            >
              Get Free Strategy Consultation &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Node Grid */}
      <section className="border-y border-slate-900 bg-slate-900/10 backdrop-blur-sm py-14 px-6 z-10 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1 md:border-r border-slate-900 last:border-0">
            <div className="text-4xl md:text-5xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">50+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Deployments Triggered</div>
          </div>
          <div className="space-y-1 md:border-r border-slate-900 last:border-0">
            <div className="text-4xl md:text-5xl font-black text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">30+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Global Enterprise Clients</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">5+ Yrs</div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Core Stack R&D</div>
          </div>
        </div>
      </section>

      {/* Core Services: Cyber Core Glass Cards */}
      <section className="py-28 px-6 max-w-6xl mx-auto space-y-16 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">System Specializations</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">Custom high-fidelity mechanisms engineered for serious computing operations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-lg shadow-[0_0_10px_rgba(52,211,153,0.1)] group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all">01</div>
            <div className="text-xl font-bold tracking-wide text-slate-100">Custom Software</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise CRM architectures, intelligent cloud ERP matrices, fast tailored administration dashboards, and raw secure microservice backends.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-teal-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-center text-teal-400 font-black text-lg shadow-[0_0_10px_rgba(45,212,191,0.1)] group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-all">02</div>
            <div className="text-xl font-bold tracking-wide text-slate-100">AI Automation</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Autonomous cognitive system integrations, behavioral neural pipelines, targeted data analysis structures, and custom business workflow agents.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-lg shadow-[0_0_10px_rgba(52,211,153,0.1)] group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all">03</div>
            <div className="text-xl font-bold tracking-wide text-slate-100">SaaS & Applications</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-performance cloud-native infrastructure deployment, complex multi-tenant system environments, and responsive digital framework applications.
            </p>
          </div>

        </div>
      </section>

      {/* Deployments Section: Neon Portfolio Grid */}
      <section className="py-28 px-6 max-w-6xl mx-auto space-y-16 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Active Node Operations</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">Production logs of battle-tested enterprise architectures live right now.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 rounded-2xl overflow-hidden hover:border-emerald-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-300 p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md uppercase border border-emerald-500/20 shadow-[0_0_10px_rgba(52,211,153,0.1)]">Active Core</span>
              <span className="text-xs font-mono text-slate-600">ID: VNX-0842</span>
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-slate-100 pt-1">AI Analytical Dashboard Layer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sub-second synchronous data mapping systems displaying behavior orchestration matrices and real-time computation streams.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 rounded-2xl overflow-hidden hover:border-teal-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-300 p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-md uppercase border border-teal-500/20 shadow-[0_0_10px_rgba(45,212,191,0.1)]">Active Base</span>
              <span className="text-xs font-mono text-slate-600">ID: VNX-0911</span>
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-slate-100 pt-1">Multi-Tenant CRM Core</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-availability structural environment engineered with micro-commission ledgers, dynamic server resource instances, and instant transaction engines.
            </p>
          </div>

        </div>
      </section>

      {/* Tactical Lead Form Section */}
      <section id="consultation" className="py-28 px-6 max-w-xl mx-auto space-y-10 border-t border-slate-900/60 z-10 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Initiate System Blueprint</h2>
          <p className="text-slate-400 text-sm md:text-base">Connect with an engineer to configure your specific core automation requirements.</p>
        </div>
        
        <form className="space-y-6 bg-slate-900/10 backdrop-blur-md p-8 rounded-2xl border border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.03)] focus-within:border-emerald-500/20 transition-all">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Operator Identity</label>
            <input type="text" placeholder="John Doe" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all placeholder:text-slate-700 font-medium" required />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Secure Routing Mail</label>
            <input type="email" placeholder="john@company.com" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all placeholder:text-slate-700 font-medium" required />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Target Specifications</label>
            <textarea rows={4} placeholder="Detail your operational bottlenecks or system architecture goals..." className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/40 focus:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all placeholder:text-slate-700 resize-none font-medium" required></textarea>
          </div>
          <button type="submit" className="w-full relative inline-flex items-center justify-center p-4 px-6 py-3.5 overflow-hidden font-bold text-slate-950 transition duration-300 ease-out rounded-xl shadow-xl group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-teal-500"></span>
            <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out transform translate-x-full bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:translate-x-0"></span>
            <span className="relative text-sm font-black tracking-wider uppercase">Submit Operational Requirements &rarr;</span>
          </button>
        </form>
        
        {/* Terminal/Footer Node Metadata */}
        <div className="pt-8 text-center space-y-3 border-t border-slate-900 text-xs text-slate-500 font-mono">
          <div className="flex justify-center gap-6 text-slate-600">
            <div>SYS_LOG: active</div>
            <div>LOC: IN (Remote Global)</div>
          </div>
          <div className="text-[10px] tracking-widest text-slate-700 uppercase pt-2">&copy; 2026 VANTRIX AI. SECURE SYSTEM DATA INSTANCE.</div>
        </div>
      </section>

    </div>
  );
}
