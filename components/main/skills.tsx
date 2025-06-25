"use client";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { useEffect, useState } from "react";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
} from "@/constants";

export const Skills = () => {
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  useEffect(() => {
    // Only show video on high-performance devices
    const isHighPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      
      return !isMobile && !prefersReducedMotion && deviceMemory >= 8 && hardwareConcurrency >= 8;
    };

    setShouldShowVideo(isHighPerformance());
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 h-full relative overflow-hidden 
                 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24
                 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                 scale-75 sm:scale-85 md:scale-90 lg:scale-95 xl:scale-100
                 min-[2560px]:gap-8 min-[2560px]:py-32 min-[2560px]:px-32 min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto"
    >
      <SkillText />

      {/* Main Skills */}
      {/* <div className="flex flex-row justify-center flex-wrap 
                      mt-2 sm:mt-3 md:mt-4 
                      gap-2 sm:gap-3 md:gap-4 lg:gap-5 
                      items-center w-full max-w-7xl">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div> */}

      {/* Frontend Skills */}
      <div className="flex flex-row justify-center flex-wrap 
                      mt-2 sm:mt-3 md:mt-4 
                      gap-2 sm:gap-3 md:gap-4 lg:gap-5 
                      items-center w-full max-w-7xl
                      min-[2560px]:mt-8 min-[2560px]:gap-8 min-[2560px]:max-w-[2000px]">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Backend Skills */}
      <div className="flex flex-row justify-center flex-wrap 
                      mt-2 sm:mt-3 md:mt-4 
                      gap-2 sm:gap-3 md:gap-4 lg:gap-5 
                      items-center w-full max-w-7xl
                      min-[2560px]:mt-8 min-[2560px]:gap-8 min-[2560px]:max-w-[2000px]">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Fullstack Skills */}
      <div className="flex flex-row justify-center flex-wrap 
                      mt-2 sm:mt-3 md:mt-4 
                      gap-2 sm:gap-3 md:gap-4 lg:gap-5 
                      items-center w-full max-w-7xl
                      min-[2560px]:mt-8 min-[2560px]:gap-8 min-[2560px]:max-w-[2000px]">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Other Skills */}
      <div className="flex flex-row justify-center flex-wrap 
                      mt-2 sm:mt-3 md:mt-4 
                      gap-2 sm:gap-3 md:gap-4 lg:gap-5 
                      items-center w-full max-w-7xl
                      min-[2560px]:mt-8 min-[2560px]:gap-8 min-[2560px]:max-w-[2000px]">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Background Video - Only on high-performance devices */}
      {shouldShowVideo && (
        <div className="w-full h-full absolute inset-0">
          <div className="w-full h-full z-[-10] opacity-10 
                          absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-full object-cover"
              preload="none"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/videos/skills-bg.webm" type="video/webm" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};