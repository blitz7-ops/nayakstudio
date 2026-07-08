import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Layers, Monitor, Paintbrush, RefreshCw, Cpu, Gauge, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const servicesList = [
    {
      title: 'Landing Pages',
      icon: <Layers className="text-accent" size={24} />,
      summary: 'High-converting standalone pages built for specific marketing campaigns.',
      details: 'We build landing pages structured purely around conversion rate optimization (CRO). Every heading, button placement, and visual asset is meticulously placed to turn incoming cold traffic into qualified inquiries and sales.',
    },
    {
      title: 'Business Websites',
      icon: <Monitor className="text-accent" size={24} />,
      summary: 'Comprehensive multi-page platforms showcasing corporate capabilities.',
      details: 'Complete multi-page systems built for mid-sized brands. We organize information architecture, write high-converting copy, integrate CRM contact endpoints, and lay out services to position you as an industry leader.',
    },
    {
      title: 'Portfolio Websites',
      icon: <Monitor className="text-accent" size={24} />,
      summary: 'Awwwards-quality showcase portals for artists, builders, and studios.',
      details: 'Showcase your work with the premium prestige it deserves. We integrate immersive smooth scrolling, custom mouse spotlights, grid animations, and storytelling copy to separate you from competitors.',
    },
    {
      title: 'Website Redesign',
      icon: <RefreshCw className="text-accent" size={24} />,
      summary: 'Complete architectural and visual overhaul of slow, outdated websites.',
      details: 'Rebuild your online presence from the ground up. We import legacy authority, fix broken structures, overhaul sluggish visuals, and apply modern coding standards to make it load instantly and attract modern clients.',
    },
    {
      title: 'UI/UX Design',
      icon: <Paintbrush className="text-accent" size={24} />,
      summary: 'Premium, user-centered interface research, wireframing, and Figma prototypes.',
      details: 'Pixel-perfect digital structures mapped to consumer habits. We design interactive wireframes, establish typography libraries, balance negative white-space, and construct UI design assets before writing a line of code.',
    },
    {
      title: 'Website Maintenance',
      icon: <ShieldAlert className="text-accent" size={24} />,
      summary: 'Security updates, content modifications, and round-the-clock site health monitoring.',
      details: 'Peace of mind for your digital asset. We maintain daily backups, resolve plugin errors, update dependencies, manage server settings, and handle rapid text or image updates whenever you need them.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#080d17] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Services</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3">
            Core Capabilities.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
            We merge design strategy, copy, and frontend code to build platforms that elevate brands and capture revenue.
          </p>
        </div>

        {/* Expanding Cards Layout */}
        <LayoutGroup>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left column: List of services */}
            <div className="lg:col-span-6 space-y-4">
              {servicesList.map((service, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <motion.div
                    layout
                    key={index}
                    onClick={() => setExpandedIndex(index)}
                    className={`p-6 rounded-2xl cursor-pointer border transition-all ${isExpanded
                      ? 'border-accent bg-accent/5 dark:bg-accent/5 shadow-md shadow-accent/5'
                      : 'border-slate-100 dark:border-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-[#0B1220]/50'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                          {service.icon}
                        </span>
                        <h3 className="text-lg font-bold text-primary dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <ArrowRight
                        size={18}
                        className={`text-slate-400 dark:text-slate-500 transition-transform ${isExpanded ? 'rotate-90 text-accent dark:text-accent' : ''
                          }`}
                      />
                    </div>

                    {/* Mobile details (expanded inside row) */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        isExpanded
                          ? { height: 'auto', opacity: 1, marginTop: 16 }
                          : { height: 0, opacity: 0, marginTop: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden lg:hidden"
                    >
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.details}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right column: Sticky Description Showcase (Desktop only) */}
            <div className="hidden lg:block lg:col-span-6 sticky top-32">
              <motion.div
                layout
                className="glass border border-slate-200/80 dark:border-slate-800/60 rounded-3xl p-10 h-[480px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-accent">
                      {servicesList[expandedIndex].icon}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-primary dark:text-white">
                      {servicesList[expandedIndex].title}
                    </h3>
                  </div>

                  <h4 className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">
                    {servicesList[expandedIndex].summary}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-base">
                    {servicesList[expandedIndex].details}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/40 pt-6">

                  <span className="text-xs font-bold text-accent">NAYAK STUDIO ✦</span>
                </div>
              </motion.div>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
