
import React, { useState } from 'react';
import { getConversionAudit } from '../services/geminiService';
import { AuditResult } from '../types';
import { Wand2, Loader2, CheckCircle2 } from 'lucide-react';

const AuditTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !businessType) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await getConversionAudit(url, businessType);
      setResult(data);
    } catch (err) {
      setError('Something went wrong. Please check your inputs or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-32 px-4 relative">
      {/* Inner section mesh tint */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />

      <div className="max-w-4xl mx-auto rounded-[3.5rem] p-8 md:p-16 glass relative overflow-hidden">
        <div className="absolute inset-0 border border-white/40 rounded-[3.5rem] pointer-events-none" />

        {/* Subtle Floating Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full" />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-5 tracking-tight">Free Conversion Audit</h2>
            <p className="text-slate-500 font-medium text-lg">Our AI expert will analyze your site and give you 3 tips to boost conversions instantly.</p>
          </div>

          {!result ? (
            <form onSubmit={handleAudit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 ml-1 tracking-wide uppercase">Website URL</label>
                  <input
                    type="text"
                    placeholder="example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full px-6 py-5 rounded-2xl bg-white/50 border border-white/40 text-text placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium backdrop-blur-md shadow-sm"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 ml-1 tracking-wide uppercase">Business Type</label>
                  <input
                    type="text"
                    placeholder="e.g. SaaS, E-commerce"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-6 py-5 rounded-2xl bg-white/50 border border-white/40 text-text placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium backdrop-blur-md shadow-sm"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-2xl bg-indigo-600 text-white font-bold text-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/25 active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Analyzing Website...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6" />
                    Generate My Audit
                  </>
                )}
              </button>
              {error && <p className="text-rose-500 font-bold text-sm text-center">{error}</p>}
            </form>
          ) : (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100/50" />
                    <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={452.4} strokeDashoffset={452.4 - (452.4 * result.score) / 100} className="text-cta transition-all duration-1000 ease-out" />
                  </svg>
                  <span className="absolute text-5xl font-bold text-text">{result.score}</span>
                </div>
                <h3 className="text-2xl font-bold text-text">Conversion Score</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4 ml-2">Expert Summary</h4>
                  <p className="text-slate-700 leading-relaxed bg-white/40 p-6 rounded-[2.5rem] border border-white/40 font-medium shadow-sm">{result.summary}</p>
                </div>

                <div className="space-y-5">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2 ml-2">Actionable Tips</h4>
                  {result.tips.map((tip, i) => (
                    <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-white/60 border border-white/40 shadow-sm hover:shadow-md transition-shadow backdrop-blur-md">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-cta" />
                      </div>
                      <p className="text-slate-800 font-medium">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setResult(null)}
                className="w-full py-4 text-slate-400 hover:text-text font-bold transition-colors"
              >
                Start New Audit
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuditTool;
