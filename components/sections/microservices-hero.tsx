import { MicroservicesContent } from "../sub/microservices-content";

export const MicroservicesHero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-360px] min-[2560px]:top-[-400px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <MicroservicesContent />
    </div>
  );
}; 