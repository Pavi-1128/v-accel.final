"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface NavbarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

export const Navbar = ({ isExpanded, setIsExpanded }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Close desktop sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded, setIsExpanded]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className={`hidden lg:flex fixed top-0 left-0 z-50 h-screen bg-[#030014e6] shadow-lg flex-col items-center py-6 px-2 transition-all duration-300
        ${isExpanded ? "w-64 min-[2560px]:w-80" : "w-[90px] min-[2560px]:w-[120px]"}`}
      >
        {/* Logo */}
        <Link href="/" className="mb-6 flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={55}
            height={55}
            className="bg-white rounded-md min-[2560px]:w-[75px] min-[2560px]:h-[75px]"
          />
          {isExpanded && (
            <span className="mt-2 text-center text-gray-300 text-xs font-semibold min-[2560px]:text-lg">
              V-ACCEL | AI DYNAMICS PRIVATE LIMITED
            </span>
          )}
        </Link>

        {/* Nav Links */}
        <div className="flex-1 w-full flex flex-col items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.link;
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.link}
                className={`flex items-center w-full px-3 py-2 rounded-lg font-medium text-base transition-all ${
                  isActive
                    ? "bg-[rgb(112,66,248)] text-white"
                    : "text-gray-300 hover:text-[rgb(112,66,248)] hover:bg-[rgba(112,66,248,0.1)]"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span
                  className={`transition-all duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 mb-2 text-white bg-[rgb(112,66,248)] hover:bg-[rgb(100,55,230)] rounded-full w-9 h-9 flex items-center justify-center ${
            isExpanded ? "self-end mr-2" : "self-center"
          }`}
        >
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {/* Social Icons */}
        <div className="flex flex-col gap-4 items-center mt-auto">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center rounded-full hover:bg-[rgb(112,66,248)] transition-colors ${
                isExpanded
                  ? "w-full px-3 py-2 justify-start"
                  : "w-10 h-10 justify-center"
              }`}
            >
              <Icon className="text-white w-5 h-5" />
              {isExpanded && <span className="ml-2 text-white text-sm">{name}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full h-[65px] bg-[#030014e6] z-50 flex items-center px-4">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={45}
            height={45}
            className="bg-white rounded-md mr-2"
          />
          <span className="text-gray-300 text-sm font-semibold">
            V-ACCEL | AI DYNAMICS PRIVATE LIMITED
          </span>
        </Link>

        <div className="ml-auto flex items-center">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl ml-4"
          >
            {isMenuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#030014] z-40 flex flex-col items-center pt-24 px-4">
          {/* Navigation */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-lg font-medium transition ${
                    isActive
                      ? "bg-[rgb(112,66,248)] text-white"
                      : "text-gray-300 hover:bg-[rgba(112,66,248,0.1)] hover:text-[rgb(112,66,248)]"
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
          <div className="flex justify-center gap-4 mt-8">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(112,66,248,0.1)]"
              >
                <Icon className="text-white w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
