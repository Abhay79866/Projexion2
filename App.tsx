
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import AuditTool from './components/AuditTool';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ArrowUpRight } from 'lucide-react';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard/Dashboard';

const LandingPage: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white overflow-hidden">
      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Features with subtle separator */}
        <div className="relative z-10">
          <Features />
        </div>

        <Testimonials />

        <div className="relative z-10">
          <AuditTool />
        </div>

        <div className="relative z-10">
          <Pricing />
        </div>

        {/* Big CTA Section */}
        <section className="py-32 px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center py-24 rounded-[3rem] bg-text relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-text via-[#312E81] to-text opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-7xl font-bold text-white px-4 leading-[1.1]">
                Ready to turn your views <br className="hidden md:block" /> into revenue?
              </h2>
              <p className="text-indigo-100 text-xl md:text-2xl max-w-3xl mx-auto px-4 font-medium opacity-90">
                Let's build a website that does the heavy lifting for you. Schedule your free strategy call today.
              </p>
              <button className="inline-flex items-center gap-3 px-10 py-5 bg-white text-text font-bold text-xl rounded-2xl hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
                Start Your Project
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cta/20 rounded-full blur-[100px]" />
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile/Desktop CTA */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] transition-all duration-700 transform ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <button className="flex items-center gap-4 px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg border border-white/10 backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cta"></span>
          </span>
          Book a Free Call
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
