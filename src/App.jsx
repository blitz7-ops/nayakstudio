import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';


import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Studio from './components/Studio';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ProjectInquiryModal from './components/ProjectInquiryModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  return (
    <>
      {/* Loading Intro Splash */}
      <LoadingScreen isFinished={!isLoading} finishLoading={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen bg-[#0B1220]">


          {/* Navigation Bar */}
          <Navbar onOpenInquiry={handleOpenInquiry} />

          {/* Page Sections */}
          <main>
            <Hero onOpenInquiry={handleOpenInquiry} />
            <Trust />
            <Projects />
            <Services />
            <WhyUs />
            <Process />
            <Pricing onOpenInquiry={handleOpenInquiry} />
            <Testimonials />
            <Studio />
          </main>

          {/* Footer */}
          <Footer onOpenInquiry={handleOpenInquiry} />

          {/* Floating Sticky Request Quote CTA */}
          <FloatingCTA onOpenInquiry={handleOpenInquiry} />

          {/* Project Inquiry Form Wizard Modal */}
          <ProjectInquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
          
        </div>
      )}
    </>
  );
}
