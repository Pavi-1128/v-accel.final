'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fallbackSrc, setFallbackSrc] = useState(src);

  // Default blur placeholder
  const defaultBlurDataURL = 
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAbhGh8=';

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setIsLoading(false);
      
      // Try fallback to original image if optimized version fails
      if (fallbackSrc.includes('optimized-')) {
        const originalSrc = fallbackSrc.replace('optimized-', '').replace('.webp', '.png');
        setFallbackSrc(originalSrc);
        setHasError(false);
        setIsLoading(true);
        return;
      }
    } else {
      setIsLoading(false);
    }
  };

  if (hasError) {
    return (
      <div className={cn('bg-gray-800/20 rounded flex items-center justify-center', className)}>
        <span className="text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          objectFit: 'cover',
        }}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800/20 animate-pulse rounded" />
      )}
    </div>
  );
}; 