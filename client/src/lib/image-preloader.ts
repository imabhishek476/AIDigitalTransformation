// Preload critical images for better performance
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Get optimized Unsplash URL
export const getOptimizedImageUrl = (
  src: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'auto';
  } = {}
): string => {
  if (!src.includes('unsplash.com')) return src;
  
  const { width, height, quality = 85, format = 'webp' } = options;
  const baseUrl = src.split('?')[0];
  const params = new URLSearchParams();
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('fm', format);
  params.set('fit', 'crop');
  
  return `${baseUrl}?${params.toString()}`;
};

// Critical images to preload on page load
export const CRITICAL_IMAGES = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&fm=webp&q=85'
];