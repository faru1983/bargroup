"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Shrink to compact circle when user scrolls down to avoid blocking content
      setIsScrolled(currentScrollY > 120);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  const phoneNumber = "5698971653";
  const defaultMessage = encodeURIComponent(
    "Hola Bargroup, me gustaría cotizar una barra móvil de autor para mi evento en Chile."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-2">
      {/* Dismiss button on hover / expand */}
      {(!isScrolled || isHovered) && (
        <button
          onClick={() => setIsDismissed(true)}
          aria-label="Cerrar botón de WhatsApp"
          className="w-5 h-5 rounded-full bg-[#141414]/90 border border-white/20 text-[#A39E93] hover:text-[#F7F5F0] flex items-center justify-center text-[10px] transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}

      {/* Main Luxury Concierge Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-[#0E0E0E]/92 backdrop-blur-xl border border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
      >
        {/* Glowing Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#F3E5AB]/5 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* WhatsApp Icon Container with Online Status Pulse */}
        <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5 fill-[#25D366]" />
          
          {/* Pulsing online status indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0E0E0E]"></span>
          </span>
        </div>

        {/* Dynamic Text (Collapses into compact icon on scroll, expands on hover or top) */}
        <AnimatePresence initial={false}>
          {(!isScrolled || isHovered) && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col pr-1 whitespace-nowrap text-left"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#A39E93] font-medium leading-none">
                  Concierge Sommelier
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#D4AF37]/15 text-[#D4AF37] font-semibold uppercase tracking-wider">
                  Online
                </span>
              </div>
              <span className="text-xs font-serif font-bold text-[#F7F5F0] group-hover:text-gold-gradient transition-colors mt-0.5">
                Cotizar Barra WhatsApp
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
