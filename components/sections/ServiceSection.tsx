
"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

interface ServiceSectionProps {
  title: string;
  subheading?: string;
  description: string;
  image?: string;
  link?: string;
  points?: readonly string[];
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subheading,
  description,
  image,
  link,
  points,
}) => (
  <section className="relative min-h-auto flex items-start bg-red w-full 
                     px-4 min-[2560px]:px-8 
                     py-8 min-[2560px]:py-16 
                     z-10">
    <div className="relative mt-20 min-[2560px]:mt-32 
                    w-full max-w-7xl min-[2560px]:max-w-[2000px] 
                    min-h-[60vh] min-[2560px]:min-h-[70vh] 
                    rounded-2xl min-[2560px]:rounded-3xl 
                    overflow-hidden flex items-center group 
                    shadow-2px bg-gray-900/50 backdrop-blur-sm border border-white/20
                    hover:shadow-4xl hover:border-white/30 transition-all duration-500 ease-in-out
                    hover:scale-[1.02] lg:hover:scale-[1.01]">
      
      {/* Background image with proper z-index control */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full opacity-20 lg:group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          {image && (
            <motion.img
              src={image}
              alt={title}
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                 transition: { duration: 1, ease: "easeInOut" }
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Overlay gradients - only on larger screens */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/60 to-black/40 
                          hidden xl:block
                          group-hover:from-black/10 group-hover:via-gray-900/40 group-hover:to-black/20
                          transition-all duration-700 ease-in-out" />
          {/* Content background overlay - only on larger screens */}
          <div className="absolute inset-4 xl:inset-14 min-[2560px]:inset-20 
                          bg-gray-900/85 backdrop-blur-sm 
                          rounded-2xl min-[2560px]:rounded-3xl 
                          border border-white/10 hidden xl:block
                          group-hover:bg-gray-900/70 group-hover:border-white/20
                          transition-all duration-700 ease-in-out" />
        </div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-30 flex flex-col lg:flex-row items-center justify-between h-full w-full 
                   p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-16 min-[2560px]:p-24 
                   gap-6 lg:gap-8 min-[2560px]:gap-16 
                   overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full lg:w-auto 
                        lg:max-w-[60%] xl:max-w-[65%] min-[2560px]:max-w-[70%] 
                        lg:p-4 min-[2560px]:p-8">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl min-[2560px]:text-7xl 
                       font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 
                       inline-block mb-3 lg:mb-4 xl:mb-6 min-[2560px]:mb-10 
                       text-center lg:text-left w-full lg:w-auto 
                       leading-tight min-[2560px]:leading-[1.1]"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          
          {subheading && (
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl min-[2560px]:text-4xl 
                         font-bold text-white mb-3 lg:mb-4 xl:mb-6 min-[2560px]:mb-8 
                         text-center lg:text-left w-full lg:w-auto leading-tight"
              variants={itemVariants}
            >
              {subheading}
            </motion.h3>
          )}
      
              {description.split('\n').map((para, index) => (
         <motion.p
           key={index}
            className="text-gray-300 mb-2 lg:mb-3 xl:mb-3 min-[2560px]:mb-4 
               text-sm sm:text-base lg:text-lg min-[2560px]:text-xl 
               leading-relaxed lg:text-left max-w-none lg:max-w-full"
             variants={itemVariants}
  >
           {para}
          </motion.p>
))}

          
          {points && (
            <motion.ul
              className="list-disc pl-5 min-[2560px]:pl-8 
                         mb-4 lg:mb-5 xl:mb-6 min-[2560px]:mb-10 
                         space-y-1.5 lg:space-y-2 min-[2560px]:space-y-3 
                         w-full text-white 
                         text-sm sm:text-base lg:text-lg min-[2560px]:text-xl 
                         leading-relaxed"
              variants={containerVariants}
            >
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="text-white text-left"
                  variants={itemVariants}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          )}
          
          {link && (
            <motion.div
              className="w-full lg:w-auto flex justify-center lg:justify-start mt-2 min-[2560px]:mt-6"
              variants={itemVariants}
            >
              <motion.a
                href={link}
                className="inline-block 
                           px-4 sm:px-6 min-[2560px]:px-10 
                           py-2.5 sm:py-3 min-[2560px]:py-5 
                           bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold 
                           rounded-lg shadow-md hover:scale-105 transition 
                           text-sm sm:text-base min-[2560px]:text-lg"
                rel="noopener noreferrer"
              >
                Learn more
              </motion.a>
            </motion.div>
          )}
        </div>

        {/* Right: Foreground Image - Hidden on mobile */}
        {image && (
          <div className="hidden lg:flex flex-shrink-0 w-full lg:w-auto 
                          lg:max-w-[35%] xl:max-w-[30%] min-[2560px]:max-w-[25%] 
                          justify-center lg:justify-end">
            <motion.img
              src={image}
              alt={title}
              className="w-full max-w-sm lg:max-w-full 
                         h-48 sm:h-56 lg:h-56 xl:h-64 min-[2560px]:h-80 
                         rounded-2xl min-[2560px]:rounded-3xl 
                         object-cover"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </div>
        )}
      </motion.div>
    </div>
  </section>
 );

