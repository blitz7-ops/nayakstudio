import React from 'react';
import { ArrowUp, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary dark:bg-[#060b13] text-white pt-24 pb-12 border-t border-slate-800 transition-colors duration-350 relative overflow-hidden select-none">

      {/* Subtle Background Glows */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] rounded-full bg-secondary/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Big Editorial CTA */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight">
            Let's Build Something <br />
            <span>Exceptional</span> Together.
          </h2>

          <button
            onClick={onOpenInquiry}
            className="magnetic px-10 py-5 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-base flex items-center justify-center gap-2 mx-auto shadow-lg shadow-accent/20 active:scale-95 transition-all"
          >
            Request Quote
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-800/80 pt-16 pb-12 items-start">

          {/* Logo & Brand Details */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-2 font-display font-extrabold text-2xl tracking-wider text-white">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="25" width="50" height="50" rx="12" stroke="currentColor" strokeWidth="6" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>
              <span>NAYAK<span className="text-accent">.</span></span>
            </a>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              We design and develop premium, conversion-focused websites that inspire customer trust, reflect digital luxury, and drive rapid revenue growth.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <ShieldCheck size={14} className="text-emerald-500" /> Securing SSL & SEO Standards.
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</h4>
            <div className="flex flex-col space-y-2.5 text-sm font-semibold text-slate-300">
              <a href="#projects" className="hover:text-accent transition-colors">Selected Work</a>
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#process" className="hover:text-accent transition-colors">Process</a>
              <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
              <a href="#studio" className="hover:text-accent transition-colors">The Studio</a>
            </div>
          </div>

          {/* Primary contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Contact Studio</h4>
            <div className="space-y-4">
              <a
                href="mailto:chokeblitz@gmail.com"
                className="flex items-center gap-2.5 text-sm font-semibold text-slate-200 hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent" />
                <span>chokeblitz@gmail.com</span>
              </a>

            </div>
          </div>

        </div>

        {/* Footer Base Info */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nayak Studio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          {/* Scroll to top */}

        </div>

      </div>
    </footer>
  );
}
