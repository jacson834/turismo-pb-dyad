import React from 'react';
import HeroSection from '@/components/landing/HeroSection.tsx';
import TouristPointsSection from '@/components/landing/TouristPointsSection.tsx';
import GallerySection from '@/components/landing/GallerySection.tsx';
import Footer from '@/components/landing/Footer.tsx';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <TouristPointsSection />
      <GallerySection />
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;