import React from 'react';
import { Shield, Sparkles, Smartphone, Search, Zap, TrendingUp } from 'lucide-react';

export default function Trust() {
  const marqueeItems = [
    { text: 'MOBILE FIRST', icon: <Smartphone size={16} /> },
    { text: 'FAST PERFORMANCE', icon: <Zap size={16} /> },
    { text: 'MODERN ANIMATIONS', icon: <Sparkles size={16} /> },
    { text: 'SEO READY', icon: <Search size={16} /> },
    { text: 'CONVERSION FOCUSED', icon: <TrendingUp size={16} /> },
    { text: 'SECURE BUILD', icon: <Shield size={16} /> }
  ];

  // Repeat items to fill standard wider screen scrolling loops
  const doubleItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative py-12 bg-white dark:bg-[#080d17] border-y border-slate-100 dark:border-slate-800/40 overflow-hidden select-none">
      {/* Background Subtle Overlay */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#080d17] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#080d17] to-transparent z-10 pointer-events-none" />

      {/* Marquee Row */}
      <div className="flex w-max relative">
        <div className="flex animate-marquee gap-8 md:gap-16 whitespace-nowrap">
          {doubleItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 md:gap-4 text-primary dark:text-white"
            >
              <span className="text-accent dark:text-accent bg-accent/5 dark:bg-accent/10 p-2 rounded-full">
                {item.icon}
              </span>
              <span className="text-xl md:text-2xl font-display font-bold tracking-widest">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
