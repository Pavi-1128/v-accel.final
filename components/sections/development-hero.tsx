import { DevelopmentContent } from "../sub/development-content";

export const DevelopmentHero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Hide video on mobile using 'hidden sm:block' */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden sm:block rotate-180 absolute top-[-370px] min-[2560px]:top-[-520px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <DevelopmentContent />
    </div>
  );
};