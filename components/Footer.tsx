
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-4 bg-white/40 border-t border-white/20 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl shadow-lg" />
              <span className="text-3xl font-bold text-text">Projexion</span>
            </div>
            <p className="text-slate-500 text-lg font-medium max-w-sm mb-10 leading-relaxed">
              Turning complex digital landscapes into high-converting experiences. Built for those who demand more than just a website.
            </p>
            <div className="flex gap-5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-white/50 border border-white/40 flex items-center justify-center hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer">
                  <div className="w-5 h-5 bg-slate-400 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-text font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text font-bold text-sm uppercase tracking-widest mb-8">Support</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/20 text-sm font-bold text-slate-400">
          <p>© 2024 Projexion Design Agency. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-primary transition-colors">Powered by Gemini AI</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
