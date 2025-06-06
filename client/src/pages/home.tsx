import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Philosophy from '@/components/sections/Philosophy';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
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
      <Process />
      <CaseStudies />
      <Testimonials />
      <Team />
      <CallToAction />
      <ScrollToTop />
    </>
  );
};

export default Home;
