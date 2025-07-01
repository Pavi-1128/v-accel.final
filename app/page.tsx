import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { SkillSkeleton, CardSkeleton, ProjectSkeleton } from '@/components/ui/loading-skeleton';

// Lazy load heavy components with optimized loading states
const Encryption = dynamic(() => import('@/components/main/encryption').then(mod => ({ default: mod.Encryption })), {
  ssr: false,
  loading: () => <CardSkeleton />
});

const Hero = dynamic(() => import('@/components/main/hero').then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="h-screen bg-gradient-to-b from-gray-900/50 to-gray-800/50 animate-pulse" />
});

const HomePage = dynamic(() => import('@/components/main/homeSection').then(mod => ({ default: mod.HomePage })), {
  ssr: false,
  loading: () => <CardSkeleton />
});

const Projects = dynamic(() => import('@/components/main/projects').then(mod => ({ default: mod.Projects })), {
  loading: () => <ProjectSkeleton />
});

const Skills = dynamic(() => import('@/components/main/skills').then(mod => ({ default: mod.Skills })), {
  loading: () => <SkillSkeleton />
});

const AISaasBundle = dynamic(() => import('@/components/main/aiSaasBundle'), {
  ssr: false,
  loading: () => <CardSkeleton />
});

const AwardSection = dynamic(() => import('@/components/main/awardSection').then(mod => ({ default: mod.AwardSection })), {
  ssr: false,
  loading: () => <CardSkeleton />
});

const VisionFace = dynamic(() => import('@/components/main/vision-face').then(mod => ({ default: mod.VisionFace })), {
  ssr: false,
  loading: () => <CardSkeleton />
});

export default function Home() {
  return (
    <main className="h-full w-full overflow-hidden  ">
      <div className="flex flex-col 
                      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 min-[2560px]:gap-24
                      px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 min-[2560px]:px-32
                      max-w-screen-2xl min-[2560px]:max-w-[2400px] mx-auto">
        
        <Suspense fallback={<div className="h-screen bg-gradient-to-b from-gray-900/50 to-gray-800/50 animate-pulse" />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<CardSkeleton />}>
          <AISaasBundle />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <VisionFace />
        </Suspense>
        
        <Suspense fallback={<CardSkeleton />}>
          <AwardSection />
        </Suspense>
        
        <Suspense fallback={<SkillSkeleton />}>
          <Skills />
        </Suspense>
        
        {/* <Encryption /> */}
        
        <Suspense fallback={<ProjectSkeleton />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<CardSkeleton />}>
          <HomePage />
        </Suspense>
      </div>
    </main>
  );
}
