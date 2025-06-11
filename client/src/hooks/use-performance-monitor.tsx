import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
}

export function usePerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const metrics: PerformanceMetrics = {};

    // Measure First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (entry.processingStart) {
          metrics.fid = entry.processingStart - entry.startTime;
        }
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // First input delay not supported in all browsers
    }

    // Measure Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metrics.cls = clsValue;
        }
      });
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Log metrics after page load
    setTimeout(() => {
      console.log('Performance Metrics:', metrics);
    }, 5000);

    return () => {
      observer.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);
}