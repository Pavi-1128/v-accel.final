"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

const services = [
  "Customer Retention System",
  "Enterprise Resource Planning",
  "Customer Relationship Management",
  "HR Software",
  "Data Analytics",
  "IT Service Management",
  "Ecommerce",
  "Supply Chain",
  "Web Portals",
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const Projects = () => {
  return (
    <>
      {/* Heading */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center"
      >
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Expertise
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-base sm:text-lg md:text-xl lg:text-4xl font-semibold text-white text-center max-w-4xl mx-auto mb-2 px-2 leading-tight pb-0"
      >
        We’re More than Just Developers. <br />
        We Solve Real-World Problems by Creating Better Digital Solutions.
      </motion.h1>

      {/* Main Section */}
      <section
        id="projects"
        className="flex flex-col lg:flex-row lg:gap-6 items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 -mt-10"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center lg:ml-6 mt-10"
        >
          <img
            src="/work/Expertise1.png"
            alt="Consultation"
            className="w-[300px] sm:w-[340px] md:w-[500px] h-auto object-contain"
          />
        </motion.div>

        {/* Right Text & Services */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-base md:text-lg lg:text-lg text-white font-bold mb-10 max-w-lg"
          >
            As a Full-Stack Software Development Company, we make some extraordinary things that engage your users.
          </motion.p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mb-10 max-w-3xl">
            {services.map((service, index) => (
              <motion.div
                key={service}
                className="text-white mt-2 text-center rounded-xl p-3 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-white cursor-pointer text-sm sm:text-base"
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                variants={fadeUp}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
