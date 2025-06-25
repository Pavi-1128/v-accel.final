"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useEffect, useState } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px', // Load earlier
  });

  useEffect(() => {
    // Disable animations on low-end devices
    const isLowEnd = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const deviceMemory = (navigator as any).deviceMemory;
      return isMobile || prefersReducedMotion || (deviceMemory && deviceMemory < 4);
    };
    
    setShouldAnimate(!isLowEnd());
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: shouldAnimate ? 0.3 : 0.1,
        delay: shouldAnimate ? index * 0.05 : 0, // Reduce stagger delay
        ease: "easeOut"
      }
    },
  };

  // Ensure proper image path with leading slash
  const imageSrc = src.startsWith('/') ? src : `/skills/${src}`;

  // For very low-end devices, don't animate at all
  if (!shouldAnimate) {
    return (
      <div ref={ref} className="opacity-100">
        <OptimizedImage
          src={imageSrc}
          alt={name}
          width={width}
          height={height}
          className="max-w-full h-auto"
          priority={index < 6} // Prioritize first 6 images
          quality={75}
        />
      </div>
    );
  }
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      className="will-change-transform" // Optimize for animations
    >
      <OptimizedImage
        src={imageSrc}
        alt={name}
        width={width}
        height={height}
        className="max-w-full h-auto"
        priority={index < 6} // Prioritize first 6 images
        quality={75}
      />
    </motion.div>
  );
};
