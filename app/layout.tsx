import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Improve font loading performance
  preload: true,
});

// Lazy load heavy components
const StarsCanvas = dynamic(() => import('@/components/main/star-background').then(mod => ({ default: mod.StarsCanvas })), {
  ssr: false,
  loading: () => null
});

const WhatsAppLogo = dynamic(() => import('@/components/main/whatsapp-logo').then(mod => ({ default: mod.WhatsAppLogo })), {
  ssr: false,
  loading: () => null
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  ...siteConfig,
  // Add performance hints
  other: {
    'theme-color': '#030014',
    'color-scheme': 'dark',
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/videos/blackhole.webm" as="video" type="video/webm" />
        <link rel="preload" href="/hero-bg.svg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-auto overflow-x-hidden",
          inter.className
        )}
      >
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        
        <Navbar />
        
        <main className="lg:ml-64 min-[2560px]:lg:ml-80">
          {children}
        </main>
        
        <Footer />
        
        <Suspense fallback={null}>
          <WhatsAppLogo />
        </Suspense>
      </body>
    </html>
  );
}