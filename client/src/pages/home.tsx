import { lazy, Suspense, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import { LazySection } from '@/components/ui/lazy-section';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

// Lazy load non-critical sections
const Services = lazy(() => import('@/components/sections/Services'));
const Philosophy = lazy(() => import('@/components/sections/Philosophy'));
const WhyChooseUs = lazy(() => import('@/components/sections/CaseStudies'));
const OurMethodology = lazy(() => import('@/components/sections/Testimonials'));
const Team = lazy(() => import('@/components/sections/Team'));
const CallToAction = lazy(() => import('@/components/sections/CallToAction'));

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = 'NexiFront - AI-Powered Digital Transformation Agency';
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
    </>
  );
};

export default Home;
