"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const solutions = [
  {
    title: 'Machine Learning',
    description: 'Build intelligent predictive models'
  },
  {
    title: 'Natural Language Processing',
    description: 'Process and understand human language'
  },
  {
    title: 'Computer Vision',
    description: 'Analyze and interpret visual data'
  },
  {
    title: 'Deep Learning',
    description: 'Create complex neural networks'
  },
  {
    title: 'AI Chatbots',
    description: 'Build intelligent conversational agents'
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and patterns'
  },
  {
    title: 'Recommendation Systems',
    description: 'Personalize user experiences'
  },
  {
    title: 'AI Automation',
    description: 'Streamline business processes'
  },
  {
    title: 'Data Mining',
    description: 'Extract valuable insights'
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

export const AiSolutionsContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 mt-20 md:mt-32 lg:mt-40 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0.2)}
        className="flex flex-col items-center gap-5 sm:gap-7 max-w-full md:max-w-[800px] text-center"
      >
        <motion.h2
          variants={slideInFromTop(0.4)}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
        >
          Harness the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Artificial Intelligence</span>. We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Intelligent</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Innovative</span> Solutions.
        </motion.h2>

        <motion.p
          variants={slideInFromTop(0.6)}
          className="text-base sm:text-lg text-gray-400 font-semibold"
        >
          From machine learning to deep learning, we help you leverage AI to transform your business.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-full md:max-w-[900px] mt-6 md:mt-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-4 sm:p-5 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[150px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <span className="text-lg sm:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-1 sm:mb-2">
                {solution.title}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 text-center">
                {solution.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AiSolutionsContent;