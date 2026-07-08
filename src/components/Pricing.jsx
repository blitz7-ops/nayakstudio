import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Pricing({ onOpenInquiry }) {
  const inclusions = [
    '100% responsive, fluid grid layouts',
    'Framer Motion micro-animations',
    'Speed optimized',
    'On-page SEO configuration & index submission',
    'Project Inquiry wizard integrations',
    '1 month support & warranty maintenance'
  ];

  return (
    <section id="pricing" className="py-24 bg-bgLight dark:bg-[#0B1220] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3">
            Investment Transparency
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
            Premium results require curated planning. We offer clear, scope-based options tailored to project goals.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#0B1220] rounded-3xl border border-slate-100 dark:border-slate-800/40 shadow-xl dark:shadow-2xl/10 p-8 md:p-12 relative overflow-hidden">
          {/* Accent border top */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-accent to-secondary" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left pricing copy */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase text-accent tracking-wider block">PREMIUM DESIGN & CODE</span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-primary dark:text-white">
                Professional Websites
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Tailored digital frameworks. Final investments fluctuate depending on overall complexity, interactive elements, database integration, page volume, and custom copy needs.
              </p>

              {/* Inclusions list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {inclusions.map((inc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right pricing value */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-[#0E1726]/40 rounded-2xl border border-slate-100 dark:border-slate-800/30 text-center">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">STARTING AT</span>
              <div className="my-4">
                <span className="text-5xl md:text-6xl font-display font-extrabold text-primary dark:text-white">$450</span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-1">One-time payment</span>
              </div>

              {/* Call to action */}
              <button
                onClick={onOpenInquiry}
                className="magnetic w-full py-4 rounded-xl bg-accent text-white font-semibold text-sm flex items-center justify-center gap-1.5 shadow-md hover:bg-accent/90 transition"
              >
                Request Quote <ArrowUpRight size={16} />
              </button>

              <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 mt-4 leading-none">
                <AlertCircle size={10} /> Scope decides final quote estimation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
