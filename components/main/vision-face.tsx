"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const VisionFace = () => {
  return (
    <section className="w-full py-20 md:py-32 min-[2560px]:py-40">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 min-[2560px]:gap-24 px-4 sm:px-8 lg:px-20 min-[2560px]:px-64"
      >
        {/* Image Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            <Image
              src="/vision/Vision1.webp"
              alt="VisionFace AI Recognition"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              VisionFace™
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            VisionFace™ is a cutting-edge, on-premise facial recognition solution built for real-world use cases — hospitals, schools, corporate campuses, manufacturing units, and live events. Whether you&apos;re managing staff attendance, visitor entry, student tracking, or kiosk check-ins, VisionFace™ delivers unmatched accuracy and speed, even under challenging conditions like scarves, hats, glasses, or crowd density.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mt-4"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 cursor-default"
            >
              Facial Recognition
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 cursor-default"
            >
              On-Premise
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 cursor-default"
            >
              Real-time Processing
            </motion.span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium
                           hover:from-purple-600 hover:to-cyan-600 transition-all duration-300
                           shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40
                           flex items-center gap-2 group"
              >
                Know More
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}; 