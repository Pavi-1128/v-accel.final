import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg px-4 py-6 sm:py-8 md:py-10 min-[2560px]:px-32 min-[2560px]:py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center min-[2560px]:max-w-[2400px]">
        {/* Footer Columns */}
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-around items-center sm:items-start gap-6 sm:gap-10 mb-8 min-[2560px]:gap-16 min-[2560px]:mb-12">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="w-full sm:w-[200px] flex flex-col items-center sm:items-start min-[2560px]:w-[280px]"
            >
              <h3 className="font-bold text-base sm:text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 min-[2560px]:text-2xl min-[2560px]:mb-6">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link = '#' }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link?.startsWith('http') ? '_blank' : undefined}
                  rel={link?.startsWith('http') ? 'noreferrer noopener' : undefined}
                  className="flex items-center my-2 hover:text-white transition min-[2560px]:my-3"
                >
                  {Icon && <Icon className="w-4 h-4 min-[2560px]:w-6 min-[2560px]:h-6" />}
                  <span className="ml-2 text-sm sm:text-base min-[2560px]:ml-4 min-[2560px]:text-xl">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm sm:text-base text-gray-400 min-[2560px]:text-xl">
          &copy; V-Accel AI Dynamics Private Limited {new Date().getFullYear()}.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};