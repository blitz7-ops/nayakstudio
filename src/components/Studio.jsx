import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Cpu, Layers } from 'lucide-react';

export default function Studio() {
  const profileStats = [
    { label: 'React / Frontend', value: '98%' },
    { label: 'UI / UX Design', value: '95%' },
    { label: 'Conversion CRO', value: '92%' },
    { label: 'Core Web Vitals', value: '97%' }
  ];

  return (
    <section id="studio" className="py-24 bg-bgLight dark:bg-[#0B1220] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Editorial Founder Story */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">The Studio</span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3">
                S Gajanana Nayak
              </h2>
              <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 block mt-1">
                Founder & Creative Developer
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg">
              Holding a degree in Computer Science, I bridge the divide between robust backend architecture and premium frontend aesthetics. I don't build generic websites or copy-paste templates; I code high-converting digital assets designed to help modern businesses stand out and grow.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base">
              My philosophy balances a minimalist, clean-grid design aesthetic with fluid storytelling micro-interactions. With a relentless attention to detail and performance optimization, I build websites that convince, attract, and turn cold traffic into warm inquiries.
            </p>

            {/* Micro details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <span className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-accent h-fit">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-white">Computer Science Engineer</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-500 mt-1 font-light">
                    Solid engineering foundation for writing secure, performant, and scalable code structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-accent h-fit">
                  <Cpu size={20} />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-white">Creative Developer</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-500 mt-1 font-light">
                    Passionate about modern interactive technologies, framer-level kinetics, and storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile Grid Card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md bg-white dark:bg-[#0E1726]/40 border border-slate-100 dark:border-slate-800/40 rounded-3xl p-8 shadow-xl dark:shadow-2xl/10 relative overflow-hidden"
            >
              {/* Glass spotlight */}
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-accent/5 filter blur-2xl" />

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 mb-8">
                {/* stylized SVG portrait icon */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-accent to-secondary flex items-center justify-center text-white font-display text-xl font-bold">
                  GN
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white text-base">S Gajanana Nayak</h4>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block">Active Workspace Terminal</span>
                </div>
              </div>

              {/* Developer stats */}
              <div className="space-y-5 mb-8">
                {profileStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-650 dark:text-slate-350">
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.15 }}
                        className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock code block represent */}
              <div className="bg-slate-50 dark:bg-[#090d17]/80 rounded-2xl p-5 border border-slate-150 dark:border-slate-800/50 text-[10px] font-mono text-slate-500 dark:text-slate-400 space-y-1.5 leading-normal">
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">StudioConfig</span> = &#123;</div>
                <div className="pl-4">philosophy: <span className="text-emerald-500">"Minimalist Grid"</span>,</div>
                <div className="pl-4">interaction: <span className="text-emerald-500">"Frictionless Kinetics"</span>,</div>
                <div className="pl-4">goal: <span className="text-emerald-500">"Optimize Conversion ROI"</span>,</div>
                <div className="pl-4">responsive: <span className="text-amber-400">true</span></div>
                <div>&#125;;</div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
