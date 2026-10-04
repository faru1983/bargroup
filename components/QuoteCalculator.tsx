"use client";

import { useState } from "react";
import { MessageCircle, Sparkles, Send, Calendar, Users, MapPin, Clock, CheckCircle2 } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import confetti from "canvas-confetti";

export default function QuoteCalculator() {
  const [eventType, setEventType] = useState("Matrimonio");
  const [guests, setGuests] = useState(120);
  const [hours, setHours] = useState(5);
  const [location, setLocation] = useState("Santiago Oriente (Las Condes / Vitacura / Lo Barnechea)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const eventTypes = [
    { id: "Matrimonio", label: "Matrimonio / Boda Luxe" },
    { id: "Corporativo", label: "Evento Corporativo / Gala" },
    { id: "Privado VIP", label: "Celebración Privada / Cumpleaños" },
    { id: "Graduación", label: "Graduación / Fiesta Temática" },
  ];

  const locations = [
    "Santiago Oriente (Las Condes / Vitacura / Lo Barnechea)",
    "Chicureo / Colina / Lampa",
    "Santiago Providencia / Ñuñoa / La Reina",
    "Viña del Mar / Reñaca / Concón",
    "Zapallar / Cachagua / Maitencillo",
    "Rancagua / Machalí / Valle de Colchagua",
    "Otra Región (A convenir)",
  ];

  // Dynamic WhatsApp Message Formatter
  const getWhatsAppMessage = () => {
    let msg = `🍸 *COTIZACIÓN DE BARRA MÓVIL - BARGROUP CHILE* 🍸\n\n`;
    msg += `👤 *Nombre:* ${name.trim() ? name : "Cliente"}\n`;
    if (phone.trim()) msg += `📞 *Teléfono:* ${phone}\n`;
    msg += `✨ *Tipo de Evento:* ${eventType}\n`;
    msg += `👥 *Invitados Estimados:* ${guests} personas\n`;
    msg += `⏳ *Horas de Barra Libre:* ${hours} horas de servicio\n`;
    msg += `📍 *Ubicación:* ${location}\n`;
    if (date.trim()) msg += `📅 *Fecha Estimada:* ${date}\n`;
    if (additionalNotes.trim()) msg += `📝 *Notas adicionales:* ${additionalNotes}\n`;
    msg += `\n_Hola equipo de Bargroup, me gustaría recibir la propuesta formal de menú y cotización para mi evento._`;
    return msg;
  };

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#D4AF37", "#F3E5AB", "#FFFFFF"],
      });
    } catch {
      // safe fallback
    }

    const message = getWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5698971653?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="cotizador" className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 relative">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
          Cotización Inmediata
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F5F0] mb-5">
          Calcula tu barra y reserva{" "}
          <span className="text-gold-gradient italic font-normal">
            tu fecha
          </span>
        </h2>
        <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
          Configura los parámetros clave de tu celebración y recibe de inmediato la propuesta de cócteles sugerida y el contacto directo con nuestro sommelier y director de eventos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Panel */}
        <form
          onSubmit={handleWhatsAppClick}
          className="lg:col-span-7 glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-2xl space-y-8"
        >
          {/* Step 1: Event Type */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A39E93] block mb-3 font-semibold">
              1. Selecciona el Tipo de Evento
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {eventTypes.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setEventType(t.id)}
                  className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-medium text-left transition-all duration-200 border ${
                    eventType === t.id
                      ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#F3E5AB] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                      : "bg-[#141414]/80 border-white/10 text-[#A39E93] hover:border-[#D4AF37]/30 hover:text-[#F7F5F0]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Sliders for Guests & Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
            {/* Guests Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-[#A39E93] flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Invitados:
                </span>
                <span className="text-lg font-serif font-bold text-[#F3E5AB]">
                  {guests} <span className="text-xs font-sans text-[#A39E93] font-normal">personas</span>
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="450"
                step="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                aria-label="Número estimado de invitados"
                className="w-full accent-[#D4AF37] cursor-pointer bg-white/10 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[#A39E93] mt-1">
                <span>30 (Íntimo)</span>
                <span>200</span>
                <span>450+ (Gala)</span>
              </div>
            </div>

            {/* Hours Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-[#A39E93] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Horas de Servicio:
                </span>
                <span className="text-lg font-serif font-bold text-[#F3E5AB]">
                  {hours} <span className="text-xs font-sans text-[#A39E93] font-normal">horas</span>
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="8"
                step="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                aria-label="Horas de duración del servicio"
                className="w-full accent-[#D4AF37] cursor-pointer bg-white/10 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[#A39E93] mt-1">
                <span>3 hrs (Cóctel)</span>
                <span>5 hrs (Estándar)</span>
                <span>8 hrs (Full Night)</span>
              </div>
            </div>
          </div>

          {/* Step 3: Location Select */}
          <div className="pt-4 border-t border-white/5">
            <label className="text-xs uppercase tracking-wider text-[#A39E93] block mb-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Comuna / Sector del Evento:
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-[#141414] border border-white/10 text-xs text-[#F7F5F0] focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#141414] text-[#F7F5F0]">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Step 4: Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
            <div>
              <label className="text-xs uppercase tracking-wider text-[#A39E93] block mb-2">
                Tu Nombre / Anfitrión
              </label>
              <input
                type="text"
                placeholder="Ej. Sofía Valenzuela"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-3 px-4 rounded-xl bg-[#141414] border border-white/10 text-xs text-[#F7F5F0] placeholder:text-[#A39E93]/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#A39E93] block mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Fecha Estimada
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full py-3 px-4 rounded-xl bg-[#141414] border border-white/10 text-xs text-[#F7F5F0] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full group py-4 px-6 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#090909] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Generar y Enviar Cotización por WhatsApp</span>
            <MessageCircle className="w-4 h-4 text-[#090909] group-hover:scale-110 transition-transform" />
          </button>
        </form>

        {/* Right Preview Card & Social Proof */}
        <div className="lg:col-span-5 space-y-6">
          {/* Summary Box */}
          <div className="glass-panel rounded-3xl p-8 border border-[#D4AF37]/25 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#F7F5F0]">
                  Resumen de tu Configuración
                </h4>
                <span className="text-[11px] text-[#D4AF37] uppercase tracking-wider">
                  Bargroup Concierge Service
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs mb-8">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#A39E93]">Formato:</span>
                <span className="text-[#F7F5F0] font-medium">{eventType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#A39E93]">Invitados:</span>
                <span className="text-[#F3E5AB] font-bold">{guests} personas</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#A39E93]">Duración Barra Libre:</span>
                <span className="text-[#F7F5F0] font-medium">{hours} horas</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#A39E93]">Ubicación:</span>
                <span className="text-[#F7F5F0] font-medium text-right max-w-[200px] truncate">{location}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#A39E93]">Insumos incluidos:</span>
                <span className="text-emerald-400 font-semibold">100% Barra Todo Incluido</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 text-[11px] text-[#A39E93] leading-relaxed">
              💡 <span className="text-[#F7F5F0]">¿Qué incluye tu presupuesto?</span> Módulos de barra de diseño, mixólogos uniformados, cristalería completa, hielo gourmet cristalino, frutas frescas, jarabes artesanales y traslados dentro de la región.
            </div>
          </div>

          {/* Instagram Integration Card */}
          <div className="glass-panel rounded-3xl p-6 border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-rose-500 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-[#121212] rounded-[14px] flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-[#F3E5AB]" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F7F5F0] block">
                  @bargroup.chile
                </span>
                <span className="text-[11px] text-[#A39E93] font-light">
                  Revive montajes reales y videos en vivo en Instagram
                </span>
              </div>
            </div>

            <a
              href="https://instagram.com/bargroup.chile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-medium text-[#F7F5F0] border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shrink-0"
            >
              Seguir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
