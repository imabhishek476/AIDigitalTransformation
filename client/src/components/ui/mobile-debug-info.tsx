import { useState, useEffect } from 'react';

export function MobileDebugInfo() {
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      orientation: screen.orientation?.type,
      isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
      isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
      zoom: Math.round((window.outerWidth / window.innerWidth) * 100) / 100,
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };
    setDebugInfo(info);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white text-xs p-2 rounded max-w-xs z-50 opacity-80">
      <div>iOS: {debugInfo.isIOS ? 'Yes' : 'No'}</div>
      <div>Safari: {debugInfo.isSafari ? 'Yes' : 'No'}</div>
      <div>Screen: {debugInfo.screenWidth}x{debugInfo.screenHeight}</div>
      <div>Window: {debugInfo.innerWidth}x{debugInfo.innerHeight}</div>
      <div>Zoom: {debugInfo.zoom}x</div>
      <div>Pixel Ratio: {debugInfo.devicePixelRatio}</div>
      <div>Reduced Motion: {debugInfo.prefersReducedMotion ? 'Yes' : 'No'}</div>
      <div>Orientation: {debugInfo.orientation}</div>
    </div>
  );
}