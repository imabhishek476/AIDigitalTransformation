import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Philosophy from '@/components/sections/Philosophy';
import WhyChooseUs from '@/components/sections/CaseStudies';
import OurMethodology from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import CallToAction from '@/components/sections/CallToAction';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { MobileDebugInfo } from '@/components/ui/mobile-debug-info';
import { preloadImages, CRITICAL_IMAGES } from '@/lib/image-preloader';
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor';
import { useAnalytics } from '@/hooks/use-analytics';
import { useScrollTracking } from '@/hooks/use-scroll-tracking';



const Home = () => {
  // Monitor performance metrics
  usePerformanceMonitor();
  
  // Track page views and user interactions
  useAnalytics();
  
  // Track scroll depth for engagement metrics
  useScrollTracking();
  
  useEffect(() => {
    // Set page title
    document.title = 'NexiFront - AI-Powered Digital Transformation Agency';
    
    // Preload critical images for better performance
    preloadImages(CRITICAL_IMAGES);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Philosophy />
      <WhyChooseUs />
      <OurMethodology />
      <Team />
      <CallToAction />
      <ScrollToTop />
      <MobileDebugInfo />
    </>
  );
};

export default Home;
