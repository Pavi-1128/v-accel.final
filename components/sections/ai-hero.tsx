import { AiContent } from "@/components/sub/ai-content";

export const AIHero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden sm:block rotate-180 absolute top-[-375px] min-[2560px]:top-[-320px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
           <AiContent/>
    </div>
  );
}; 