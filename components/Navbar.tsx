import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/70 backdrop-blur-md rounded-full py-3 px-8 shadow-lg shadow-black/5 flex items-center justify-between w-full max-w-6xl border border-white/40">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#CAF47E] to-[#10B981] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-900/10">
            P
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
            Projexion
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Services</a>
          <a href="#process" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Process</a>
          <a href="#results" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Results</a>
          <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Testimonials</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/login')}
            className="text-sm font-bold text-slate-900 hover:text-slate-700 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-2.5 bg-[#0F172A] text-white font-bold rounded-full text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20"
          >
            Sign Up
          </button>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
