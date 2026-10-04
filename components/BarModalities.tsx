"use client";

import Image from "next/image";
import { Check, Sparkles, Building2, Heart, Lock, ArrowUpRight } from "lucide-react";

interface Modality {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  description: string;
  idealFor: string;
  features: string[];
  icon: React.ReactNode;
}

const modalities: Modality[] = [
  {
    id: "matrimonios",
    title: "Barras Matrimoniales",
    subtitle: "Wedding Luxe Experience",
    tag: "El Más Solicitado",
    image: "/assets/bar_wedding_luxe.jpg",
    description: "Una estación de coctelería romántica y distinguida diseñada para armonizar con la decoración floral y luminaria de tu matrimonio. Servicio continuo sin interrupciones desde el cóctel inicial hasta el final de la fiesta.",
    idealFor: "Bodas boutique de 80 a 450+ invitados",
    features: [
      "Cócteles insignia creados para los novios",
      "Cristalería de cristal fino (copas coupé, flautas y vasos tallados)",
      "Hielo gourmet transparente tallado a mano",
      "Montaje estético en mármol blanco o madera con iluminación cálida",
      "Bartenders profesionales con uniforme de etiqueta",
    ],
    icon: <Heart className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    id: "corporativas",
    title: "Barras Corporativas",
    subtitle: "Corporate & Brand Activation",
    tag: "Alta Eficiencia",
    image: "/assets/bar_corporate_gala.jpg",
    description: "Diseñada para galas de fin de año, lanzamientos de producto y congresos empresariales. Flujo de despacho de alta velocidad que elimina filas y cócteles personalizados con el logotipo o colores de tu marca.",
    idealFor: "Convenciones, galas corporativas y lanzamientos (100 a 800+ personas)",
    features: [
      "Branding personalizado en la barra y en los cócteles (sellos comestibles)",
      "Sistema de atención rápida (hasta 200 cócteles/hora por estación)",
      "Mixología con destilados corporativos y opciones mocktails",
      "Facturación ágil y seguros de responsabilidad civil",
      "Infraestructura modular adaptable a auditorios o azoteas",
    ],
    icon: <Building2 className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    id: "speakeasy",
    title: "Barras Privadas & Speakeasy",
    subtitle: "Boutique & VIP Lounge",
    tag: "Exclusividad Absoluta",
    image: "/assets/bar_private_speakeasy.jpg",
    description: "La atmósfera de un club de cócteles clandestino en la comodidad de tu residencia, parcela o terraza privada. Atención personalizada copa a copa con destilados de colección y maridaje de mixología.",
    idealFor: "Cumpleaños VIP, aniversarios y cenas privadas (25 a 80 invitados)",
    features: [
      "Menú de degustación en vivo con explicación botánica",
      "Destilados ultra premium (Single Malts escoceses, gines endémicos)",
      "Montaje íntimo con iluminación de velas y maderas oscuras",
      "Cristalería vintage de autor y ahumador en mesa",
      "Servicio boutique y máxima discreción",
    ],
    icon: <Lock className="w-5 h-5 text-[#D4AF37]" />,
  },
];

export default function BarModalities() {
  return (
    <section id="modalidades" className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
          Formatos de Servicio
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F5F0] mb-5">
          Estructuras móviles para{" "}
          <span className="text-gold-gradient italic font-normal">
            cada dimensión
          </span>{" "}
          de celebración
        </h2>
        <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
          Nuestras barras son módulos arquitectónicos transportables que se adaptan a salones, jardines exteriores, centros de eventos y terrazas privadas en cualquier región de Chile.
        </p>
      </div>

      {/* Modalities Cards */}
      <div className="space-y-12">
        {modalities.map((item, index) => (
          <div
            key={item.id}
            className={`glass-panel-gold rounded-3xl overflow-hidden border border-[#D4AF37]/25 flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-stretch transition-all duration-300 hover:border-[#D4AF37]/50 group`}
          >
            {/* Image Half */}
            <div className="relative w-full lg:w-1/2 min-h-[340px] sm:min-h-[420px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent lg:hidden" />
              
              {/* Floating Tag */}
              <div className="absolute top-6 left-6 z-10 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/40 shadow-lg flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{item.tag}</span>
              </div>
            </div>

            {/* Content Half */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-[#D4AF37]/30 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5F0] mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A39E93] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-[#F3E5AB] font-medium mb-6">
                  <span className="text-[#A39E93]">Capacidad sugerida: </span>
                  {item.idealFor}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2DFD8]">
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href={`#cotizador?modalidad=${item.id}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] hover:text-[#F3E5AB] group/link transition-colors"
                >
                  <span>Cotizar este formato</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-[11px] text-[#A39E93] uppercase tracking-widest font-mono">
                  Chile Cobertura Total
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
