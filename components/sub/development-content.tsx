
"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const stacks = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'TailwindCSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'NestJS'] },
  { title: 'Mobile Apps', items: ['Flutter', 'React Native'] },
  { title: 'APIs', items: ['REST', 'GraphQL'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'Cloud', items: ['AWS', 'Azure'] },
  { title: 'Authentication', items: ['JWT', 'OAuth2'] },
  { title: 'Hosting', items: ['Vercel', 'AWS Elastic Beanstalk'] },
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

export const DevelopmentContent = () => {
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
      {/* Content section - appears first on mobile */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 min-[2560px]:gap-10 justify-center text-center lg:text-left order-1 lg:order-2">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl min-[2560px]:text-8xl 
                     font-extrabold text-white max-w-full min-[2560px]:max-w-[1000px]
                     leading-tight min-[2560px]:leading-[1.1]"
        >
          <span>
            Custom Software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 
                           inline-block min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] min-[2560px]:min-w-[450px]">
              Development
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-2 px-2 min-[2560px]:py-4 min-[2560px]:px-4 
                     border border-[#7042f88b] opacity-90 flex items-center justify-center lg:justify-start 
                     w-fit mx-auto lg:mx-0 mb-4 lg:mb-6 min-[2560px]:mb-10"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 min-[2560px]:h-8 min-[2560px]:w-8 min-[2560px]:mr-4" />
          <h1 className="text-sm sm:text-[13px] min-[2560px]:text-xl text-[#b49bff]">V-Accel AI Dynamics</h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg min-[2560px]:text-2xl text-gray-400 font-semibold 
                     max-w-[600px] min-[2560px]:max-w-[900px] mx-auto lg:mx-0"
        >
          Revolutionize Your Operations: Transform with Software Tailored to Your Needs.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg min-[2560px]:text-2xl text-gray-400 
                     max-w-[600px] min-[2560px]:max-w-[900px] mx-auto lg:mx-0"
        >
          Build with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Innovation
          </span>.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg min-[2560px]:text-2xl text-gray-400 
                     max-w-[600px] min-[2560px]:max-w-[900px] mx-auto lg:mx-0"
        >
          Scale with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Excellence
          </span>.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg min-[2560px]:text-2xl text-gray-400 
                     max-w-[600px] min-[2560px]:max-w-[900px] mx-auto lg:mx-0"
        >
          Grow with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Technology
          </span>.
        </motion.p>
      </div>

      {/* Cards Grid - appears second on mobile, right side on desktop */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1 mt-10 lg:mt-0"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-5 min-[2560px]:gap-8 
                        max-w-[280px] sm:max-w-[400px] md:max-w-[500px] min-[2560px]:max-w-[700px] w-full">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl 
                         p-3 sm:p-4 min-[2560px]:p-8 flex flex-col items-center justify-center 
                         min-h-[130px] min-[2560px]:min-h-[200px] 
                         transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 
                         hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <div className="text-sm sm:text-base min-[2560px]:text-2xl font-bold mb-2 min-[2560px]:mb-4 
                              text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {stack.title}
              </div>
              <ul className="flex flex-col gap-1 min-[2560px]:gap-2 items-center justify-center">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm min-[2560px]:text-lg font-medium text-white/90 text-center"
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