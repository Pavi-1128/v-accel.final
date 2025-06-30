"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { title } from "process";

// Bundle data organized by categories
const BUNDLE_CATEGORIES = {
  "Business Operations": [
    {
      name: "LeadAccel",
      dis: "AI CRM for Smart Lead Management",
      description: "Capture, nurture, and convert leads with smart tracking and segmentation.",
      slug: "text-generator"
    },
    {
      name: "SalesAccel",
      dis: "Sales Pipeline & Conversion Tracker",
      description: "Manage your sales pipeline and improve conversions with actionable insights.",
      slug: "translation"
    },
    {
      name: "FinAccel",
      dis: "Finance & Invoicing Management",
      description: "Monitor expenses, plan budgets, and track financial performance in real time.",
      slug: "sentiment-analysis"
    },
    {
      name: "PayrollAccel",
      dis: "Payroll Automation",
      description: "Automate payroll, tax compliance, and benefits with minimal effort.",
      slug: "translation"
    },
    {
      name: "AssetAccel",
      dis: "IT & Asset Lifecycle Management",
      description: "Track and manage all assets efficiently to ensure accountability and reduce losses.",
      slug: "sentiment-analysis"
    }
  ],
  "People & Talent": [
    {
      name: "HireAccel",
      dis: "Smart Hiring and ATS Platform",
      description: "Manage IT hiring with precision via agent-assisted workflows that connects HR teams, IT talent, and institute.",
      slug: "vision-api"
    },
    {
      name: "HRAccel",
      dis: "Streamlined Hiring to Onboarding Platform",
      description: "Accelerate your hiring process with AI-driven tools for sourcing, screening, interviews, and onboarding—all in one platform.",
      slug: "image-recognition"
    },
    {
      name: "PeopleAccel",
      dis: "People-First HRMS",
      description: "Manage the entire employee lifecycle with a smart, AI-ready HRMS built for modern teams.",
      slug: "sentiment-analysis"
    },
    {
      name: "TrainAccel",
      dis: "Training & LMS Platform",
      description: "Upskill your teams with curated training and certification programs.",
      slug: "translation"
    },
    {
      name: "AlumniAccel",
      dis: "Alumni & Relationship Management",
      description: "Engage alumni for networking, referrals, and rehiring opportunities.",
      slug: "sentiment-analysis"
    }
  ],
  "Project & Productivity": [
    {
      name: "ProjectAccel",
      dis: "Task & Project Execution Platform",
      description: "Run agile projects with sprint planning and collaborative workflows.",
      slug: "speech-recognition"
    },
    {
      name: "WorkAccel",
      dis: "Productivity & Team Monitoring",
      description: "Track daily tasks and work hours to boost team productivity.",
      slug: "voice-synthesis"
    },
    {
      name: "IdeaAccel",
      dis: "Innovation & R&D Tracker",
      description: "Collect and incubate innovative ideas from your team.",
      slug: "audio-analysis"
    },
    {
      name: "ClientAccel",
      dis: "Post-Sale Client Lifecycle Tracker",
      description: "Manage client relationships with smart tracking and analytics.",
      slug: "audio-analysis"
    }
  ],
  "Support & Service": [
    {
      name: "SupportAccel",
      dis: "Client Support Ticketing Platform",
      description: "Resolve customer issues quickly with a powerful ticketing system.",
      slug: "data-analytics"
    },
    {
      name: "SmartEnrollAccel",
      dis: "Intelligent Student Enrollment System",
      description: "Automate enrollment workflows to boost speed and accuracy.",
      slug: "predictive-modeling"
    }
  ]
};


// Animation variants
const fadeUp = {
    hidden: { 
        opacity: 0, 
        y: 30, 
        scale: 0.95
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: delay,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
        },
    }),
};

// Enhanced dropdown variants with smoother transitions
const dropdownVariants = {
    hidden: { 
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.3 }
        }
    },
    visible: { 
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.4, delay: 0.1 }
        }
    }
};

// Enhanced card variants with staggered entrance
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: index * 0.08, // Stagger each card
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    })
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06, // Reduced for smoother stagger
            delayChildren: 0.1
        }
    }
};

const AISaasBundle = () => {
    const [openCategories, setOpenCategories] = useState({});
    const [autoOpenedCategories, setAutoOpenedCategories] = useState(new Set());
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const categoryRefs = useRef({});
    const contentRefs = useRef({});
    const categoryKeys = Object.keys(BUNDLE_CATEGORIES);

    const toggleCategory = (category) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleKnowMore = () => {
        window.location.href = "/contact"; // Redirect to contact page
    };

    // Enhanced auto-scroll functionality with smooth sequential opening
    useEffect(() => {
        const handleScroll = () => {
            if (isAutoScrolling) return; // Prevent interference during auto-scroll

            categoryKeys.forEach((category, index) => {
                const categoryElement = categoryRefs.current[category];
                const contentElement = contentRefs.current[category];
                if (!categoryElement) return;

                const rect = categoryElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollPosition = window.scrollY;
                
                // Enhanced viewport detection
                const categoryTop = rect.top + scrollPosition;
                const categoryBottom = rect.bottom + scrollPosition;
                const viewportCenter = scrollPosition + windowHeight / 2;
                
                // Check if category header is approaching viewport center
                const isHeaderInView = rect.top < windowHeight * 0.7 && rect.top > -100;
                
                // Auto-open current category when header comes into view
                if (isHeaderInView && !autoOpenedCategories.has(category)) {
                    setIsAutoScrolling(true);
                    
                    setTimeout(() => {
                        setOpenCategories(prev => ({
                            ...prev,
                            [category]: true
                        }));
                        setAutoOpenedCategories(prev => new Set([...prev, category]));
                        
                        setTimeout(() => {
                            setIsAutoScrolling(false);
                        }, 600); // Match animation duration
                    }, 200);
                }

                // Check if we've scrolled through the content of an open section
                if (openCategories[category] && contentElement) {
                    const contentRect = contentElement.getBoundingClientRect();
                    const hasScrolledThroughContent = contentRect.bottom < windowHeight * 0.5;
                    
                    // Open next section when current content is mostly scrolled through
                    if (hasScrolledThroughContent && !isAutoScrolling) {
                        const nextIndex = index + 1;
                        if (nextIndex < categoryKeys.length) {
                            const nextCategory = categoryKeys[nextIndex];
                            if (!openCategories[nextCategory] && !autoOpenedCategories.has(nextCategory)) {
                                setIsAutoScrolling(true);
                                
                                setTimeout(() => {
                                    setOpenCategories(prev => ({
                                        ...prev,
                                        [nextCategory]: true
                                    }));
                                    setAutoOpenedCategories(prev => new Set([...prev, nextCategory]));
                                    
                                    setTimeout(() => {
                                        setIsAutoScrolling(false);
                                    }, 600);
                                }, 300);
                            }
                        }
                    }
                }
            });
        };

        // Use requestAnimationFrame for smoother scroll handling
        let ticking = false;
        const optimizedScrollHandler = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
        return () => window.removeEventListener('scroll', optimizedScrollHandler);
    }, [openCategories, autoOpenedCategories, categoryKeys, isAutoScrolling]);

    // Auto-open first category when component comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const firstCategory = categoryKeys[0];
                        if (firstCategory && !openCategories[firstCategory] && !autoOpenedCategories.has(firstCategory)) {
                            setTimeout(() => {
                                setOpenCategories(prev => ({
                                    ...prev,
                                    [firstCategory]: true
                                }));
                                setAutoOpenedCategories(prev => new Set([...prev, firstCategory]));
                            }, 800);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const firstCategoryElement = categoryRefs.current[categoryKeys[0]];
        if (firstCategoryElement) {
            observer.observe(firstCategoryElement);
        }

        return () => observer.disconnect();
    }, [categoryKeys]);

    return (
        <div className="w-full">
            <section className="py-12 px-4 w-full max-w-none mx-auto mt-20 md:mt-32 lg:mt-40">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-6xl text-gray-200 font-bold text-center mb-12"
                >
                   
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                       AI SaaS Bundle - Accel EcoSystem
                    </span>
                   {/* {" "} - Accel EcoSystem */}
                </motion.h1>

                {/* Dropdown Categories */}
                <div className="space-y-6 max-w-6xl mx-auto">
                    {Object.entries(BUNDLE_CATEGORIES).map(([category, bundles], categoryIndex) => (
                        <motion.div
                            key={category}
                            ref={el => categoryRefs.current[category] = el}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={categoryIndex * 0.1}
                            className="border border-gray-700 rounded-2xl overflow-hidden shadow-xl "
                        >
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category)}
                                className="w-full flex items-center justify-between p-8 hover:bg-gray-800/50 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                                    {category}
                                </h3>
                                
                                <div className="flex items-center gap-6">
                                    <span className="text-sm text-gray-400 bg-gray-800/80 px-4 py-2 rounded-full border border-gray-600">
                                        {bundles.length}
                                    </span>
                                    {openCategories[category] ? (
                                        <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                    )}
                                </div>
                            </button>

                            {/* Category Content */}
                            <AnimatePresence mode="wait">
                                {openCategories[category] && (
                                    <motion.div
                                        ref={el => contentRefs.current[category] = el}
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="border-t border-gray-700"
                                    >
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                        >
                                            {bundles.map((bundle, index) => (
                                                <motion.div
                                                    key={bundle.slug}
                                                    variants={cardVariants}
                                                    custom={index}
                                                    whileHover={{ 
                                                        scale: 1.02, 
                                                        y: -4,
                                                        transition: { 
                                                            duration: 0.3,
                                                            ease: [0.25, 0.1, 0.25, 1]
                                                        }
                                                    }}
                                                    className="relative border border-gray-600 rounded-xl p-5 
                                                             bg-gray-800/30 backdrop-blur-sm
                                                             hover:border-purple-500/50 hover:bg-gray-800/50
                                                             transition-all duration-300 group cursor-pointer
                                                             flex flex-col h-full"
                                                >
                                                    <div className="flex-grow">
                                                        <h3 className="text-2xl font-semibold   text-purple-400  mb-3 
                                                                   group-hover: transition-colors duration-300">
                                                            {bundle.name}
                                                        </h3>
                                                        <h2 className="text-xl font-semibold text-white mb-2">
                                                            <span className="text-white text-lg">
                                                                {bundle.dis}
                                                            </span>
                                                        </h2>
                                                        
                                                        <p className="text-gray-300 text-sm leading-relaxed mb-5 
                                                                      group-hover:text-gray-200 transition-colors duration-300">
                                                            {bundle.description}
                                                        </p>
                                                    </div>
                                                    
                                                    <button
                                                        onClick={handleKnowMore}
                                                        className="w-full text-center px-4 py-2.5 
                                                                   text-sm font-medium text-white
                                                                   bg-gradient-to-r from-purple-500 to-cyan-600
                                                                   hover:from-purple-600 hover:to-cyan-700
                                                                   rounded-lg transition-all duration-300
                                                                   hover:shadow-lg hover:shadow-purple-500/25
                                                                   focus:outline-none focus:ring-2 focus:ring-purple-500 
                                                                   focus:ring-offset-2 focus:ring-offset-gray-900
                                                                   mt-auto transform hover:scale-105"
                                                    >
                                                        Know More
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AISaasBundle;