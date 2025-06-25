'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Vertical Sidebar for lg+ screens */}
      <nav
        className={`hidden lg:flex fixed left-0 top-0 h-screen z-50 flex-col items-center py-6 px-2 bg-[#030014e6] shadow-lg transition-all duration-300
          ${isExpanded ? "w-64 min-[2560px]:w-80" : "w-[90px] min-[2560px]:w-[120px]"}
        `}
      >
        {/* Logo */}
        <Link href="/" className={`flex flex-col items-center mb-8 min-w-0 transition-all duration-300 ${isExpanded ? "w-full" : "w-auto"}`}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={55}
            height={55}
            draggable={false}
            className="cursor-pointer bg-white rounded-md min-[2560px]:w-[75px] min-[2560px]:h-[75px]"
          />
          {/* <span className={`text-gray-300 font-semibold text-xs mt-2 text-center min-[2560px]:text-lg transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0 w-0 h-0"}`}>
            V-ACCEL
          </span> */}
          {isExpanded && (
            <span className="block text-gray-300 font-semibold text-xs mt-2 text-center px-3 whitespace-normal break-words leading-tight transition-all duration-300 min-[2560px]:text-lg">
              V-ACCEL | AI DYNAMICS PRIVATE LIMITED
            </span>
          )}
        </Link>

        {/* Desktop Vertical Nav Links */}
        <div className="flex flex-col gap-2 flex-1 items-center w-full">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.link;
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.link}
                className={`flex items-center rounded-xl transition-all duration-200 text-lg font-medium px-2 py-2 w-full
                  ${isActive ? "bg-[rgb(112,66,248)] text-white shadow-lg" : "text-gray-300 hover:bg-[rgba(112,66,248,0.1)] hover:text-[rgb(112,66,248)]"}
                `}
                title={link.title}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 mr-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`transition-all duration-300 origin-left text-base font-semibold whitespace-nowrap
                    ${isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
                  `}
                >
                  {link.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Expand/Collapse Toggle Button */}
        <button
          className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgb(112,66,248)] text-white mt-4 mb-4 transition-colors ${isExpanded ? "self-end mr-2" : "self-center"}`}
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isExpanded ? <FaChevronLeft className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
        </button>

        {/* Desktop Social Icons at bottom */}
        <div className={`flex flex-col gap-4 items-center mt-auto mb-2 transition-all duration-300 ${isExpanded ? "w-full" : "w-auto"}`}>
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className={`flex items-center rounded-full hover:bg-[rgb(112,66,248)] transition-colors ${isExpanded ? "w-full px-3 py-2 justify-start" : "w-10 h-10 justify-center"}`}
              title={name}
            >
              <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              {isExpanded && (
                <span className="ml-2 text-white text-sm font-medium whitespace-nowrap">
                  {name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Top Navbar for sm and md screens */}
      <nav className="flex lg:hidden fixed top-0 left-0 w-full h-[65px] bg-[#030014e6] shadow-lg z-50 items-center px-4 min-[2560px]:h-[85px] min-[2560px]:px-32">
        {/* Logo and company name left-aligned */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={45}
              height={45}
              draggable={false}
              className="cursor-pointer bg-white rounded-md mx-2 min-[2560px]:w-[65px] min-[2560px]:h-[65px] min-[2560px]:mx-4"
            />
            <span className="ml-2 text-gray-300 font-semibold text-xs sm:text-sm md:text-base min-[2560px]:ml-4 min-[2560px]:text-2xl whitespace-nowrap">
              V-ACCEL | AI DYNAMICS PRIVATE LIMITED
            </span>
          </Link>
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* Hamburger for mobile/tablet */}
        <button
          className="flex items-center justify-center w-10 h-10 text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {/* Social Icons */}
        <div className="hidden sm:flex gap-4 ml-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="flex items-center justify-center w-8 h-8 hover:bg-[rgba(112,66,248,0.1)] rounded-full transition-colors"
            >
              <Icon className="w-6 h-6 text-white min-[2560px]:w-8 min-[2560px]:h-8" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Unified Menu for sm and md screens */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#030014] z-50 flex flex-col items-center pt-8">
          {/* Logo and company name */}
          <div className="flex items-center mb-8">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={55}
              height={55}
              draggable={false}
              className="cursor-pointer bg-white rounded-md mx-2 min-[2560px]:w-[75px] min-[2560px]:h-[75px] min-[2560px]:mx-4"
            />
            <span className="ml-2 text-gray-300 font-semibold text-base min-[2560px]:text-2xl whitespace-nowrap">
              V-ACCEL | AI DYNAMICS PRIVATE LIMITED
            </span>
          </div>
          {/* Close button */}
          <button
            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 text-white text-2xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {/* Nav links */}
          <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-xs mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`flex items-center justify-center gap-3 cursor-pointer transition text-center px-4 py-3 rounded-lg w-full text-lg font-medium ${
                    isActive
                      ? "text-white bg-[rgb(112,66,248)] shadow-lg shadow-[rgb(112,66,248)]/30 font-semibold"
                      : "text-gray-300 hover:text-[rgb(112,66,248)] hover:bg-[rgba(112,66,248,0.1)]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[rgba(112,66,248,0.1)] transition-colors"
              >
                <Icon className="w-8 h-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};