
import React from 'react';
import { MousePointer2, Zap, Layout, BarChart3, ShieldCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-[#0369A1]" />,
    title: "Convert-Centric Design",
    description: "We don't just build sites; we build sales machines. Every pixel is placed with conversion in mind."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Ultra-Fast Performance",
    description: "Sub-second load times that keep visitors on your page and boost your Google rankings."
  },
  {
    icon: <MousePointer2 className="w-6 h-6 text-emerald-500" />,
    title: "Intuitive UX/UI",
    description: "Reducing friction in the user journey to ensure your customers find exactly what they need instantly."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
    title: "Data-Driven Strategy",
    description: "Using heatmaps and analytics to understand your users' behavior and iterate for success."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
    title: "Rock-Solid Reliability",
    description: "Enterprise-grade hosting and security that ensures your business stays online 24/7."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: "Global Scalability",
    description: "Built on modern frameworks that grow with your traffic, from 1,000 to 1,000,000 views."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-4 relative">
      {/* Soft transition overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] -z-10 border-y border-white/20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">Focus on ROI, not just Pixels</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            Most agencies focus on making things pretty. We focus on making you money through intentional, strategic design choices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-10 rounded-3xl glass hover:border-primary/30 transition-all hover:-translate-y-2 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-md border border-slate-50">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
