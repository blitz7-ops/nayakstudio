import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PencilRuler, Zap, Laptop, SearchCheck, Target, Smartphone } from 'lucide-react';

function WhyCard({ title, icon, description }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800/40 bg-white dark:bg-[#0B1220]/50 p-8 shadow-sm flex flex-col justify-between h-72 transition-colors duration-300"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(37,99,235,0.06), transparent 80%)`,
          }}
        />
      )}

      <div>
        <div className="p-3 bg-slate-50 dark:bg-slate-800 w-fit rounded-xl text-accent mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-display text-primary dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
          {description}
        </p>
      </div>


    </div>
  );
}

export default function WhyUs() {
  const points = [
    {
      title: 'Custom Design',
      icon: <PencilRuler size={20} />,
      description: 'Zero templates. Every layout, typography selection, and color system is engineered specifically to represent your brand uniqueness.'
    },
    {
      title: 'Performance-First',
      icon: <Zap size={20} />,
      description: 'We code to achieve a 95+ PageSpeed benchmark. Fast sites lower bounce rates, boost search rank, and elevate customer confidence.'
    },
    {
      title: 'Modern Development',
      icon: <Laptop size={20} />,
      description: 'Built on high-performance frameworks (React, Vite, Framer Motion) for smooth animations, instant transitions, and modular integrity.'
    },
    {
      title: 'Attention to Detail',
      icon: <SearchCheck size={20} />,
      description: 'Hover ripples, magnetic micro-states, typography spacing, and perfect responsive margins. The little details demonstrate client value.'
    },
    {
      title: 'Conversion Focused',
      icon: <Target size={20} />,
      description: 'Every layout operates on a CRO grid structure. Form placement, CTA contrasts, and review structures are optimized to convert visitors.'
    },
    {
      title: 'Mobile First',
      icon: <Smartphone size={20} />,
      description: 'Over 60% of web traffic originates on mobile devices. Our development features fluid mobile grids, touch zones, and light script loads.'
    }
  ];

  return (
    <section className="py-24 bg-bgLight dark:bg-[#0B1220] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Why Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3">
            Why Businesses Choose Nayak Studio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
            We bridge the gap between design aesthetic, frontend technology, and business outcomes.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WhyCard {...point} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
