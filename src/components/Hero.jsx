import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck, Zap } from 'lucide-react';

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    let totalDuration = 1500;
    let incrementTime = Math.abs(Math.floor(totalDuration / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, Math.max(incrementTime, 25));

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function Hero({ onOpenInquiry }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 md:px-12 bg-bgLight dark:bg-[#0B1220] transition-colors duration-500">
      {/* Background Floating Blob Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-accent/20 dark:bg-accent/15 filter blur-[80px]"
        />
        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-secondary/15 dark:bg-secondary/10 filter blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Sub-badge */}


        {/* Headline Mask Reveal */}
        <div className="max-w-4xl overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={isVisible ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] text-primary dark:text-white"
          >
            Premium Websites That <br className="hidden md:inline" />
            Turn Visitors Into <span className="text-stroke text-accent dark:text-stroke dark:text-accent">Customers</span>
          </motion.h1>
        </div>

        {/* Subheadline Reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Helping modern businesses stand out online with beautifully crafted, conversion-focused websites that inspire trust and drive growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto"
        >
          <button
            onClick={onOpenInquiry}
            className="magnetic px-8 py-4 rounded-full bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition shadow-lg shadow-accent/20 active:scale-95"
          >
            Request Quote <ArrowUpRight size={18} />
          </button>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-slate-200 dark:border-slate-800 text-primary dark:text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
          >
            View Selected Work
          </a>
        </motion.div>

        {/* Statistical Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-slate-200/60 dark:border-slate-800/40 pt-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white flex items-center justify-center gap-0.5">
              <Counter value="98" suffix="%" />
            </span>
            <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5 font-semibold">
              Client Satisfaction
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-display font-extrabold text-accent flex items-center justify-center gap-0.5">
              <Counter value="95" suffix="+" />
            </span>
            <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5 font-semibold">
              Core Web Vitals Target
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white flex items-center justify-center gap-0.5">
              <Counter value="40" suffix="%" />
            </span>
            <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5 font-semibold">
              Average Conversion Increase
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
