// Performance optimization utilities

// Lazy loading utility for images
export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, options);
};

// Debounce utility for scroll events
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

// Throttle utility for frequent events
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memory management for animations
export const reduceMotionForLowEnd = () => {
  // Check if device prefers reduced motion
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Check device performance capabilities
export const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;
  
  // Check for limited memory devices
  const connection = (navigator as any).connection;
  if (connection && connection.effectiveType) {
    return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
  }
  
  // Check hardware concurrency (CPU cores)
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
};

// Preload critical resources
export const preloadResource = (url: string, as: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  document.head.appendChild(link);
};

// Web Vitals monitoring
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;
  
  // Measure Largest Contentful Paint
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Measure First Input Delay
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });
}; 