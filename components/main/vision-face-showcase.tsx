'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    title: "Advanced Recognition Engine",
    icon: "🧠",
    points: [
      "Supports 1:1 verification and 1:N identification",
      "Works with partial face occlusions (scarves, masks, caps)"
    ]
  },
  {
    title: "100% On-Premise",
    icon: "📡",
    points: [
      "No internet required",
      "Runs on your local servers or kiosks",
      "Complete data privacy & control"
    ]
  },
  {
    title: "Real-Time Detection",
    icon: "📸",
    points: [
      "Integrates with IP, USB, and IR cameras",
      "Instant recognition within 300ms/frame",
      "Accurate even in low-light or angled views"
    ]
  },
  {
    title: "Scalable to Thousands of Faces",
    icon: "👥",
    points: [
      "Optimized with Faiss vector search engine",
      "Easily handle 10,000+ face profiles"
    ]
  },
  {
    title: "Seamless Attendance & Access",
    icon: "🧾",
    points: [
      "Auto-mark attendance with time logs",
      "Integration-ready with access control systems",
      "Export reports (CSV, PDF) anytime"
    ]
  },
  {
    title: "Liveness & Anti-Spoof Detection",
    icon: "🔒",
    points: [
      "Detects face spoofing via photo or video",
      "Optional IR camera-based liveness module"
    ]
  }
];

const useCases = [
  {
    title: "Hospitals",
    icon: "🏥",
    points: [
      "Doctor, nurse & staff attendance",
      "Visitor verification",
      "Kiosk-based patient check-ins"
    ]
  },
  {
    title: "Schools & Colleges",
    icon: "🏫",
    points: [
      "Student & faculty attendance",
      "Parent pickup validation",
      "Smart ID-less entry system"
    ]
  },
  {
    title: "Events & Expo Halls",
    icon: "🎪",
    points: [
      "Crowd face tagging",
      "VIP recognition",
      "Access & security zones"
    ]
  },
  {
    title: "Retail & Smart Kiosks",
    icon: "🏬",
    points: [
      "Loyalty-based face login",
      "Walk-in face detection",
      "Age/gender-based analytics"
    ]
  }
];

const deploymentOptions = [
  {
    mode: "Edge AI",
    description: "Embedded in kiosks or gateways (offline)"
  },
  {
    mode: "LAN Server",
    description: "Installed in local data center or office"
  },
  {
    mode: "Hybrid",
    description: "Offline + optional cloud sync (optional)"
  }
];

const includedItems = [
  "AI Face Recognition Engine",
  "Admin Dashboard (Web)",
  "Enrollment Panel (Face Upload)",
  "Attendance Logs + Export",
  "API for Integration (ERP, HRMS, Gate Control)",
  "Optional Kiosk App"
];

const benefits = [
  "99.7% Accuracy (even with masks)",
  "No dependency on cloud or third-party APIs",
  "Works with existing cameras & hardware",
  "Enterprise-ready, highly customizable",
  "Affordable one-time setup with low TCO"
];

export default function VisionFaceShowcase() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            V-Accel VisionFace™
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            The Most Accurate On-Premise Facial Recognition Engine
          </p>
          <p className="text-xl text-gray-300">
            Secure. Smart. Scalable. Offline.
          </p>
        </motion.div>

        {/* What is VisionFace */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
            <span>💡</span> What is VisionFace™?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-300 leading-relaxed">
                VisionFace™ is a cutting-edge, on-premise facial recognition solution built for real-world use cases — hospitals, schools, corporate campuses, manufacturing units, and live events. Whether you&apos;re managing staff attendance, visitor entry, student tracking, or kiosk check-ins, VisionFace™ delivers unmatched accuracy and speed, even under challenging conditions like scarves, hats, glasses, or crowd density.
              </p>
            </div>
            <motion.div 
              className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/vision/vision2.png"
                alt="VisionFace AI Recognition Interface"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span>🚀</span> Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span>🎯</span> Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deployment Options */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span>📦</span> Deployment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{option.mode}</h3>
                <p className="text-gray-300">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy & Security */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span>🛡️</span> Privacy & Security First
          </h2>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span className="text-gray-300">AES-encrypted vector storage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span className="text-gray-300">No face images stored unless needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span className="text-gray-300">Fully compliant with DPDP Act (India) and GDPR</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span>🧰</span> What&apos;s Included
          </h2>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Why Choose VisionFace */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span>💼</span> Why Choose VisionFace™
          </h2>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 