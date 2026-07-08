import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'default', 'link', 'text', 'button', 'magnetic'
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic Hovers
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive-hover');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setHovered(true);
          if (el.classList.contains('magnetic')) {
            setHoverType('magnetic');
          } else if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button') {
            setHoverType('button');
          } else {
            setHoverType('link');
          }
        });
        el.addEventListener('mouseleave', () => {
          setHovered(false);
          setHoverType('default');
        });
      });
      
      const largeTextElements = document.querySelectorAll('h1, h2, .display-text');
      largeTextElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setHovered(true);
          setHoverType('text');
        });
        el.addEventListener('mouseleave', () => {
          setHovered(false);
          setHoverType('default');
        });
      });
    };

    addListeners();

    // Re-attach listeners when DOM changes (e.g. navigation or modals)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const size = hoverType === 'text' ? 100 : hoverType === 'link' ? 60 : hoverType === 'magnetic' ? 80 : 20;

  return (
    <>
      {/* Outer Follow Circle */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: size,
          height: size,
          backgroundColor: hoverType === 'text' ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,1)',
        }}
        animate={{
          scale: hovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 0.3 : 1,
          opacity: hoverType === 'text' ? 0 : 1,
        }}
      />
    </>
  );
}
