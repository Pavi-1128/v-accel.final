import type { Variants } from "framer-motion";

// Check if user prefers reduced motion or is on a low-end device
const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  const isLowEnd = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  
  return prefersReducedMotion || (isMobile && isLowEnd);
};

// Optimized slide animations with reduced complexity
export const slideInFromLeft = (delay: number): Variants => {
  const reduced = shouldReduceMotion();
  
  return {
    hidden: { 
      x: reduced ? 0 : -100, 
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: reduced ? "tween" : "spring",
        mass: reduced ? 1 : 0.8,
        stiffness: reduced ? 100 : 100,
        damping: reduced ? 40 : 40,
        delay: reduced ? delay * 0.5 : delay, // Faster on low-end devices
      },
    },
  };
};

export const slideInFromRight = (delay: number): Variants => {
  const reduced = shouldReduceMotion();
  
  return {
    hidden: { 
      x: reduced ? 0 : 100, 
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: reduced ? "tween" : "spring",
        mass: reduced ? 1 : 0.8,
        stiffness: reduced ? 100 : 100,
        damping: reduced ? 40 : 40,
        delay: reduced ? delay * 0.5 : delay,
      },
    },
  };
};

export const slideInFromTop = (delay: number = 0): Variants => {
  const reduced = shouldReduceMotion();
  
  return {
    hidden: { 
      y: reduced ? 0 : -100, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: reduced ? "tween" : "spring",
        mass: reduced ? 1 : 0.8,
        stiffness: reduced ? 100 : 120,
        damping: reduced ? 40 : 40,
        delay: reduced ? delay * 0.5 : delay,
      },
    },
  };
};

export const slideInFromBottom = (delay: number): Variants => {
  const reduced = shouldReduceMotion();
  
  return {
    hidden: { 
      y: reduced ? 0 : 100, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: reduced ? "tween" : "spring",
        mass: reduced ? 1 : 0.8,
        stiffness: reduced ? 100 : 100,
        damping: reduced ? 40 : 40,
        delay: reduced ? delay * 0.5 : delay,
      },
    },
  };
};

// Simple fade animation for very low-end devices
export const simpleFade = (delay: number = 0): Variants => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay * 0.3,
        ease: "easeOut"
      },
    },
  };
};
