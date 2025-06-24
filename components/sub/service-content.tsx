"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";


export const ServiceContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Image first */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>

      {/* Content second */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-15 pt-25 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block min-w-[220px]">
              that empower
            </span>{" "}
            your business.
          </span>
        </motion.div>

        <motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg text-gray-400 my-0 max-w-[600px]"
>
  Code with{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
    confidence
  </span>
  .
</motion.p>

<motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg text-gray-400 my-0 max-w-[600px]"
>
  Click With{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
    Precision
  </span>
  .
</motion.p>

<motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg text-gray-400 my-0 max-w-[600px]"
>
  Convert with{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
    Conviction
  </span>
  .
</motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Explore Services
        </motion.a>
      </div>
    </motion.div>
  );
};