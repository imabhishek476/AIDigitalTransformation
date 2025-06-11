import { lazy, Suspense, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { preloadImages, CRITICAL_IMAGES } from '@/lib/image-preloader';
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor';
import { useAnalytics } from '@/hooks/use-analytics';
import { useScrollTracking } from '@/hooks/use-scroll-tracking';

// Lazy load non-critical sections for better performance
const Services = lazy(() => import('@/components/sections/Services'));
const Philosophy = lazy(() => import('@/components/sections/Philosophy'));
const WhyChooseUs = lazy(() => import('@/components/sections/CaseStudies'));
const OurMethodology = lazy(() => import('@/components/sections/Testimonials'));
const Team = lazy(() => import('@/components/sections/Team'));
const CallToAction = lazy(() => import('@/components/sections/CallToAction'));

// Loading fallback component
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Philosophy />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <OurMethodology />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CallToAction />
      </Suspense>
      <ScrollToTop />
    </>
  );
};

export default Home;
