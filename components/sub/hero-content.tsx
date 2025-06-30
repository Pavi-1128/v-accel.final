// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import ContactPopup from "../main/ContactPopup";
// import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

// export const HeroContent = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.style.overflowX = "hidden";
//     document.body.style.overflowX = "hidden";

//     if (isPopupOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//       document.documentElement.style.overflowX = "hidden";
//       document.body.style.overflowX = "hidden";
//     };
//   }, [isPopupOpen]);

//   const handleConnect = () => {
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="w-full p-0 m-0 overflow-x-hidden">
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         className="flex flex-col md:flex-row items-start justify-start 
//                    w-full mt-20 md:mt-40 gap-6 md:gap-10 px-0 ml-0"
//       >
//         {/* Image Section */}
//         <motion.div
//           variants={slideInFromLeft(0.8)}
//           className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
//         >
//           <Image
//             src="/hero-bg.svg"
//             alt="work icons"
//             height={650}
//             width={650}
//             draggable={false}
//             className="select-none w-full max-w-[550px] xl:max-w-[650px] h-auto object-contain"
//           />
//         </motion.div>

//         {/* Content Section */}
//         <div
//           className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 
//                      justify-center text-start px-0"
//         >
//           {/* Main Heading */}
//           <motion.div
//             variants={slideInFromRight(0.5)}
//             className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 
//                        text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 
//                        font-bold text-white max-w-full lg:max-w-[600px] 
//                        leading-tight"
//           >
//             <span>Chennai&apos;s Leading</span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//               AI & Machine Learning
//             </span>
//             <span>Company</span>
//           </motion.div>

//           {/* Description */}
//           <motion.p
//             variants={slideInFromRight(0.8)}
//             className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 
//                        my-4 sm:my-5 lg:my-6 max-w-full lg:max-w-[600px] px-0"
//           >
//             Building the Future — One SaaS, One AI, One Innovation at a Time
//           </motion.p>

//           {/* CTA Button */}
//           <motion.div
//             variants={slideInFromLeft(1)}
//             className="flex justify-start mt-4 sm:mt-6"
//           >
//             <button
//               onClick={handleConnect}
//               className="py-2 sm:py-3 px-6 sm:px-8 button-primary text-center text-white 
//                          cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] 
//                          text-sm sm:text-base font-medium
//                          hover:scale-105 transition-transform duration-200
//                          inline-block"
//             >
//               Let&apos;s Connect
//             </button>
//           </motion.div>
//         </div>

//         {/* Contact Popup */}
//         <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
//       </motion.div>
//     </div>
//   );
// };


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactPopup from "../main/ContactPopup";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const HeroContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
    };
  }, [isPopupOpen]);

  const handleConnect = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-full p-0 m-0 overflow-x-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row 
                   items-center md:items-start 
                   justify-center md:justify-start 
                   w-full mt-10 md:mt-40 gap-6 md:gap-10 px-4 sm:px-6"
      >
        {/* Image Section */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={650}
            width={650}
            draggable={false}
            className="select-none w-full max-w-[550px] xl:max-w-[650px] h-auto object-contain"
          />
        </motion.div>

        {/* Content Section */}
        <div
          className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 
                     justify-center text-center md:text-start"
        >
          {/* Main Heading */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-2 py-3 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 
                       text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 
                       font-bold text-white max-w-full lg:max-w-[600px] 
                       leading-tight"
          >
            <span>Chennai&apos;s Leading</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI & Machine Learning
            </span>
            <span>Company</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideInFromRight(0.8)}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 
                       my-4 sm:my-5 lg:my-6 max-w-full lg:max-w-[600px]"
          >
            Building the Future — One SaaS, One AI, One Innovation at a Time
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="flex justify-center md:justify-start mt-4 sm:mt-6"
          >
            <button
              onClick={handleConnect}
              className="py-2 sm:py-3 px-6 sm:px-8 button-primary text-center text-white 
                         cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] 
                         text-sm sm:text-base font-medium
                         hover:scale-105 transition-transform duration-200
                         inline-block"
            >
              Let&apos;s Connect
            </button>
          </motion.div>
        </div>

        {/* Contact Popup */}
        <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
      </motion.div>
    </div>
  );
};
