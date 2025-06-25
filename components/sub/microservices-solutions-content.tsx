"use client";

import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/lib/motion";

const solutions = [
  {
    title: 'Service Architecture',
    description: 'Design scalable microservices'
  },
  {
    title: 'API Gateway',
    description: 'Manage service communication'
  },
  {
    title: 'Service Discovery',
    description: 'Locate and connect services'
  },
  {
    title: 'Load Balancing',
    description: 'Distribute traffic efficiently'
  },
  {
    title: 'Circuit Breaking',
    description: 'Handle service failures gracefully'
  },
  {
    title: 'Event-Driven Architecture',
    description: 'Build reactive systems'
  },
  {
    title: 'Service Mesh',
    description: 'Manage service-to-service communication'
  },
  {
    title: 'Distributed Tracing',
    description: 'Monitor service interactions'
  },
  {
    title: 'Container Orchestration',
    description: 'Deploy and scale services'
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

export const MicroservicesSolutionsContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0.2)}
        className="flex flex-col items-center gap-7 max-w-[800px] text-center"
      >
        <motion.h2
          variants={slideInFromTop(0.4)}
          className="text-4xl font-extrabold text-white"
        >
          Build Scalable Systems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Microservices</span>. We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Resilient</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Flexible</span> Architectures.
        </motion.h2>

        <motion.p
          variants={slideInFromTop(0.6)}
          className="text-lg text-gray-400 font-semibold"
        >
          From service design to deployment, we help you build robust microservices architectures.
        </motion.p>

        <div className="grid grid-cols-3 gap-3 w-full max-w-[900px] mt-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-5 flex flex-col items-center justify-center min-h-[150px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <span className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                {solution.title}
              </span>
              <span className="text-sm text-gray-400 text-center">
                {solution.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}; 