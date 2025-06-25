
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
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 min-[2560px]:px-64 mt-20 md:mt-40 min-[2560px]:mt-64 w-full z-[20] gap-8 md:gap-0 min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto"
      >
        {/* Image Section */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={650}
            width={650}
            draggable={false}
            className="select-none w-full max-w-[400px] lg:max-w-[550px] xl:max-w-[650px] min-[2560px]:max-w-[900px] h-auto object-contain"
          />
        </motion.div>

        {/* Content Section */}
       <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-7 min-[2560px]:gap-12 justify-center text-center lg:text-start lg:ml-8 lg:ml-15">
          {/* Main Heading */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 sm:gap-6 lg:gap-7 mt-4 sm:mt-8 md:mt-15 md:pt-20 
           text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl min-[2560px]:text-8xl font-extrabold text-white 
           max-w-full md:max-w-[600px] min-[2560px]:max-w-[1000px] leading-tight min-[2560px]:leading-[1.1]"
          >
            <span className="break-words">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 
                             inline-block min-w-[100px] sm:min-w-[140px] lg:min-w-[220px] min-[2560px]:min-w-[350px]">
                Touch
              </span>
              <br />
              with us
            </span>
          </motion.div>

          {/* Contact Points */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-sm sm:text-base lg:text-lg min-[2560px]:text-2xl text-gray-400 max-w-full md:max-w-[600px] min-[2560px]:max-w-[900px] px-4 sm:px-0"
            >
              Let&apos;s discuss your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
                Vision
              </span>
            </motion.p>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-sm sm:text-base lg:text-lg min-[2560px]:text-2xl text-gray-400 max-w-full md:max-w-[600px] min-[2560px]:max-w-[900px] px-4 sm:px-0"
            >
              We&apos;re here to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
                Support
              </span>
            </motion.p>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-sm sm:text-base lg:text-lg min-[2560px]:text-2xl text-gray-400 max-w-full md:max-w-[600px] min-[2560px]:max-w-[900px] px-4 sm:px-0"
            >
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
                Connect
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
              className="py-2 sm:py-3 px-6 sm:px-8 min-[2560px]:py-6 min-[2560px]:px-12 button-primary text-center text-white 
                         cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] min-[2560px]:max-w-[300px]
                         text-sm sm:text-base min-[2560px]:text-xl font-medium
                         hover:scale-105 transition-transform duration-200
                         inline-block"
            >
              Let&apos;s Connect
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Popup Component */}
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};