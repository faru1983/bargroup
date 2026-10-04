"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Sparkles, Award, MapPin, ChevronDown } from "lucide-react";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 24;
        const y = (e.clientY / innerHeight - 0.5) * 24;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Framer Motion Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax Calculations (Refined to prevent empty black gaps)
  // Background gently glides upward with zoom, bleed container prevents borders
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "-4%" : "-10%"]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1.05, 1.15]);

  // Desktop Floating Cocktail Layer
  const desktopCocktailY = useTransform(smoothProgress, [0, 1], ["0%", "28%"]);
  const desktopCocktailRotate = useTransform(smoothProgress, [0, 1], [0, 4]);

  // Desktop Botanicals Layer (Fastest)
  const garnishY = useTransform(smoothProgress, [0, 1], ["0%", "65%"]);
  const garnishRotate = useTransform(smoothProgress, [0, 1], [0, 22]);

  // Content Text Opacity (No premature fade-out to prevent black hole)
  const textOpacity = useTransform(smoothProgress, [0, 0.95], [1, isMobile ? 0.9 : 0.3]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "6%" : "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] lg:min-h-[920px] overflow-hidden flex items-center justify-center bg-[#090909] pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* ========================================================
          LAYER 0: DEEP BACKGROUND (EXPANDED TO PREVENT BLACK GAPS)
          ======================================================== */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute -inset-10 z-0 will-change-transform"
      >
        <Image
          src="/assets/hero_luxury_bar.jpg"
          alt="Barra de bar de lujo retroiluminada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.12]"
        />
        {/* Soft radial glow & subtle top/bottom gradients */}
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090909]/60 to-[#090909]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/80 via-transparent to-[#090909]" />
      </motion.div>

      {/* ========================================================
          DESKTOP-ONLY PARALLAX: FLOATING BOTANICALS & ICE
          (Hidden on mobile to prevent blocking text with dark box)
          ======================================================== */}
      <motion.div
        style={{
          y: garnishY,
          rotate: garnishRotate,
          x: mousePos.x * -0.6,
        }}
        className="hidden lg:block absolute z-30 pointer-events-none w-[260px] xl:w-[320px] aspect-square top-[12%] right-[4%] will-change-transform"
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/hero_garnish_floating.jpg"
            alt="Elementos botánicos y hielo cristalino flotando"
            fill
            sizes="320px"
            className="object-cover rounded-3xl opacity-85 mix-blend-screen filter drop-shadow-[0_15px_30px_rgba(212,175,55,0.3)]"
          />
        </div>
      </motion.div>

      {/* ========================================================
          DESKTOP-ONLY PARALLAX: FLOATING SIGNATURE COUPE
          (Positioned in right column with plenty of space)
          ======================================================== */}
      <motion.div
        style={{
          y: desktopCocktailY,
          rotate: desktopCocktailRotate,
          x: mousePos.x * 0.4,
        }}
        className="hidden lg:block absolute z-20 w-[420px] xl:w-[480px] aspect-square pointer-events-none transition-transform duration-200 ease-out will-change-transform top-[20%] right-[7%] xl:right-[11%]"
      >
        <div className="relative w-full h-full">
          {/* Subtle Golden Halo */}
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-3xl animate-pulse-glow" />

          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xs">
            <Image
              src="/assets/hero_cocktail_coupe.jpg"
              alt="Cóctel de autor en copa coupé de cristal tallado"
              fill
              priority
              sizes="(max-width: 1200px) 420px, 480px"
              className="object-cover filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none" />
          </div>

          {/* Floating Craft Badge */}
          <div className="absolute -bottom-4 -left-6 glass-panel px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 shadow-2xl flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93]">Insignia Bargroup</span>
              <span className="text-xs font-serif font-bold text-[#F7F5F0]">Patagonia Old Fashioned</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          MAIN EDITORIAL CONTENT (MOBILE-FIRST RESPONSIVE FLOW)
          ======================================================== */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full flex flex-col items-start justify-center"
      >
        <div className="w-full lg:max-w-2xl xl:max-w-3xl flex flex-col items-start">
          {/* Chile Exclusive Location Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#D4AF37]/35 mb-5 sm:mb-6 shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] font-semibold">
              Barras Móviles Premium · Chile
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] hidden xs:inline" />
            <span className="text-[10px] sm:text-[11px] tracking-wider text-[#A39E93] hidden sm:inline">
              Santiago · Zapallar · Viña
            </span>
          </div>

          {/* Headline (Editorial Serif) */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#F7F5F0] leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6">
            Coctelería de autor{" "}
            <span className="text-gold-gradient italic font-normal block sm:inline">
              donde ocurre
            </span>{" "}
            tu celebración.
          </h1>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#A39E93] max-w-xl font-light leading-relaxed mb-8 sm:mb-10">
            Transformamos bodas de alta gama, galas corporativas y aniversarios privados en una experiencia sensorial inolvidable. Cristalería de corte fino, mixólogos de élite y barras diseñadas a medida.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="#cotizador"
              className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#090909] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg text-center"
            >
              <span>Cotiza tu Barra</span>
              <Sparkles className="w-4 h-4 text-[#090909] group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="#mixologia"
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium text-[#F7F5F0] glass-panel hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 text-center"
            >
              <span>Ver Carta de Tragos</span>
            </a>
          </div>

          {/* Mobile-Friendly Integrated Cocktail Card (Clean Flow, Zero Text Collision) */}
          <div className="w-full mt-10 lg:hidden flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <Image
                src="/assets/hero_cocktail_coupe.jpg"
                alt="Cóctel de autor en copa coupé de cristal tallado"
                fill
                priority
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-[#A39E93]">Insignia de la Casa</span>
                  <span className="text-xs font-serif font-bold text-[#F3E5AB]">Patagonia Old Fashioned</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB]">
                  Signature
                </span>
              </div>
            </div>
          </div>

          {/* Key Feature Badges */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] sm:text-xs tracking-wider text-[#A39E93]">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Mixología de Competencia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Hielo Cristalino Facetado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Destilados Super Premium</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gentle Scroll Down Indicator */}
      <a
        href="#experiencia"
        aria-label="Desplazarse a la sección de experiencia"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#A39E93] hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </a>
    </section>
  );
}
