'use client';

interface LoadingSkeletonProps {
  className?: string;
  rows?: number;
  height?: string;
}

export const LoadingSkeleton = ({ 
  className = "", 
  rows = 1, 
  height = "h-4" 
}: LoadingSkeletonProps) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className={`bg-gray-800/30 rounded ${height} ${i > 0 ? 'mt-2' : ''}`}
        />
      ))}
    </div>
  );
};

export const SkillSkeleton = () => (
  <div className="flex flex-wrap gap-4 justify-center">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="w-16 h-16 bg-gray-800/30 rounded-lg animate-pulse" />
    ))}
  </div>
);

export const CardSkeleton = () => (
  <div className="p-6 bg-gray-800/20 rounded-lg space-y-4 animate-pulse">
    <div className="h-6 bg-gray-800/30 rounded w-3/4" />
    <div className="h-4 bg-gray-800/30 rounded w-full" />
    <div className="h-4 bg-gray-800/30 rounded w-5/6" />
  </div>
);

export const ProjectSkeleton = () => (
  <div className="space-y-6 animate-pulse">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex gap-4 p-4 bg-gray-800/20 rounded-lg">
        <div className="w-20 h-20 bg-gray-800/30 rounded" />
        <div className="flex-1 space-y-2">
          <div className="h-5 bg-gray-800/30 rounded w-1/2" />
          <div className="h-4 bg-gray-800/30 rounded w-full" />
          <div className="h-4 bg-gray-800/30 rounded w-3/4" />
        </div>
      </div>
    ))}
  </div>
); 