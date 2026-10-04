import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bargroup.cl"),
  title: "Bargroup | Coctelería de Autor & Barras Móviles Premium en Chile",
  description:
    "Experiencias de coctelería de autor y barras móviles de alta gama para matrimonios, eventos corporativos y celebraciones privadas exclusivas en Santiago, Viña del Mar y todo Chile.",
  keywords: [
    "Bar móvil Chile",
    "Barras para matrimonios Chile",
    "Coctelería de autor Santiago",
    "Bar corporativo Santiago",
    "Bargroup Chile",
    "Mixología premium eventos",
    "Barra libre matrimonios",
    "Coctelería de autor Zapallar",
  ],
  authors: [{ name: "Bargroup Chile" }],
  openGraph: {
    title: "Bargroup | Coctelería de Autor & Barras Móviles Premium",
    description:
      "La alquimia perfecta entre elegancia, técnica y celebración. Barras móviles exclusivas para bodas y eventos de alta gama en Chile.",
    url: "https://bargroup.cl",
    siteName: "Bargroup Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/assets/hero_luxury_bar.jpg",
        width: 1200,
        height: 675,
        alt: "Barra de lujo Bargroup Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bargroup | Coctelería de Autor & Barras Móviles Premium",
    description: "Servicio premium de barra móvil para matrimonios y eventos corporativos en Chile.",
    images: ["/assets/hero_luxury_bar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#090909] text-[#F7F5F0] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#090909]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
