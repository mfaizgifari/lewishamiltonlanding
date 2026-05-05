"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import FerrariEraSection from "@/sections/FerrariEraSection";
import CareerTimelineSection from "@/sections/CareerTimelineSection";
import IconicCarsSection from "@/sections/IconicCarsSection";
import StatsDashboardSection from "@/sections/StatsDashboardSection";
import QuoteSection from "@/sections/QuoteSection";
import GallerySection from "@/sections/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (!loadingComplete) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
      window.scrollTo(0, 0); // Ensure start at top
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
  }, [loadingComplete]);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[var(--color-primary-red)] selection:text-white overflow-hidden">

      {/* Starting F1 Lights Animation overlay */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Content wrapper fading in after loading */}
      <div
        className={`transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />

        <HeroSection />

        <div id="about" />
        <AboutSection />

        <div id="ferrari" />
        <FerrariEraSection />

        <div id="career" />
        <CareerTimelineSection />

        <div id="cars" />
        <IconicCarsSection />

        <div id="stats" />
        <StatsDashboardSection />

        <QuoteSection />

        <div id="gallery" />
        <GallerySection />

        <Footer />
      </div>
    </main>
  );
}
