"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Flame, Compass, Coffee, Droplets } from "lucide-react";

interface Cocktail {
  id: string;
  name: string;
  subtitle: string;
  category: "signature" | "botanical" | "classic";
  image: string;
  spirit: string;
  glass: string;
  notes: string[];
  description: string;
  icon: React.ReactNode;
}

const cocktails: Cocktail[] = [
  {
    id: "patagonia-smoke",
    name: "Patagonia Smoke",
    subtitle: "Insignia Ahumada",
    category: "signature",
    image: "/assets/cocktail_patagonia_smoke.jpg",
    spirit: "Pisco Chileno Envejecido en Roble & Single Malt",
    glass: "Old Fashioned Cristal Tallado",
    notes: ["Ahumado Intenso", "Roble Americano", "Piel de Naranja", "Romero Rústico"],
    description: "Una experiencia inmersiva infusionada con humo frío de romero fresco frente a tus invitados, servido sobre una esfera perfecta de hielo tallado a mano.",
    icon: <Flame className="w-4 h-4 text-[#D4AF37]" />,
  },
  {
    id: "golden-spritz",
    name: "Golden Andes Spritz",
    subtitle: "Celebración y Luz",
    category: "signature",
    image: "/assets/cocktail_golden_spritz.jpg",
    spirit: "Espumante Brut Método Tradicional & Maracuyá",
    glass: "Flauta Imperial Biselada",
    notes: ["Efervescente", "Maracuyá Tropical", "Oro Comestible 24k", "Floral"],
    description: "El cóctel estelar para la bienvenida y el brindis. Destellos de oro suspendidos en una danza de burbujas refinadas con acidez vibrante.",
    icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" />,
  },
  {
    id: "atacama-botanics",
    name: "Atacama Botanicals",
    subtitle: "Herbolaria Chilena",
    category: "botanical",
    image: "/assets/cocktail_atacama_botanics.jpg",
    spirit: "Gin Artesanal Nativo & Tónica Premium",
    glass: "Copa Balón de Cristal Soplado",
    notes: ["Pimienta Rosa", "Micaína Herbal", "Pepino Fresco", "Cítrico Seco"],
    description: "Una sinfonía de botánicos recolectados en el desierto y valles chilenos, equilibrado con tónica de quinina natural y hielo ultra puro.",
    icon: <Compass className="w-4 h-4 text-[#D4AF37]" />,
  },
  {
    id: "espresso-noir",
    name: "Velvet Espresso Noir",
    subtitle: "After Hours Sophistication",
    category: "classic",
    image: "/assets/cocktail_espresso_noir.jpg",
    spirit: "Vodka Premium Destilado & Cold Brew de Especialidad",
    glass: "Coupe Contemporáneo",
    notes: ["Café Arábica Tostado", "Crema Densa Aterciopelada", "Cacao 70%", "Vainilla"],
    description: "El punto de encuentro entre la alta pastelería y la coctelería nocturna. Un impulso de energía sedosa para mantener la pista de baile vibrante.",
    icon: <Coffee className="w-4 h-4 text-[#D4AF37]" />,
  },
];

function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="glass-panel-gold rounded-3xl overflow-hidden transition-transform duration-200 ease-out border border-[#D4AF37]/20 flex flex-col group relative"
    >
      {/* Dynamic Specular Glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30"
        style={{
          background: `radial-gradient(circle at ${isHovered ? "50% 30%" : "0% 0%"}, rgba(255,255,255,0.12) 0%, transparent 70%)`,
        }}
      />

      {/* Image Container with Zoom Effect */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#121212]">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 z-20 glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#F3E5AB] flex items-center gap-1.5 border border-[#D4AF37]/30">
          {cocktail.icon}
          <span>{cocktail.subtitle}</span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-7 flex flex-col flex-1 justify-between relative z-20">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#F7F5F0] group-hover:text-gold-gradient transition-colors mb-2">
            {cocktail.name}
          </h3>
          <p className="text-xs text-[#A39E93] leading-relaxed mb-5 font-light">
            {cocktail.description}
          </p>

          {/* Spirit & Glassware */}
          <div className="space-y-1.5 mb-5 pb-5 border-b border-white/5 text-[11px] text-[#A39E93]">
            <div className="flex items-center justify-between">
              <span className="text-[#A39E93]/70 uppercase tracking-wider">Destilado:</span>
              <span className="text-[#F7F5F0] font-medium text-right">{cocktail.spirit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#A39E93]/70 uppercase tracking-wider">Cristalería:</span>
              <span className="text-[#D4AF37]">{cocktail.glass}</span>
            </div>
          </div>
        </div>

        {/* Tasting Notes Pills */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39E93] block mb-2 font-medium">
            Notas de Cata:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {cocktail.notes.map((note) => (
              <span
                key={note}
                className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-[#D4AF37]/20 text-[#F3E5AB] tracking-wide"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CocktailShowcase() {
  const [activeFilter, setActiveFilter] = useState<"all" | "signature" | "botanical" | "classic">("all");

  const filteredCocktails =
    activeFilter === "all"
      ? cocktails
      : cocktails.filter((c) => c.category === activeFilter);

  return (
    <section id="mixologia" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
          Carta de Mixología
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F5F0] mb-5">
          Creaciones que despiertan{" "}
          <span className="text-gold-gradient italic font-normal">
            los cinco sentidos
          </span>
        </h2>
        <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
          Cada receta es formulada con jarabes artesanales, botánicos endémicos de Chile y cristalería de corte fino. Una propuesta pensada para sorprender al paladar más exigente.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: "all", label: "Colección Completa" },
            { id: "signature", label: "Signatures de Autor" },
            { id: "botanical", label: "Herbolaria & Gin" },
            { id: "classic", label: "Clásicos Revisitados" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158] text-[#090909] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "glass-panel text-[#A39E93] hover:text-[#F7F5F0] hover:border-[#D4AF37]/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cocktails Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
      >
        <AnimatePresence>
          {filteredCocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Signature Custom Menu Guarantee */}
      <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#F7F5F0]">
              ¿Tienes un trago soñado para tu evento?
            </h4>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light">
              Nuestros mixólogos diseñan cócteles temáticos personalizados con los nombres de los novios o el branding de tu empresa.
            </p>
          </div>
        </div>

        <a
          href="#cotizador"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#090909] bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors shrink-0 shadow-md"
        >
          <span>Personalizar Carta</span>
        </a>
      </div>
    </section>
  );
}
