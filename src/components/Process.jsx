import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Pencil, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      icon: <Search size={22} />,
      desc: 'We research your business, analyze competitors, audit your current website, and align on clear conversion targets and project requirements.'
    },
    {
      num: '02',
      title: 'Strategy',
      icon: <Compass size={22} />,
      desc: 'We outline content structures, wireframe core pages, plan user flows, and draft copy aimed at building trust and positioning.'
    },
    {
      num: '03',
      title: 'Design',
      icon: <Pencil size={22} />,
      desc: 'We craft high-fidelity, premium custom visuals in Figma, choosing modern colors and type scales. You approve before we write any code.'
    },
    {
      num: '04',
      title: 'Development',
      icon: <Code2 size={22} />,
      desc: 'We write clean, semantic React code using Tailwind and Framer Motion, building in custom micro-states, fast loading, and responsive scaling.'
    },
    {
      num: '05',
      title: 'Launch',
      icon: <Rocket size={22} />,
      desc: 'We run core vitals optimization audits, double-check SEO schemas, test page responsiveness, and deploy on reliable production servers.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-[#080d17] transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Process</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3">
            Our Development Process.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
            An organized, reliable methodology that takes your project from strategy to launch with full transparency.
          </p>
        </div>

        {/* Timeline Desktop: Horizontal, Mobile: Vertical */}
        <div className="relative">
          {/* Horizontal Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[50px] right-[50px] h-[1px] bg-slate-200 dark:bg-slate-800" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-start relative group"
              >
                {/* Connector line for mobile */}
                <div className="lg:hidden absolute left-[24px] top-[48px] bottom-[-48px] w-[1px] bg-slate-200 dark:bg-slate-850 group-last:hidden" />

                {/* Circle Icon Indicator */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1220] flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:border-accent dark:group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="lg:hidden text-xs font-bold text-accent tracking-widest uppercase mt-0">
                    STEP {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4 pl-16 lg:pl-0 lg:mt-6">
                  <span className="hidden lg:block text-xs font-bold text-accent tracking-widest uppercase mb-2">
                    STEP {step.num}
                  </span>
                  <h3 className="text-lg font-bold font-display text-primary dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
