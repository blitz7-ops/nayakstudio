import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Laptop, Tablet, Smartphone, Code } from 'lucide-react';

export default function Projects() {
  const projectList = [
    {
      title: 'Summit Peak Roofing',
      liveUrl: 'https://summitpeakroofing.onrender.com',
      description: 'Conversion-optimized service platform for an elite contractor. Structured to drive customer trust, showcase high-quality craftsmanship, and deliver a frictionless quote generation flow.',

      colors: {
        bg: 'from-blue-600/10 to-indigo-600/10',
        text: 'text-blue-500',
        border: 'border-blue-500/20'
      },
      previewImages: {
        // High fidelity CSS representation representation of the site styles/details
        logo: 'SUMMIT PEAK',
        accentColor: '#2563EB',
        theme: 'light'
      }
    },
    {
      title: 'Veloura Cafe',
      liveUrl: 'https://velouracafe.onrender.com',
      description: 'An elegant digital cafe portal offering sensory branding. Highlighting interactive, motion-driven menus, localized event features, and smooth animations that mirror the premium in-house cafe experience.',

      colors: {
        bg: 'from-amber-600/10 to-amber-900/10',
        text: 'text-amber-600',
        border: 'border-amber-500/20'
      },
      previewImages: {
        logo: 'VELOURA',
        accentColor: '#7C2D12',
        theme: 'dark'
      }
    },
    {
      title: 'Apex Fitness Club',
      liveUrl: 'https://apexgym.onrender.com',
      description: 'Vibrant, high-energy membership conversion website. Complete with interactive plan comparisons, trainer spotlights, and an action-focused UX tailored to attract and enroll new members.',

      colors: {
        bg: 'from-rose-600/10 to-violet-600/10',
        text: 'text-rose-500',
        border: 'border-rose-500/20'
      },
      previewImages: {
        logo: 'APEX GYM',
        accentColor: '#E11D48',
        theme: 'dark'
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-bgLight dark:bg-[#0B1220] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-accent"
          >
            Selected Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3"
          >
            Premium Solutions, <br />
            Measured Results.
          </motion.h2>
        </div>

        {/* Project Vertical Column */}
        <div className="space-y-20">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Left Column: Copywriting */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">


                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-display font-extrabold text-primary dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base">
                  {project.description}
                </p>

                {/* Call To Actions */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic px-5 py-3 rounded-full bg-accent text-white font-semibold text-sm flex items-center justify-center gap-1.5 shadow-md hover:scale-105 transition-all"
                  >
                    View Live Site <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: High Fidelity Mockups Stack */}
              <div className="lg:col-span-7 relative flex items-center justify-center order-1 lg:order-2 overflow-visible">
                {/* Visual Background Glow */}
                <div className={`absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr ${project.colors.bg} filter blur-3xl opacity-60 pointer-events-none`} />

                {/* Desktop Mockup */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: 'spring', damping: 20 }}
                  className="relative w-full aspect-[16/10] bg-white dark:bg-[#1E293B] rounded-xl shadow-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden z-10"
                >
                  {/* Browser Bar */}
                  <div className="h-6 bg-slate-105 dark:bg-[#0F172A] border-b border-slate-200/60 dark:border-slate-800/60 px-3 flex items-center gap-1.5 z-40 relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
                    <span className="w-32 h-3.5 bg-slate-200 dark:bg-[#1E293B] rounded ml-4 block text-[8px] text-center leading-none text-slate-400 dark:text-slate-500 overflow-hidden py-0.5 select-none">
                      {project.liveUrl.replace('https://', '')}
                    </span>
                  </div>
                  {/* Web Page Live Content */}
                  <div className="w-full h-[calc(100%-24px)] bg-[#0B1220] relative">
                    <iframe
                      src={project.liveUrl}
                      title={`${project.title} Desktop View`}
                      className="w-full h-full border-none pointer-events-none select-none"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
