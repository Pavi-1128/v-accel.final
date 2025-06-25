"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  Banknote,
  Stethoscope,
  ShoppingCart,
  Store,
  GraduationCap,
  Building2,
  Car,
  BusFront,
  Hotel,
  Plane,
  Package,
  Truck,
  Scale,
  Video,
  ShieldCheck,
  Radio,
  Users,
  LineChart,
  Megaphone,
  Factory,
  Gamepad2,
  Shirt,
  Dumbbell,
  BookOpen,
  Trophy,
  Lock,
} from 'lucide-react';

const categoryIcons = {
  finance: <Banknote className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-cyan-400" />,
  healthcare: <Stethoscope className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-pink-400" />,
  ecommerce: <ShoppingCart className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-green-400" />,
  retail: <Store className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-yellow-400" />,
  education: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-indigo-400" />,
  realestate: <Building2 className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-orange-400" />,
  automotive: <Car className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-red-400" />,
  // transportation: <BusFront className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-blue-400" />,
  hospitality: <Hotel className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-purple-400" />,
  travel: <Plane className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-sky-400" />,
  logistics: <Package className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-emerald-400" />,
  supplychain: <Truck className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-teal-400" />,
  legal: <Scale className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-violet-400" />,
  media: <Video className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-rose-400" />,
  insurance: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-blue-300" />,
  telecommunications: <Radio className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-indigo-300" />,
  humanresource: <Users className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-pink-300" />,
  marketing: <LineChart className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-lime-400" />,
  advertising: <Megaphone className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-amber-400" />,
  // manufacturing: <Factory className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-gray-400" />,
  gaming: <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-fuchsia-400" />,
  fashion: <Shirt className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-rose-300" />,
  fitness: <Dumbbell className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-red-300" />,
  publishing: <BookOpen className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-yellow-300" />,
  sports: <Trophy className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-orange-300" />,
  // cybersecurity: <Lock className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-cyan-300" />,
};

const categories = [
  {
    key: "finance",
    label: "Finance",
    title: "Finance",
    subtitle: "Powering financial innovation.",
    image: "/icon/finance.png",
    desc: "We build secure, scalable financial platforms including banking apps, investment tools, and payment systems. Our solutions help fintech companies, banks, and financial advisors deliver superior customer experiences while maintaining the highest security standards and regulatory compliance.",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    title: "Healthcare",
    subtitle: "Empowering better health with technology.",
    image: "/icon/health-icon.png",
    desc: "Digital solutions for hospitals, clinics, and health startups. We streamline patient management, appointment scheduling, and telemedicine, ensuring efficient and compassionate care. Our platforms are secure, scalable, and designed for modern healthcare needs, improving outcomes for both patients and providers.",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    title: "E-Commerce",
    subtitle: "Turning clicks into customers.",
    image: "/icon/e-commerce-icon.png",
    desc: "We craft seamless online stores with robust features, helping you grow sales and delight shoppers worldwide. From inventory management to secure payments and analytics, our platforms are scalable, secure, and designed for growth. Reach new markets and provide a smooth shopping experience for your customers.",
  },
  {
    key: "retail",
    label: "Retail",
    title: "Retail",
    subtitle: "Transforming retail experiences.",
    image: "/icon/retail-icon.png",
    desc: "Point-of-sale systems, inventory management, and customer engagement tools for modern retail businesses. We help retailers create omnichannel experiences that seamlessly blend online and offline shopping, driving customer loyalty and operational efficiency.",
  },
  {
    key: "education",
    label: "Education",
    title: "Education",
    subtitle: "Transforming learning for the digital age.",
    image: "/icon/education.png",
    desc: "E-learning platforms, student management, and more for modern education. We create interactive classrooms, automate grading, and provide tools for teachers, students, and parents to connect and succeed. Our solutions foster engagement and make learning accessible for all, whether in-person or remote.",
  },
  {
    key: "realestate",
    label: "Real Estate",
    title: "Real Estate",
    subtitle: "Modernizing property experiences.",
    image: "/icon/realestate.png",
    desc: "Listings, virtual tours, and CRM for real estate businesses. Our solutions make it easy to manage properties, connect with buyers, and provide immersive viewing experiences. Streamline your workflow, close deals faster, and offer clients a modern, digital-first approach.",
  },
  {
    key: "automotive",
    label: "Automotive",
    title: "Automotive",
    subtitle: "Driving the future of mobility.",
    image: "/icon/automotive.png",
    desc: "Digital platforms for automotive dealers, manufacturers, and service providers. We create solutions for vehicle management, service scheduling, parts inventory, and customer relationship management, helping automotive businesses operate more efficiently and serve customers better.",
  },
  // {
  //   key: "transportation",
  //   label: "Transportation",
  //   title: "Transportation",
  //   subtitle: "Moving people and goods efficiently.",
  //   image: "/icon/transportation.png",
  //   desc: "Fleet management, route optimization, and booking systems for transportation companies. Our solutions help logistics providers, ride-sharing services, and public transit systems operate more efficiently while providing better customer experiences.",
  // },
  {
    key: "hospitality",
    label: "Hospitality",
    title: "Hospitality",
    subtitle: "Creating memorable guest experiences.",
    image: "/icon/hospitality.png",
    desc: "Reservation systems, guest management, and service optimization for hotels and hospitality businesses. We help create seamless check-in processes, personalized guest services, and operational tools that enhance both guest satisfaction and business efficiency.",
  },
  {
    key: "travel",
    label: "Travel",
    title: "Travel",
    subtitle: "Journeys begin with a single tap.",
    image: "/icon/travel.png",
    desc: "Our travel solutions simplify bookings, itineraries, and customer engagement, so your clients can focus on the adventure. We provide tools for agencies, tour operators, and travelers alike, making every journey smooth and memorable. Enhance your travel business with digital innovation.",
  },
  {
    key: "logistics",
    label: "Logistics",
    title: "Logistics",
    subtitle: "Streamlining supply chains.",
    image: "/icon/logistics.png",
    desc: "Warehouse management, shipment tracking, and logistics optimization tools. We help logistics companies improve delivery times, reduce costs, and provide real-time visibility into their operations, creating more efficient and reliable supply chains.",
  },
  {
    key: "supplychain",
    label: "Supply Chain",
    title: "Supply Chain",
    subtitle: "Connecting global commerce.",
    image: "/icon/supplychain.png",
    desc: "End-to-end supply chain management platforms that provide visibility, control, and optimization across all stages of the supply chain. Our solutions help businesses reduce costs, improve efficiency, and respond quickly to market changes.",
  },
  {
    key: "legal",
    label: "Legal",
    title: "Legal",
    subtitle: "Modernizing legal practice.",
    image: "/icon/legal.png",
    desc: "Case management, document automation, and client communication tools for law firms and legal departments. We help legal professionals streamline their practice, improve client service, and manage cases more efficiently with cutting-edge technology.",
  },
  {
    key: "media",
    label: "Media",
    title: "Media",
    subtitle: "Engaging audiences worldwide.",
    image: "/icon/media.png",
    desc: "Content management, streaming platforms, and audience engagement tools for media companies. We create solutions that help broadcasters, publishers, and content creators reach their audiences across multiple channels and platforms.",
  },
  {
    key: "insurance",
    label: "Insurance",
    title: "Insurance",
    subtitle: "Securing futures with smart systems.",
    image: "/icon/insurance.png",
    desc: "Digital onboarding, claims processing, and customer engagement for insurance providers. Our platforms simplify policy management, automate claims, and enhance customer trust with transparent processes. Deliver a seamless experience for both agents and policyholders.",
  },
  {
    key: "telecommunications",
    label: "Telecommunications",
    title: "Telecom ",
    subtitle: "Connecting the world.",
    image: "/icon/telecom.png",
    desc: "Network management, customer service, and billing systems for telecommunications providers. We help telecom companies improve service quality, reduce operational costs, and provide better customer experiences through digital transformation.",
  },
  {
    key: "humanresource",
    label: "Human Resources",
    title: "Human Resource",
    subtitle: "Empowering people and organizations.",
    image: "/icon/hr.png",
    desc: "Employee management, recruitment, and performance tracking systems for modern HR departments. Our solutions help organizations attract, retain, and develop talent while streamlining administrative processes and improving employee engagement.",
  },
  {
    key: "marketing",
    label: "Marketing",
    title: "Marketing",
    subtitle: "Amplifying your brand's reach.",
    image: "/icon/marketing.png",
    desc: "Campaign management, analytics, and automation tools for marketing teams. We help businesses create targeted campaigns, track performance, and optimize their marketing efforts across multiple channels to achieve better ROI and customer engagement.",
  },
  {
    key: "advertising",
    label: "Advertising",
    title: "Advertising",
    subtitle: "Delivering targeted messages.",
    image: "/icon/advertising.png",
    desc: "Ad serving, programmatic advertising, and campaign optimization platforms for advertisers and agencies. Our solutions help maximize ad performance, improve targeting accuracy, and provide detailed analytics for better decision-making.",
  },
  // {
  //   key: "manufacturing",
  //   label: "Manufacturing",
  //   title: "Manufacturing",
  //   subtitle: "Optimizing production processes.",
  //   image: "/icon/manufacturing.png",
  //   desc: "Production management, quality control, and supply chain integration for manufacturing companies. We help manufacturers improve efficiency, reduce waste, and maintain quality standards through digital transformation and automation.",
  // },
  {
    key: "gaming",
    label: "Gaming",
    title: "Gaming",
    subtitle: "Level up your digital play.",
    image: "/icon/gaming.png",
    desc: "Community platforms, leaderboards, and engagement tools for gaming brands. We build immersive experiences that connect players, track achievements, and foster vibrant gaming communities. Our solutions support tournaments, live streams, and social features for maximum engagement.",
  },
  {
    key: "fashion",
    label: "Fashion",
    title: "Fashion",
    subtitle: "Styling the digital future.",
    image: "/icon/fashion.png",
    desc: "E-commerce platforms, virtual try-on experiences, and inventory management for fashion brands. We help fashion companies create engaging online experiences, manage complex product catalogs, and connect with customers across multiple touchpoints.",
  },
  {
    key: "fitness",
    label: "Fitness",
    title: "Fitness",
    subtitle: "Empowering healthy lifestyles.",
    image: "/icon/fitness.png",
    desc: "Membership management, class bookings, and digital engagement for gyms and fitness centers. Our tools help you retain members, schedule sessions, and offer personalized fitness journeys. Motivate your community and streamline your operations with our fitness tech.",
  },
  {
    key: "publishing",
    label: "Publishing",
    title: "Publishing",
    subtitle: "Bringing stories to life digitally.",
    image: "/icon/publishing.png",
    desc: "Content management, distribution, and reader engagement tools for publishers. We help publishing companies transition to digital formats, manage content workflows, and reach readers across multiple platforms and devices.",
  },
  {
    key: "sports",
    label: "Sports",
    title: "Sports",
    subtitle: "Enhancing athletic performance.",
    image: "/icon/sports.png",
    desc: "Team management, performance analytics, and fan engagement platforms for sports organizations. We create solutions that help teams improve performance, engage with fans, and manage operations more effectively.",
  },
  // {
  //   key: "cybersecurity",
  //   label: "Cybersecurity",
  //   title: "Cybersecurity",
  //   subtitle: "Protecting digital assets.",
  //   image: "/icon/cybersecurity.png",
  //   desc: "Threat detection, security monitoring, and compliance management tools for organizations of all sizes. We help businesses protect their digital assets, ensure regulatory compliance, and respond quickly to security threats.",
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "tween",
      ease: "easeIn",
      duration: 0.7,
    },
  }),
};

export const HomePageWorkSection = () => {
  const [active, setActive] = useState(categories[0].key);
  const [showMore, setShowMore] = useState(false);
  
  // Show first 15 categories initially, all when showMore is true
  const displayedCategories = showMore ? categories : categories.slice(0, 16);
  const hasMoreCategories = categories.length > 15;

  return (
    <>
      <motion.section
        className="w-full flex flex-col lg:flex-row items-center justify-center py-12 md:py-16 lg:py-20 min-[2560px]:py-32 gap-8 md:gap-10 lg:gap-12 min-[2560px]:gap-20 max-w-6xl min-[2560px]:max-w-[2400px] mx-auto px-4 md:px-6 min-[2560px]:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left: Title, Subtitle, Description */}
        <motion.div
          className="flex-1 flex flex-col items-start lg:items-start md:items-center justify-center w-full"
          variants={fadeUp}
          custom={0}
        >
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl min-[2560px]:text-7xl font-bold text-white mb-3 md:mb-4 min-[2560px]:mb-8 md:text-center lg:text-left"
            variants={fadeUp}
            custom={0.1}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 "> Industries</span> We Cater
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl min-[2560px]:text-3xl text-gray-400 mb-2 md:mb-3 min-[2560px]:mb-6 md:text-center lg:text-left"
            variants={fadeUp}
            custom={0.2}
          >
            A digital edge for every industry
          </motion.p>
          <motion.p
            className="text-gray-300 text-base font-bold  md:text-lg min-[2560px]:text-2xl leading-relaxed md:text-center lg:text-left min-[2560px]:max-w-[1000px]"
            variants={fadeUp}
            custom={0.3}
          >
             We deliver tailored digital solutions across diverse industries. From finance and healthcare to gaming and media, our expertise helps to innovate, streamline operations and accelerate growth.

          </motion.p>
        </motion.div>

        {/* Right: Category Cards */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 min-[2560px]:grid-cols-5 gap-3 md:gap-4 lg:gap-6 min-[2560px]:gap-8 w-full">
            {displayedCategories.map((cat, idx) => (
              <motion.div
                key={cat.key}
                className="bg-gradient-to-br from-[#2d2a4a] to-[#1a1833] rounded-lg md:rounded-xl shadow-lg p-3 md:p-4 lg:p-5 min-[2560px]:p-8 flex flex-col items-center justify-center hover:scale-105 transition cursor-pointer min-h-[100px] md:min-h-[120px] min-[2560px]:min-h-[180px]"
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.97, rotate: 2 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                custom={idx}
              >
                <motion.div
                  className="mb-2 md:mb-3 min-[2560px]:mb-6"
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span role="img" aria-label={cat.label} className="flex items-center justify-center">
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        width={32}      
                        height={32}
                        className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16"
                      />
                    ) : (
                   <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-white" />
                    )}
                  </span>
                </motion.div>
                <motion.div
                  className="text-sm md:text-base lg:text-lg min-[2560px]:text-2xl font-semibold text-white text-center leading-tight"
                  variants={fadeUp}
                  custom={idx + 0.1}
                >
                  {cat.title}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {hasMoreCategories && (
            <motion.div
              className="flex justify-center mt-6 md:mt-8 min-[2560px]:mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              custom={displayedCategories.length * 0.05}
            >
              <motion.button
                onClick={() => setShowMore(!showMore)}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-2 md:py-3 min-[2560px]:py-5 px-6 md:px-8 min-[2560px]:px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base min-[2560px]:text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showMore ? (
                  <>
                    Show Less <span className="ml-2">↑</span>
                  </>
                ) : (
                  <>
                    Show More <span className="ml-2">↓</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};