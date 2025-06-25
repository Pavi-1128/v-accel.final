import { DevOpsContent } from "../sub/devops-content";

export const DevOpsHero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
       className="hidden sm:block rotate-180 absolute top-[-370px] min-[2560px]:top-[-320px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

             <DevOpsContent />
    </div>
  );
}; 