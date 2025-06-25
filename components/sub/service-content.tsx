"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import ContactPopup from "@/components/main/contactpopup";

export const ServiceContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleConnect = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center 
                 px-4 sm:px-8 lg:px-20 min-[2560px]:px-64
                 mt-20 md:mt-40 min-[2560px]:mt-64
                 w-full z-[20] gap-8 md:gap-0 min-[2560px]:gap-16
                 min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto"
    >
      {/* Image Section - Hidden on mobile, visible on md+ screens */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
      >
        <Image
          src="/work/Untitled design (2).svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[400px] lg:max-w-[550px] xl:max-w-[650px] 
                     min-[2560px]:max-w-[800px]
                     h-auto object-contain"
        />
      </motion.div>

      {/* Content Section */}
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-7 min-[2560px]:gap-10 justify-center text-center lg:text-start lg:ml-8 lg:ml-15 min-[2560px]:ml-20">
        
        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 lg:gap-7 min-[2560px]:gap-10 mt-4 sm:mt-8 md:mt-15 md:pt-20 min-[2560px]:pt-32
                     text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl min-[2560px]:text-8xl
                     font-bold text-white 
                     max-w-full md:max-w-[600px] min-[2560px]:max-w-[1000px] 
                     leading-tight min-[2560px]:leading-[1.1]"
        >
          <span className="break-words">
            The V-Accel  {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 
                           inline-block min-w-[140px] sm:min-w-[180px] lg:min-w-[220px] min-[2560px]:min-w-[350px]">
               Services that empower
            </span>{" "}
            your business
          </span>
        </motion.div>

        {/* Service Points */}
        <div className="flex flex-col gap-3 sm:gap-4 min-[2560px]:gap-6">
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm sm:text-base lg:text-lg min-[2560px]:text-2xl text-gray-400 max-w-full md:max-w-[600px] min-[2560px]:max-w-[900px]"
          >
            Code with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
              Confidence
            </span>
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm sm:text-base lg:text-lg min-[2560px]:text-2xl text-gray-400 max-w-full md:max-w-[600px] min-[2560px]:max-w-[900px]"
          >
            Click With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
              Precision
            </span>
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm sm:text-base lg:text-lg min-[2560px]:text-2xl text-gray-400 max-w-full md:max-w-[600px] min-[2560px]:max-w-[900px]"
          >
            Convert with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
              Conviction
            </span>
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div 
          variants={slideInFromLeft(1)}
          className="flex justify-center lg:justify-start mt-4 sm:mt-6 min-[2560px]:mt-12"
        >
          <button
            onClick={handleConnect}
            className="py-2 sm:py-3 px-6 sm:px-8 min-[2560px]:py-6 min-[2560px]:px-12 
                       button-primary text-center text-white 
                       cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] min-[2560px]:max-w-[300px]
                       text-sm sm:text-base min-[2560px]:text-xl font-medium
                       hover:scale-105 transition-transform duration-200
                       inline-block"
          >
            Let&apos;s Connect
          </button>
        </motion.div>
      </div>

      {/* Contact Popup Component */}
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </motion.div>
  );
};