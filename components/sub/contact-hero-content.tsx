"use client";

import { SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import ContactPopup from "@/components/main/contactpopup";

import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const ContactHeroContent = () => {
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
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 md:mt-40 w-full z-[20] gap-8 md:gap-0 min-[2560px]:px-64 min-[2560px]:mt-64 min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto min-[2560px]:gap-24"
    >
      {/* Content Section */}
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 justify-center text-center lg:text-start min-[2560px]:gap-8">
        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white max-w-full md:max-w-[800px] leading-tight min-[2560px]:gap-6 min-[2560px]:mt-12 min-[2560px]:text-8xl min-[2560px]:leading-[1.1] min-[2560px]:max-w-[1000px]"
        >
          <div>
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Touch</span>
          </div>
          <div>
            with us
          </div>
        </motion.div>
        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 my-4 sm:my-6 max-w-full md:max-w-[700px] px-4 sm:px-0 min-[2560px]:text-3xl min-[2560px]:my-10 min-[2560px]:max-w-[1000px]"
        >
          Let&apos;s discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">Vision</span>.<br/>
          We&apos;re here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">Support</span>.<br/>
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">Connect</span>.
        </motion.p>
        {/* CTA Button */}
        <motion.div 
          variants={slideInFromLeft(1)}
          className="flex justify-center lg:justify-start mt-4 sm:mt-6 min-[2560px]:mt-12"
        >
          <button
            onClick={handleConnect}
            className="py-2 sm:py-3 px-6 sm:px-8 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] text-sm sm:text-base font-medium hover:scale-105 transition-transform duration-200 inline-block min-[2560px]:py-6 min-[2560px]:px-12 min-[2560px]:max-w-[300px] min-[2560px]:text-xl"
          >
            Let&apos;s Connect
          </button>
        </motion.div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
      {/* Image Section - Hidden on mobile, visible on md+ screens */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
      >
        <Image
          src="/work/JAVA.png"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[400px] lg:max-w-[550px] xl:max-w-[650px] h-auto object-contain min-[2560px]:max-w-[900px]"
        />
      </motion.div>
    </motion.div>
  );
};