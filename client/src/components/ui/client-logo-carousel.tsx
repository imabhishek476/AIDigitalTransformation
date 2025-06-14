import { useState, useEffect } from 'react';
import { CLIENT_LOGOS } from '@/lib/constants';
import { ClientLogo } from '@/components/ui/client-logo';
import { motion } from 'framer-motion';
import { scaleUp } from '@/lib/animations';

export function ClientLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos = CLIENT_LOGOS;
  const itemsPerPage = {
    mobile: 2,
    tablet: 3,
    desktop: 4
  };
  
  // Get the window width to determine how many logos to show
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine how many logos to show based on screen size
  const getVisibleLogoCount = () => {
    if (windowWidth < 640) return itemsPerPage.mobile;
    if (windowWidth < 1024) return itemsPerPage.tablet;
    return itemsPerPage.desktop;
  };
  
  const visibleLogoCount = getVisibleLogoCount();
  
  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= logos.length ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [logos.length]);
  
  // Get the logos that should be visible
  const getVisibleLogos = () => {
    const visibleLogos = [];
    for (let i = 0; i < visibleLogoCount; i++) {
      const index = (currentIndex + i) % logos.length;
      visibleLogos.push(logos[index]);
    }
    return visibleLogos;
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? logos.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= logos.length ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="w-full relative">
      <div className="overflow-hidden px-4">
        <div className="flex justify-center flex-wrap gap-8">
          {getVisibleLogos().map((client, index) => (
            <motion.div 
              key={`${client.name}-${index}`} 
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mx-2"
            >
              <ClientLogo 
                name={client.name}
                logoUrl={client.logoUrl}
                industry={client.industry}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Navigation arrows removed to prevent scroll indicator appearance */}
    </div>
  );
}