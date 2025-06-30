"use client";
import { useState, Suspense, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { cn } from "@/lib/utils";

const StarsCanvas = dynamic(() => import('@/components/main/star-background').then(mod => ({ default: mod.StarsCanvas })), {
  ssr: false,
  loading: () => null
});

const WhatsAppLogo = dynamic(() => import('@/components/main/whatsapp-logo').then(mod => ({ default: mod.WhatsAppLogo })), {
  ssr: false,
  loading: () => null
});

export default function ClientLayout({ children }: PropsWithChildren) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  return (
    <>
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>
      <Navbar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
      <main className={cn(
        "bg-[#030014] overflow-y-auto overflow-x-hidden transition-all duration-300",
        isSidebarExpanded ? "lg:ml-64 min-[2560px]:lg:ml-80" : "lg:ml-[90px] min-[2560px]:lg:ml-[120px]"
      )}>
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppLogo />
      </Suspense>
    </>
  );
} 