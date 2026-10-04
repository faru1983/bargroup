import Navbar from "@/components/Navbar";
import HeroParallax from "@/components/HeroParallax";
import ExperienceMetrics from "@/components/ExperienceMetrics";
import CocktailShowcase from "@/components/CocktailShowcase";
import BarModalities from "@/components/BarModalities";
import QuoteCalculator from "@/components/QuoteCalculator";
import Footer from "@/components/Footer";
import AmbientParticles from "@/components/AmbientParticles";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative bg-[#090909] text-[#F7F5F0] min-h-screen overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#090909]">
      {/* Ambient Floating Embers (Background Canvas) */}
      <AmbientParticles />

      {/* Sticky Header */}
      <Navbar />

      {/* 4-Layer Immersive Parallax Hero Section */}
      <HeroParallax />

      {/* Social Proof & Key Metrics */}
      <ExperienceMetrics />

      {/* Interactive Mixology Catalog with 3D Tilt Cards */}
      <CocktailShowcase />

      {/* Formats and Mobile Bar Modalities */}
      <BarModalities />

      {/* Quote Calculator with Instant WhatsApp Generator */}
      <QuoteCalculator />

      {/* Refined Footer */}
      <Footer />

      {/* Boutique Floating WhatsApp Concierge Widget */}
      <FloatingWhatsApp />
    </main>
  );
}
