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
      
      {/* Test section to verify content rendering */}
      <section style={{ 
        backgroundColor: '#ff0000', 
        minHeight: '300px', 
        padding: '50px 20px',
        display: 'block',
        visibility: 'visible',
        opacity: '1',
        position: 'relative',
        zIndex: '999'
      }}>
        <div style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: '#000000',
          padding: '20px',
          margin: '20px 0'
        }}>
          TEST SECTION - If you can see this red section, content is rendering properly
        </div>
        <div style={{
          color: 'white',
          fontSize: '18px',
          textAlign: 'center',
          padding: '10px'
        }}>
          This is a test to verify content visibility on your device
        </div>
      </section>
      
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
