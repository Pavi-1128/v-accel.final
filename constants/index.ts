import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { sub } from "three/tsl";
import { FiHome, FiUsers, FiLayers, FiBriefcase, FiBox, FiMail } from "react-icons/fi";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/vaccel.ai",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=61576185957116#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@v-accel-ai",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "optimized-html.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "optimized-css.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "optimized-js.webp",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "optimized-tailwind.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "optimized-mui.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "optimized-react.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "optimized-redux.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "optimized-reactquery.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "optimized-ts.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "optimized-next.webp",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "optimized-node.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "optimized-express.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "optimized-mongodb.webp",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "optimized-firebase.webp",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "optimized-postgresql.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "optimized-mysql.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "optimized-prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "optimized-graphql.webp",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "optimized-reactnative.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "optimized-tauri.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "optimized-docker.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "optimized-figma.webp",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "optimized-go.webp",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
{
  title: "Custom Software Development",
  subheading: "We Don't Just Build Software - We Orchestrate Digital Masterpieces",  
  description: `Why juggle multiple vendors for UI, backend, and deployment when you can have it all under one roof?

              Think of us as your tech orchestra — frontend, backend, DevOps, and AI playing perfectly in sync.

                  We eliminate scattered teams and misaligned timelines with a full-stack solution that moves fast, builds smart, and scales right.`,

  image: "/projects/custom-software.jpg",
  link: "/development",
  points: [
    "⚡ Rapid MVP Prototyping",
    "🌐 Web and Mobile Apps",
    "🧩 API Integrations & Microservices",
    "☁️Cloud-native Development"
  ]
},
 
  {
    title: "AI & ML Engineering",
    subheading: "Building Smarter Systems with AI that Learns, Adapts, and Delivers.",
    description:
      `Explore the transformative potential of 'AI & ML Solutions,' It is our expertise  in developing intelligent systems powered by artificial intelligence and machine learning.

      From fine-tuned LLMs to AI-driven automations, we build intelligent solutions that drive decisions, automate processes, and redefine user experiences.`,
    image: "/projects/ai&ml.jpg",
    link: "/ai",
    points: [
      " 🤖Custom AI Agents & Conversational Bots",
      " 📈Predictive Analytics & Business Forecasting ",
      " 🧠  LLM Fine-tuning + Vector Search Integrations",
      " 🎥 Multimodal AI (Text + Image + Voice)"
    ]
  },
  {
    title: "DevOps, Cloud & SRE",
    subheading: "Modern Cloud Engineering Built to Scale, Secure, and Ship Fast.",                         
    description:
      `Unlock the potential of seamless development and deployment with 'DevOps and Cloud Solutions.'  Our expertise in leveraging cloud platforms and DevOps practices to build scalable, reliable, and efficient systems.
      
      From CI/CD to serverless multicloud deployment, we help you build infrastructure that is automated, resilient, and ready for rapid innovation.`,
    image: "/projects/cloud.jpg",
    link: "/devops",
    points: [
      "🛠️ End-to-End CI/CD & GitOps Deployments",
      "🐳 Kubernetes & Container Orchestration ",
      "☁️ Certified AWS, Azure, GCP Engineers",
      "🌐 Serverless & Multi-Region Cloud Scaling"
    ]
  },
  {
    title: "SaaS Product Development",
    subheading: "We Transform SaaS Ideas Into Scalable Powerhouses",                         
    description:
      `Experience the future of Software with 'SaaS Product Development' 

     From concept to cloud, we engineer robust, multi-tenant SaaS platform that scale with precision and deliver unforgettable user experiences. `,
    image: "/projects/SAAS.jpg",
    link: "/saas",
    points: [
      "🚀 MVP to Enterprise SaaS Rollout",
      "🔐SSO, Subscription, and Payment Integrations",
      "📈 Built-in Analytics & Real-time Insights",
      "☁️ AWS/GCP Cloud-Native Architecture"
    ]
    
  },
  {
    title: "Microservices Architecture & Engineering",
    subheading: "Engineered for Modularity. Built for Scale",
    description:
      `Dive into the world of 'Microservices Architecture and Engineering,' Our expertise in designing and implementing scalable, resilient systems.
      
      We design, build, and manage microservices that enable rapid scaling, resilience, and agility for distributed systems — without the chaos.
      
      From architecture design to deployment, it emphasizes a commitment to building robust solutions that meet modern business needs.`,
    image: "/projects/micro-services.jpg",
    link: "/microservices",
    points: [
      " ⚡ Event-Driven Microservices with Kafka",
      " 🔀 API Gateway & Service Mesh (Istio/Linkerd)",
      " 🔐 Secure, Isolated Deployments",
      " 🏗️ Monolith-to-Microservices Migration Experts"
    ]
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@v-accel-ai",
      },
      // {
      //   name: "GitHub",
      //   icon: RxGithubLogo,
      //   link: "https://github.com",
      // },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/vaccel.ai",
      },
      // {
      //   name: "Discord",
      //   icon: RxDiscordLogo,
      //   link: "https://discord.com",
      // },
       {
            name: "Facebook",
            icon: FaFacebook,
            link: "https://www.facebook.com/profile.php?id=61576185957116#",
       },
    ],
  },
  {
    title: "Services",
    data: [
      // {
      //   name: "Instagram",
      //   icon: RxInstagramLogo,
      //   link: "https://www.instagram.com/vaccel.ai",
      // },
      // {
      //   name: "Twitter",
      //   icon: RxTwitterLogo,
      //   link: "https://twitter.com",
      // },
      // {
      //   name: "Linkedin",
      //   icon: RxLinkedinLogo,
      //   link: "https://www.linkedin.com/company/v-accel",
      // },
       {
        name: "Custom Software",
        icon: null,
        link: "/development"
      },
      {
        name: "AI & ML",
        icon: null,
        link: "/ai"
      },
      {
        name: "DevOps",
        icon: null,
        link: "/devops"
      }
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Locate Us",
        icon: null,
       link: "https://www.youtube.com/@v-accel-ai",
      },
      {
        name: "WhatsApp Us",
        icon: null,
        link: "https://wa.me/7603846245", 
      },
      {
        name: "Mail Us",
        icon: null,
        link: "mailto:info@v-accel.ai",
      },
      {
        name: "Privacy Policy",
        icon: null,
        link: "/privacy",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
    icon: FiHome,
  },
  {
    title: "Team",
    link: "/about",
    icon: FiUsers,
  },
  {
    title: "Services",
    link: "/services",
    icon: FiLayers,
  },
  {
    title: "Our Works",
    link: "/works",
    icon: FiBriefcase,
  },
  {
    title: "Our Products",
    link: "/products",
    icon: FiBox,
  },
  {
    title: "Contact",
    link: "/contact",
    icon: FiMail,
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com",
};
