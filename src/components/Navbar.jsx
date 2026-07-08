import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenInquiry }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'The Studio', href: '#studio' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#0B1220]/80 backdrop-blur-md border-b border-slate-800/40 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-secondary transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group font-display font-extrabold text-xl tracking-wider text-white">
            <svg className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="25" width="50" height="50" rx="12" stroke="currentColor" strokeWidth="6" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
            <span>NAYAK<span className="text-accent">.</span></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-semibold text-slate-350 hover:text-accent transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions (CTA) */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Request Quote CTA */}
            <button
              onClick={onOpenInquiry}
              className="magnetic px-5 py-3 rounded-full bg-accent hover:bg-accent/90 text-sm font-semibold flex items-center gap-1.5 transition-all shadow-md active:scale-95 text-white"
            >
              Request Quote <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu nested inside header for stacking index safety */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[#0B1220] border-b border-slate-800/60 shadow-xl lg:hidden flex flex-col p-6 space-y-4"
            >
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-200 hover:text-accent py-2 transition"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/40">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full justify-center px-5 py-3 rounded-full bg-accent hover:bg-accent/90 text-white text-sm font-semibold flex items-center gap-1.5 transition"
                >
                  Request Quote <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
