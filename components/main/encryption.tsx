
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20 px-4 sm:px-6 md:px-8
                    min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto min-[2560px]:px-32">
      {/* Main title */}
      <div className="absolute w-auto h-auto top-4 sm:top-6 md:top-8 lg:top-12 xl:top-16 z-[5]
                      min-[2560px]:top-24">
        <motion.div
          variants={slideInFromTop(0.5)}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center text-gray-200 px-2
                     min-[2560px]:text-8xl min-[2560px]:px-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Performance{" "}
          </span>
          <span>&</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Security
          </span>
        </motion.div>
      </div>

      {/* Lock animation and encryption box */}
      <div className="flex flex-col items-center justify-center translate-y-[-20px] sm:translate-y-[-30px] md:translate-y-[-40px] lg:translate-y-[-50px] absolute z-[20] w-auto h-auto
                      min-[2560px]:translate-y-[-80px]">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 translate-y-3 sm:translate-y-4 md:translate-y-5 transition-all duration-200 group-hover:translate-y-6 sm:group-hover:translate-y-8 md:group-hover:translate-y-11
                       min-[2560px]:w-24 min-[2560px]:h-24 min-[2560px]:translate-y-8 min-[2560px]:group-hover:translate-y-16"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={56}
            height={56}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 z-10
                       min-[2560px]:w-28 min-[2560px]:h-28"
          />
        </div>

        <div className="Welcome-box px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 z-[20] border my-4 sm:my-5 md:my-6 lg:my-8 border-[#7042F88B] opacity-[0.9] rounded
                        min-[2560px]:px-12 min-[2560px]:py-8 min-[2560px]:my-12">
          <h1 className="Welcome-text text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 font-medium
                         min-[2560px]:text-3xl">
            Encryption
          </h1>
        </div>
      </div>

      {/* Bottom description */}
      <div className="absolute z-[20] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 px-4 sm:px-6 md:px-8
                      min-[2560px]:bottom-24 min-[2560px]:px-32">
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center text-gray-300 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed
                        min-[2560px]:text-4xl min-[2560px]:max-w-5xl min-[2560px]:leading-relaxed">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      {/* Background video */}
      <div className="w-full flex items-start justify-center absolute inset-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};