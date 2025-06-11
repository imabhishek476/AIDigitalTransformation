import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    // Also check for iOS accessibility settings that might interfere
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const hasLargeText = window.innerWidth !== document.documentElement.clientWidth;
    
    if (isIOS && (hasLargeText || mediaQuery.matches)) {
      setShouldReduceMotion(true);
    }

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return shouldReduceMotion;
}