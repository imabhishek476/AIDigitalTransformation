import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  aspectRatio?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  aspectRatio 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and fallback URLs
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'original' = 'webp') => {
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      const params = new URLSearchParams(originalSrc.split('?')[1] || '');
      
      if (format === 'webp') {
        params.set('fm', 'webp');
        params.set('q', '85');
      }
      
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      
      return `${baseUrl}?${params.toString()}`;
    }
    return originalSrc;
  };

  const webpSrc = getOptimizedSrc(src, 'webp');
  const fallbackSrc = getOptimizedSrc(src, 'original');

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {isInView && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={fallbackSrc}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      )}
      
      {/* Loading placeholder */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}