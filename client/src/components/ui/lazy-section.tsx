import { useLazyLoad } from '@/hooks/use-lazy-load';
import { ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function LazySection({ 
  children, 
  fallback = null, 
  className = "",
  threshold = 0.1,
  rootMargin = "100px"
}: LazySectionProps) {
  const { elementRef, isInView } = useLazyLoad({ threshold, rootMargin });

  return (
    <div ref={elementRef} className={className}>
      {isInView ? children : fallback}
    </div>
  );
}