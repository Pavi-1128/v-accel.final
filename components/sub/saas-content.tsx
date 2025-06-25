"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const stacks = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Authentication',
    items: ['JWT', 'OAuth2', 'SSO'],
  },
  {
    title: 'Payment',
    items: ['Stripe', 'PayPal', 'Square'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure', 'GCP'],
  },
  {
    title: 'Analytics',
    items: ['Mixpanel', 'Amplitude', 'GA4'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'CI/CD'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export const SaasContent = () => {
return (
    <motion.div
      initial="hidden"
      animate="visible"
       className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 md:mt-40 w-full z-[20] gap-8 md:gap-0"
    >
      {/* Content section - appears first on mobile */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center text-center lg:text-left order-1 lg:order-2">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
        >
          <span>
             SaaS Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block">
              Development
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-90 flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0 mb-4 lg:mb-6"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="text-sm sm:text-[13px] text-[#b49bff] ">V-Accel AI Dynamics</h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 font-semibold max-w-[600px] mx-auto lg:mx-0"
        >
          Transform Your Business: Build Scalable SaaS Solutions That Drive Growth.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 max-w-[600px] mx-auto lg:mx-0"
        >
           Launch with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Speed
          </span>.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 max-w-[600px] mx-auto lg:mx-0"
        >
          Scale with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Confidence
          </span>.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 max-w-[600px] mx-auto lg:mx-0"
        >
          Grow with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Innovation
          </span>.
        </motion.p>
      </div>

      {/* Cards Grid - appears second on mobile, right side on desktop */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1 mt-10 lg:mt-0"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] w-full">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-3 sm:p-4 flex flex-col items-center justify-center min-h-[130px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <div className="text-sm sm:text-base font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {stack.title}
              </div>
              <ul className="flex flex-col gap-1 items-center justify-center">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm font-medium text-white/90 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
