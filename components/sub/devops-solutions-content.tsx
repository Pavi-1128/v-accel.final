"use client";

import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/lib/motion";

const solutions = [
  {
    title: 'CI/CD Pipeline',
    description: 'Automate your development workflow'
  },
  {
    title: 'Container Orchestration',
    description: 'Manage and scale containerized applications'
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automate infrastructure deployment'
  },
  {
    title: 'Cloud Migration',
    description: 'Seamlessly move to the cloud'
  },
  {
    title: 'Monitoring & Logging',
    description: 'Track performance and troubleshoot issues'
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure secure and compliant operations'
  },
  {
    title: 'Disaster Recovery',
    description: 'Protect your business continuity'
  },
  {
    title: 'Performance Optimization',
    description: 'Maximize system efficiency'
  },
  {
    title: 'DevOps Automation',
    description: 'Streamline operations and deployment'
  }
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

export const DevOpsSolutionsContent = () => {

 return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-14 lg:px-20 mt-20 lg:mt-60 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0.2)}
        className="flex flex-col items-center gap-6 lg:gap-8 max-w-[1200px] text-center lg:text-left"
      >
        <motion.h2
          variants={slideInFromTop(0.4)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
           Streamline Your Operations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">DevOps</span>. We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Efficient</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Reliable</span> Solutions.
        </motion.h2>

        <motion.p
          variants={slideInFromTop(0.6)}
          className="text-base sm:text-lg text-gray-400 font-semibold max-w-[800px]"
        >
            From CI/CD to cloud infrastructure, we help you optimize your development and operations.
        </motion.p>

        {/* Responsive grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 w-full max-w-[1200px]">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-4 sm:p-5 flex flex-col items-center justify-center min-h-[150px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <span className="text-lg sm:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                {solution.title}
              </span>
              <span className="text-sm sm:text-base text-gray-400 text-center">
                {solution.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
