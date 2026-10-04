"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles, Award, MapPin } from "lucide-react";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30;
        const y = (e.clientY / innerHeight - 0.5) * 30;
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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax Y Translations for Each Layer
  // Layer 0: Background Bar (Slow)
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "10%" : "25%"]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);

  // Layer 1: Midground Cocktail
  const cocktailY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "20%" : "45%"]);
  const cocktailScale = useTransform(smoothProgress, [0, 1], [1, 0.92]);
  const cocktailOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0.3]);

  // Layer 2: Text & Content
  const textY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "25%" : "60%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);

  // Layer 3: Foreground Botanicals & Ice (Fastest)
  const garnishY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "35%" : "85%"]);
  const garnishRotate = useTransform(smoothProgress, [0, 1], [0, 18]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[105vh] min-h-[700px] overflow-hidden flex items-center justify-center bg-[#090909]"
    >
      {/* ========================================================
          LAYER 0: DEEP BACKGROUND (LUXURY BAR INTERIOR)
          ======================================================== */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/assets/hero_luxury_bar.jpg"
          alt="Barra de bar de lujo retroiluminada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.42] contrast-[1.12]"
        />
        {/* Cinematic Vignette & Warm Radial Glow */}
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090909]/60 to-[#090909]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/80" />
      </motion.div>

      {/* ========================================================
          LAYER 1: MIDGROUND (SIGNATURE COUPE COCKTAIL)
          ======================================================== */}
      <motion.div
        style={{
          y: cocktailY,
          scale: cocktailScale,
          opacity: cocktailOpacity,
          x: mousePos.x * 0.4,
        }}
        className="absolute z-10 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] aspect-square pointer-events-none transition-transform duration-200 ease-out will-change-transform top-[42%] sm:top-[40%] right-[-10%] sm:right-[5%] md:right-[10%] lg:right-[14%]"
      >
        <div className="relative w-full h-full">
          {/* Subtle Golden Halo behind glass */}
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-3xl animate-pulse-glow" />
          
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xs">
            <Image
              src="/assets/hero_cocktail_coupe.jpg"
              alt="Cóctel de autor en copa coupé de cristal tallado"
              fill
              priority
              sizes="(max-width: 768px) 300px, 540px"
              className="object-cover filter contrast-[1.05]"
            />
            {/* Elegant glass rim specular overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none" />
          </div>

          {/* Floating Craft Signature Badge */}
          <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 glass-panel px-4 py-2 rounded-xl border border-[#D4AF37]/40 shadow-xl flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93]">Insignia Bargroup</span>
              <span className="text-xs font-serif font-bold text-[#F7F5F0]">Patagonia Old Fashioned</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          LAYER 3: FOREGROUND BOTANICALS & ICE (FAST PARALLAX)
          ======================================================== */}
      <motion.div
        style={{
          y: garnishY,
          rotate: garnishRotate,
          x: mousePos.x * -0.7,
        }}
        className="absolute z-30 pointer-events-none w-[180px] sm:w-[240px] md:w-[320px] aspect-square top-[12%] sm:top-[16%] right-[3%] sm:right-[2%] will-change-transform"
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/hero_garnish_floating.jpg"
            alt="Elementos botánicos y hielo cristalino flotando"
            fill
            sizes="320px"
            className="object-cover rounded-2xl opacity-80 mix-blend-screen filter drop-shadow-[0_15px_30px_rgba(212,175,55,0.3)]"
          />
        </div>
      </motion.div>

      {/* ========================================================
          LAYER 2: EDITORIAL CONTENT & CALL TO ACTIONS
          ======================================================== */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full flex flex-col items-start justify-center pt-24 pb-16"
      >
        {/* Chile Exclusive Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#D4AF37]/30 mb-6 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Barras Móviles Premium · Chile
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-[11px] tracking-wider text-[#A39E93] hidden sm:inline">
            Santiago · Zapallar · Viña
          </span>
        </div>

        {/* Impact Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F7F5F0] leading-[1.08] max-w-3xl mb-6">
          Coctelería de autor{" "}
          <span className="text-gold-gradient italic font-normal">
            donde ocurre
          </span>{" "}
          tu celebración.
        </h1>

        {/* Refined Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#A39E93] max-w-xl font-light leading-relaxed mb-10">
          Transformamos bodas de alta gama, galas corporativas y aniversarios privados en una experiencia sensorial inolvidable. Cristalería de corte fino, mixólogos de élite y barras diseñadas a medida.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a
            href="#cotizador"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold text-[#090909] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Cotiza tu Barra</span>
            <Sparkles className="w-4 h-4 text-[#090909] group-hover:rotate-45 transition-transform" />
          </a>

          <a
            href="#mixologia"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium text-[#F7F5F0] glass-panel hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300"
          >
            <span>Ver Carta de Tragos</span>
          </a>
        </div>

        {/* Feature Badges */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs tracking-wider text-[#A39E93]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
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
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#experiencia"
        aria-label="Desplazarse a la sección de experiencia"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#A39E93] hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-[#D4AF37]/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#D4AF37]"
          />
        </div>
      </a>
    </section>
  );
}
