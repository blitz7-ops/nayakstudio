import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isFinished, finishLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2200);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  const studioName = "NAYAK STUDIO";

  const letterContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const letterAnimation = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-[#0B1220] z-[99999] flex flex-col items-center justify-center"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="relative overflow-hidden flex flex-col items-center">
            {/* Logo Mark Animation */}
            <motion.div 
              className="mb-8 flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg className="w-16 h-16 text-accent" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M10 25L50 5L90 25L50 45L10 25Z"
                  stroke="currentColor"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M10 50L50 70L90 50"
                  stroke="currentColor"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M10 75L50 95L90 75"
                  stroke="currentColor"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* Logo Typography Animation */}
            <motion.div
              variants={letterContainer}
              initial="initial"
              animate="animate"
              className="flex space-x-1"
            >
              {studioName.split("").map((char, index) => (
                <span key={index} className="overflow-hidden inline-block py-2">
                  <motion.span
                    variants={letterAnimation}
                    className="inline-block text-white text-2xl md:text-4xl font-display font-extrabold tracking-widest"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </motion.div>

            {/* Subtle Progress Bar */}
            <div className="absolute bottom-[-40px] left-0 right-0 h-[2px] bg-slate-800 rounded-full overflow-hidden w-40 mx-auto">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
