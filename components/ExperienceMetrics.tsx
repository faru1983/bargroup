"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Wine, ShieldCheck, Flame } from "lucide-react";

interface MetricCardProps {
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function MetricCard({ number, label, description, icon, delay }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel-gold rounded-2xl p-7 relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-colors pointer-events-none" />

      <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 shadow-md">
        {icon}
      </div>

      <div className="text-4xl sm:text-5xl font-serif font-bold text-gold-gradient tracking-tight mb-2">
        {number}
      </div>

      <h3 className="text-base font-semibold text-[#F7F5F0] mb-2 tracking-wide font-sans">
        {label}
      </h3>

      <p className="text-xs text-[#A39E93] leading-relaxed font-light">
        {description}
      </p>
    </motion.div>
  );
}

export default function ExperienceMetrics() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const metrics = [
    {
      number: "+380",
      label: "Celebraciones Exclusivas",
      description: "Bodas boutique, galas corporativas y aniversarios privados producidos a la perfección en todo Chile.",
      icon: <Flame className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      number: "+18",
      label: "Bartenders & Mixólogos",
      description: "Staff profesional certificado, con uniforme de alta sastrería y técnica impecable en hospitalidad.",
      icon: <Users className="w-6 h-6" />,
      delay: 0.2,
    },
    {
      number: "+48.000",
      label: "Cócteles de Autor Servidos",
      description: "Mixología ejecutada con destilados ultra premium, macerados propios y hielo facetado artesanal.",
      icon: <Wine className="w-6 h-6" />,
      delay: 0.3,
    },
    {
      number: "100%",
      label: "Garantía de Excelencia",
      description: "Puntualidad suiza en montaje, velocidad de despacho sin filas y materias primas seleccionadas.",
      icon: <ShieldCheck className="w-6 h-6" />,
      delay: 0.4,
    },
  ];

  return (
    <section
      id="experiencia"
      ref={containerRef}
      className="relative py-16 sm:py-24 lg:py-28 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
            Nuestra Trayectoria
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F5F0] leading-tight">
            La alquimia perfecta entre{" "}
            <span className="text-gold-gradient italic font-normal">
              elegancia, técnica
            </span>{" "}
            y celebración.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#A39E93] text-sm sm:text-base max-w-md font-light leading-relaxed"
        >
          Diseñamos estaciones de barra móvil que se integran con armonía al diseño arquitectónico de tu locación, elevando la experiencia de cada invitado desde el primer brindis.
        </motion.p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  );
}
