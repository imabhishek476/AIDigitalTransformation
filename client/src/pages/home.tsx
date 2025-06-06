import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Philosophy from '@/components/sections/Philosophy';
import WhyChooseUs from '@/components/sections/CaseStudies';
import OurMethodology from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import CallToAction from '@/components/sections/CallToAction';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { useEffect } from 'react';

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
