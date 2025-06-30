

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaLaptopCode, FaRobot, FaBug } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/lib/motion';
import image from '@/public/projects/MD_Final (1).png';
import type { StaticImageData } from 'next/image';

interface TeamMember {
  name: string;
  role?: string;
  bio?: string;
  bio2?: string;
  bio3?: string;
  expertise?: string[];
  image?: StaticImageData;
  count?: number;
  icon?: JSX.Element;
}

const capabilities = [
  {
    title: 'Custom Software Development ',
    description:
      'We craft bespoke applications that empower your business processes, enhance efficiency, and streamline operations.',
  },
  {
    title: 'SaaS Engineering',
    description:
      'We build scalable and secure SaaS platforms that empower businesses to grow faster and smarter.',
  },
  {
    title: 'AI/ML Solutions (LLMs, Automation, Vector DBs)',
    description:
      'We engineer AI/ML solutions—leveraging LLMs, automation, and vector databases—to unlock intelligent automation and next-gen user experiences.',
  },
  {
    title: 'Software Testing (Manual + Automation + API)',
    description:
      'We leave no stone unturned, ensuring your software is bug-free, reliable, and delivers a seamless user experience.',
  },
  {
    title: 'DevOps, CI/CD, Cloud-native Deployment',
    description:
      'We streamline development and deployment through DevOps, CI/CD pipelines, and cloud-native architectures for faster, reliable releases.',
  },
  {
    title: 'Microservices Architecture and Engineering',
    description:
      'We design and engineer microservices architectures that ensure agility, scalability, and seamless service integration.',
  },
];

const fadeUpContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Mr. Venkatesan J - Full-Stack Engineer | AI Specialist | Visionary Technologist',
      bio: 'With over 8+ years of hands-on experience in building high-performance applications and intelligent systems, Venkatesan leads V-Accel AI Dynamics with a unique blend of deep technical expertise and strategic vision.',
      bio2: 'Holding a BE in Mechanical Engineering, a PGDM in Operations & Supply Chain, a PG Diploma in AI/ML and an M.E. in Artificial Intelligence & Data Science, he bridges the gap between engineering, enterprise, and emerging technologies.',
      bio3: 'As a full-stack Software Engineer (MERN) and a QA Automation Specialist, he has architected, tested, and scaled SaaS platforms, microservices ecosystems, and AI-powered products across industries.',
      expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building', 'Business Strategy', 'Client Relations'],
      image: image,
    },
    {
      name: 'Software Developers',
      count: 12,
      icon: <FaLaptopCode className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
    },
    {
      name: 'AI Engineers',
      count: 4,
      icon: <FaRobot className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
    },
    {
      name: 'Software Testers',
      count: 8,
      icon: <FaBug className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
    },
  ];

  return (
    
     <section id="team" className="text-white -mt-20 px-4 sm:px-8 lg:px-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-base lg:text-6xl  font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              About the Founder & CEO
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <Image
              src={teamMembers[0].image!}
              alt="CEO"
              className="object-cover rounded-3xl"
              width={320}
              height={420}
              priority
            />
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-white">Founder & CEO</p>
          </div>

          <div className="w-full lg:w-2/3 text-center lg:text-left">
            {/* Responsive Title */}
            <h2 className="hidden sm:block text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white leading-snug">
              Mr. Venkatesan J | Full-Stack Engineer | AI Specialist | Visionary Technologist
            </h2>

            <h2 className="block sm:hidden text-[20px] xs:text-[22px] font-bold mb-6 text-white leading-snug">
              Mr. Venkatesan J |
              <br />
              Full-Stack Engineer |
              <br />
              AI Specialist |
              <br />
              Visionary Technologist
            </h2>

            <p className="text-sm sm:text-base mb-4">{teamMembers[0].bio}</p>
            <p className="text-sm sm:text-base mb-4">{teamMembers[0].bio2}</p>
            <p className="text-sm sm:text-base mb-6">{teamMembers[0].bio3}</p>

            <h4 className="text-base sm:text-lg font-semibold mb-4">Areas of Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {teamMembers[0].expertise?.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
  variants={slideInFromLeft(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex-1 flex items-center justify-center text-center 
             sm:justify-start sm:text-left"
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
    Our Capabilities
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      Fueled by the Leadership of Our CEO
    </span>
  </h2>
</motion.div>


            <motion.div
              variants={fadeUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 flex flex-col gap-6"
            >
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  className="flex gap-4 text-white p-6 rounded-xl shadow-md border border-[#2A2A3C]"
                >
                  <BsDot className="text-purple-500 text-4xl" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {teamMembers.slice(1).map((member, index) => (
            <TeamCard key={index} member={member} delay={300 + index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamCardProps {
  member: TeamMember;
  delay: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && member.count) {
          animateCount(member.count);
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [member.count]);

  const animateCount = (target: number) => {
    let current = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, stepTime);
  };

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `300ms` }}
    >
      <div className="rounded-3xl px-6 py-8 transition-all duration-500 h-full flex flex-col items-center justify-between min-h-[240px] sm:min-h-[280px] transform hover:scale-105 max-w-[320px] mx-auto">
        <div className="mb-4">{member.icon}</div>
        <div className="text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-extrabold mb-2">
          {count}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-center">{member.name}</h3>
      </div>
    </div>
  );
};

export default Team;
