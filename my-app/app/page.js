"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
