import { useEffect } from 'react';
import { Z_INDICES, ensureStability } from '@/lib/layout-stability';

/**
 * Layout Guard Component - Prevents layout issues and ensures stability
 */
export function LayoutGuard() {
  useEffect(() => {
    // Initial stability check
    ensureStability.floatingElements();
    ensureStability.scrollElements();

    // Monitor for layout shifts
    const resizeObserver = new ResizeObserver(() => {
      ensureStability.floatingElements();
    });

    // Observe the body for changes
    resizeObserver.observe(document.body);

    // Clean scrollbar conflicts
    const style = document.createElement('style');
    style.textContent = `
      /* Prevent competing scroll elements */
      .competing-scroll-element {
        display: none !important;
      }
      
      /* Ensure single scroll-to-top */
      [class*="scroll-to-top"]:not(:last-of-type) {
        display: none !important;
      }
      
      /* Stabilize floating elements */
      .floating-element {
        transform: translateZ(0);
        backface-visibility: hidden;
      }
    `;
    document.head.appendChild(style);

    return () => {
      resizeObserver.disconnect();
      style.remove();
    };
  }, []);

  return null;
}