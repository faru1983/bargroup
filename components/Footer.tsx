import { GlassWater, MessageCircle, Mail, MapPin } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="relative bg-[#060606] border-t border-[#D4AF37]/20 pt-20 pb-12 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#141414]">
                <GlassWater className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F7F5F0]">
                  BARGROUP
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] -mt-1 font-sans">
                  Chile · Haute Mixology
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A39E93] max-w-sm font-light leading-relaxed">
              El servicio referente en barras móviles y coctelería de autor para los eventos más exclusivos de Chile. Experiencias diseñadas a medida donde cada detalle importa.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/bargroup.chile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Bargroup"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A39E93] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/56999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Bargroup"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A39E93] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold mb-4">
              Navegación
            </h5>
            <ul className="space-y-2.5 text-xs text-[#A39E93]">
              <li>
                <a href="#experiencia" className="hover:text-[#D4AF37] transition-colors">
                  Nuestra Experiencia
                </a>
              </li>
              <li>
                <a href="#mixologia" className="hover:text-[#D4AF37] transition-colors">
                  Carta de Mixología
                </a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-[#D4AF37] transition-colors">
                  Modalidades de Barra
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-[#D4AF37] transition-colors">
                  Cotizador Express
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold mb-4">
              Cobertura en Chile
            </h5>
            <div className="space-y-2 text-xs text-[#A39E93]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Región Metropolitana (Santiago, Chicureo, Pirque, Calera de Tango)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>V Región (Viña del Mar, Zapallar, Cachagua, Olmué)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>VI Región (Rancagua, Machalí, Valle de Colchagua)</span>
              </div>
              <div className="flex items-center gap-2.5 pt-2 text-[#F7F5F0]">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href="mailto:contacto@bargroup.cl" className="hover:text-[#D4AF37] transition-colors">
                  contacto@bargroup.cl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A39E93]/60">
          <p>© 2026 Bargroup Chile. Todos los derechos reservados.</p>
          <p className="tracking-wide">
            Diseño & Desarrollo Frontend de Alta Fidelidad para <span className="text-[#D4AF37]">Bargroup</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
