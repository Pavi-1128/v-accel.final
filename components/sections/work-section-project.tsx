"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from 'next/image';

// Type definitions
interface PopupImage {
  src: string;
  title?: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  websiteUrl?: string;
  popupImages?: PopupImage[];
}

interface ImagePopupProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  startImageIndex?: number;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  delay: number;
  isWebsiteSection?: boolean;
}

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  delay?: number;
  isWebsiteSection?: boolean;
  scrollInterval?: number;
}

// Website Development Section (6 main projects) - Added website URLs
const websiteProjects: Project[] = [
  // {
  //   id: 1,
  //   title: "DEVNIVO",
  //   image: "/work/devnivo1.png",
  //   category: "",
  //   websiteUrl: "https://devnivo.co.in/",
  //   popupImages: [
  //     { src: "/work/Tab mobile devnivo (1).png" },
  //     { src: "/work/laptop-devnivo.png"},
  //     { src: "/work/monitor devnivo (1).png"},
  //     { src: "/work/all device devnivo (1).png"}
  //   ]
  // },
  {
    id: 2,
    title: "SONIKKA PROMOTERS",
    image: "/work/sonikka.png",
    category: "",
    websiteUrl: "https://www.sonikkapromoters.in/",
    popupImages: [
      { src: "/work/sonikkaTab.png"},
      { src: "/work/soni-laptop.png" },
      { src: "/work/soni.png"},
      { src: "/work/soni-all (2).png" }
    ]
  },
   {
    id: 3,
    title: "MACRON PROPERTIES",
    image: "/work/macron all.png",
    category: "",
    websiteUrl: "https://macronproperties.co.in/",
    popupImages: [
      { src: "/work/tab, mobile macron.png" },
      { src: "/work/laptop macron.png" },
      { src: "/work/MAcron all (1).png" },
      { src: "/work/monitor macron.png" }
    ]
  },
  {
    id: 4,
    title: "TEKVIAN",
    image: "/work/tekvian.png",
    category: "",
    websiteUrl: "https://tekvian.co.in/",
    popupImages: [
      { src: "/work/tab-tekvian.png" },
      { src: "/work/laptop-tek.png" },
      { src: "/work/monitor tek (1) (1).png" },
      { src: "/work/All tek (2).png" }
    ]
  },
  {
    id: 5,
    title: "IGLOO ICE POPS",
    image: "/work/ice pops front.png",
    category: "",
    websiteUrl: "https://igloo-ice-pops.netlify.app/",
    popupImages: [
      { src: "/work/ice pops tab mobile.png" },
      { src: "/work/laptop ice pops.png" },
      { src: "/work/monitor ice pops.png" },
      { src: "/work/all devices ice pops.png" }
    ]
  },
  {
    id: 6,
    title: "KR INDUSTRIES",
    image: "/work/kr industries.png",
    category: "",
    websiteUrl: "https://krindustries.net/",
    popupImages: [
      { src: "/work/KR Tab mobile.png" },
      { src: "/work/KR LAPTOP.png" },
      { src: "/work/KR MONITOR.png" },
      { src: "public/work/All kr industries.png" }
    ]
  },
    
  {
    id: 7,
    title: "INOVEXA",
    image: "/work/all inovexa.svg",
    category: "",
    websiteUrl: "https://inovexa-azure.vercel.app/",
    popupImages: [
      { src: "/work/tab mobile innovex.svg" },
      { src: "/work/laptop inovexa.svg" },
      { src: "/work/monitor inovexa.svg" },
      { src: "/work/inovexa all.svg" }
    ]
  },
   {
    id: 8,
    title: "INDIA SWING MACHINE CO",
    image: "/work/all swing india.png",
    category: "",
    websiteUrl: "https://india-sewing-mc.netlify.app/",
    popupImages: [
      { src: "/work/Tab , mobile india swing.png" },
      { src: "/work/Laptop india swing.png" },
      { src: "/work/monitor swing.png" },
      { src: "/work/swing all.png" }
    ]
  },
 
];

const allAppPopupImages: PopupImage[] = [
  { src: "/work/cafe.png", title: "Cafe Mobile App" },
  { src: "/work/events.png", title: "Event Management App" },
  { src: "/work/gym.png", title: "Gym Fitness App" },
  { src: "/work/car rental (1).svg", title: "Car Rental App" },
  { src: "/work/gaming (1) (1).svg", title: "Gaming Platform" },
  { src: "/work/school.png", title: "School Management" },
  { src: "/work/hospital .svg", title: "Hospitality System" },
  { src: "/work/realestate.png", title: "Real Estate CRM" },
  { src: "/work/bakery  .svg", title: "Bakery Solutions" },
  { src: "/work/Insurance (1) (1).svg", title: "Insurance Tech" },
  { src: "/work/ecommerce.png", title: "E-Commerce Store" },
  { src: "/work/restaurant.png", title: "Restaurant POS" },
];

// Base app projects (without duplicates) - each will show all 12 images in popup
const baseAppProjects: Project[] = [
  {
    id: 7,
    title: "Cafe Mobile App",
    image: "/work/cafe.png",
    category: "Mobile App",
    popupImages: allAppPopupImages
  },
  {
    id: 8,
    title: "Event Management",
    image: "/work/events.png",
    category: "Events",
    popupImages: allAppPopupImages
  },
  {
    id: 9,
    title: "Gym Fitness App",
    image: "/work/gym.png",
    category: "Fitness",
    popupImages: allAppPopupImages
  },
  {
    id: 10,
    title: "Car Rental App",
    image: "/work/car rental (1).svg",
    category: "Transportation",
    popupImages: allAppPopupImages
  },
  {
    id: 11,
    title: "Gaming Platform",
    image: "/work/gaming (1) (1).svg",
    category: "Gaming",
    popupImages: allAppPopupImages
  },
  {
    id: 12,
    title: "School Management",
    image: "/work/school.png",
    category: "Education",
    popupImages: allAppPopupImages
  },
  {
    id: 13,
    title: "Hospitality",
    image: "/work/hospital .svg",
    category: "Hospitality",
    popupImages: allAppPopupImages
  },
  {
    id: 14,
    title: "Real Estate CRM",
    image: "/work/realestate.png",
    category: "Real Estate",
    popupImages: allAppPopupImages
  },
  {
    id: 15,
    title: "Bakery Solutions",
    image: "/work/bakery  .svg",
    category: "Food & Beverage",
    popupImages: allAppPopupImages
  },
  {
    id: 16,
    title: "Insurance Tech",
    image: "/work/Insurance (1) (1).svg",
    category: "Insurance",
    popupImages: allAppPopupImages
  },
  {
    id: 17,
    title: "E-Commerce Store",
    image: "/work/ecommerce.png",
    category: "Retail",
    popupImages: allAppPopupImages
  },
  {
    id: 18,
    title: "Restaurant POS",
    image: "/work/restaurant.png",
    category: "Food Service",
    popupImages: allAppPopupImages
  }
];

// Create app projects with duplicates for scrolling
const appProjects: Project[] = [
  ...baseAppProjects,
  ...baseAppProjects.map(project => ({
    ...project,
    id: project.id + 100 // Different ID for duplicates but same popup images
  }))
];

const ImagePopup: React.FC<ImagePopupProps> = ({ project, isOpen, onClose, startImageIndex = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project?.popupImages) {
      setCurrentImageIndex((prev) => 
        prev === project.popupImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project?.popupImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.popupImages!.length - 1 : prev - 1
      );
    }
  };

  // Handle website visit
  const handleVisitWebsite = () => {
    if (project?.websiteUrl) {
      window.open(project.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Set image index when popup opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(startImageIndex);
    }
  }, [isOpen, startImageIndex]);

  if (!project) return null;

  // Use popupImages if available, otherwise use the main image
  const images = project.popupImages || [{ src: project.image, title: project.title }];
  const currentImage = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 min-[2560px]:p-8 animate-in fade-in duration-300"
          onClick={onClose}
        >
          <div
            className="relative max-w-5xl min-[2560px]:max-w-7xl max-h-[90vh] min-[2560px]:max-h-[95vh] bg-gray-900 rounded-lg overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 min-[2560px]:top-6 min-[2560px]:right-6 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 min-[2560px]:p-3 hover:bg-opacity-70 transition"
            >
              <X size={24} className="min-[2560px]:w-8 min-[2560px]:h-8" />
            </button>

            {/* Navigation Arrows - Only show if multiple images */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 min-[2560px]:left-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 min-[2560px]:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={24} className="min-[2560px]:w-8 min-[2560px]:h-8" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 min-[2560px]:right-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 min-[2560px]:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={24} className="min-[2560px]:w-8 min-[2560px]:h-8" />
                </button>
              </>
            )}

            {/* Image Display */}
            <div className="relative h-100 md:h-[630px] min-[2560px]:h-[800px]">
              <Image
                src={currentImage.src}
                alt={currentImage.title || "Popup image"}
                width={1000}
                height={630}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="p-6 min-[2560px]:p-8">
              {/* Project Title and Website Link */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 min-[2560px]:mb-6">
                <h3 className="text-2xl min-[2560px]:text-4xl font-bold text-white mb-2 sm:mb-0">
                  {project.title}
                </h3>
                {project.websiteUrl && (
                  <button
                    onClick={handleVisitWebsite}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 min-[2560px]:px-6 min-[2560px]:py-3 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 text-sm min-[2560px]:text-base font-medium self-start sm:self-auto"
                  >
                    <ExternalLink size={16} className="min-[2560px]:w-5 min-[2560px]:h-5" />
                    Visit Website
                  </button>
                )}
              </div>
              
              {/* Image Counter - Only show if multiple images */}
              {hasMultipleImages && (
                <div className="flex justify-center mt-4 min-[2560px]:mt-6 space-x-2 min-[2560px]:space-x-3">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 min-[2560px]:w-4 min-[2560px]:h-4 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, delay, isWebsiteSection = false }) => {
  // Find the original project data for popup (in case this is a duplicate)
  const handleClick = () => {
    // For duplicated projects (ID > 100), find the original project
    const originalProject = project.id > 100 
      ? baseAppProjects.find(p => p.id === project.id - 100) || project
      : project;
    
    onClick(originalProject);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={handleClick}
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        animation: `fadeUp 0.6s ease-out ${delay}s forwards`
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-10px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0px)';
      }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className={`relative overflow-hidden ${
          isWebsiteSection 
            ? 'h-80 md:h-96 min-[2560px]:h-[500px]' 
            : 'h-64 md:h-72 min-[2560px]:h-96'
        }`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Website indicator for website projects */}
          {project.websiteUrl && (
            <div className="absolute top-4 left-4 min-[2560px]:top-6 min-[2560px]:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 min-[2560px]:px-4 min-[2560px]:py-2 rounded-full text-xs min-[2560px]:text-sm font-medium flex items-center gap-1 min-[2560px]:gap-2">
                <ExternalLink size={12} className="min-[2560px]:w-4 min-[2560px]:h-4" />
                View Site
              </div>
            </div>
          )}
        </div>
        <div className="p-6 min-[2560px]:p-8">
          <h3 className="text-xl min-[2560px]:text-2xl font-bold text-white mb-2 min-[2560px]:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm min-[2560px]:text-base uppercase tracking-wide">
            {project.category}
          </p>
        </div>
        <div className="absolute top-4 right-4 min-[2560px]:top-6 min-[2560px]:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 min-[2560px]:p-3">
            <div className="w-2 h-2 min-[2560px]:w-3 min-[2560px]:h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, title, subtitle, delay = 0, isWebsiteSection = false, scrollInterval = 2000 }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [startImageIndex, setStartImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openPopup = (project: Project) => {
    // Find the starting image index based on the clicked project's main image
    let imageIndex = 0;
    if (project.popupImages && project.popupImages === allAppPopupImages) {
      // For app projects, find the index of the clicked image in allAppPopupImages
      imageIndex = allAppPopupImages.findIndex(img => img.src === project.image);
      if (imageIndex === -1) imageIndex = 0; // Fallback to first image if not found
    }
    
    setStartImageIndex(imageIndex);
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
    setStartImageIndex(0);
  };

  // Responsive scroll function - 1 card on mobile, 3 on desktop, 4 on 2560px+
  const continuousScroll = useCallback(() => {
    if (!scrollRef.current || isWebsiteSection || isScrolling || isPaused) return;

    setIsScrolling(true);
    const scrollContainer = scrollRef.current;
    const cardElement = scrollContainer.children[0] as HTMLElement;
    if (!cardElement) return;

    const cardWidth = cardElement.offsetWidth;
    const gap = isMobile ? 16 : window.innerWidth >= 2560 ? 48 : 32;
    const cardsToScroll = isMobile ? 1 : window.innerWidth >= 2560 ? 4 : 3;
    const scrollAmount = (cardWidth + gap) * cardsToScroll;

    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const currentScroll = scrollContainer.scrollLeft;

    // Loop back to start when reaching end
    if (currentScroll + scrollAmount >= maxScroll) {
      scrollContainer.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 700);
  }, [isWebsiteSection, isScrolling, isPaused, isMobile]);

  // Auto-scroll effect
  useEffect(() => {
    if (isWebsiteSection) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        continuousScroll();
      }, scrollInterval);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    const scrollDelay = delay * 1000;
    const timeoutId = setTimeout(() => {
      startAutoScroll();
    }, scrollDelay);

    return () => {
      stopAutoScroll();
      clearTimeout(timeoutId);
    };
  }, [isWebsiteSection, delay, scrollInterval, continuousScroll]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <section className="w-full max-w-7xl min-[2560px]:max-w-[2400px] mx-auto py-12 md:py-20 min-[2560px]:py-32 px-4 min-[2560px]:px-12">
        {/* Section Header */}
        {title && (
          <div
            className="text-center mb-12 min-[2560px]:mb-20"
            style={{
              opacity: 0,
              transform: 'translateY(40px)',
              animation: `fadeUp 0.6s ease-out ${delay}s forwards`
            }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl min-[2560px]:text-7xl font-bold text-white mb-4 min-[2560px]:mb-6"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                animation: `fadeUp 0.6s ease-out ${delay + 0.1}s forwards`
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {title}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl min-[2560px]:text-2xl text-gray-400 max-w-2xl min-[2560px]:max-w-4xl mx-auto"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                animation: `fadeUp 0.6s ease-out ${delay + 0.2}s forwards`
              }}
            >
              {subtitle}
            </p>
          </div>
        )}

        {/* Project Container */}
        <div
          className="relative"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            animation: `fadeUp 0.6s ease-out ${delay + 0.3}s forwards`
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={scrollRef}
            className={`${
              isWebsiteSection
                ? "grid grid-cols-1 md:grid-cols-2 min-[2560px]:grid-cols-3 gap-6 md:gap-8 min-[2560px]:gap-12 px-4 min-[2560px]:px-0"
                : "flex gap-4 md:gap-8 min-[2560px]:gap-12 overflow-x-auto px-4 md:px-12 min-[2560px]:px-16 py-4 min-[2560px]:py-8 scroll-smooth no-scrollbar"
            }`}
          >
            {projects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className={`${
                  isWebsiteSection ? "" : "flex-shrink-0 w-64 sm:w-72 md:w-80 min-[2560px]:w-96"
                }`}
              >
                <ProjectCard
                  project={project}
                  onClick={openPopup}
                  delay={delay + 0.4 + idx * 0.1}
                  isWebsiteSection={isWebsiteSection}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImagePopup
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={closePopup}
        startImageIndex={startImageIndex}
      />

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .zoom-in-95 {
          animation: zoomIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Mobile specific styles */
        @media (max-width: 767px) {
          .no-scrollbar {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Ultra-wide screen specific styles */
        @media (min-width: 2560px) {
          .no-scrollbar {
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }
      `}</style>
    </>
  );
};

export const WorkSectionProject: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden min-[2560px]:px-8">
      {/* Website Development Section - Enhanced for 2560px+ screen */}
      <ProjectGrid
        projects={websiteProjects}
        title="Custom Software Development"
        subtitle="Discover how we’ve crafted custom software solutions that drive innovation and efficiency for our clients across industries."
        delay={0}
        isWebsiteSection={true}
      />

      {/* App Development Section - Enhanced scroll timing for large screens */}
      <ProjectGrid
        projects={appProjects}
        delay={0.2}
        scrollInterval={2000}
      />
    </div>
  );
};

export default WorkSectionProject;