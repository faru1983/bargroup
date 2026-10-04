"use client";

import { useState, useEffect } from "react";
import { GlassWater, Menu, X, MessageCircle, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experiencia", href: "#experiencia" },
    { name: "Mixología", href: "#mixologia" },
    { name: "Modalidades", href: "#modalidades" },
    { name: "Cotizador", href: "#cotizador" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#090909]/85 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram & Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#141414]/80 group-hover:border-[#D4AF37] transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <GlassWater className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F7F5F0] group-hover:text-[#F3E5AB] transition-colors">
              BARGROUP
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] -mt-1 font-sans">
              Chile · Haute Mixology
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 glass-pill px-7 py-2.5 rounded-full border border-[#D4AF37]/20 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-[#A39E93] hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: WhatsApp */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/56999999999?text=Hola%20Bargroup%2C%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20barra%20m%C3%B3vil"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#090909] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Cotizar WhatsApp</span>
            <MessageCircle className="w-3.5 h-3.5 text-[#090909]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-[#F7F5F0] hover:text-[#D4AF37] transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#D4AF37]/20 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#F7F5F0] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/56999999999?text=Hola%20Bargroup%2C%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20barra%20m%C3%B3vil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#090909] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <span>Cotizar Directo por WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
