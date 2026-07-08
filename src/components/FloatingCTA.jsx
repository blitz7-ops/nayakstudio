import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailCheck } from 'lucide-react';

export default function FloatingCTA({ onOpenInquiry }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: 'spring', damping: 15 }}
          className="fixed bottom-6 right-6 z-[999] hidden sm:block"
        >
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-accent text-white shadow-xl hover:bg-accent/90 transition-all font-semibold text-sm active:scale-95 border border-white/10 glass dark:bg-accent dark:hover:bg-accent/90"
          >
            <MailCheck size={16} className="animate-bounce" />
            <span>Request Quote</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
