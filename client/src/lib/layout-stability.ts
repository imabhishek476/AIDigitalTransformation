/**
 * Layout Stability System
 * Prevents layout shifts and ensures consistent component behavior
 */

// Z-index management constants
export const Z_INDICES = {
  LAYOUT: 1,
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
} as const;

// Prevent layout shift utility
export const preventLayoutShift = (element: HTMLElement) => {
  element.style.willChange = 'transform';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
};

// Throttled scroll handler
export const createThrottledScrollHandler = (callback: () => void, delay = 16) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Safe element positioning
export const safePosition = {
  absolute: (element: HTMLElement, position: { top?: string; right?: string; bottom?: string; left?: string }) => {
    element.style.position = 'absolute';
    Object.entries(position).forEach(([key, value]) => {
      if (value !== undefined) {
        element.style[key as any] = value;
      }
    });
  },
  
  fixed: (element: HTMLElement, position: { top?: string; right?: string; bottom?: string; left?: string }, zIndex = Z_INDICES.FIXED) => {
    element.style.position = 'fixed';
    element.style.zIndex = zIndex.toString();
    Object.entries(position).forEach(([key, value]) => {
      if (value !== undefined) {
        element.style[key as any] = value;
      }
    });
  }
};

// Component stability checker
export const ensureStability = {
  floatingElements: () => {
    const floatingElements = document.querySelectorAll('[class*="absolute"], [class*="fixed"]');
    floatingElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        preventLayoutShift(element);
      }
    });
  },
  
  scrollElements: () => {
    const scrollElements = document.querySelectorAll('[class*="scroll"]');
    scrollElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.scrollBehavior = 'smooth';
      }
    });
  }
};

// Initialize stability system
export const initializeLayoutStability = () => {
  // Ensure all floating elements are stable
  ensureStability.floatingElements();
  ensureStability.scrollElements();
  
  // Observe for new elements
  const observer = new MutationObserver(() => {
    ensureStability.floatingElements();
    ensureStability.scrollElements();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });
  
  return () => observer.disconnect();
};