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

const words = ["the best", "innovative", "seamless", "top-notch", "quality"];

export const HeroContent = () => {

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < words[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(words[index].slice(0, displayed.length + 1));
        }, 90); // typing speed
      } else {
        timeout = setTimeout(() => setTyping(false), 1200); // pause before erasing
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(words[index].slice(0, displayed.length - 1));
        }, 30); // erasing speed
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);



  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            V-Accel AI Dynamics
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block min-w-[220px]">
              <AnimatePresence mode="wait">
                <m.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
                  className="inline-block"
                >
                  {displayed}
                </m.span>
              </AnimatePresence>
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Chennai's Leading AI Machine Learning Company.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

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
    </motion.div>
  );
};
