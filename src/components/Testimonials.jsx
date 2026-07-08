import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldAlert } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      niche: 'Summit Peak Roofing',
      client: 'Marcus Henderson',
      role: 'Operations Director',
      quote: 'We saw our online quote inquiries double in the first three weeks of launching the new landing page. S Gajanana Nayak built a beautifully fast site that immediately communicates reliability, and our potential clients notice it. He is a phenomenal frontend developer.',
      rating: 5
    },
    {
      niche: 'Veloura Cafe',
      client: 'Elena Rostova',
      role: 'Co-Founder & Hostess',
      quote: 'Nayak Studio designed a gorgeous, sensory online menu that looks and feels exactly like our in-house cafe aesthetic. The animations are fluid, page transitions are buttery, and customer seat bookings rose by 35%. Complete branding excellence.',
      rating: 5
    },
    {
      niche: 'Apex Fitness Club',
      client: 'Derrick Vance',
      role: 'Owner & Head Trainer',
      quote: 'The membership comparisons are transparent and look incredible on mobile devices. S Gajanana was extremely thorough, integrating Google analytics tracking and creating clean forms that convert. Our gym registrations are at an all-time high.',
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#080d17] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary dark:text-white mt-3">
            Real Client Results
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
            Read how businesses attract customers, build digital trust, and drive conversions with platforms designed by Nayak Studio.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bgLight dark:bg-[#0B1220]/50 border border-slate-100 dark:border-slate-800/40 p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-0.5 mb-6 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 dark:text-slate-350 text-sm font-light leading-relaxed italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Client detail */}
              <div className="border-t border-slate-200/50 dark:border-slate-800/30 pt-4 flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-white">
                    {rev.client}
                  </h4>
                  <span className="text-[10px] text-slate-450 dark:text-slate-500 font-medium block mt-0.5">
                    {rev.role}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-accent tracking-wider uppercase">
                  {rev.niche}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
