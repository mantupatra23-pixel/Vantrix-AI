import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 scroll-smooth">
      
      {/* Header / Navigation */}
      <header className="border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent tracking-wide">
            VANTRIX AI
          </div>
          <a 
            href="#consultation" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-emerald-500/10 text-sm"
          >
            Book Free Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Enterprise AI & <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Custom Software Development
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We engineer high-performance AI automation systems, scalable SaaS platforms, and custom enterprise software for serious businesses worldwide.
          </p>
          <div className="pt-4">
            <a 
              href="#consultation" 
              className="bg-slate-900 hover:bg-slate-850 text-emerald-400 font-medium px-8 py-4 rounded-xl border border-emerald-500/30 inline-block transition-all text-base"
            >
              Get Free Strategy Consultation &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Stats Metric Section */}
      <section className="border-y border-slate-900 bg-slate-900/20 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-4xl font-bold text-emerald-400">50+</div>
            <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Projects Delivered</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold text-emerald-400">30+</div>
            <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Happy Clients</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold text-emerald-400">5+ Years</div>
            <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Industry Experience</div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Our Core Services</h2>
          <p className="text-slate-400">Production-ready solutions tailored for enterprise scaling.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Service Card 1 */}
          <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all">
            <div className="text-xl font-bold text-slate-100">Custom Software</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise CRM, ERP, tailored dashboards, and robust high-performance backend systems built for your exact workflow.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all">
            <div className="text-xl font-bold text-slate-100">AI Automation</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Intelligent autonomous chatbots, workflow integrations, LLM microservices, and deep behavioral data analytics.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all">
            <div className="text-xl font-bold text-slate-100">SaaS & Apps</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscription-based multi-tenant software platforms and rapid native mobile applications engineered to launch instantly.
            </p>
          </div>

        </div>
      </section>

      {/* Portfolio Deployment Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-12 border-t border-slate-900">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Our Enterprise Deployments</h2>
          <p className="text-slate-400">Battle-tested systems built for performance and optimization.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Deployment Card 1 */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl overflow-hidden group hover:border-emerald-500/20 transition-all">
            <div className="p-8 space-y-3">
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider">Live System</span>
              <h3 className="text-xl font-bold text-slate-100 pt-2">AI Dashboard & Analytics Platform</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Real-time data synchronization engine with automated behavior mapping and sub-second latency analytics.
              </p>
            </div>
          </div>
          
          {/* Deployment Card 2 */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl overflow-hidden group hover:border-emerald-500/20 transition-all">
            <div className="p-8 space-y-3">
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider">SaaS Infrastructure</span>
              <h3 className="text-xl font-bold text-slate-100 pt-2">Multi-Tenant CRM Engine</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Scalable cloud-native architecture featuring dynamic slot allocations, micro-commissions structure, and automated invoicing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="consultation" className="py-24 px-6 max-w-xl mx-auto space-y-8 border-t border-slate-900">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Free Strategy Consultation</h2>
          <p className="text-slate-400 text-sm">Let's blueprint your custom AI automation or scalable SaaS platform.</p>
        </div>
        
        <form className="space-y-5 bg-slate-900/30 p-8 rounded-2xl border border-slate-900/80">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-700" required />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Email</label>
            <input type="email" placeholder="john@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-700" required />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Requirements</label>
            <textarea rows={4} placeholder="Describe your project workflow or what you want to automate..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-700 resize-none" required></textarea>
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/10 text-sm">
            Send Consultation Request &rarr;
          </button>
        </form>
        
        {/* Quick Contact Footer Metadata */}
        <div className="pt-6 text-center space-y-2 border-t border-slate-900 text-xs text-slate-500">
          <div>Email: mantupatra23@gmail.com</div>
          <div>Location: India (Remote Worldwide)</div>
          <div className="pt-4 text-[10px] tracking-widest text-slate-600 uppercase">&copy; 2026 Vantrix AI. All Rights Reserved.</div>
        </div>
      </section>

    </div>
  );
}
