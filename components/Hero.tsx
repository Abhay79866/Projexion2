
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 md:pt-40 overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 mb-10 rounded-full border border-primary/20 bg-white/50 text-primary text-[11px] font-bold tracking-[0.2em] uppercase shadow-sm backdrop-blur-md">
          NEW: AI-POWERED CONVERSION AUDITS
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05] text-text max-w-[12ch] md:max-w-none mx-auto">
          The platform that makes <br className="sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-400">
            views work for you
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          We turn complexity into clarity by building gorgeous, high-performance websites that don't just look good—they convert visitors into loyal customers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-indigo-600/20 ring-1 ring-indigo-500/20">
            Set up a Demo
          </button>
          <button className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-text bg-white hover:bg-gray-50 border border-slate-200 rounded-2xl transition-all shadow-sm">
            View Case Studies
          </button>
        </div>
      </div>

      {/* Floating Dashboard Preview - Glassmorphism UI */}
      <div className="relative z-10 mt-24 w-full max-w-5xl rounded-[2.5rem] glass p-1">
        <div className="rounded-[2.4rem] overflow-hidden bg-white/50">
          <div className="p-5 border-b border-white/20 flex items-center justify-between bg-white/60 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
            </div>
            <div className="text-[11px] text-slate-400 font-bold tracking-widest uppercase">analytics_cloud_v3</div>
            <div className="w-8 h-8 rounded-lg bg-white/50 border border-white/20" />
          </div>

          <div className="p-10 h-[450px]">
            <div className="grid grid-cols-12 gap-8 h-full">
              <div className="col-span-3 space-y-6">
                <div className="h-6 w-3/4 bg-slate-200/50 rounded-lg" />
                <div className="space-y-3">
                  <div className="h-3 w-full bg-slate-100/50 rounded-md" />
                  <div className="h-3 w-5/6 bg-slate-100/50 rounded-md" />
                  <div className="h-3 w-4/6 bg-slate-100/50 rounded-md" />
                </div>
                <div className="mt-16 h-32 w-full glass rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
                </div>
              </div>
              <div className="col-span-9 bg-white/40 border border-white/20 rounded-[2rem] relative overflow-hidden p-8 shadow-inner">
                <div className="flex justify-between items-start mb-10">
                  <div className="h-10 w-40 bg-white/60 rounded-xl border border-white/20 shadow-sm" />
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white/60 border border-white/20 shadow-sm" />
                    <div className="h-8 w-8 rounded-lg bg-white/60 border border-white/20 shadow-sm" />
                  </div>
                </div>
                <div className="flex items-end gap-4 h-56">
                  {[40, 65, 35, 80, 100, 55, 75, 95, 85, 60, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary/80 to-secondary/20 rounded-xl transition-all duration-1000 shadow-sm"
                      style={{ height: `${h}%`, opacity: 0.6 + (h / 100) * 0.4 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
