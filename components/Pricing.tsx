
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$2,499",
    description: "Ideal for landing pages and early-stage startups looking to make an impact.",
    features: ["5 Custom Pages", "Conversion Optimization", "Mobile Responsive", "SEO Fundamentals", "2 Weeks Delivery"],
    cta: "Start Starter",
    featured: false
  },
  {
    name: "Professional",
    price: "$4,999",
    description: "Our most popular choice for scaling businesses that need high-performance assets.",
    features: ["12 Custom Pages", "Advanced CRO Strategy", "Interactive UX Elements", "Speed Optimization", "CMS Integration", "4 Weeks Delivery"],
    cta: "Go Professional",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Bespoke digital solutions for established brands with complex requirements.",
    features: ["Unlimited Pages", "Custom Web Apps", "A/B Testing Setup", "Priority Support", "Dedicated Strategist", "Ongoing Optimization"],
    cta: "Contact Sales",
    featured: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden">
      {/* Background soft tint */}
      <div className="absolute inset-0 bg-secondary/5 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-text mb-6 tracking-tight">Simple Pricing, Infinite ROI</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            No hidden fees. No complicated contracts. Just world-class design that drives measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-10 rounded-[3.5rem] transition-all duration-700 group overflow-hidden flex flex-col h-full ${plan.featured
                  ? 'glass border-primary/30 shadow-2xl shadow-primary/10 scale-105 z-10'
                  : 'glass border-white/20 hover:border-primary/20 hover:shadow-xl'
                }`}
            >
              {/* Soft Gradient Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {plan.featured && (
                <div className="absolute top-8 right-10">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-primary/25">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${plan.featured ? 'text-primary' : 'text-slate-400'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-text tracking-tighter">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-400 font-bold text-lg">/project</span>}
                </div>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? 'bg-primary text-white' : 'bg-white text-primary shadow-sm'}`}>
                        <Check className="w-3.5 h-3.5 stroke-[4]" />
                      </div>
                      <span className="text-slate-700 font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-5 rounded-2xl font-bold text-xl transition-all transform group-hover:scale-[1.02] active:scale-95 shadow-lg ${plan.featured
                      ? 'bg-text text-white hover:bg-slate-800 shadow-xl'
                      : 'bg-white text-text border border-white/50 hover:bg-slate-50'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
