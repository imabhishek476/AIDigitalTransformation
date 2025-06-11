import { useEffect, useCallback } from 'react';
import { trackScrollDepth } from '../lib/analytics';

export function useScrollTracking() {
  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    // Track milestone percentages
    if (scrollPercentage >= 25 && !sessionStorage.getItem('scroll-25')) {
      trackScrollDepth(25);
      sessionStorage.setItem('scroll-25', 'true');
    } else if (scrollPercentage >= 50 && !sessionStorage.getItem('scroll-50')) {
      trackScrollDepth(50);
      sessionStorage.setItem('scroll-50', 'true');
    } else if (scrollPercentage >= 75 && !sessionStorage.getItem('scroll-75')) {
      trackScrollDepth(75);
      sessionStorage.setItem('scroll-75', 'true');
    } else if (scrollPercentage >= 90 && !sessionStorage.getItem('scroll-90')) {
      trackScrollDepth(90);
      sessionStorage.setItem('scroll-90', 'true');
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 300);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);
}